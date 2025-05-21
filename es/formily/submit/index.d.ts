import { IFormFeedback } from '@formily/core';
import type { ButtonProps as ElButtonProps } from 'element-plus';
export interface ISubmitProps extends ElButtonProps {
    onClick?: (e: MouseEvent) => any;
    onSubmit?: (values: any) => any;
    onSubmitSuccess?: (payload: any) => void;
    onSubmitFailed?: (feedbacks: IFormFeedback[]) => void;
}
export declare const Submit: import("vue").DefineComponent<ISubmitProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ISubmitProps> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default Submit;
