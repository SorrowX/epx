declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        trigger?(_: {}): any;
        top?(_: {}): any;
        left?(_: {}): any;
        header?(_: {}): any;
        title?(_: {
            selectList: any;
            closeDialog: () => void;
        }): any;
        label?(_: {
            item: any;
            index: any;
            close: () => void;
        }): any;
        right?(_: {}): any;
        footer?(_: {}): any;
    };
    refs: {
        tableWrapperRef: HTMLDivElement;
        tableRef: import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            httpRequest: {
                readonly type: import("vue").PropType<(params: import("element-plus-x/es/components/table-page").IHttpRequestParams) => void>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            columns: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus-x/es/components/table-page").ColumnProps[]) | (() => import("element-plus-x/es/components/table-page").ColumnProps[]) | (((new (...args: any[]) => import("element-plus-x/es/components/table-page").ColumnProps[]) | (() => import("element-plus-x/es/components/table-page").ColumnProps[])) | null)[], unknown, unknown, () => never[], boolean>;
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
            }) | (() => import("element-plus-x/es/components/table-page").PaginationProp) | (((new (...args: any[]) => {
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
            }) | (() => import("element-plus-x/es/components/table-page").PaginationProp)) | null)[], unknown, unknown, () => {}, boolean>;
            config: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus-x/es/components/table-page").Config) | (() => import("element-plus-x/es/components/table-page").Config) | (((new (...args: any[]) => import("element-plus-x/es/components/table-page").Config) | (() => import("element-plus-x/es/components/table-page").Config)) | null)[], unknown, unknown, () => {}, boolean>;
            firstInvoke: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            boundaryValue: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 680, boolean>;
            showPagination: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        }>> & Readonly<{}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
            pagination: import("element-plus-x/es/components/table-page").PaginationProp;
            config: import("element-plus-x/es/components/table-page").Config;
            columns: import("element-plus-x/es/components/table-page").ColumnProps[];
            firstInvoke: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            boundaryValue: number;
            showPagination: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            httpRequest: {
                readonly type: import("vue").PropType<(params: import("element-plus-x/es/components/table-page").IHttpRequestParams) => void>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            columns: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus-x/es/components/table-page").ColumnProps[]) | (() => import("element-plus-x/es/components/table-page").ColumnProps[]) | (((new (...args: any[]) => import("element-plus-x/es/components/table-page").ColumnProps[]) | (() => import("element-plus-x/es/components/table-page").ColumnProps[])) | null)[], unknown, unknown, () => never[], boolean>;
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
            }) | (() => import("element-plus-x/es/components/table-page").PaginationProp) | (((new (...args: any[]) => {
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
            }) | (() => import("element-plus-x/es/components/table-page").PaginationProp)) | null)[], unknown, unknown, () => {}, boolean>;
            config: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus-x/es/components/table-page").Config) | (() => import("element-plus-x/es/components/table-page").Config) | (((new (...args: any[]) => import("element-plus-x/es/components/table-page").Config) | (() => import("element-plus-x/es/components/table-page").Config)) | null)[], unknown, unknown, () => {}, boolean>;
            firstInvoke: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            boundaryValue: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 680, boolean>;
            showPagination: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        }>> & Readonly<{}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, {}, {}, {}, {
            pagination: import("element-plus-x/es/components/table-page").PaginationProp;
            config: import("element-plus-x/es/components/table-page").Config;
            columns: import("element-plus-x/es/components/table-page").ColumnProps[];
            firstInvoke: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            boundaryValue: number;
            showPagination: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        }> | null;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly rowKey: {
        readonly type: import("vue").PropType<string>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => any[]) | (() => any[]) | (((new (...args: any[]) => any[]) | (() => any[])) | null)[], unknown, unknown, () => never[], boolean>;
    readonly title: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly width: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 900, boolean>;
    readonly height: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 500, boolean>;
    readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "radio" | "checkbox", unknown, "checkbox", boolean>;
    readonly selectable: {
        readonly type: import("vue").PropType<(row: any, index: number) => boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly columns: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus-x/es/components/table-page").ColumnProps[]) | (() => import("element-plus-x/es/components/table-page").ColumnProps[]) | (((new (...args: any[]) => import("element-plus-x/es/components/table-page").ColumnProps[]) | (() => import("element-plus-x/es/components/table-page").ColumnProps[])) | null)[], unknown, unknown, () => never[], boolean>;
    readonly pagination: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Record<string, any>) | (() => Record<string, any>) | (((new (...args: any[]) => Record<string, any>) | (() => Record<string, any>)) | null)[], unknown, unknown, () => {}, boolean>;
    readonly config: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Record<string, any>) | (() => Record<string, any>) | (((new (...args: any[]) => Record<string, any>) | (() => Record<string, any>)) | null)[], unknown, unknown, () => {
        id: string;
        label: string;
    }, boolean>;
    readonly headerCellStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Record<string, any>) | (() => Record<string, any>) | (((new (...args: any[]) => Record<string, any>) | (() => Record<string, any>)) | null)[], unknown, unknown, () => {
        background: string;
    }, boolean>;
    readonly hiddenRight: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly boundaryValue: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 50, boolean>;
    readonly dynamicSizeListProps: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Record<string, any>) | (() => Record<string, any>) | (((new (...args: any[]) => Record<string, any>) | (() => Record<string, any>)) | null)[], unknown, unknown, () => {}, boolean>;
    readonly unshift: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly selectedFieldTitle: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly cancelText: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly sureText: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onSure: {
        readonly type: import("vue").PropType<(values: any[], options: any) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}>, {
    openDialog: () => void;
    closeDialog: () => void;
    getTable: (...args: any) => any;
    request: (...args: any) => any;
    updateStatus: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (values: any[]) => void;
    cancel: () => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly rowKey: {
        readonly type: import("vue").PropType<string>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => any[]) | (() => any[]) | (((new (...args: any[]) => any[]) | (() => any[])) | null)[], unknown, unknown, () => never[], boolean>;
    readonly title: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly width: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 900, boolean>;
    readonly height: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 500, boolean>;
    readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "radio" | "checkbox", unknown, "checkbox", boolean>;
    readonly selectable: {
        readonly type: import("vue").PropType<(row: any, index: number) => boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly columns: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus-x/es/components/table-page").ColumnProps[]) | (() => import("element-plus-x/es/components/table-page").ColumnProps[]) | (((new (...args: any[]) => import("element-plus-x/es/components/table-page").ColumnProps[]) | (() => import("element-plus-x/es/components/table-page").ColumnProps[])) | null)[], unknown, unknown, () => never[], boolean>;
    readonly pagination: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Record<string, any>) | (() => Record<string, any>) | (((new (...args: any[]) => Record<string, any>) | (() => Record<string, any>)) | null)[], unknown, unknown, () => {}, boolean>;
    readonly config: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Record<string, any>) | (() => Record<string, any>) | (((new (...args: any[]) => Record<string, any>) | (() => Record<string, any>)) | null)[], unknown, unknown, () => {
        id: string;
        label: string;
    }, boolean>;
    readonly headerCellStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Record<string, any>) | (() => Record<string, any>) | (((new (...args: any[]) => Record<string, any>) | (() => Record<string, any>)) | null)[], unknown, unknown, () => {
        background: string;
    }, boolean>;
    readonly hiddenRight: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly boundaryValue: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 50, boolean>;
    readonly dynamicSizeListProps: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Record<string, any>) | (() => Record<string, any>) | (((new (...args: any[]) => Record<string, any>) | (() => Record<string, any>)) | null)[], unknown, unknown, () => {}, boolean>;
    readonly unshift: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly selectedFieldTitle: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly cancelText: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly sureText: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onSure: {
        readonly type: import("vue").PropType<(values: any[], options: any) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}>> & Readonly<{
    onCancel?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((values: any[]) => any) | undefined;
}>, {
    readonly type: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "radio" | "checkbox", unknown>;
    readonly title: string;
    readonly unshift: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly pagination: Record<string, any>;
    readonly config: Record<string, any>;
    readonly columns: import("element-plus-x/es/components/table-page").ColumnProps[];
    readonly width: number;
    readonly height: number;
    readonly headerCellStyle: Record<string, any>;
    readonly modelValue: any[];
    readonly boundaryValue: number;
    readonly hiddenRight: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly dynamicSizeListProps: Record<string, any>;
    readonly selectedFieldTitle: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
