import { computed, watch, unref } from 'vue';
import { useState } from '../../../../hooks/use-state/index.mjs';
import { isString } from 'element-plus/es/utils/index';

const useTypedEffect = (content, typingEnabled, typingStep, typingInterval) => {
  const [prevContent, setPrevContent] = useState("");
  const [typingIndex, setTypingIndex] = useState(1);
  const mergedTypingEnabled = computed(
    () => typingEnabled.value && isString(content.value)
  );
  watch(content, () => {
    const prevContentValue = unref(prevContent);
    setPrevContent(content.value);
    if (!mergedTypingEnabled.value && isString(content.value)) {
      setTypingIndex(content.value.length);
    } else if (isString(content.value) && isString(prevContentValue) && content.value.indexOf(prevContentValue) !== 0) {
      setTypingIndex(1);
    }
  });
  watch(
    [typingIndex, typingEnabled, content],
    (newValue, oldValue, onCleanup) => {
      if (mergedTypingEnabled.value && isString(content.value) && unref(typingIndex) < content.value.length) {
        const id = setTimeout(() => {
          setTypingIndex(unref(typingIndex) + typingStep.value);
        }, typingInterval.value);
        onCleanup(() => {
          clearTimeout(id);
        });
      }
    },
    { immediate: true }
  );
  const mergedTypingContent = computed(() => {
    return mergedTypingEnabled.value && isString(content.value) ? content.value.slice(0, unref(typingIndex)) : content.value;
  });
  return [
    mergedTypingContent,
    computed(
      () => mergedTypingEnabled.value && isString(content.value) && unref(typingIndex) < content.value.length
    )
  ];
};

export { useTypedEffect as default };
//# sourceMappingURL=use-typed-effect.mjs.map
