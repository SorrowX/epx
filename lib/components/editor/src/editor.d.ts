import type { EnterValues, MentionOption } from './types';
import type { EditorOptions } from '@tiptap/core';
import type { ExtractPropTypes } from 'vue';
export declare const editorProps: {
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
};
export type EditorProps = ExtractPropTypes<typeof editorProps>;
export declare const editorEmits: {
    enter: (values: EnterValues) => boolean;
    "update:modelValue": (value: string) => boolean;
};
export type EditorEmits = typeof editorEmits;
