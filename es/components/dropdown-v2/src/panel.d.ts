import type { ElTooltipProps } from 'element-plus';
import type { ExtractPropTypes } from 'vue';
import type { DropdownOption } from './types';
export declare const panelProps: {
    readonly options: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => DropdownOption[]) | (() => DropdownOption[]) | (((new (...args: any[]) => DropdownOption[]) | (() => DropdownOption[])) | null)[], unknown, unknown, () => DropdownOption[], boolean>;
    readonly showTimeout: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => number) | (() => number) | (((new (...args: any[]) => number) | (() => number)) | null)[], unknown, unknown, 200, boolean>;
    readonly hideTimeout: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => number) | (() => number) | (((new (...args: any[]) => number) | (() => number)) | null)[], unknown, unknown, 200, boolean>;
    readonly pure: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean) | (((new (...args: any[]) => boolean) | (() => boolean)) | null)[], unknown, unknown, false, boolean>;
    readonly tooltipOptions: {
        readonly type: import("vue").PropType<Partial<ElTooltipProps>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly width: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number) | (((new (...args: any[]) => string | number) | (() => string | number)) | null)[], unknown, unknown, "140px", boolean>;
    readonly trigger: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string) | (() => string) | (((new (...args: any[]) => string) | (() => string)) | null)[], "click" | "hover", unknown, "hover", boolean>;
};
export type PanelProps = ExtractPropTypes<typeof panelProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    readonly options: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => DropdownOption[]) | (() => DropdownOption[]) | (((new (...args: any[]) => DropdownOption[]) | (() => DropdownOption[])) | null)[], unknown, unknown, () => DropdownOption[], boolean>;
    readonly showTimeout: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => number) | (() => number) | (((new (...args: any[]) => number) | (() => number)) | null)[], unknown, unknown, 200, boolean>;
    readonly hideTimeout: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => number) | (() => number) | (((new (...args: any[]) => number) | (() => number)) | null)[], unknown, unknown, 200, boolean>;
    readonly pure: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean) | (((new (...args: any[]) => boolean) | (() => boolean)) | null)[], unknown, unknown, false, boolean>;
    readonly tooltipOptions: {
        readonly type: import("vue").PropType<Partial<ElTooltipProps>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly width: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number) | (((new (...args: any[]) => string | number) | (() => string | number)) | null)[], unknown, unknown, "140px", boolean>;
    readonly trigger: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string) | (() => string) | (((new (...args: any[]) => string) | (() => string)) | null)[], "click" | "hover", unknown, "hover", boolean>;
}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "close" | "open")[], "select" | "close" | "open", import("vue").PublicProps, Readonly<ExtractPropTypes<{
    readonly options: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => DropdownOption[]) | (() => DropdownOption[]) | (((new (...args: any[]) => DropdownOption[]) | (() => DropdownOption[])) | null)[], unknown, unknown, () => DropdownOption[], boolean>;
    readonly showTimeout: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => number) | (() => number) | (((new (...args: any[]) => number) | (() => number)) | null)[], unknown, unknown, 200, boolean>;
    readonly hideTimeout: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => number) | (() => number) | (((new (...args: any[]) => number) | (() => number)) | null)[], unknown, unknown, 200, boolean>;
    readonly pure: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean) | (((new (...args: any[]) => boolean) | (() => boolean)) | null)[], unknown, unknown, false, boolean>;
    readonly tooltipOptions: {
        readonly type: import("vue").PropType<Partial<ElTooltipProps>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly width: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number) | (((new (...args: any[]) => string | number) | (() => string | number)) | null)[], unknown, unknown, "140px", boolean>;
    readonly trigger: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string) | (() => string) | (((new (...args: any[]) => string) | (() => string)) | null)[], "click" | "hover", unknown, "hover", boolean>;
}>> & Readonly<{
    onClose?: ((...args: any[]) => any) | undefined;
    onSelect?: ((...args: any[]) => any) | undefined;
    onOpen?: ((...args: any[]) => any) | undefined;
}>, {
    readonly options: DropdownOption[];
    readonly width: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | (((new (...args: any[]) => string | number) | (() => string | number)) | null)[], unknown, unknown>;
    readonly trigger: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string) | (() => string) | (((new (...args: any[]) => string) | (() => string)) | null)[], "click" | "hover", unknown>;
    readonly pure: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => boolean) | (() => boolean) | (((new (...args: any[]) => boolean) | (() => boolean)) | null)[], unknown, unknown>;
    readonly showTimeout: number;
    readonly hideTimeout: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
