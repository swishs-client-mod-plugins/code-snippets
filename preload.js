/* The below source code is licensed under MIT. */

const fs = require('fs');
const path = require('path');
const electron = require('electron');

const sass = require('sass');
const sucrase = require('sucrase');

const compile = (code, extension) => {
  let compiled;
  switch (extension) {
    case 'sass':
    case 'scss':
      compiled = sass.compileString(code).css;
      break;
    case 'ts':
    case 'jsx':
    case 'tsx':
      compiled = sucrase.transform(code, {
        transforms: ['jsx', 'typescript'],
      }).code;
      break;
    default: return code;
  }

  return compiled;
};

const pathJoin = (_path) => {
  return path.join(__dirname, _path);
};

const fileManager = {
  writeFile: (_path, data, errorHandler) => {
    if (!fs.existsSync(pathJoin(_path)))
      fs.mkdirSync(path.dirname(pathJoin(_path)), { recursive: true });
    return fs.writeFileSync(pathJoin(_path), data, errorHandler);
  },

  readFile: (_path, base64) => {
    if (!fs.existsSync(pathJoin(_path))) return;
    return fs.readFileSync(pathJoin(_path), base64 ? { encoding: 'base64' } : 'utf-8');
  },

  readDir: (_path) => {
    if (!fs.existsSync(pathJoin(_path))) return;
    return fs.readdirSync(pathJoin(_path), 'utf-8');
  }
};

const openPath = (_path) => {
  try { electron.shell.openPath(pathJoin(_path)); } catch { }
};

electron.contextBridge.exposeInMainWorld('CodeSnippetsNative', Object.assign({
  compile, pathJoin, openPath
}, fileManager));