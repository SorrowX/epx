import type { AxiosInstance, AxiosRequestConfig } from 'axios';
export type DownloadOptions = Partial<AxiosRequestConfig> & {
    url: string;
    fileName: string;
    instance?: AxiosInstance;
};
export declare const download: (options: DownloadOptions) => Promise<void>;
export declare function downloadBlobFile(blob: Blob, fileName: string): void;
