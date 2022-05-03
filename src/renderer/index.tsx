/* The below code is licensed under MIT. */

import './index.scss';
import Logger from '@modules/Logger';
import Patcher from '@modules/Patcher';
import Webpack from '@modules/Webpack';

import * as monaco from 'monaco-editor';

const registerSettingsView = async () => {
  const { FluxDispatcher } = Webpack.getByProps('dirtyDispatch');
  const SettingsPanel = (await import('@components/SettingsPanel')).default;

  const registerTab = () =>
    Patcher.addPatch(window.KernelSettings.register('Snippets', () => <SettingsPanel />));

  if (window.KernelSettings)
    return registerTab();

  FluxDispatcher.subscribe('KERNEL_SETTINGS_INIT', function settingsRegister() {
    FluxDispatcher.unsubscribe('KERNEL_SETTINGS_INIT', settingsRegister);
    if (window.KernelSettings) registerTab();
  });
};

const injectCSS = (Manager: typeof import('@modules/Manager').default) => {
  const { keybind } = Webpack.getByProps('closeButtonBold');
  const keybindPatch = Manager.injectCSS(`
    .${keybind} { transition: opacity 0.2s; }
  `, 'keybind-patch');

  const style = CodeSnippetsNative.readFile('dist/renderer.css');

  if (!style) return Logger.warn('Could not find styles file.');

  const internalStyles = Manager.injectCSS(style, 'internal');

  const fontsPath = CodeSnippetsNative.readDir('dist').find(file => file.endsWith('.ttf'));
  const fontsFile = CodeSnippetsNative.readFile(`dist/${fontsPath}`, true);

  if (!fontsFile) {
    Logger.warn('Could not find Monaco font file.');
    return () => internalStyles.remove();
  }

  // Codicon (Monaco) Font
  const codiconStyles = Manager.injectCSS(`
    @font-face {
      font-family: 'codicon';
      src: url('data:font/truetype;charset=utf-8;base64,${fontsFile}') format('truetype');
    }
  `, 'codicon');

  return () => {
    keybindPatch.remove();
    codiconStyles.remove();
    internalStyles.remove();
  };
};

const defineWorkerLoader = () => {
  const TSWorker = CodeSnippetsNative.readFile('dist/ts.worker.js');
  const CSSWorker = CodeSnippetsNative.readFile('dist/css.worker.js');
  const DefaultWorker = CodeSnippetsNative.readFile('dist/editor.worker.js');
  const getWorkerData = (type: string) => {
    switch (type) {
      case 'css':
      case 'scss':
        return CSSWorker;
      case 'typescript':
      case 'javascript':
        return TSWorker;
      default:
        return DefaultWorker;
    }
  };

  window.MonacoEnvironment = {
    getWorker: (_, label: string) => {
      const blob = new Blob([getWorkerData(label)], { type: 'application/javascript' });
      return new Worker(URL.createObjectURL(blob), { type: 'module' });
    }
  };
};

export default {
  async start() {

    // Define Monaco Worker Getter
    defineWorkerLoader();

    // Wait for webpack to load.
    await Webpack.whenReady;

    // Manager uses Webpack Search so we have to load it after webpack search is ready.
    const Manager = (await import('@modules/Manager')).default;

    // Makes it so you don't have to reduntently import React to every file.
    window.React = Webpack.getByProps('createElement', 'useEffect');

    // Monaco styles break unless they are loaded immediately into Discord.
    // I think it's some kind of conflict between discord styles and monaco styles.
    monaco;

    window.cs = {
      logger: Logger,
      patcher: Patcher,
      webpack: Webpack,
      manager: Manager,
      version: '0.1.1',
    };

    await registerSettingsView();

    const uninject = injectCSS(Manager);
    if (uninject) Patcher.addPatch(uninject);

    Logger.info('Package initialized!');

    await Promise.allSettled(
      Object.keys(Manager.getSnippets()).map(async (snippet) => {
        if (!Manager.getSnippet(snippet).enabled) return;

        const scriptType = Manager.getScriptType(snippet);
        await Manager.runSnippet(snippet, scriptType, true);
      })
    );

    Logger.info(`Startup snippets finished loading!`);
  },
  stop() {
    Patcher.unpatchAll();
    Manager.cleanup();

    // Delete global variables
    delete window.cs;
    delete window.MonacoEnvironment;
  }
};
