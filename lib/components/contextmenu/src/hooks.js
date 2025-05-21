'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const useContextMenu = () => {
  const visible = vue.ref(false);
  const position = vue.ref({
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  });
  const triggerRef = vue.ref({
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

exports.useContextMenu = useContextMenu;
//# sourceMappingURL=hooks.js.map
