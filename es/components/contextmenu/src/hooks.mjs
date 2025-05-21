import { ref } from 'vue';

const useContextMenu = () => {
  const visible = ref(false);
  const position = ref({
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  });
  const triggerRef = ref({
    getBoundingClientRect() {
      return position.value;
    }
  });
  const handleContextMenu = (e) => {
    e.preventDefault();
    position.value = DOMRect.fromRect({
      x: e.clientX,
      y: e.clientY
    });
    visible.value = true;
  };
  return {
    visible,
    triggerRef,
    handleContextMenu
  };
};

export { useContextMenu };
//# sourceMappingURL=hooks.mjs.map
