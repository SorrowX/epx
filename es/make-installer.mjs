import { version } from './version.mjs';
import { INSTALLED_KEY } from './constants/key.mjs';
import { getCfgOptions, mergeGlobalConfig } from './components/config-provider-v2/src/hooks/use-global-config.mjs';

const makeInstaller = (components = []) => {
  const install = (app, options) => {
    if (app[INSTALLED_KEY])
      return;
    app[INSTALLED_KEY] = true;
    components.forEach((c) => app.use(c));
    if (options) {
      const { epxCfg } = getCfgOptions(options);
      mergeGlobalConfig(epxCfg);
    }
  };
  return {
    version,
    install
  };
};

export { makeInstaller };
//# sourceMappingURL=make-installer.mjs.map
