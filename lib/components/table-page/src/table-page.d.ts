import type { ExtractPropTypes, PropType } from 'vue';
import type { ColumnProps, Config, IHttpRequestParams, PaginationProp } from './types';
export declare const tablePageProps: {
    readonly httpRequest: {
        readonly type: PropType<(params: IHttpRequestParams) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly columns: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => ColumnProps[]) | (() => ColumnProps[]) | (((new (...args: any[]) => ColumnProps[]) | (() => ColumnProps[])) | null)[], unknown, unknown, () => never[], boolean>;
    readonly pagination: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => {
        readonly teleported: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly small: boolean;
        readonly pageSizes: number[];
        readonly pagerCount: number;
        readonly layout: string;
        readonly popperClass: string;
        readonly prevText: string;
        readonly nextText: string;
        readonly background: boolean;
        readonly disabled: boolean;
        readonly hideOnSinglePage: boolean;
    } & {
        readonly size?: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never> | undefined;
        readonly total?: number | undefined;
        readonly pageSize?: number | undefined;
        readonly defaultPageSize?: number | undefined;
        readonly pageCount?: number | undefined;
        readonly currentPage?: number | undefined;
        readonly defaultCurrentPage?: number | undefined;
        readonly prevIcon?: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component) | ((new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component))[], unknown, unknown> | undefined;
        readonly nextIcon?: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component) | ((new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component))[], unknown, unknown> | undefined;
        readonly appendSizeTo?: string | undefined;
    } & {
        defaultPageSize?: number;
        showRecord?: boolean;
        showTotal?: boolean;
    }) | (() => PaginationProp) | (((new (...args: any[]) => {
        readonly teleported: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly small: boolean;
        readonly pageSizes: number[];
        readonly pagerCount: number;
        readonly layout: string;
        readonly popperClass: string;
        readonly prevText: string;
        readonly nextText: string;
        readonly background: boolean;
        readonly disabled: boolean;
        readonly hideOnSinglePage: boolean;
    } & {
        readonly size?: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never> | undefined;
        readonly total?: number | undefined;
        readonly pageSize?: number | undefined;
        readonly defaultPageSize?: number | undefined;
        readonly pageCount?: number | undefined;
        readonly currentPage?: number | undefined;
        readonly defaultCurrentPage?: number | undefined;
        readonly prevIcon?: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component) | ((new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component))[], unknown, unknown> | undefined;
        readonly nextIcon?: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component) | ((new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component))[], unknown, unknown> | undefined;
        readonly appendSizeTo?: string | undefined;
    } & {
        defaultPageSize?: number;
        showRecord?: boolean;
        showTotal?: boolean;
    }) | (() => PaginationProp)) | null)[], unknown, unknown, () => {}, boolean>;
    readonly config: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Config) | (() => Config) | (((new (...args: any[]) => Config) | (() => Config)) | null)[], unknown, unknown, () => {}, boolean>;
    readonly firstInvoke: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly boundaryValue: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 680, boolean>;
    readonly showPagination: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
};
export type TablePageProps = ExtractPropTypes<typeof tablePageProps>;
export declare const tablePageEmits: {};
export type TablePageEmits = typeof tablePageEmits;
