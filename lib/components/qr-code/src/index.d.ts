import QRCode from 'qrcode';
import { IconConfig } from './qr-code';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly text: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string) | (() => string) | (((new (...args: any[]) => string) | (() => string)) | null)[], unknown, unknown, "", boolean>;
    readonly options: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => QRCode.QRCodeToDataURLOptionsJpegWebp | QRCode.QRCodeToDataURLOptionsOther) | (() => QRCode.QRCodeToDataURLOptions) | (((new (...args: any[]) => QRCode.QRCodeToDataURLOptionsJpegWebp | QRCode.QRCodeToDataURLOptionsOther) | (() => QRCode.QRCodeToDataURLOptions)) | null)[], unknown, unknown, () => {}, boolean>;
    readonly size: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number) | (((new (...args: any[]) => string | number) | (() => string | number)) | null)[], unknown, unknown, 120, boolean>;
    readonly margin: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number) | (((new (...args: any[]) => string | number) | (() => string | number)) | null)[], unknown, unknown, 2, boolean>;
    readonly color: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").MaybeRefOrGetter<string> & {}) | (() => import("vue").MaybeRefOrGetter<string>) | (((new (...args: any[]) => import("vue").MaybeRefOrGetter<string> & {}) | (() => import("vue").MaybeRefOrGetter<string>)) | null)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly backgroundColor: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").MaybeRefOrGetter<string> & {}) | (() => import("vue").MaybeRefOrGetter<string>) | (((new (...args: any[]) => import("vue").MaybeRefOrGetter<string> & {}) | (() => import("vue").MaybeRefOrGetter<string>)) | null)[], unknown, unknown>>;
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
}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly text: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string) | (() => string) | (((new (...args: any[]) => string) | (() => string)) | null)[], unknown, unknown, "", boolean>;
    readonly options: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => QRCode.QRCodeToDataURLOptionsJpegWebp | QRCode.QRCodeToDataURLOptionsOther) | (() => QRCode.QRCodeToDataURLOptions) | (((new (...args: any[]) => QRCode.QRCodeToDataURLOptionsJpegWebp | QRCode.QRCodeToDataURLOptionsOther) | (() => QRCode.QRCodeToDataURLOptions)) | null)[], unknown, unknown, () => {}, boolean>;
    readonly size: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number) | (((new (...args: any[]) => string | number) | (() => string | number)) | null)[], unknown, unknown, 120, boolean>;
    readonly margin: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number) | (((new (...args: any[]) => string | number) | (() => string | number)) | null)[], unknown, unknown, 2, boolean>;
    readonly color: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").MaybeRefOrGetter<string> & {}) | (() => import("vue").MaybeRefOrGetter<string>) | (((new (...args: any[]) => import("vue").MaybeRefOrGetter<string> & {}) | (() => import("vue").MaybeRefOrGetter<string>)) | null)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly backgroundColor: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").MaybeRefOrGetter<string> & {}) | (() => import("vue").MaybeRefOrGetter<string>) | (((new (...args: any[]) => import("vue").MaybeRefOrGetter<string> & {}) | (() => import("vue").MaybeRefOrGetter<string>)) | null)[], unknown, unknown>>;
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
}>> & Readonly<{}>, {
    readonly size: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | (((new (...args: any[]) => string | number) | (() => string | number)) | null)[], unknown, unknown>;
    readonly options: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => QRCode.QRCodeToDataURLOptionsJpegWebp | QRCode.QRCodeToDataURLOptionsOther) | (() => QRCode.QRCodeToDataURLOptions) | (((new (...args: any[]) => QRCode.QRCodeToDataURLOptionsJpegWebp | QRCode.QRCodeToDataURLOptionsOther) | (() => QRCode.QRCodeToDataURLOptions)) | null)[], unknown, unknown>;
    readonly text: string;
    readonly margin: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | (((new (...args: any[]) => string | number) | (() => string | number)) | null)[], unknown, unknown>;
    readonly iconConfig: IconConfig;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
