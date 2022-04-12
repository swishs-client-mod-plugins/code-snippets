// Outside of type.d.ts because it needs to be an external module.
// This file lets me add things to window without having to cast it as "any".

export { };

declare global {
  interface Window {
    [key: string]: any;
  }
}