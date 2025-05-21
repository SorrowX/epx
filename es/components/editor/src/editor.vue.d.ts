import type { EditorOptions } from '@tiptap/core';
import type { EnterValues, ISetImageOptions, ISetVideOptions, InsertContentOptions, MentionOption } from './types';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<{
        prepend(): any;
        append(): any;
        header(): any;
        content(props: {
            items: MentionOption[];
        }): any;
        label(props: {
            item: MentionOption;
            index: number;
        }): any;
        footer(): any;
        'character-count'(props: {
            count: number;
        }): any;
    }> & {
        prepend(): any;
        append(): any;
        header(): any;
        content(props: {
            items: MentionOption[];
        }): any;
        label(props: {
            item: MentionOption;
            index: number;
        }): any;
        footer(): any;
        'character-count'(props: {
            count: number;
        }): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly modelValue: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly maxlength: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
    readonly options: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => MentionOption[] | ((options: {
        query: string;
    }) => Promise<MentionOption[]>)) | (() => MentionOption[] | ((options: {
        query: string;
    }) => Promise<MentionOption[]>)) | (((new (...args: any[]) => MentionOption[] | ((options: {
        query: string;
    }) => Promise<MentionOption[]>)) | (() => MentionOption[] | ((options: {
        query: string;
    }) => Promise<MentionOption[]>))) | null)[], unknown, unknown, () => never[], boolean>;
    readonly prefix: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string) | (() => string) | (((new (...args: any[]) => string) | (() => string)) | null)[], unknown, unknown, "@", boolean>;
    readonly extensions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => any[]) | (() => any[]) | (((new (...args: any[]) => any[]) | (() => any[])) | null)[], unknown, unknown, () => never[], boolean>;
    readonly placeholder: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly disableEnterEmit: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly border: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly editorOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<EditorOptions>) | (() => Partial<EditorOptions>) | (((new (...args: any[]) => Partial<EditorOptions>) | (() => Partial<EditorOptions>)) | null)[], unknown, unknown, () => {}, boolean>;
    readonly resize: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
}>, {
    editor: any;
    getHtml: () => any;
    getText: () => any;
    resetHtml: (html: string) => void;
    insertHtml: (html: string, options?: InsertContentOptions) => void;
    setImage: (options: ISetImageOptions) => void;
    setVideo: (options: ISetVideOptions) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string) => void;
    enter: (values: EnterValues) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly maxlength: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
    readonly options: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => MentionOption[] | ((options: {
        query: string;
    }) => Promise<MentionOption[]>)) | (() => MentionOption[] | ((options: {
        query: string;
    }) => Promise<MentionOption[]>)) | (((new (...args: any[]) => MentionOption[] | ((options: {
        query: string;
    }) => Promise<MentionOption[]>)) | (() => MentionOption[] | ((options: {
        query: string;
    }) => Promise<MentionOption[]>))) | null)[], unknown, unknown, () => never[], boolean>;
    readonly prefix: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string) | (() => string) | (((new (...args: any[]) => string) | (() => string)) | null)[], unknown, unknown, "@", boolean>;
    readonly extensions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => any[]) | (() => any[]) | (((new (...args: any[]) => any[]) | (() => any[])) | null)[], unknown, unknown, () => never[], boolean>;
    readonly placeholder: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly disableEnterEmit: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly border: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly editorOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<EditorOptions>) | (() => Partial<EditorOptions>) | (((new (...args: any[]) => Partial<EditorOptions>) | (() => Partial<EditorOptions>)) | null)[], unknown, unknown, () => {}, boolean>;
    readonly resize: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
}>> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onEnter?: ((values: EnterValues) => any) | undefined;
}>, {
    readonly resize: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly options: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => MentionOption[] | ((options: {
        query: string;
    }) => Promise<MentionOption[]>)) | (() => MentionOption[] | ((options: {
        query: string;
    }) => Promise<MentionOption[]>)) | (((new (...args: any[]) => MentionOption[] | ((options: {
        query: string;
    }) => Promise<MentionOption[]>)) | (() => MentionOption[] | ((options: {
        query: string;
    }) => Promise<MentionOption[]>))) | null)[], unknown, unknown>;
    readonly disabled: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly border: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly modelValue: string;
    readonly maxlength: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    readonly prefix: string;
    readonly extensions: any[];
    readonly disableEnterEmit: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly editorOptions: Partial<EditorOptions>;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
