import type { ExtractPropTypes } from 'vue';
export declare const flexProps: {
    readonly vertical: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly wrap: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset" | "wrap" | "nowrap" | "wrap-reverse") | (() => import("csstype").FlexWrapProperty | undefined) | (((new (...args: any[]) => "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset" | "wrap" | "nowrap" | "wrap-reverse") | (() => import("csstype").FlexWrapProperty | undefined)) | null)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly justify: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string) | (() => string | undefined) | (((new (...args: any[]) => string) | (() => string | undefined)) | null)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly align: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string) | (() => string | undefined) | (((new (...args: any[]) => string) | (() => string | undefined)) | null)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly flex: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => import("csstype").FlexProperty<string | number> | undefined) | (((new (...args: any[]) => string | number) | (() => import("csstype").FlexProperty<string | number> | undefined)) | null)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly gap: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => import("csstype").GapProperty<string | number> | undefined) | (((new (...args: any[]) => string | number) | (() => import("csstype").GapProperty<string | number> | undefined)) | null)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly component: {
        readonly type: import("vue").PropType<any>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export type FlexProps = ExtractPropTypes<typeof flexProps>;
export declare const flexEmits: {};
export type FlexEmits = typeof flexEmits;
