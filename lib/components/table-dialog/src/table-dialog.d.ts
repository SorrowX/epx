import type { ColumnProps } from 'element-plus-x/es/components/table-page/src/types';
import type { ExtractPropTypes, PropType } from 'vue';
export declare const tableDialogProps: {
    readonly rowKey: {
        readonly type: PropType<string>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => any[]) | (() => any[]) | (((new (...args: any[]) => any[]) | (() => any[])) | null)[], unknown, unknown, () => never[], boolean>;
    readonly title: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly width: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 900, boolean>;
    readonly height: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 500, boolean>;
    readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "radio" | "checkbox", unknown, "checkbox", boolean>;
    readonly selectable: {
        readonly type: PropType<(row: any, index: number) => boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly columns: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => ColumnProps[]) | (() => ColumnProps[]) | (((new (...args: any[]) => ColumnProps[]) | (() => ColumnProps[])) | null)[], unknown, unknown, () => never[], boolean>;
    readonly pagination: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Record<string, any>) | (() => Record<string, any>) | (((new (...args: any[]) => Record<string, any>) | (() => Record<string, any>)) | null)[], unknown, unknown, () => {}, boolean>;
    readonly config: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Record<string, any>) | (() => Record<string, any>) | (((new (...args: any[]) => Record<string, any>) | (() => Record<string, any>)) | null)[], unknown, unknown, () => {
        id: string;
        label: string;
    }, boolean>;
    readonly headerCellStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Record<string, any>) | (() => Record<string, any>) | (((new (...args: any[]) => Record<string, any>) | (() => Record<string, any>)) | null)[], unknown, unknown, () => {
        background: string;
    }, boolean>;
    readonly hiddenRight: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly boundaryValue: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 50, boolean>;
    readonly dynamicSizeListProps: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Record<string, any>) | (() => Record<string, any>) | (((new (...args: any[]) => Record<string, any>) | (() => Record<string, any>)) | null)[], unknown, unknown, () => {}, boolean>;
    readonly unshift: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly selectedFieldTitle: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly cancelText: {
        readonly type: PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly sureText: {
        readonly type: PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onSure: {
        readonly type: PropType<(values: any[], options: any) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export type TableDialogProps = ExtractPropTypes<typeof tableDialogProps>;
export declare const tableDialogEmits: {
    "update:modelValue": (values: any[]) => boolean;
    cancel: () => null;
};
export type TableDialogEmits = typeof tableDialogEmits;
