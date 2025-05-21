import type { ExtractPropTypes } from 'vue';
export declare const draggableTableProps: {
    readonly draggableProps: import("element-plus/es/utils").EpPropFinalized<ObjectConstructor, unknown, unknown, () => {}, boolean>;
};
export type DraggableTableProps = ExtractPropTypes<typeof draggableTableProps>;
export declare const draggableTableEmits: {
    'sort-data': (data: any[]) => boolean;
};
export type DraggableTableEmits = typeof draggableTableEmits;
