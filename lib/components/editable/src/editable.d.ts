import type { ExtractPropTypes } from 'vue';
export type ValueType = any;
export declare const editableProps: {
    readonly modelValue: {
        readonly type: import("vue").PropType<any>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly trigger: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "click" | "dblclick" | "icon", unknown, "dblclick", boolean>;
    readonly icon: import("element-plus/es/utils").EpPropFinalized<null, unknown, unknown, import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, boolean>;
    readonly defaultEditState: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly focus: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
};
export type EditableProps = ExtractPropTypes<typeof editableProps>;
export declare const editableEmits: {
    change: (editable: boolean, options: any) => boolean;
};
export type EditableEmits = typeof editableEmits;
