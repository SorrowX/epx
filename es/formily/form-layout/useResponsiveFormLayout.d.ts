import type { Ref } from 'vue';
interface IProps {
    breakpoints?: number[];
    layout?: 'vertical' | 'horizontal' | 'inline' | ('vertical' | 'horizontal' | 'inline')[];
    labelCol?: number | number[];
    wrapperCol?: number | number[];
    labelAlign?: 'right' | 'left' | ('right' | 'left')[];
    wrapperAlign?: 'right' | 'left' | ('right' | 'left')[];
    [props: string]: any;
}
interface IUseResponsiveFormLayout {
    (props: IProps, root: Ref<Element>): {
        props: Ref<IProps>;
    };
}
export declare const useResponsiveFormLayout: IUseResponsiveFormLayout;
export {};
