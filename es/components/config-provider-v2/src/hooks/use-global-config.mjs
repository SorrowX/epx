import { ref, computed, getCurrentInstance, inject, toRaw } from 'vue';
import { configProviderProps } from 'element-plus';
import { mergeWith } from 'lodash-unified';
import { configProviderV2Props } from '../config-provider-v2-props.mjs';

const overrideKeys = ["pageSizes"];
function merge(...sources) {
  return mergeWith(
    {},
    ...sources,
    (objValue, srcValue, key) => {
      if (overrideKeys.includes(key)) {
        return srcValue;
      }
      return void 0;
    }
  );
}
const getCfgOptions = (options) => {
  const pickupProps = (props) => {
    const result = {};
    Object.keys(props).forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(options, key)) {
        result[key] = options[key];
      }
    });
    return result;
  };
  return {
    epCfg: pickupProps(configProviderProps),
    epxCfg: pickupProps(configProviderV2Props)
  };
};
const getDefaultTablePageConfig = () => {
  return {
    pagination: {
      defaultPageSize: 10,
      pageSizes: [10, 20, 50, 100],
      layout: "sizes, prev, pager, next, jumper",
      background: true,
      showRecord: true,
      showTotal: true
    },
    config: {
      currentPage: "current",
      pageSize: "size",
      total: "total"
    }
  };
};
const tablePageContextKey = Symbol(
  "tablePageContextKey"
);
const useTablePageConfig = () => {
  const initial = computed(
    () => merge(
      getDefaultTablePageConfig(),
      globalConfig.value.tablePage
    )
  );
  return {
    tablePageConfig: getCurrentInstance() ? inject(tablePageContextKey, initial) : initial
  };
};
const globalConfig = ref({
  tablePage: getDefaultTablePageConfig()
});
const mergeGlobalConfig = (cfg) => {
  globalConfig.value = merge({}, toRaw(globalConfig.value), cfg);
};

export { getCfgOptions, getDefaultTablePageConfig, globalConfig, mergeGlobalConfig, tablePageContextKey, useTablePageConfig };
//# sourceMappingURL=use-global-config.mjs.map
