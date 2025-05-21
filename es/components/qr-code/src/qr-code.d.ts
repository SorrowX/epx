import QRCode from 'qrcode';
import type { ExtractPropTypes, MaybeRefOrGetter } from 'vue';
export interface ColorType {
    light: string;
    dark: string;
}
export interface IconConfig {
    radius: number;
    size: number;
    backgroundColor: string;
    padding: number;
}
export declare const getDefaultIconConfig: () => {
    radius: number;
    size: number;
    backgroundColor: string;
    padding: number;
};
export declare const qrCodeProps: {
    readonly text: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string) | (() => string) | (((new (...args: any[]) => string) | (() => string)) | null)[], unknown, unknown, "", boolean>;
    readonly options: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => QRCode.QRCodeToDataURLOptionsJpegWebp | QRCode.QRCodeToDataURLOptionsOther) | (() => QRCode.QRCodeToDataURLOptions) | (((new (...args: any[]) => QRCode.QRCodeToDataURLOptionsJpegWebp | QRCode.QRCodeToDataURLOptionsOther) | (() => QRCode.QRCodeToDataURLOptions)) | null)[], unknown, unknown, () => {}, boolean>;
    readonly size: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number) | (((new (...args: any[]) => string | number) | (() => string | number)) | null)[], unknown, unknown, 120, boolean>;
    readonly margin: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number) | (((new (...args: any[]) => string | number) | (() => string | number)) | null)[], unknown, unknown, 2, boolean>;
    readonly color: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => MaybeRefOrGetter<string> & {}) | (() => MaybeRefOrGetter<string>) | (((new (...args: any[]) => MaybeRefOrGetter<string> & {}) | (() => MaybeRefOrGetter<string>)) | null)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly backgroundColor: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => MaybeRefOrGetter<string> & {}) | (() => MaybeRefOrGetter<string>) | (((new (...args: any[]) => MaybeRefOrGetter<string> & {}) | (() => MaybeRefOrGetter<string>)) | null)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly iconSrc: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly iconConfig: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => IconConfig) | (() => IconConfig) | (((new (...args: any[]) => IconConfig) | (() => IconConfig)) | null)[], unknown, unknown, () => {
        radius: number;
        size: number;
        backgroundColor: string;
        padding: number;
    }, boolean>;
};
export type QrCodeProps = ExtractPropTypes<typeof qrCodeProps>;
export declare const qrCodeEmits: {};
export type QrCodeEmits = typeof qrCodeEmits;
