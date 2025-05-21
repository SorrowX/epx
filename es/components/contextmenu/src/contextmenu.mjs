import { buildProps, definePropType } from 'element-plus/es/utils/index';

const contextmenuProps = buildProps({
  data: {
    type: null
  },
  options: {
    type: definePropType(Array),
    default: () => []
  }
});
const contextmenuEmits = {
  change: (value, valuePath) => !!value && !!valuePath
};

export { contextmenuEmits, contextmenuProps };
//# sourceMappingURL=contextmenu.mjs.map
