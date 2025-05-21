import type { ExtractPropTypes } from 'vue';
import type { TablePageContext } from 'element-plus-x/es/components/table-page';
export declare const configProviderV2Props: {
    readonly tablePage: {
        readonly type: import("vue").PropType<TablePageContext>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export type ConfigProviderV2Props = ExtractPropTypes<typeof configProviderV2Props>;
