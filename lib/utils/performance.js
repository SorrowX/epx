'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var common = require('./common.js');

function throttle(method, interval = 16) {
  if (typeof method !== "function") {
    return common.noop;
  }
  const invoke = (...args) => {
    method(...args);
  };
  if (interval <= 0) {
    return debounceMinor(invoke);
  }
  let lastCall = 0;
  let timer;
  return function(...args) {
    const current = Date.now();
    const elapsed = current - lastCall;
    clearTimeout(timer);
    if (elapsed >= interval) {
      lastCall = current;
      invoke(...args);
    } else {
      timer = setTimeout(() => {
        lastCall = Date.now();
        invoke(...args);
      }, Math.max(0, interval - elapsed));
    }
  };
}
function debounce(method, delay = 100) {
  if (typeof method !== "function") {
    return common.noop;
  }
  const invoke = (...args) => {
    method(...args);
  };
  if (delay <= 0) {
    return debounceMinor(invoke);
  }
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      invoke(...args);
    }, delay);
  };
}
function debounceMinor(method) {
  if (typeof method !== "function") {
    return method;
  }
  let called = false;
  let lastArgs;
  let promise;
  return function(...args) {
    lastArgs = args;
    if (!called) {
      called = true;
      promise = Promise.resolve().then(() => {
        called = false;
        promise = void 0;
        return method(...lastArgs);
      });
    }
    return promise;
  };
}

exports.debounce = debounce;
exports.debounceMinor = debounceMinor;
exports.throttle = throttle;
//# sourceMappingURL=performance.js.map
