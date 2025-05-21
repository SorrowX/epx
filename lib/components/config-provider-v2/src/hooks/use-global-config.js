'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var lodashUnified = require('lodash-unified');
var configProviderV2Props = require('../config-provider-v2-props.js');

const overrideKeys = ["pageSizes"];
function merge(...sources) {
  return lodashUnified.mergeWith(
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
    epCfg: pickupProps(elementPlus.configProviderProps),
    epxCfg: pickupProps(configProviderV2Props.configProviderV2Props)
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
  const initial = vue.computed(
    () => merge(
      getDefaultTablePageConfig(),
      globalConfig.value.tablePage
    )
  );
  return {
    tablePageConfig: vue.getCurrentInstance() ? vue.inject(tablePageContextKey, initial) : initial
  };
};
const globalConfig = vue.ref({
  tablePage: getDefaultTablePageConfig()
});
const mergeGlobalConfig = (cfg) => {
  globalConfig.value = merge({}, vue.toRaw(globalConfig.value), cfg);
};

exports.getCfgOptions = getCfgOptions;
exports.getDefaultTablePageConfig = getDefaultTablePageConfig;
exports.globalConfig = globalConfig;
exports.mergeGlobalConfig = mergeGlobalConfig;
exports.tablePageContextKey = tablePageContextKey;
exports.useTablePageConfig = useTablePageConfig;
//# sourceMappingURL=use-global-config.js.map
