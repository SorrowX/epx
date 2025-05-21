declare const ElEditable: {
    name: string;
    inheritAttrs: boolean;
    props: {
        readonly modelValue: {
            readonly type: import("vue").PropType<any>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly trigger: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "click" | "dblclick" | "icon", unknown, "dblclick", boolean>;
        readonly icon: import("element-plus/es/utils").EpPropFinalized<null, unknown, unknown, import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, boolean>;
        readonly defaultEditState: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly focus: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    };
    emits: {
        change: (editable: boolean, options: any) => boolean;
    };
    setup(props: any, { slots, attrs, emit, expose }: any): () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
};
export default ElEditable;
