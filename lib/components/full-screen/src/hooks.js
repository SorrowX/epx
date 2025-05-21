'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const useWindowFullscreen = () => {
  const isFullscreen = vue.ref(false);
  async function exit() {
    isFullscreen.value = false;
  }
  async function enter() {
    isFullscreen.value = true;
  }
  async function toggle() {
    isFullscreen.value = !isFullscreen.value;
  }
  return {
    isFullscreen,
    exit,
    enter,
    toggle,
    isSupported: vue.ref(true)
  };
};

exports.useWindowFullscreen = useWindowFullscreen;
//# sourceMappingURL=hooks.js.map
