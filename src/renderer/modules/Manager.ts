/* The below source code is licensed under MIT. */

import Logger from './Logger';
import Webpack from './Webpack';

import { extensions } from './Utilities';

enum ScriptType { JS, CSS };

const PATH = 'src/snippets.json';

let cleanups = {};
let update: Function;

const setUpdate = (newUpdate: Function) => {
  update = newUpdate;
};

const [{ createToast }, { showToast }] = Webpack.getByProps('createToast', 'showToast', { bulk: true });
const makeToast = (info: string, success?: boolean) => {
  if (window.powercord?.api?.notices?.sendToast)
    return window.powercord.api.notices.sendToast(null, {
      content: info,
      timeout: success ? 2500 : 3500,
      type: success ? 'success' : 'danger',
      header: success ? 'Snippet Action Successful' : 'Snippet Action Unsuccessful',
    });
  showToast(createToast(info, success || 2));
};

const cleanup = () => {
  Object.keys(cleanups).forEach(async key => {
    try {
      await cleanups[key]();
      delete cleanups[key];
    } catch (error) {
      makeToast(`Error running the cleanup function for ${key}! Check console for more details.`);
      Logger.error(`Error running the cleanup function for ${key}!`, error);
    }
  });
};

const writeSnippets = (snippets: Snippets): boolean => {
  let error: boolean;
  CodeSnippetsNative.writeFile(PATH, JSON.stringify(snippets, null, '\t'), (error) => {
    makeToast(`Error trying to write to the snippets file! Check console for more details.`);
    Logger.error('Error trying to write to the snippets file!', error);
    error = true;
  });

  if (error) return error;
  update?.();
};

const i18n = Webpack.getByProps('getLocale');
const backupSnippets = () => {
  const timestamp = new Date()
    .toLocaleString(i18n.getLocale(), { hourCycle: 'h24' })
    .replace(/[\/:]/g, '-').replace(', ', '-');

  let error: boolean;
  CodeSnippetsNative.writeFile(`src/backup-${timestamp}.json`, JSON.stringify(getSnippets()), (error) => {
    makeToast(`Error trying to back up the snippets file! Check console for more details.`);
    Logger.error('Error trying to back up the snippets file!', error);
    error = true;
  });

  if (error) return;
  makeToast(`Successfully backed up snippets to backup-${timestamp}.json!`, true);
  Logger.info(`Successfully backed up snippets to backup-${timestamp}.json!`);
};

const getScriptType = (name: string): ScriptType => {
  const snippet = getSnippet(name);

  if (snippet.extension.endsWith('ss'))
    return ScriptType.CSS;
  else if (snippet.extension in extensions)
    return ScriptType.JS;
};

const getSnippets = (): Snippets => {
  const snippets = CodeSnippetsNative.readFile(PATH);
  return snippets ? JSON.parse(snippets) : {};
};

const getSnippet = (name: string): Snippet => {
  const snippets = getSnippets();

  if (!Object.keys(snippets).length || !snippets[name])
    return { code: '', extension: '', enabled: false };

  return snippets[name];
};

const getFirstSnippet = () => {
  return Object.keys(getSnippets())?.[0];
};

const createSnippet = (name: string, extension: string, enabled?: boolean) => {
  let snippets = getSnippets();

  try { Object.assign(snippets, { [name]: { code: '', enabled: enabled ?? false, extension } }); } catch (error) {
    makeToast(`Error creating snippet ${name}! Check console for more details.`);
    return Logger.error(`Error creating snippet ${name}.`, error);
  }

  return writeSnippets(snippets);
};

const updateSnippet = (name: string, snippet: object) => {
  let snippets = getSnippets();

  snippet = Object.assign(getSnippet(name), snippet);

  try { Object.assign(snippets, { [name]: snippet }); } catch (error) {
    makeToast(`Error writing snippet ${name}! Check console for more details.`);
    return true || Logger.error(`Error writing snippet ${name}.`, error);
  }

  return writeSnippets(snippets);
};

const deleteSnippet = (name: string) => {
  let snippets = getSnippets();

  try { delete snippets[name]; cleanups[name]?.(); } catch (error) {
    makeToast(`Error deleting snippet ${name}! Check console for more details.`);
    return Logger.error(`Error deleting snippet ${name}!`, error);
  }

  return writeSnippets(snippets);
};

