import type { SlotTypes } from '../__builtins__/shared';
import type { CheckboxGroupProps as ElCheckboxGroupProps, CheckboxProps as ElCheckboxProps } from 'element-plus';
type IOptionData = {
    value: ElCheckboxProps['value'];
    label: SlotTypes;
    disabled?: boolean;
    border?: boolean;
};
type IOption = IOptionData | string;
export type CheckboxGroupProps = ElCheckboxGroupProps & {
    options?: IOption[];
    optionType: 'default' | 'button';
};
export type CheckboxProps = ElCheckboxProps & {
    optionType: 'default' | 'button';
};
export declare const Checkbox: any;
export default Checkbox;
