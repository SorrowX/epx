import { ListItemType } from './use-list-data';
import type { Ref } from 'vue';
type UseDisplayDataReturn = [
    Ref<ListItemType[]>,
    (value: string | number) => void
];
export default function useDisplayData(items: Ref<ListItemType[]>, displayListLastItemTypingComplete?: (key: string | number) => void): UseDisplayDataReturn;
export {};
