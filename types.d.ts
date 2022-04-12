declare const _: typeof import('lodash');
declare const React: typeof import('react');

declare const CodeSnippetsNative: {
  openPath(path: string): void;
  pathJoin(path: string): string;
  readDir(path: string): string[];
  readFile(path: string, base64?: boolean): string;
  compile(code: string, extension: string): string;
  writeFile(path: string, data: string, errorHandler?: (err: any) => void): void;
};

declare interface ModalEvent {
  onClose: () => void;
  transitionState: number;
}

declare interface Snippets {
  [snippetName: string]: Snippet;
}

declare interface Snippet {
  code: string;
  enabled: boolean;
  extension: string;
}