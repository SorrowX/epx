import type { Component } from 'vue';
export declare const EXCEL_TYPE = "excel";
export declare const IMAGE_TYPE = "image";
export declare const MARKDOWN_TYPE = "markdown";
export declare const PDF_TYPE = "pdf";
export declare const PPT_TYPE = "ppt";
export declare const WORD_TYPE = "word";
export declare const ZIP_TYPE = "zip";
export declare const VIDEO_TYPE = "video";
export declare const AUDIO_TYPE = "audio";
export declare const UNKNOWN_TYPE = "unknown";
export declare const PRESET_FILE_ICONS: {
    ext: string[];
    iconColor: string;
    iconSize: number;
    type: string;
    icon: Component;
}[];
export declare const parseSize: (size?: number) => string;
export declare const parseFileName: (str?: string) => {
    fileName: string;
    fileNameSuffix: string;
};
export declare const matchExt: (suffix: string, ext: string[]) => boolean;
export declare const getIconState: (fileNameSuffix: string) => {
    type: string;
    icon: Component;
    iconColor: string;
    iconSize: number;
};
