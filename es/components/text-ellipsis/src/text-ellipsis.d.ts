import type { ExtractPropTypes } from 'vue';
export declare const textEllipsisProps: {
    readonly rows: import("element-plus/es/utils").EpPropFinalized<readonly [NumberConstructor, StringConstructor], unknown, unknown, 1, boolean>;
    readonly dots: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "...", boolean>;
    readonly content: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly expandText: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly collapseText: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly position: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "end" | "start" | "middle", unknown, "end", boolean>;
    readonly showOverflowTooltip: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly tooltipOptions: import("element-plus/es/utils").EpPropFinalized<ObjectConstructor, unknown, unknown, () => {}, boolean>;
};
export type TextEllipsisProps = ExtractPropTypes<typeof textEllipsisProps>;
export declare const textEllipsisEmits: {
    clickAction: (event: MouseEvent) => boolean;
};
export type TextEllipsisEmits = typeof textEllipsisEmits;
