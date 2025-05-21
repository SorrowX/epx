import { ref, isRef, computed } from 'vue';
import { useEventListener } from '@vueuse/core';
import { throttle } from '../../../utils/performance.mjs';

function disableEvent(event) {
  if (event.cancelable) {
    event.stopPropagation();
    event.preventDefault();
  }
}
function useMoving(options) {
  const target = options.target || ref(null);
  const x = isRef(options.x) ? options.x : ref(0);
  const y = isRef(options.y) ? options.y : ref(0);
  const lazy = isRef(options.lazy) ? options.lazy : ref(options.lazy || false);
  const disabled = isRef(options.disabled) ? options.disabled : ref(options.disabled || false);
  const { capture = true, stopMouse = true, stopTouch = true } = options;
  const moving = ref(false);
  const internalState = {
    xStart: 0,
    yStart: 0,
    xEnd: 0,
    yEnd: 0,
    clientX: 0,
    clientY: 0,
    deltaX: 0,
    deltaY: 0,
    lazy: false
  };
  let current = 0;
  let record = 0;
  const throttleMove = throttle((event) => {
    var _a;
    if (record < current)
      return;
    updateState(event);
    if (!internalState.lazy) {
      x.value = internalState.xEnd;
      y.value = internalState.yEnd;
    }
    (_a = options.onMove) == null ? void 0 : _a.call(options, internalState, event);
  });
  function start(event) {
    var _a;
    if (disabled.value)
      return;
    Object.assign(internalState, {
      xStart: x.value,
      yStart: y.value,
      xEnd: x.value,
      yEnd: y.value,
      clientX: event.clientX,
      clientY: event.clientY,
      lazy: lazy.value
    });
    if (((_a = options.onStart) == null ? void 0 : _a.call(options, internalState, event)) === false) {
      return;
    }
    document.addEventListener("pointermove", move, { capture });
    document.addEventListener("pointerup", end, { capture });
    record = current;
    moving.value = true;
  }
  function move(event) {
    if (disabled.value)
      return;
    disableEvent(event);
    throttleMove(event);
  }
  function end(event) {
    var _a;
    document.removeEventListener("pointermove", move, { capture });
    document.removeEventListener("pointerup", end, { capture });
    if (disabled.value)
      return;
    updateState(event);
    if (internalState.lazy) {
      x.value = internalState.xEnd;
      y.value = internalState.yEnd;
    }
    moving.value = false;
    ++current;
    (_a = options.onEnd) == null ? void 0 : _a.call(options, internalState, event);
  }
  function updateState(event) {
    const { clientX, clientY } = event;
    const {
      xStart,
      yStart,
      clientX: clientXStart,
      clientY: clientYStart
    } = internalState;
    const deltaX = clientX - clientXStart;
    const deltaY = clientY - clientYStart;
    internalState.deltaX = deltaX;
    internalState.deltaY = deltaY;
    internalState.xEnd = xStart + deltaX;
    internalState.yEnd = yStart + deltaY;
  }
  useEventListener(target, "pointerdown", start, { capture });
  stopMouse && useEventListener(target, "mousedown", disableEvent, { capture });
  stopTouch && useEventListener(target, "touchstart", disableEvent, { capture });
  return {
    target,
    moving: computed(() => moving.value),
    x,
    y,
    lazy,
    disabled
  };
}

export { useMoving };
//# sourceMappingURL=hooks.mjs.map
