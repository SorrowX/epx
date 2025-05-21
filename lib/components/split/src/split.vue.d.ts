declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        left?(_: {}): any;
        right?(_: {}): any;
        handler?(_: {}): any;
    };
    refs: {
        wrapper: HTMLDivElement;
        handler: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => number) | (() => number) | (((new (...args: any[]) => number) | (() => number)) | null)[], unknown, unknown, 0.5, boolean>;
    readonly vertical: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean) | (((new (...args: any[]) => boolean) | (() => boolean)) | null)[], unknown, unknown, false, boolean>;
    readonly min: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => number) | (() => number) | (((new (...args: any[]) => number) | (() => number)) | null)[], unknown, unknown, 0.1, boolean>;
    readonly max: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => number) | (() => number) | (((new (...args: any[]) => number) | (() => number)) | null)[], unknown, unknown, 0.9, boolean>;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: number) => void;
    change: (value: number) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => number) | (() => number) | (((new (...args: any[]) => number) | (() => number)) | null)[], unknown, unknown, 0.5, boolean>;
    readonly vertical: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean) | (((new (...args: any[]) => boolean) | (() => boolean)) | null)[], unknown, unknown, false, boolean>;
    readonly min: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => number) | (() => number) | (((new (...args: any[]) => number) | (() => number)) | null)[], unknown, unknown, 0.1, boolean>;
    readonly max: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => number) | (() => number) | (((new (...args: any[]) => number) | (() => number)) | null)[], unknown, unknown, 0.9, boolean>;
}>> & Readonly<{
    onChange?: ((value: number) => any) | undefined;
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
}>, {
    readonly modelValue: number;
    readonly vertical: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => boolean) | (() => boolean) | (((new (...args: any[]) => boolean) | (() => boolean)) | null)[], unknown, unknown>;
    readonly max: number;
    readonly min: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
