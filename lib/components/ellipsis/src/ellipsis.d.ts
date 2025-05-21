import type { ExtractPropTypes } from 'vue';
export declare const ellipsisProps: {
    readonly rows: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<readonly [NumberConstructor, StringConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly condition: {
        readonly type: import("vue").PropType<(contentWidth: number, containerWidth: number) => boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export type EllipsisProps = ExtractPropTypes<typeof ellipsisProps>;
export declare const ellipsisEmits: {};
export type EllipsisEmits = typeof ellipsisEmits;
