/* The below code is licensed under MIT. */

const packagePrefix = 'code-snippets';

const _join = (prefix: string, classes: (string | string[])[]) => {
  return classes.map(value => (
    `${prefix ? `${prefix}-` : ''}${Array.isArray(value) ? value.join('-') : value}`
  )).join(' ');
};

export const extensions = ['js', 'ts', 'jsx', 'css', 'scss', 'sass'];

export function join(...classes: (string | string[])[]) {
  return _join('', classes);
}

export function pjoin(...classes: (string | string[])[]) {
  return `${packagePrefix}-${_join('', classes)}`;
}

export function cjoin(prefix: string) {
  return (...classes: (string | string[])[]) => {
    return _join(`${packagePrefix}-${prefix}`, classes);
  };
}

export function sleep(ms: number) {
  return new Promise(res => setTimeout(res, ms));
}

export function callArgs(functions: Function[], callMethod?: string): any {
  functions.forEach(f => callMethod ? f[callMethod]?.() : f?.());
};