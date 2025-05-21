declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    httpRequest: {
        readonly type: import("vue").PropType<(params: import("./types").IHttpRequestParams) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    columns: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./types").ColumnProps[]) | (() => import("./types").ColumnProps[]) | (((new (...args: any[]) => import("./types").ColumnProps[]) | (() => import("./types").ColumnProps[])) | null)[], unknown, unknown, () => never[], boolean>;
    pagination: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => {
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
    }) | (() => import("./types").PaginationProp) | (((new (...args: any[]) => {
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
    }) | (() => import("./types").PaginationProp)) | null)[], unknown, unknown, () => {}, boolean>;
    config: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./types").Config) | (() => import("./types").Config) | (((new (...args: any[]) => import("./types").Config) | (() => import("./types").Config)) | null)[], unknown, unknown, () => {}, boolean>;
    firstInvoke: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    boundaryValue: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 680, boolean>;
    showPagination: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    httpRequest: {
        readonly type: import("vue").PropType<(params: import("./types").IHttpRequestParams) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    columns: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./types").ColumnProps[]) | (() => import("./types").ColumnProps[]) | (((new (...args: any[]) => import("./types").ColumnProps[]) | (() => import("./types").ColumnProps[])) | null)[], unknown, unknown, () => never[], boolean>;
    pagination: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => {
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
    }) | (() => import("./types").PaginationProp) | (((new (...args: any[]) => {
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
    }) | (() => import("./types").PaginationProp)) | null)[], unknown, unknown, () => {}, boolean>;
    config: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./types").Config) | (() => import("./types").Config) | (((new (...args: any[]) => import("./types").Config) | (() => import("./types").Config)) | null)[], unknown, unknown, () => {}, boolean>;
    firstInvoke: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    boundaryValue: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 680, boolean>;
    showPagination: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}>> & Readonly<{}>, {
    pagination: import("./types").PaginationProp;
    config: import("./types").Config;
    columns: import("./types").ColumnProps[];
    firstInvoke: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    boundaryValue: number;
    showPagination: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
