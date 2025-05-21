import type { ExtractPropTypes } from 'vue';
import type { CancelProps, SureProps, TriggerProps } from 'element-plus-x/es/components/dialog-v2/src/dialog-v2';
export declare const drawerV2Props: {
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
export type DrawerV2Props = ExtractPropTypes<typeof drawerV2Props>;
export declare const drawerV2Emits: {};
export type DrawerV2Emits = typeof drawerV2Emits;
