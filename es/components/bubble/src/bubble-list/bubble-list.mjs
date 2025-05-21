import { buildProps, definePropType } from 'element-plus/es/utils/index';

const bubbleListProps = buildProps({
  autoScroll: {
    type: Boolean,
    default: true
  },
  items: {
    type: definePropType(Array),
    default: () => []
  },
  roles: {
    type: definePropType([Object, Function])
  },
  onLastBubbleTypingComplete: {
    type: definePropType(Function)
  }
});
const bubbleListEmits = {};

export { bubbleListEmits, bubbleListProps };
//# sourceMappingURL=bubble-list.mjs.map
