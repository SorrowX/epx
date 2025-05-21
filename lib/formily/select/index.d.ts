import { ElOption, ElSelect } from 'element-plus';
type IOption = Pick<typeof ElOption, 'value' | 'label' | 'disabled'> | string;
type IOptions = IOption[];
export type SelectProps = typeof ElSelect & {
    options?: IOptions;
};
export declare const Select: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    options: {
        type: () => IOptions;
        default: () => never[];
    };
}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    options: {
        type: () => IOptions;
        default: () => never[];
    };
}>> & Readonly<{}>, {
    options: IOptions;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default Select;
