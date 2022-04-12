/* The below source code is licensed under MIT. */

declare enum ScriptType {
  JS = 0,
  CSS = 1
}
declare const Manager: {
  makeToast: (info: string, success?: boolean) => any;
  cleanup: () => void;
  setUpdate: (newUpdate: Function) => void;
  getFirstSnippet: () => string;
  getSnippet: (name: string) => Snippet;
  getScriptType: (name: string) => ScriptType;
  backupSnippets: () => void;
  deleteSnippet: (name: string) => boolean | void;
  moveSnippet: (name: string, index: number) => boolean | void;
  updateSnippet: (name: string, snippet: object) => boolean | void;
  renameSnippet: (name: string, newName: string) => boolean | void;
  createSnippet: (name: string, extension: string, enabled?: boolean) => boolean | void;
  runCode: (name: string, snippet: Snippet, silent?: boolean) => Promise<void | Function>;
  injectCSS: (data: string, id: string, customNode?: Element) => HTMLStyleElement;
  runSnippet: (name: string, type: ScriptType, silent?: boolean) => Promise<void>;
  ScriptType: typeof ScriptType;
  readonly cleanups: Record<string, Function>;
  readonly snippets: Snippets;
};