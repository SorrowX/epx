export type SubmitFunction<T> = (onSubmit?: (values: any) => Promise<T> | void) => Promise<T>;
export type FormSubmit<T> = (onSubmit?: (values: any) => Promise<T> | void, scrollIntoView?: boolean) => Promise<T>;
export declare const JsonSchema: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    iFormProps: {
        type: ObjectConstructor;
        default: () => {};
    };
    components: {
        type: ObjectConstructor;
    };
    scope: {
        type: ObjectConstructor;
    };
    schema: {
        type: ObjectConstructor;
    };
    forceCreateForm: {
        type: BooleanConstructor;
        default: boolean;
    };
    iSchemaFieldVueFactoryOptions: {
        type: ObjectConstructor;
        default: () => {};
    };
}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    iFormProps: {
        type: ObjectConstructor;
        default: () => {};
    };
    components: {
        type: ObjectConstructor;
    };
    scope: {
        type: ObjectConstructor;
    };
    schema: {
        type: ObjectConstructor;
    };
    forceCreateForm: {
        type: BooleanConstructor;
        default: boolean;
    };
    iSchemaFieldVueFactoryOptions: {
        type: ObjectConstructor;
        default: () => {};
    };
}>> & Readonly<{}>, {
    iFormProps: Record<string, any>;
    forceCreateForm: boolean;
    iSchemaFieldVueFactoryOptions: Record<string, any>;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default JsonSchema;
