import type { DropdownOption } from './types';
import type { VNode } from 'vue';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly options: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => DropdownOption[]) | (() => DropdownOption[]) | (((new (...args: any[]) => DropdownOption[]) | (() => DropdownOption[])) | null)[], unknown, unknown, () => DropdownOption[], boolean>;
    readonly splitButton: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean) | (((new (...args: any[]) => boolean) | (() => boolean)) | null)[], unknown, unknown, false, boolean>;
    readonly triggerProps: {
        readonly type: import("vue").PropType<import("element-plus-x/es/element-plus").TriggerProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}>, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly options: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => DropdownOption[]) | (() => DropdownOption[]) | (((new (...args: any[]) => DropdownOption[]) | (() => DropdownOption[])) | null)[], unknown, unknown, () => DropdownOption[], boolean>;
    readonly splitButton: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean) | (((new (...args: any[]) => boolean) | (() => boolean)) | null)[], unknown, unknown, false, boolean>;
    readonly triggerProps: {
        readonly type: import("vue").PropType<import("element-plus-x/es/element-plus").TriggerProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}>> & Readonly<{}>, {
    readonly options: DropdownOption[];
    readonly splitButton: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => boolean) | (() => boolean) | (((new (...args: any[]) => boolean) | (() => boolean)) | null)[], unknown, unknown>;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
