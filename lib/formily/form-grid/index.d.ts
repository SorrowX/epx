import { Grid, IGridOptions } from '@formily/grid';
import type { CSSProperties, Ref, SetupContext } from 'vue';
export interface IFormGridProps extends IGridOptions {
    grid?: Grid<HTMLElement>;
    prefixCls?: string;
    className?: string;
    style?: CSSProperties;
    [prop: string]: any;
}
interface GridColumnProps {
    gridSpan: number;
}
export declare const createFormGrid: (props: IFormGridProps) => Grid<HTMLElement>;
export declare const useFormGrid: () => Ref<Grid<HTMLElement>>;
/**
 * @deprecated
 */
export declare const useGridColumn: (gridSpan?: number) => number;
export declare const FormGrid: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{
        [x: string]: any;
        grid?: Grid<HTMLElement> | undefined;
        prefixCls?: string | undefined;
        className?: string | undefined;
        style?: CSSProperties | undefined;
        maxRows?: number | undefined;
        maxColumns?: (number | number[]) | undefined;
        minColumns?: (number | number[]) | undefined;
        maxWidth?: (number | number[]) | undefined;
        minWidth?: (number | number[]) | undefined;
        breakpoints?: number[] | undefined;
        columnGap?: number | undefined;
        rowGap?: number | undefined;
        colWrap?: boolean | undefined;
        strictAutoFit?: boolean | undefined;
        shouldVisible?: ((node: import("@formily/grid").GridNode, grid: Grid<HTMLElement>) => boolean) | undefined;
        onDigest?: ((grid: Grid<HTMLElement>) => void) | undefined;
        onInitialized?: ((grid: Grid<HTMLElement>) => void) | undefined;
    }> & Readonly<{}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        colWrap: boolean;
        strictAutoFit: boolean;
        shouldVisible: ((node: import("@formily/grid").GridNode, grid: Grid<HTMLElement>) => boolean) | undefined;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        [x: string]: any;
        grid?: Grid<HTMLElement> | undefined;
        prefixCls?: string | undefined;
        className?: string | undefined;
        style?: CSSProperties | undefined;
        maxRows?: number | undefined;
        maxColumns?: (number | number[]) | undefined;
        minColumns?: (number | number[]) | undefined;
        maxWidth?: (number | number[]) | undefined;
        minWidth?: (number | number[]) | undefined;
        breakpoints?: number[] | undefined;
        columnGap?: number | undefined;
        rowGap?: number | undefined;
        colWrap?: boolean | undefined;
        strictAutoFit?: boolean | undefined;
        shouldVisible?: ((node: import("@formily/grid").GridNode, grid: Grid<HTMLElement>) => boolean) | undefined;
        onDigest?: ((grid: Grid<HTMLElement>) => void) | undefined;
        onInitialized?: ((grid: Grid<HTMLElement>) => void) | undefined;
    }> & Readonly<{}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, {}, {}, {}, {
        colWrap: boolean;
        strictAutoFit: boolean;
        shouldVisible: ((node: import("@formily/grid").GridNode, grid: Grid<HTMLElement>) => boolean) | undefined;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    [x: string]: any;
    grid?: Grid<HTMLElement> | undefined;
    prefixCls?: string | undefined;
    className?: string | undefined;
    style?: CSSProperties | undefined;
    maxRows?: number | undefined;
    maxColumns?: (number | number[]) | undefined;
    minColumns?: (number | number[]) | undefined;
    maxWidth?: (number | number[]) | undefined;
    minWidth?: (number | number[]) | undefined;
    breakpoints?: number[] | undefined;
    columnGap?: number | undefined;
    rowGap?: number | undefined;
    colWrap?: boolean | undefined;
    strictAutoFit?: boolean | undefined;
    shouldVisible?: ((node: import("@formily/grid").GridNode, grid: Grid<HTMLElement>) => boolean) | undefined;
    onDigest?: ((grid: Grid<HTMLElement>) => void) | undefined;
    onInitialized?: ((grid: Grid<HTMLElement>) => void) | undefined;
}> & Readonly<{}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    colWrap: boolean;
    strictAutoFit: boolean;
    shouldVisible: ((node: import("@formily/grid").GridNode, grid: Grid<HTMLElement>) => boolean) | undefined;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    GridColumn: {
        name: string;
        props: {
            gridSpan: {
                type: NumberConstructor;
                default: number;
            };
        };
        setup(props: GridColumnProps, { slots }: SetupContext): () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>;
    };
    useGridSpan: (gridSpan: number) => number;
    useFormGrid: () => Ref<Grid<HTMLElement>>;
    createFormGrid: (props: IFormGridProps) => Grid<HTMLElement>;
};
export default FormGrid;
