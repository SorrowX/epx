export type ResizeHandler = (entry: ResizeObserverEntry) => any;
export declare function observeResize(el: Element, handler: ResizeHandler): void;
export declare function unobserveResize(el: Element): void;
export declare function useResize(): {
    observeResize: typeof observeResize;
    unobserveResize: typeof unobserveResize;
};
