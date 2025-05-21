import type { ExtractPropTypes } from 'vue';
export declare const sortableListProps: {
    readonly modelValue: {
        readonly type: import("vue").PropType<any[]>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly tag: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string) | (() => string) | (((new (...args: any[]) => string) | (() => string)) | null)[], unknown, unknown, "div", boolean>;
    readonly options: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => any) | (() => any) | {
        (): any;
        new (): any;
        readonly prototype: any;
    } | (((new (...args: any[]) => any) | (() => any) | {
        (): any;
        new (): any;
        readonly prototype: any;
    }) | null)[], unknown, unknown, () => {
        animation: number;
    }, boolean>;
};
export type SortableListProps = ExtractPropTypes<typeof sortableListProps>;
export declare const sortableListEmits: {
    "update:modelValue": (value: any) => boolean;
    change: (value: any) => boolean;
};
export type SortableListEmits = typeof sortableListEmits;
