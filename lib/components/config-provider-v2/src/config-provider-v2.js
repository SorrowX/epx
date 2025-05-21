'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var configProviderV2Props = require('./config-provider-v2-props.js');
var constants = require('./constants.js');
var useGlobalConfig = require('./hooks/use-global-config.js');

const ConfigProviderV2 = vue.defineComponent({
  name: "ElConfigProviderV2",
  inheritAttrs: false,
  props: configProviderV2Props.configProviderV2Props,
  setup(props, { attrs, slots }) {
    const cfgs = vue.computed(() => useGlobalConfig.getCfgOptions({ ...props, ...attrs }));
    vue.provide(constants.configProviderV2ContextKey, useGlobalConfig.globalConfig);
    const defaultTablePageConfig = useGlobalConfig.getDefaultTablePageConfig();
    const tablePageConfig = props.tablePage;
    vue.provide(
      useGlobalConfig.tablePageContextKey,
      vue.computed(() => {
        return {
          pagination: {
            ...defaultTablePageConfig.pagination,
            ...tablePageConfig == null ? void 0 : tablePageConfig.pagination
          },
          config: {
            ...defaultTablePageConfig.config,
            ...tablePageConfig == null ? void 0 : tablePageConfig.config
          }
        };
      })
    );
    return () => vue.h(
      elementPlus.ElConfigProvider,
      {
        ...vue.unref(cfgs.value.epCfg)
      },
      {
        default: () => {
          var _a;
          return (_a = slots.default) == null ? void 0 : _a.call(slots);
        }
      }
    );
  }
});

exports["default"] = ConfigProviderV2;
//# sourceMappingURL=config-provider-v2.js.map
