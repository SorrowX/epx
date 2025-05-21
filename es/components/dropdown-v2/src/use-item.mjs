import { computed } from 'vue';

function useItem(instance, currentValue) {
  const valuePath = computed(() => {
    let parent = instance.parent;
    const path = [currentValue.value];
    while (parent.type.name !== "ElDropdownV2Panel") {
      const option = parent.props.option;
      if (option) {
        path.unshift(option.value);
      }
      parent = parent.parent;
    }
    return path;
  });
  const parentItem = computed(() => {
    let parent = instance.parent;
    while (parent && !["ElDropdownV2Panel", "ElDropdownV2SubItem"].includes(parent.type.name)) {
      parent = parent.parent;
    }
    return parent;
  });
  return {
    parentItem,
    valuePath
  };
}

export { useItem as default };
//# sourceMappingURL=use-item.mjs.map
