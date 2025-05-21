import type { ExtractPropTypes } from 'vue';
import type { DropdownOption, DropdownValue } from 'element-plus-x/es/components/dropdown-v2/src/types';
export declare const contextmenuProps: {
    readonly data: {
        readonly type: import("vue").PropType<any>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly options: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => DropdownOption[]) | (() => DropdownOption[]) | (((new (...args: any[]) => DropdownOption[]) | (() => DropdownOption[])) | null)[], unknown, unknown, () => DropdownOption[], boolean>;
};
export type ContextmenuProps = ExtractPropTypes<typeof contextmenuProps>;
export declare const contextmenuEmits: {
    change: (value: DropdownValue, valuePath: DropdownValue[]) => boolean;
};
export type ContextmenuEmits = typeof contextmenuEmits;
