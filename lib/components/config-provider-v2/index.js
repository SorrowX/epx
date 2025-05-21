'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var configProviderV2 = require('./src/config-provider-v2.js');
var constants = require('./src/constants.js');
var configProviderV2Props = require('./src/config-provider-v2-props.js');
var useGlobalConfig = require('./src/hooks/use-global-config.js');
var index = require('element-plus/es/utils/index');

const ElConfigProviderV2 = index.withInstall(configProviderV2["default"]);

exports.configProviderV2ContextKey = constants.configProviderV2ContextKey;
exports.configProviderV2Props = configProviderV2Props.configProviderV2Props;
exports.getCfgOptions = useGlobalConfig.getCfgOptions;
exports.getDefaultTablePageConfig = useGlobalConfig.getDefaultTablePageConfig;
exports.globalConfig = useGlobalConfig.globalConfig;
exports.mergeGlobalConfig = useGlobalConfig.mergeGlobalConfig;
exports.tablePageContextKey = useGlobalConfig.tablePageContextKey;
exports.useTablePageConfig = useGlobalConfig.useTablePageConfig;
exports.ElConfigProviderV2 = ElConfigProviderV2;
exports["default"] = ElConfigProviderV2;
//# sourceMappingURL=index.js.map
