import ConfigProviderV2 from './src/config-provider-v2.mjs';
export { configProviderV2ContextKey } from './src/constants.mjs';
export { configProviderV2Props } from './src/config-provider-v2-props.mjs';
export { getCfgOptions, getDefaultTablePageConfig, globalConfig, mergeGlobalConfig, tablePageContextKey, useTablePageConfig } from './src/hooks/use-global-config.mjs';
import { withInstall } from 'element-plus/es/utils/index';

const ElConfigProviderV2 = withInstall(ConfigProviderV2);

export { ElConfigProviderV2, ElConfigProviderV2 as default };
//# sourceMappingURL=index.mjs.map
