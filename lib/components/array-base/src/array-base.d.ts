import { keyMapType } from './hooks';
import type { FormContext, FormItemContext } from 'element-plus';
export interface IArrayBaseProps {
    disabled?: boolean;
    keyMap?: keyMapType;
}
export type IFieldContext = FormItemContext | undefined;
export type IFormContext = FormContext | undefined;
export interface IArrayBaseContext {
    field: IFieldContext;
    form: IFormContext;
    keyMap?: keyMapType;
}
export declare const ArrayBase: import("vue").DefineComponent<IArrayBaseProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<IArrayBaseProps> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
