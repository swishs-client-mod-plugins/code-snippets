// Outside of type.d.ts because it needs to be an external module and it also needs to be imported into monaco.
// This file lets you add things to window without having to cast it as "any".

export { };

declare global {
  interface Window {
    [key: string]: any;
  }
}