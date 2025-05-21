import { buildProps, definePropType } from 'element-plus/es/utils/index';

const bubbleProps = buildProps({
  avatar: {
    type: definePropType([
      Object,
      Boolean
    ])
  },
  placement: {
    type: definePropType(String),
    default: "start",
    values: ["start", "end"]
  },
  loading: {
    type: Boolean,
    default: false
  },
  typing: {
    type: definePropType([Boolean, Object])
  },
  messageRender: {
    type: definePropType(Function)
  },
  loadingRender: {
    type: definePropType(Function)
  },
  variant: {
    type: definePropType(
      String
    ),
    default: "filled",
    values: ["filled", "borderless", "outlined", "shadow"]
  },
  shape: {
    type: definePropType(String),
    values: ["round", "corner", "arrow"]
  },
  onTypingComplete: {
    type: definePropType(Function)
  },
  header: {
    type: definePropType([Object, String])
  },
  content: {
    type: definePropType([Object, String])
  },
  footer: {
    type: definePropType([Object, String])
  },
  headerStyle: {
    type: definePropType([String, Object, Array])
  },
  headerClass: {
    type: String
  },
  contentStyle: {
    type: definePropType([String, Object, Array])
  },
  contentClass: {
    type: String
  },
  footerStyle: {
    type: definePropType([String, Object, Array])
  },
  footerClass: {
    type: String
  }
});
const bubbleEmits = {};

export { bubbleEmits, bubbleProps };
//# sourceMappingURL=bubble.mjs.map
