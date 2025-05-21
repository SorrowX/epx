import type { ExtractPropTypes } from 'vue';
export type ItemSize = number;
export declare const virtualListProps: {
    readonly list: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => any[]) | (() => any[]) | (((new (...args: any[]) => any[]) | (() => any[])) | null)[], unknown, unknown, () => never[], boolean>;
    readonly itemFixed: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly itemSize: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => number) | (() => number) | (((new (...args: any[]) => number) | (() => number)) | null)[], unknown, unknown, 20, boolean>;
    readonly direction: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "horizontal" | "vertical", unknown, "vertical", boolean>;
    readonly overscan: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 10, boolean>;
    readonly nativeScrollbar: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly infiniteScroll: {
        readonly type: import("vue").PropType<() => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly infiniteScrollup: {
        readonly type: import("vue").PropType<() => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly infiniteScrollDisabled: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly infiniteScrollDelay: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 16, boolean>;
    readonly infiniteScrollDistance: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
    readonly load: {
        readonly type: import("vue").PropType<() => Promise<any>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly finished: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly loadingText: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly errorText: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly noMoreText: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export type VirtualListProps = ExtractPropTypes<typeof virtualListProps>;
export declare const virtualListEmits: {
    scroll: (e: Event) => boolean;
};
export type VirtualListEmits = typeof virtualListEmits;
