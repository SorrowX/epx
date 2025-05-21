import Renderer from './src/index.mjs';
export { rendererEmits, rendererProps } from './src/renderer.mjs';
import { withInstall } from 'element-plus/es/utils/index';

const ElRenderer = withInstall(Renderer);

export { ElRenderer, ElRenderer as default };
//# sourceMappingURL=index.mjs.map
