import { VirtualListProps } from './virtual-list';
export declare const cacheKey: unique symbol;
export declare const useCache: (props: VirtualListProps) => {
    map: import("vue").Ref<Map<any, any> & Omit<Map<any, any>, keyof Map<any, any>>, Map<any, any> | (Map<any, any> & Omit<Map<any, any>, keyof Map<any, any>>)>;
    setRealSize: (i: number, el: HTMLElement, entry: ResizeObserverEntry) => void;
    getRealSize: (i: number) => number;
};
