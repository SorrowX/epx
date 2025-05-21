import { computed, unref, watch } from 'vue';
import { useEventCallback } from '../../../../hooks/use-event-callback/index.mjs';
import { useState } from '../../../../hooks/use-state/index.mjs';

function useDisplayData(items, displayListLastItemTypingComplete) {
  const [displayCount, setDisplayCount] = useState(items.value.length);
  const displayList = computed(() => {
    return items.value.slice(0, unref(displayCount));
  });
  const displayListLastKey = computed(() => {
    const lastItem = unref(displayList)[unref(displayList).length - 1];
    return lastItem ? lastItem.key : null;
  });
  watch(
    items,
    () => {
      var _a;
      if (unref(displayList).length && unref(displayList).every(
        (item, index) => {
          var _a2;
          return item.key === ((_a2 = items.value[index]) == null ? void 0 : _a2.key);
        }
      )) {
        return;
      }
      if (unref(displayList).length === 0) {
        setDisplayCount(1);
      } else {
        for (let i = 0; i < unref(displayList).length; i += 1) {
          if (unref(displayList)[i].key !== ((_a = items.value[i]) == null ? void 0 : _a.key)) {
            setDisplayCount(i);
            break;
          }
        }
      }
    },
    { immediate: true, deep: true }
  );
  const onTypingComplete = useEventCallback((key) => {
    if (key === unref(displayListLastKey)) {
      setDisplayCount(unref(displayCount) + 1);
      displayListLastItemTypingComplete == null ? void 0 : displayListLastItemTypingComplete(key);
    }
  });
  return [displayList, onTypingComplete];
}

export { useDisplayData as default };
//# sourceMappingURL=use-display-data.mjs.map
