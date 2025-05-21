import { buildProps, definePropType } from 'element-plus/es/utils/index';

const rendererProps = buildProps({
  renderer: {
    type: Function
  },
  data: {
    type: definePropType(Object)
  }
});
const rendererEmits = {};

export { rendererEmits, rendererProps };
//# sourceMappingURL=renderer.mjs.map
