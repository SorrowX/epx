import { buildProps } from 'element-plus/es/utils/index';

const affixBottomProps = buildProps({
  position: {
    type: String,
    default: "absolute",
    values: ["absolute", "fixed"]
  },
  tag: {
    type: String,
    default: "div"
  }
});
const affixBottomEmits = {};

export { affixBottomEmits, affixBottomProps };
//# sourceMappingURL=affix-bottom.mjs.map
