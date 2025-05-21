import { ConfigProviderV2Context } from 'element-plus-x/es/components/config-provider-v2';
import type { App, Plugin } from '@vue/runtime-core';
export declare const makeInstaller: (components?: Plugin[]) => {
    version: string;
    install: (app: App, options?: ConfigProviderV2Context) => void;
};
