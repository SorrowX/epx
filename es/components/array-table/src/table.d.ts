import type { PaginationProps } from 'element-plus';
export type PaginationType = Pick<PaginationProps, keyof PaginationProps> | undefined;
export type TableDataType = any[];
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    pagination: {
        type: null;
    };
}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    pagination: {
        type: null;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
