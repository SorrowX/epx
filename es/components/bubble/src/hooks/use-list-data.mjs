import { computed } from 'vue';

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
  const listData = computed(
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

export { useListData as default };
//# sourceMappingURL=use-list-data.mjs.map
