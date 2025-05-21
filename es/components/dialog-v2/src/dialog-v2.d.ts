import type { ButtonProps } from 'element-plus';
import type { ExtractPropTypes } from 'vue';
export type TriggerProps = Partial<ButtonProps> & {
    triggerText?: string;
};
export type CancelProps = Partial<ButtonProps> & {
    hidden?: boolean;
    cancelText?: string;
};
export type SureProps = Partial<ButtonProps> & {
    hidden?: boolean;
    sureText?: string;
};
export declare const dialogV2Props: {
    readonly title: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly triggerProps: {
        readonly type: import("vue").PropType<TriggerProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly cancelProps: {
        readonly type: import("vue").PropType<CancelProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly sureProps: {
        readonly type: import("vue").PropType<SureProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onCancel: {
        readonly type: import("vue").PropType<({ close }: {
            close: () => void;
        }) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onSure: {
        readonly type: import("vue").PropType<({ close }: {
            close: () => void;
        }) => void | Promise<any>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export type DialogV2Props = ExtractPropTypes<typeof dialogV2Props>;
export declare const dialogV2Emits: {};
export type DialogV2Emits = typeof dialogV2Emits;
