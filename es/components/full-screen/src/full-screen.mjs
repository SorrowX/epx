import { buildProps, definePropType } from 'element-plus/es/utils/index';
import { DIV_TAG } from '../../../constants/tags.mjs';

const fullScreenProps = buildProps({
  tag: {
    type: definePropType(String),
    default: DIV_TAG
  },
  type: {
    type: definePropType(String),
    default: "window",
    values: ["window", "browser"]
  }
});
const fullScreenEmits = {};

export { fullScreenEmits, fullScreenProps };
//# sourceMappingURL=full-screen.mjs.map
