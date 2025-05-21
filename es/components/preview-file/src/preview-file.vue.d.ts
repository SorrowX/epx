import type { FileItem } from './preview-file';
import type { UploadUserFile } from 'element-plus';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {
            data: UploadUserFile;
            meta: import("./preview-file").FileMeta;
        }): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly fileList: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => UploadUserFile[]) | (() => UploadUserFile[]) | (((new (...args: any[]) => UploadUserFile[]) | (() => UploadUserFile[])) | null)[], unknown, unknown, () => [], boolean>;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (item: FileItem) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly fileList: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => UploadUserFile[]) | (() => UploadUserFile[]) | (((new (...args: any[]) => UploadUserFile[]) | (() => UploadUserFile[])) | null)[], unknown, unknown, () => [], boolean>;
}>> & Readonly<{
    onClick?: ((item: FileItem) => any) | undefined;
}>, {
    readonly fileList: UploadUserFile[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
