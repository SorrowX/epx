import type { ExtractPropTypes } from 'vue';
import type { DropdownOption, DropdownValue } from './types';
import type { TriggerProps } from 'element-plus-x/es/components/dialog-v2/src/dialog-v2';
export declare const dropdownV2Props: {
    readonly options: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => DropdownOption[]) | (() => DropdownOption[]) | (((new (...args: any[]) => DropdownOption[]) | (() => DropdownOption[])) | null)[], unknown, unknown, () => DropdownOption[], boolean>;
    readonly splitButton: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean) | (((new (...args: any[]) => boolean) | (() => boolean)) | null)[], unknown, unknown, false, boolean>;
    readonly triggerProps: {
        readonly type: import("vue").PropType<TriggerProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export type DropdownV2Props = ExtractPropTypes<typeof dropdownV2Props>;
export declare const dropdownV2Emits: {
    change: (value: DropdownValue, valuePath: DropdownValue[]) => boolean;
};
export type DropdownV2Emits = typeof dropdownV2Emits;
