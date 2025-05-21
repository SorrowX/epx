declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import("vue").PropType<any[]>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly tag: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string) | (() => string) | (((new (...args: any[]) => string) | (() => string)) | null)[], unknown, unknown, "div", boolean>;
    readonly options: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => any) | (() => any) | {
        (): any;
        new (): any;
        readonly prototype: any;
    } | (((new (...args: any[]) => any) | (() => any) | {
        (): any;
        new (): any;
        readonly prototype: any;
    }) | null)[], unknown, unknown, () => {
        animation: number;
    }, boolean>;
}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: any) => boolean;
    change: (value: any) => boolean;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import("vue").PropType<any[]>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly tag: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string) | (() => string) | (((new (...args: any[]) => string) | (() => string)) | null)[], unknown, unknown, "div", boolean>;
    readonly options: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => any) | (() => any) | {
        (): any;
        new (): any;
        readonly prototype: any;
    } | (((new (...args: any[]) => any) | (() => any) | {
        (): any;
        new (): any;
        readonly prototype: any;
    }) | null)[], unknown, unknown, () => {
        animation: number;
    }, boolean>;
}>> & Readonly<{
    onChange?: ((value: any) => any) | undefined;
    "onUpdate:modelValue"?: ((value: any) => any) | undefined;
}>, {
    readonly options: any;
    readonly tag: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
