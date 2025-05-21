import type { ExtractPropTypes } from 'vue';
export declare const splitProps: {
    readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => number) | (() => number) | (((new (...args: any[]) => number) | (() => number)) | null)[], unknown, unknown, 0.5, boolean>;
    readonly vertical: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean) | (((new (...args: any[]) => boolean) | (() => boolean)) | null)[], unknown, unknown, false, boolean>;
    readonly min: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => number) | (() => number) | (((new (...args: any[]) => number) | (() => number)) | null)[], unknown, unknown, 0.1, boolean>;
    readonly max: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => number) | (() => number) | (((new (...args: any[]) => number) | (() => number)) | null)[], unknown, unknown, 0.9, boolean>;
};
export type SplitProps = ExtractPropTypes<typeof splitProps>;
export declare const splitEmits: {
    "update:modelValue": (value: number) => number;
    change: (value: number) => number;
};
export type SplitEmits = typeof splitEmits;
