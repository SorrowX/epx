import type { OptionType } from './select-v3';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly options: {
        readonly type: import("vue").PropType<OptionType[]>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly textEllipsisOptions: import("element-plus/es/utils").EpPropFinalized<ObjectConstructor, unknown, unknown, () => {}, boolean>;
    readonly icon: {
        readonly type: import("vue").PropType<any>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly iconOptions: import("element-plus/es/utils").EpPropFinalized<ObjectConstructor, unknown, unknown, () => {}, boolean>;
}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly options: {
        readonly type: import("vue").PropType<OptionType[]>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly textEllipsisOptions: import("element-plus/es/utils").EpPropFinalized<ObjectConstructor, unknown, unknown, () => {}, boolean>;
    readonly icon: {
        readonly type: import("vue").PropType<any>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly iconOptions: import("element-plus/es/utils").EpPropFinalized<ObjectConstructor, unknown, unknown, () => {}, boolean>;
}>> & Readonly<{}>, {
    readonly textEllipsisOptions: Record<string, any>;
    readonly iconOptions: Record<string, any>;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
