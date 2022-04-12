/* The below source code is licensed under MIT. */

const parse = (type: string, information: any[]) => {
  console[type]('%c[Code-Snippets]', 'color: #80ffd0; font-weight: 700;', ...information);
};

const log = (...information: any[]) => parse('log', information);
const info = (...information: any[]) => parse('info', information);
const warn = (...information: any[]) => parse('warn', information);
const error = (...information: any[]) => parse('error', information);

export default { log, info, warn, error };