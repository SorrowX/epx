'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function useEventCallback(handler) {
  const callbackRef = vue.ref(handler);
  const fn = vue.ref((value) => {
    callbackRef.value && callbackRef.value(value);
  });
  callbackRef.value = handler;
  return fn.value;
}

exports.useEventCallback = useEventCallback;
//# sourceMappingURL=index.js.map
