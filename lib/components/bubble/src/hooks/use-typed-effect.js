'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index = require('../../../../hooks/use-state/index.js');
var index$1 = require('element-plus/es/utils/index');

const useTypedEffect = (content, typingEnabled, typingStep, typingInterval) => {
  const [prevContent, setPrevContent] = index.useState("");
  const [typingIndex, setTypingIndex] = index.useState(1);
  const mergedTypingEnabled = vue.computed(
    () => typingEnabled.value && index$1.isString(content.value)
  );
  vue.watch(content, () => {
    const prevContentValue = vue.unref(prevContent);
    setPrevContent(content.value);
    if (!mergedTypingEnabled.value && index$1.isString(content.value)) {
      setTypingIndex(content.value.length);
    } else if (index$1.isString(content.value) && index$1.isString(prevContentValue) && content.value.indexOf(prevContentValue) !== 0) {
      setTypingIndex(1);
    }
  });
  vue.watch(
    [typingIndex, typingEnabled, content],
    (newValue, oldValue, onCleanup) => {
      if (mergedTypingEnabled.value && index$1.isString(content.value) && vue.unref(typingIndex) < content.value.length) {
        const id = setTimeout(() => {
          setTypingIndex(vue.unref(typingIndex) + typingStep.value);
        }, typingInterval.value);
        onCleanup(() => {
          clearTimeout(id);
        });
      }
    },
    { immediate: true }
  );
  const mergedTypingContent = vue.computed(() => {
    return mergedTypingEnabled.value && index$1.isString(content.value) ? content.value.slice(0, vue.unref(typingIndex)) : content.value;
  });
  return [
    mergedTypingContent,
    vue.computed(
      () => mergedTypingEnabled.value && index$1.isString(content.value) && vue.unref(typingIndex) < content.value.length
    )
  ];
};

exports["default"] = useTypedEffect;
//# sourceMappingURL=use-typed-effect.js.map
