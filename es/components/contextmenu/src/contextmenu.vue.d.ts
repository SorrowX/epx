import type { DropdownValue } from 'element-plus-x/es/components/dropdown-v2/src/types';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
        menu?(_: {
            data: any;
        }): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly data: {
        readonly type: import("vue").PropType<any>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly options: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus-x/es/components/dropdown-v2/src/types").DropdownOption[]) | (() => import("element-plus-x/es/components/dropdown-v2/src/types").DropdownOption[]) | (((new (...args: any[]) => import("element-plus-x/es/components/dropdown-v2/src/types").DropdownOption[]) | (() => import("element-plus-x/es/components/dropdown-v2/src/types").DropdownOption[])) | null)[], unknown, unknown, () => import("element-plus-x/es/components/dropdown-v2/src/types").DropdownOption[], boolean>;
}>, {
    hide: () => boolean;
    handleContextMenu: (e: any) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (value: DropdownValue, valuePath: DropdownValue[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly data: {
        readonly type: import("vue").PropType<any>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly options: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus-x/es/components/dropdown-v2/src/types").DropdownOption[]) | (() => import("element-plus-x/es/components/dropdown-v2/src/types").DropdownOption[]) | (((new (...args: any[]) => import("element-plus-x/es/components/dropdown-v2/src/types").DropdownOption[]) | (() => import("element-plus-x/es/components/dropdown-v2/src/types").DropdownOption[])) | null)[], unknown, unknown, () => import("element-plus-x/es/components/dropdown-v2/src/types").DropdownOption[], boolean>;
}>> & Readonly<{
    onChange?: ((value: DropdownValue, valuePath: DropdownValue[]) => any) | undefined;
}>, {
    readonly options: import("element-plus-x/es/components/dropdown-v2/src/types").DropdownOption[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
