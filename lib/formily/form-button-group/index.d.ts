import type { SpaceProps } from 'element-plus';
export type FormButtonGroupProps = Omit<SpaceProps, 'size'> & {
    align?: 'left' | 'right' | 'center';
    gutter?: number;
    alignFormItem: boolean;
};
export declare const FormButtonGroup: import("vue").DefineComponent<FormButtonGroupProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<FormButtonGroupProps> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default FormButtonGroup;
