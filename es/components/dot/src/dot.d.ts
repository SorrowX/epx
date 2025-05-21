import type { ExtractPropTypes } from 'vue';
export declare const dotProps: {
    readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "success" | "warning" | "info" | "primary" | "danger", unknown, "primary", boolean>;
    readonly color: StringConstructor;
    readonly size: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export type DotProps = ExtractPropTypes<typeof dotProps>;
export declare const dotEmits: {};
export type DotEmits = typeof dotEmits;
