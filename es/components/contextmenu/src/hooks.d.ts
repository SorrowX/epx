export declare const useContextMenu: () => {
    visible: import("vue").Ref<boolean, boolean>;
    triggerRef: import("vue").Ref<{
        getBoundingClientRect: () => {
            top: number;
            left: number;
            bottom: number;
            right: number;
        };
    }, {
        getBoundingClientRect(): {
            top: number;
            left: number;
            bottom: number;
            right: number;
        };
    } | {
        getBoundingClientRect: () => {
            top: number;
            left: number;
            bottom: number;
            right: number;
        };
    }>;
    handleContextMenu: (e: any) => void;
};
