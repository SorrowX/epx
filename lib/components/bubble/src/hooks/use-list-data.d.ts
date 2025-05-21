import type { Ref } from 'vue';
import type { BubbleListProps } from '../bubble-list/bubble-list';
export type UnRef<T extends Ref<any>> = T extends Ref<infer R> ? R : never;
export type ListItemType = UnRef<ReturnType<typeof useListData>>[number];
export default function useListData(items: Ref<BubbleListProps['items']>, roles?: BubbleListProps['roles']): Ref<any>;
