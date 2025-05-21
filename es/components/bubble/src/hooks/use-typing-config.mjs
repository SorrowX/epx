import { computed } from 'vue';
import { isBoolean, isObject } from 'element-plus/es/utils/index';

function useTypingConfig(props) {
  const typingEnabled = computed(() => {
    const { typing } = props;
    return isBoolean(typing) && typing || isObject(typing);
  });
  const baseConfig = {
    step: 1,
    interval: 50,
    suffix: null
  };
  const config = computed(() => ({
    ...baseConfig,
    ...typeof props.typing === "object" ? props.typing : {}
  }));
  return [
    typingEnabled,
    computed(() => config.value.step),
    computed(() => config.value.interval),
    computed(() => config.value.suffix)
  ];
}

export { useTypingConfig as default };
//# sourceMappingURL=use-typing-config.mjs.map
