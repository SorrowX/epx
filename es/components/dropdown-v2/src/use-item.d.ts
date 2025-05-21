import type { ComponentInternalInstance, Ref } from 'vue';
import type { DropdownValue } from './types';
export default function useItem(instance: ComponentInternalInstance, currentValue: Ref<DropdownValue>): {
    parentItem: import("vue").ComputedRef<ComponentInternalInstance>;
    valuePath: import("vue").ComputedRef<DropdownValue[]>;
};
