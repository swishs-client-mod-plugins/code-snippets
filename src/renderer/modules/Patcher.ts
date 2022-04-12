/* The below source code is licensed under MIT. */

import Logger from './Logger';

enum PatcherTypes { AFTER, BEFORE, INSTEAD }
type PatcherVars = [object, string, Function];

const _patches = new Set();

const peformUnpach = (module: object, functionString: string, originalFunction: Function) => {
  module[functionString] = originalFunction;
  _patches.delete(Array.from(_patches).at(-1));
};

const performPatch = (type: PatcherTypes, module: object, functionString: string, replacementFunction: Function) => {
  const originalFunction = module[functionString];

  // This is a scuffed unpatch as it is not layered. But Kernel will have it's own patcher soon so I don't care.
  const unpatch = () => peformUnpach(module, functionString, originalFunction);

  try {
    let returnValue: any;
    module[functionString] = function (...args: any[]) {
      switch (type) {
        case PatcherTypes.AFTER:
          returnValue = originalFunction.apply(this, args);
          return replacementFunction(args, returnValue) || returnValue;

        case PatcherTypes.BEFORE:
          returnValue = replacementFunction(args);
          return originalFunction.apply(this, returnValue || args);

        case PatcherTypes.INSTEAD:
          return replacementFunction(args, originalFunction);
      }
    };

    Object.assign(module[functionString], originalFunction, {
      __originalFunction: originalFunction,
      prototype: originalFunction.prototype,
      toString: () => originalFunction.toString(),
    });

  } catch (error) {
    return Logger.error(`Failed to patch ${functionString}.`, error);
  }

  _patches.add(unpatch);
  return unpatch;
};

const addPatch = (unpatch: Function) => {
  _patches.add(unpatch);
};

const unpatchAll = () => {
  Array.from(_patches).forEach((unpatch: Function) => {
    try { unpatch(); } catch (error) {
      Logger.error(`Could not unpatch function ${unpatch}!`);
    } Logger.info(`Successfully unpatched function ${unpatch}!`);
  });
  Logger.info('Unpatched all patches!');
};

const after = (...args: PatcherVars) => performPatch(PatcherTypes.AFTER, ...args);
const before = (...args: PatcherVars) => performPatch(PatcherTypes.BEFORE, ...args);
const instead = (...args: PatcherVars) => performPatch(PatcherTypes.INSTEAD, ...args);

export default { _patches, addPatch, unpatchAll, after, before, instead };