const renameSnippet = (name: string, newName: string) => {
  console.log(name, newName);
  let snippets = getSnippets();

  try {
    let index = Object.keys(snippets).indexOf(name);
    let array = Object.entries(snippets);

    array.splice(index, 1, [newName, snippets[name]]);

    snippets = Object.fromEntries(array);
  } catch (error) {
    makeToast(`Error renaming snippet ${name} to ${newName}! Check console for more details.`);
    return Logger.error(`Error renaming snippet ${name} to ${newName}!`, error);
  }

  return writeSnippets(snippets);
};

const moveSnippet = (name: string, index: number) => {
  let snippets = getSnippets();

  try {
    let value = snippets[name];

    let array = Object.entries(snippets).filter(([key]) => key !== name);

    array.splice(index, 0, [name, value]);

    snippets = Object.fromEntries(array);
  } catch (error) {
    makeToast(`Error moving snippet ${name}! Check console for more details.`);
    return Logger.error(`Error moving snippet ${name}!`, error);
  }

  return writeSnippets(snippets);
};

const runCode = async (name: string, snippet: Snippet, silent?: boolean) => {
  let returnValue: Function | undefined;
  try {
    returnValue = await new Function(`
        let Logger  = window.cs.logger;
        let Patcher = window.cs.patcher;
        let Webpack = window.cs.webpack;
        let Manager = window.cs.manager;

        return (async () => { ${CodeSnippetsNative.compile(snippet.code, snippet.extension)} })();
      `)();
  } catch (error) {
    makeToast(`Error running snippet ${name || 'QuickRun'}! Check console for more details.`);
    return Logger.error(`Error running snippet ${name || 'QuickRun'}!`, error);
  }

  silent ?? makeToast(`Successfully ran ${name || 'QuickRun'}!`, true);
  Logger.info(`Successfully ran ${name || 'QuickRun'}!`, returnValue ? '' : `Returned: ${returnValue}`);

  update?.();
  return returnValue;
};

const injectCSS = (data: string, id: string, customNode?: Element) => {
  const createElement = (options = {}) => {
    return Object.assign(document.createElement('style'), options);
  };

  const node = createElement({ textContent: data, id: `code-snippets-${id}` });

  (customNode ?? document.head).appendChild(node);
  return node;
};

const runSnippet = async (name: string, type: ScriptType, silent?: boolean) => {
  if (!getSnippets()[name])
    return Logger.warn(`Snippet ${name} does not exist!`);

  const snippet = getSnippet(name);

  // pre cleanup just in case
  await cleanups[name]?.(true);

  if (type === ScriptType.CSS) {
    const node = injectCSS(CodeSnippetsNative.compile(snippet.code, snippet.extension), name);

    cleanups[name] = (silent: boolean) => {
      node.remove();
      delete cleanups[name];

      if (!silent) makeToast(`Successfully removed CSS for ${name}!`, true);
      Logger.info(`Successfully removed CSS for ${name}!`, node);

      update?.();
    };

    if (!silent) makeToast(`Successfully loaded CSS for ${name}! Check console for node info.`, true);
    Logger.info(`Successfuly loaded CSS for ${name}!`, node);
  } else {
    const cleanup = await runCode(name, snippet, silent);

    if (typeof cleanup === 'function') {
      cleanups[name] = async (silent: boolean) => {
        let unpatchReturn: Function;

        try {
          unpatchReturn = await cleanup();
          delete cleanups[name];
        } catch (error) {
          makeToast(`Error running the cleanup function for ${name}! Check console for more details.`);
          return Logger.error(`Error running the cleanup function for ${name}!`, error);
        }

        if (!silent) makeToast(`Successfully ran cleanup function for ${name}!`, true);
        Logger.info(`Successfully ran cleanup function for ${name}!`, unpatchReturn && typeof unpatchReturn !== 'function' ? '' : `Returned: ${unpatchReturn}`);

        update?.();
      };
    }
  }

  update?.();
};

const pullGist = async (gist: Snippet['gist']): Promise<string> => {
  const data = await (await fetch(`https://api.github.com/gists/${gist.id}`)).json();
  if (data.message) return Promise.reject('Gist does not exist!');

  const code = data.files[gist.name]?.content ?? data.files[Object.keys(data.files)[0]]?.content;
  if (!code) return Promise.reject('Gist does not contain any files!');

  return code;
};

export default {
  makeToast,
  cleanup,
  setUpdate,

  getSnippets,
  getFirstSnippet,
  getSnippet,
  getScriptType,

  backupSnippets,
  deleteSnippet,
  moveSnippet,
  updateSnippet,
  renameSnippet,
  createSnippet,

  runCode,
  injectCSS,
  runSnippet,
  pullGist,

  ScriptType,
  get cleanups() {
    return cleanups;
  }
};