import type { Ref } from 'vue';
export type OverflowOptions = {
    selectors: string;
    condition?: (contentWidth: number, containerWidth: number) => boolean;
};
export declare const useOverflow: (containerRef: Ref<HTMLElement | undefined>, options: OverflowOptions) => {
    overflow: Ref<boolean, boolean>;
    observer: () => void;
    cleanup: () => void;
    stopWatch: import("vue").WatchHandle;
};
