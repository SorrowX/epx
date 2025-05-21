export declare const useWindowFullscreen: () => {
    isFullscreen: import("vue").Ref<boolean, boolean>;
    exit: () => Promise<void>;
    enter: () => Promise<void>;
    toggle: () => Promise<void>;
    isSupported: import("vue").Ref<boolean, boolean>;
};
