import type { ExtractPropTypes } from 'vue';
export declare const readMoreProps: {
    readonly height: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "200px", boolean>;
    readonly modelValue: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly transition: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly openText: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly closeText: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly overlay: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
};
export type ReadMoreProps = ExtractPropTypes<typeof readMoreProps>;
export declare const readMoreEmits: {
    change: (value: boolean) => boolean;
    "update:modelValue": (value: boolean) => boolean;
};
export type ReadMoreEmits = typeof readMoreEmits;
