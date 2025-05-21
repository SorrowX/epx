import type { ExtractPropTypes } from 'vue';
export declare const submitProps: {
    readonly onClick: {
        readonly type: import("vue").PropType<(event: MouseEvent) => void | boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onSubmit: {
        readonly type: import("vue").PropType<(values: object) => void | Promise<any>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onSubmitSuccess: {
        readonly type: import("vue").PropType<(payload: any) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onSubmitFailed: {
        readonly type: import("vue").PropType<(feedbacks: unknown) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export type SubmitProps = ExtractPropTypes<typeof submitProps>;
export declare const submitEmits: {};
export type SubmitEmits = typeof submitEmits;
