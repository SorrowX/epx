import { Form as FormType, IFormFeedback } from '@formily/core';
import { FormLayoutProps } from '../form-layout';
import type { Component, VNode } from 'vue';
export interface FormProps extends FormLayoutProps {
    form?: FormType;
    component?: Component;
    previewTextPlaceholder: string | (() => VNode);
    onAutoSubmit?: (values: any) => any;
    onAutoSubmitFailed?: (feedbacks: IFormFeedback[]) => void;
}
export declare const Form: import("vue").DefineComponent<FormProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<FormProps> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default Form;
