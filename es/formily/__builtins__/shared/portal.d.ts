export interface IPortalProps {
    id?: string | symbol;
}
export declare const createPortalProvider: (id: string | symbol) => import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    id: {
        type: (StringConstructor | SymbolConstructor)[];
        default: string | symbol;
    };
}>, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: (StringConstructor | SymbolConstructor)[];
        default: string | symbol;
    };
}>> & Readonly<{}>, {
    id: string | symbol;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export declare function getPortalContext(id: string | symbol): any;
