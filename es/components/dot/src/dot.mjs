import { buildProps } from 'element-plus/es/utils/index';

const dotProps = buildProps({
  type: {
    type: String,
    values: ["primary", "success", "info", "warning", "danger"],
    default: "primary"
  },
  color: String,
  size: {
    type: String
  }
});
const dotEmits = {};

export { dotEmits, dotProps };
//# sourceMappingURL=dot.mjs.map
