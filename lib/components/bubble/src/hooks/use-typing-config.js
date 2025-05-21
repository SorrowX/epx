'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index = require('element-plus/es/utils/index');

function useTypingConfig(props) {
  const typingEnabled = vue.computed(() => {
    const { typing } = props;
    return index.isBoolean(typing) && typing || index.isObject(typing);
  });
  const baseConfig = {
    step: 1,
    interval: 50,
    suffix: null
  };
  const config = vue.computed(() => ({
    ...baseConfig,
    ...typeof props.typing === "object" ? props.typing : {}
  }));
  return [
    typingEnabled,
    vue.computed(() => config.value.step),
    vue.computed(() => config.value.interval),
    vue.computed(() => config.value.suffix)
  ];
}

exports["default"] = useTypingConfig;
//# sourceMappingURL=use-typing-config.js.map
