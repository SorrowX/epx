import { buildProps } from 'element-plus/es/utils/index';

const textHighlightProps = buildProps({
  content: {
    type: String,
    default: ""
  },
  text: {
    type: String,
    default: ""
  },
  color: {
    type: String,
    default: "#1677FF"
  },
  ignoreCase: {
    type: Boolean,
    default: false
  }
});
const textHighlightEmits = {};

export { textHighlightEmits, textHighlightProps };
//# sourceMappingURL=text-highlight.mjs.map
