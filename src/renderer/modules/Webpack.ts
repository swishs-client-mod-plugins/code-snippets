/* The below source code is licensed under MIT. Modified from: https://github.com/strencher-kernel/webpack */

if (typeof Array.prototype.at !== 'function') {
  Object.defineProperty(Array.prototype, 'at', {
    value: function (index) {
      return index < 0 ? this[this.length - Math.abs(index)] : this[index];
    },
    configurable: true,
    writable: true,
    enumerable: false
  });
}

if (typeof setImmediate === 'undefined') {
  // @ts-ignore
  window.setImmediate = (callback) => requestAnimationFrame(callback);
}

type SearchFilter = (m: any, index?: number) => boolean | void;

const CHUNK_NAME = 'webpackChunkdiscord_app';

let webpack_require_instance = null;

let ready = false;

const Events = new EventTarget();

const whenReady = new Promise<void>(resolve => {
  Events.addEventListener('ready', () => {
    resolve();
    ready = true;
  }, { once: true });
});

const globalPromise = new Promise<void>(async onExists => {
  while (!Array.isArray(window[CHUNK_NAME])) {
    await new Promise(setImmediate);
  }

  onExists();
});

const Filters = {
  byProps(...props: string[]): SearchFilter {
    const types = ['number', 'string'];

    return (m) => m && !~types.indexOf(typeof m) && props.every(prop => prop in m);
  },

  byDisplayName(displayName: string, defaultExports = false): SearchFilter {
    return defaultExports
      ? (m) => m?.default?.displayName === displayName
      : (m) => m?.displayName === displayName;
  },

  byPrototypes(...protos: string[]): SearchFilter {
    return (m) => typeof m === 'function' && protos.every(p => p in m.prototype);
  },

  byFunctionStrings(...strings: string[]): SearchFilter {
    return (m) => typeof m?.default === 'function' &&
      strings.every(string => ~m.default.toString().indexOf(string));
  }
};

const require = () => {
  if (webpack_require_instance) return webpack_require_instance;

  const chunk = [[Symbol('code_snippets')], {}, _ => _];
  webpack_require_instance = window[CHUNK_NAME].push(chunk);
  window[CHUNK_NAME].splice(window[CHUNK_NAME].indexOf(chunk), 1);

  return webpack_require_instance;
};

interface DefaultOptions {
  all?: boolean;
  force?: boolean;
  default?: boolean;
};

interface ConditionalDefault extends DefaultOptions {
  wait?: false;
}

const findModule = (filter: SearchFilter, { all = false, force = false, default: defaultExports = true } = {}) => {
  if (typeof (filter) !== 'function') return void 0;

  const webpack_require_instance = require();
  const found = [];
  let hasError = null;

  if (!webpack_require_instance) return;

  const wrapFilter = function (module, index) {
    try { return filter(module, index); }
    catch (error) {
      hasError ??= error;
      return false;
    }
  };

  for (const id in webpack_require_instance.c) {
    const module = webpack_require_instance.c[id].exports;
    if (!module || module === window) continue;

    switch (typeof module) {
      case 'object': {
        if (wrapFilter(module, id)) {
          if (!all) return module;
          found.push(module);
        }

        if (module.__esModule &&
          module.default != null &&
          typeof module.default !== 'number' &&
          wrapFilter(module.default, id)
        ) {
          const exports = defaultExports ? module.default : module;
          if (!all) return exports;
          found.push(exports);
        }

        if (force && module.__esModule) for (const key in module) {
          if (!module[key]) continue;

          if (wrapFilter(module[key], id)) {
            if (!all) return module[key];
            found.push(module[key]);
          }
        }

        break;
      }

      case 'function': {
        if (wrapFilter(module, id)) {
          if (!all) return module;
          found.push(module);
        }

        break;
      }
    }
  }

  if (hasError) {
    console.warn('[Webpack] filter threw an error. This can cause lag spikes at the user\'s end. Please fix asap.\n', hasError);
  }

  return all ? found : found[0];
};

const findModules = (filter: SearchFilter, options?: { force?: boolean; default?: boolean; }) => {
  return findModule(filter, Object.assign({}, options, { all: true }));
};

interface WaitForOptions {
  all?: boolean;
  delay?: number;
  retries?: number;
  forever?: boolean;
}

interface ConditionalWaitFor extends WaitForOptions {
  wait: true;
}

const waitFor = async (filter: SearchFilter, { retries = 100, all = false, forever = false, delay = 50 } = {}) => {
  for (let i = 0; (i < retries) || forever; i++) {
    const module = findModule(filter, { all });
    if (module) return module;
    await new Promise(res => setTimeout(res, delay));
  }
};

type BulkOptions = (ConditionalDefault | ConditionalWaitFor) & { wrap?: boolean; };

