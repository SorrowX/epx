declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly rows: import("element-plus/es/utils").EpPropFinalized<readonly [NumberConstructor, StringConstructor], unknown, unknown, 1, boolean>;
    readonly dots: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "...", boolean>;
    readonly content: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly expandText: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly collapseText: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly position: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "end" | "start" | "middle", unknown, "end", boolean>;
    readonly showOverflowTooltip: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly tooltipOptions: import("element-plus/es/utils").EpPropFinalized<ObjectConstructor, unknown, unknown, () => {}, boolean>;
}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    clickAction: (event: MouseEvent) => boolean;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly rows: import("element-plus/es/utils").EpPropFinalized<readonly [NumberConstructor, StringConstructor], unknown, unknown, 1, boolean>;
    readonly dots: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "...", boolean>;
    readonly content: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly expandText: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly collapseText: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly position: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "end" | "start" | "middle", unknown, "end", boolean>;
    readonly showOverflowTooltip: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly tooltipOptions: import("element-plus/es/utils").EpPropFinalized<ObjectConstructor, unknown, unknown, () => {}, boolean>;
}>> & Readonly<{
    onClickAction?: ((event: MouseEvent) => any) | undefined;
}>, {
    readonly position: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "end" | "start" | "middle", unknown>;
    readonly tooltipOptions: Record<string, any>;
    readonly showOverflowTooltip: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly content: string;
    readonly rows: import("element-plus/es/utils").EpPropMergeType<readonly [NumberConstructor, StringConstructor], unknown, unknown>;
    readonly dots: string;
    readonly expandText: string;
    readonly collapseText: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
