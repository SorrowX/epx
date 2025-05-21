'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function useListData(items, roles) {
  const getRoleBubbleProps = (bubble) => {
    if (typeof roles === "function") {
      return roles(bubble);
    }
    if (roles) {
      return roles[bubble.role] || {};
    }
    return {};
  };
  const listData = vue.computed(
    () => (items.value || []).map((bubbleData, i) => {
      var _a;
      const mergedKey = (_a = bubbleData.key) != null ? _a : `preset_${i}`;
      return {
        ...getRoleBubbleProps(bubbleData),
        ...bubbleData,
        key: mergedKey
      };
    })
  );
  return listData;
}

exports["default"] = useListData;
//# sourceMappingURL=use-list-data.js.map
