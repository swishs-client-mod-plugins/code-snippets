/* The below source code is licensed under MIT. */

import Webpack from '@modules/Webpack';
import Manager from '@modules/Manager';

import * as monaco from 'monaco-editor';

import { cjoin, callArgs } from '@modules/Utilities';

const join = cjoin('editor');

const SettingsStore = Webpack.getByProps('getFullState', 'settings');

const getValue = (value: string): string =>
  body.getPropertyValue(value);

let body: CSSStyleDeclaration;
const createEditorTheme = () => {
  body = getComputedStyle(document.body);

  const colors = {
    textColor: getValue('--text-normal'),
    bgFloating: getValue('--background-floating'),
    bgTeritary: getValue('--background-tertiary'),
    bgAccent: getValue('--background-accent'),
  };

  console.log(colors);

  const lightMode = SettingsStore.settings.appearance.theme - 1;
  monaco.editor.defineTheme('code-snippets', {
    inherit: true,
    base: lightMode ? 'vs' : 'vs-dark',
    rules: [
      // @ts-ignore background of scrollbar
      { background: colors.bgTeritary }
    ],
    colors: {
      'editor.background': colors.bgTeritary,
      // 'editorWidget.foreground': colors.bgAccent,
      'editorGutter.background': colors.bgTeritary,
      // 'editorWidget.background': colors.bgFloating,
      'editorLineNumber.foreground': colors.textColor,
      // 'editorSuggestWidget.background': colors.bgFloating,
      // 'editorSuggestWidget.selectedBackground': colors.bgAccent,
    }
  });
};

const parseLanguage = (extension: string) => {
  if (!extension) return '';

  switch (extension) {
    case 'js':
    case 'jsx':
      return 'javascript';
    case 'ts':
      return 'typescript';
    case 'sass':
      return 'scss';
    default:
      return extension;
  }
};

interface EditorProps {
  states: {
    editorRef: React.MutableRefObject<any>;
    collapsedState: [boolean, React.DispatchWithoutAction];
    unsavedState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
    currentSnippet: [string, React.Dispatch<React.SetStateAction<string>>, string];
  };
}

export default ({ states }: EditorProps) => {
  const { editorRef } = states;

  const bindings = React.useRef([]);
  const containerRef = React.useRef<any>();
  const setUnsaved = states.unsavedState[1];

  const [collapsed] = states.collapsedState;
  const [currentSnippet] = states.currentSnippet;

  const onKeyPress = (event: KeyboardEvent) => {
    if (!editorRef.current) return;
    if (event.ctrlKey && event.key === 's') {
      const scriptType = Manager.getScriptType(currentSnippet);
      const didError = Manager.updateSnippet(currentSnippet, {
        enabled: scriptType || Manager.getSnippet(currentSnippet).enabled,
        code: editorRef.current.getValue(),
      });

      // User feedback is epic :)
      if (didError) return;
      Manager.makeToast(`Successfully saved ${scriptType ? '' : 'and loaded'} snippet ${currentSnippet}!`, true);
      setUnsaved(false);

      // Hot Reload for CSS Snippets
      if (!scriptType) return;
      Manager.runSnippet(currentSnippet, Manager.ScriptType.CSS, true);
    }
  };

  // Component mount and unmount
  React.useEffect(() => {

    // Intellisense for predefined modules.
    CodeSnippetsNative.readDir('editor-types').forEach((module) => {
      const content = CodeSnippetsNative.readFile(`editor-types/${module}`);
      monaco.languages.typescript.typescriptDefaults.addExtraLib(content);
      monaco.languages.typescript.javascriptDefaults.addExtraLib(content);
    });

    createEditorTheme();
  }, []);

  React.useEffect(() => {
    if (!containerRef.current) return;

    // Typescript QOL settings
    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: false,
      noSyntaxValidation: false,

      // Ignore error saying you can't return outside of a function.
      // (We're running the code in a function but monaco doesn't know that)
      diagnosticCodesToIgnore: [1108]
    });

    const Editor = editorRef.current = monaco.editor.create(containerRef.current, {
      automaticLayout: true,
      theme: 'code-snippets',
      value: Manager.getSnippet(currentSnippet).code,
      language: parseLanguage(Manager.getSnippet(currentSnippet).extension),
    });

    // Detect Unsaved
    bindings.current.push(Editor.onDidChangeModelContent(() => {
      if (Editor.getValue() !== Manager.getSnippet(currentSnippet).code)
        return setUnsaved(true);
      setUnsaved(false);
    }));

    // Debounce Save Mechanic
    if (Manager.getScriptType(currentSnippet)) {
      const resolveTimeout = () => {
        tracker = 0;
        Manager.updateSnippet(currentSnippet, { code: Editor.getValue() });

        if (!Manager.getSnippet(currentSnippet).enabled) return;
        Manager.runSnippet(currentSnippet, Manager.ScriptType.CSS, true);
      };

      let tracker: any;
      bindings.current.push(Editor.onDidChangeModelContent(() => {
        if (tracker !== 0) clearTimeout(tracker);
        tracker = setTimeout(resolveTimeout, 200);
      }));
    }

    // CTRL + S Register
    document.addEventListener('keydown', onKeyPress);

    // Pre-rerender cleanup.
    return () => {
      Editor.dispose();
      callArgs(bindings.current, 'dispose');
      document.removeEventListener('keydown', onKeyPress);
    };
  }, [containerRef, editorRef, currentSnippet]);

  return <div className={join('container', collapsed ? 'collapsed' : 'expanded')} ref={containerRef} />;
};