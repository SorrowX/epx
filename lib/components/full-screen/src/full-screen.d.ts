import type { ExtractPropTypes } from 'vue';
export type FullScreenType = 'window' | 'browser';
export declare const fullScreenProps: {
    readonly tag: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string) | (() => string) | (((new (...args: any[]) => string) | (() => string)) | null)[], unknown, unknown, "div", boolean>;
    readonly type: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string) | (() => string) | (((new (...args: any[]) => string) | (() => string)) | null)[], "window" | "browser", unknown, "window", boolean>;
};
export type FullScreenProps = ExtractPropTypes<typeof fullScreenProps>;
export declare const fullScreenEmits: {};
export type FullScreenEmits = typeof fullScreenEmits;
