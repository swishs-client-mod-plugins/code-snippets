/* The below source code is licensed under MIT. */

declare const Patcher: {
  _patches: Set<Function>;
  addPatch: (unpatch: () => void) => void;
  unpatchAll: () => void;
  after: (module: object, functionString: string, replacementFunction: Function) => () => void;
  before: (module: object, functionString: string, replacementFunction: Function) => () => void;
  instead: (module: object, functionString: string, replacementFunction: Function) => () => void;
};