const bulk = (...options: [...filters: SearchFilter[], options: BulkOptions] | SearchFilter[]): any[] => {
  const [filters, { wait = false, wrap = false, ...rest }] = parseOptions(options);
  const found = new Array(filters.length);
  const searchFunction = wait ? waitFor : findModule;
  const wrappedFilters = wrap ? filters.map(filter => {
    if (Array.isArray(filter)) filter = Filters.byProps(...filter);
    if (typeof (filter) === 'string') filter = Filters.byDisplayName(filter);

    return (m) => {
      try { return filter(m); }
      catch (error) { return false; }
    };
  }) : filters;

  const returnValue = searchFunction((module) => {
    for (let i = 0; i < wrappedFilters.length; i++) {
      const filter = wrappedFilters[i];
      if (typeof filter !== 'function' || !filter(module) || found[i] != null) continue;

      found[i] = module;
    }

    return found.filter(Boolean).length === filters.length;
  }, rest);

  if (wait) return returnValue.then(() => found);

  return found;
};

type ConditionalBulk = [...(string | string[])[], { bulk: true; } & ExtendedOptions];

type ExtendedOptions = (ConditionalDefault | ConditionalWaitFor);

const findByProps = (...options: [...string[], ExtendedOptions] | ConditionalBulk | [...string[]]) => {
  const [props, { bulk: findBulk = false, wait = false, ...rest }] = parseOptions(options);

  if (!findBulk && !wait) {
    return findModule(Filters.byProps(...props), rest);
  }

  if (wait && !findBulk) {
    return waitFor(Filters.byProps(...props), rest);
  }

  if (findBulk) {
    const filters = props.map((actualProps) => Array.isArray(actualProps)
      ? Filters.byProps(...actualProps)
      : Filters.byProps(actualProps)
    );

    filters.push({ wait, ...rest });

    return bulk(...filters);
  }

  return null;
};

const findByDisplayName = (...options: [...string[], ExtendedOptions] | string[]) => {
  const [displayNames, { bulk: findBulk = false, wait = false, ...rest }] = parseOptions(options);

  if (!findBulk && !wait) {
    return findModule(Filters.byDisplayName(displayNames[0], rest.default), rest);
  }

  if (wait && !findBulk) {
    return waitFor(Filters.byDisplayName(displayNames[0]), rest);
  }

  if (findBulk) {
    const filters = displayNames.map(Filters.byDisplayName);
    filters.push({ wait, ...rest });

    return bulk(...filters);
  }

  return null;
};

const findIndex = (filter: (m: any) => boolean | void) => {
  let foundIndex = -1;

  findModule((module, index) => {
    if (filter(module)) foundIndex = index;
  });

  return foundIndex;
};

const atIndex = (index: number) => {
  return require()?.c[index];
};

const parseOptions = (args, filter = options => (typeof (options) === 'object' && options != null && !Array.isArray(options))) => {
  return [args, filter(args.at(-1)) ? args.pop() : {}];
};

{
  const InitializeEvents = ['START_SESSION', 'CONNECTION_OPEN'];
  (async () => {
    await globalPromise;
    const Dispatcher = await findByProps('dirtyDispatch', { wait: true, forever: true });
    for (const event of InitializeEvents) {
      const listener = function () {
        Dispatcher.unsubscribe(event, listener);
        Events.dispatchEvent(new Event('ready'));
      };

      Dispatcher.subscribe(event, listener);
    }
  })();
}

let components;
export default {
  bulk,
  Events,
  waitFor,
  require,
  atIndex,
  Filters,
  findIndex,
  whenReady,
  findModule,
  findByProps,
  findModules,
  globalPromise,
  findByDisplayName,
  // Aliases
  getByIndex: atIndex,
  getIndex: findIndex,
  getModule: findModule,
  getByProps: findByProps,
  getModules: findModules,
  getByDisplayName: findByDisplayName,
  get ready() { return ready; },
  get components() { return components; }
};

// Exports Filters (duh)
export { Filters };

// Define components
whenReady.then(() => {
  const [
    Pin,
    Plus,
    Link,
    Pull,
    Caret,
    Trash,
    Popout,
    Rocket,
  ] = bulk(
    Filters.byDisplayName('Pin'),
    Filters.byDisplayName('Plus'),
    Filters.byDisplayName('Link'),
    Filters.byDisplayName('Download'),
    Filters.byDisplayName('Caret'),
    Filters.byDisplayName('Trash'),
    Filters.byDisplayName('Launch'),
    Filters.byDisplayName('Rocket'),
  );

  const {
    ModalRoot,
    ModalSize,
    ModalHeader,
    ModalFooter,
    ModalContent,
    ModalCloseButton
  } = findByProps('ModalCloseButton');

  const {
    MenuItem,
    MenuGroup,
    MenuSeparator,
    MenuControlItem,
    default: Container
  } = findByProps('MenuGroup', 'MenuItem');

  components = {
    Icon: {
      Pin,
      Plus,
      Link,
      Pull,
      Caret,
      Trash,
      Popout,
      Rocket,
    },
    Modal: {
      Root: ModalRoot,
      Sizes: ModalSize,
      Header: ModalHeader,
      Footer: ModalFooter,
      Content: ModalContent,
      CloseButton: ModalCloseButton,
    },
    ContextMenu: {
      Container,
      Item: MenuItem,
      Group: MenuGroup,
      Separator: MenuSeparator,
      ControlItem: MenuControlItem,
    },
    Tooltip: findByProps('TooltipContainer').TooltipContainer,
    BarlessScroller: findByProps('AdvancedScrollerNone').AdvancedScrollerNone
  };
});