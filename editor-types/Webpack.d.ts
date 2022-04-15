/* The below source code is licensed under MIT. */

declare type SearchFilter = (m: any, index?: number) => boolean | void;
declare const Filters: {
  byProps(...props: string[]): SearchFilter;
  byDisplayName(displayName: string, defaultExports?: boolean): SearchFilter;
  byPrototypes(...protos: string[]): SearchFilter;
  byFunctionStrings(...strings: string[]): SearchFilter;
};
interface DefaultOptions {
  all?: boolean;
  force?: boolean;
  default?: boolean;
}
interface ConditionalDefault extends DefaultOptions {
  wait?: false;
}
interface WaitForOptions {
  all?: boolean;
  delay?: number;
  retries?: number;
  forever?: boolean;
}
interface ConditionalWaitFor extends WaitForOptions {
  wait: true;
}
declare type BulkOptions = (ConditionalDefault | ConditionalWaitFor) & {
  wrap?: boolean;
};
declare type ConditionalBulk = [...(string | string[])[], {
  bulk: true;
} & ExtendedOptions];
declare type ExtendedOptions = (ConditionalDefault | ConditionalWaitFor);
declare const Webpack: {
  bulk: (...options: [...filters: SearchFilter[], options: BulkOptions] | SearchFilter[]) => any[];
  Events: EventTarget;
  waitFor: (filter: SearchFilter, { retries, all, forever, delay }?: {
    retries?: number;
    all?: boolean;
    forever?: boolean;
    delay?: number;
  }) => Promise<any>;
  require: () => any;
  atIndex: (index: number) => any;
  Filters: {
    byProps(...props: string[]): SearchFilter;
    byDisplayName(displayName: string, defaultExports?: boolean): SearchFilter;
    byPrototypes(...protos: string[]): SearchFilter;
    byFunctionStrings(...strings: string[]): SearchFilter;
  };
  findIndex: (filter: (m: any) => boolean | void) => number;
  whenReady: Promise<void>;
  findModule: (filter: SearchFilter, { all, force, default: defaultExports }?: {
    all?: boolean;
    force?: boolean;
    default?: boolean;
  }) => any;
  findByProps: (...options: string[] | ConditionalBulk | [...string[], ExtendedOptions]) => any;
  findModules: (filter: SearchFilter, options?: {
    force?: boolean;
    default?: boolean;
  }) => any;
  globalPromise: Promise<void>;
  findByDisplayName: (...options: string[] | [...string[], ExtendedOptions]) => any;
  getByIndex: (index: number) => any;
  getIndex: (filter: (m: any) => boolean | void) => number;
  getModule: (filter: SearchFilter, { all, force, default: defaultExports }?: {
    all?: boolean;
    force?: boolean;
    default?: boolean;
  }) => any;
  getByProps: (...options: string[] | ConditionalBulk | [...string[], ExtendedOptions]) => any;
  getModules: (filter: SearchFilter, options?: {
    force?: boolean;
    default?: boolean;
  }) => any;
  getByDisplayName: (...options: string[] | [...string[], ExtendedOptions]) => any;
  readonly ready: boolean;
  readonly components: {
    Icon: {
      Pin: any,
      Plus: any,
      Link: any,
      Pull: any,
      Caret: any,
      Trash: any,
      Popout: any,
      Rocket: any,
    },
    Modal: {
      Root: any;
      Sizes: any;
      Header: any;
      Footer: any;
      Content: any;
      CloseButton: any;
    },
    ContextMenu: {
      Item: any;
      Group: any;
      Container: any;
      Separator: any;
      ControlItem: any;
    },
    Tooltip: any;
    BarlessScroller: any;
  };
};