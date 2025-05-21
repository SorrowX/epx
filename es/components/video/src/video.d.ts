import type { ExtractPropTypes } from 'vue';
export declare const videoProps: {
    readonly src: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly poster: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly duration: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | (((new (...args: any[]) => string | number) | (() => string | number)) | null)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onCoverLoad: {
        readonly type: import("vue").PropType<(event: any) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly readonly: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean) | (((new (...args: any[]) => boolean) | (() => boolean)) | null)[], unknown, unknown, false, boolean>;
};
export type VideoProps = ExtractPropTypes<typeof videoProps>;
export declare const videoEmits: {
    click: (paused: boolean, event: MouseEvent) => boolean;
};
export type VideoEmits = typeof videoEmits;
