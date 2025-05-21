import { defineComponent, computed, provide, h, unref } from 'vue';
import { ElConfigProvider } from 'element-plus';
import { configProviderV2Props } from './config-provider-v2-props.mjs';
import { configProviderV2ContextKey } from './constants.mjs';
import { getCfgOptions, globalConfig, tablePageContextKey, getDefaultTablePageConfig } from './hooks/use-global-config.mjs';

const ConfigProviderV2 = defineComponent({
  name: "ElConfigProviderV2",
  inheritAttrs: false,
  props: configProviderV2Props,
  setup(props, { attrs, slots }) {
    const cfgs = computed(() => getCfgOptions({ ...props, ...attrs }));
    provide(configProviderV2ContextKey, globalConfig);
    const defaultTablePageConfig = getDefaultTablePageConfig();
    const tablePageConfig = props.tablePage;
    provide(
      tablePageContextKey,
      computed(() => {
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
    return () => h(
      ElConfigProvider,
      {
        ...unref(cfgs.value.epCfg)
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

export { ConfigProviderV2 as default };
//# sourceMappingURL=config-provider-v2.mjs.map
