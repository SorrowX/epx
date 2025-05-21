import type { UploadUserFile } from 'element-plus';
import type { Component, ExtractPropTypes } from 'vue';
export interface FileMeta {
    name: string;
    fileName: string;
    fileNameSuffix: string;
    size: string;
    type: string;
    icon: Component;
    iconColor: string;
    iconSize: number;
}
export interface FileItem {
    data: UploadUserFile;
    meta: FileMeta;
}
export declare const previewFileProps: {
    readonly fileList: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => UploadUserFile[]) | (() => UploadUserFile[]) | (((new (...args: any[]) => UploadUserFile[]) | (() => UploadUserFile[])) | null)[], unknown, unknown, () => [], boolean>;
};
export type PreviewFileProps = ExtractPropTypes<typeof previewFileProps>;
export declare const previewFileEmits: {
    click: (item: FileItem) => boolean;
};
export type PreviewFileEmits = typeof previewFileEmits;
