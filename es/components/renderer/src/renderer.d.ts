import type { ExtractPropTypes } from 'vue';
export declare const rendererProps: {
    readonly renderer: {
        readonly type: import("vue").PropType<Function>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly data: {
        readonly type: import("vue").PropType<Record<string, any>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export type RendererProps = ExtractPropTypes<typeof rendererProps>;
export declare const rendererEmits: {};
export type RendererEmits = typeof rendererEmits;
