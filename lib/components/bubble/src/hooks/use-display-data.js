'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index$1 = require('../../../../hooks/use-event-callback/index.js');
var index = require('../../../../hooks/use-state/index.js');

function useDisplayData(items, displayListLastItemTypingComplete) {
  const [displayCount, setDisplayCount] = index.useState(items.value.length);
  const displayList = vue.computed(() => {
    return items.value.slice(0, vue.unref(displayCount));
  });
  const displayListLastKey = vue.computed(() => {
    const lastItem = vue.unref(displayList)[vue.unref(displayList).length - 1];
    return lastItem ? lastItem.key : null;
  });
  vue.watch(
    items,
    () => {
      var _a;
      if (vue.unref(displayList).length && vue.unref(displayList).every(
        (item, index) => {
          var _a2;
          return item.key === ((_a2 = items.value[index]) == null ? void 0 : _a2.key);
        }
      )) {
        return;
      }
      if (vue.unref(displayList).length === 0) {
        setDisplayCount(1);
      } else {
        for (let i = 0; i < vue.unref(displayList).length; i += 1) {
          if (vue.unref(displayList)[i].key !== ((_a = items.value[i]) == null ? void 0 : _a.key)) {
            setDisplayCount(i);
            break;
          }
        }
      }
    },
    { immediate: true, deep: true }
  );
  const onTypingComplete = index$1.useEventCallback((key) => {
    if (key === vue.unref(displayListLastKey)) {
      setDisplayCount(vue.unref(displayCount) + 1);
      displayListLastItemTypingComplete == null ? void 0 : displayListLastItemTypingComplete(key);
    }
  });
  return [displayList, onTypingComplete];
}

exports["default"] = useDisplayData;
//# sourceMappingURL=use-display-data.js.map
