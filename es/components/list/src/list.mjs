import { buildProps, definePropType } from 'element-plus/es/utils/index';

const listProps = buildProps({
  list: {
    type: definePropType(Array),
    default: () => []
  },
  nativeScrollbar: {
    type: Boolean,
    default: false
  },
  infiniteScrollDisabled: {
    type: Boolean,
    default: false
  },
  infiniteScrollDelay: {
    type: Number,
    default: 16
  },
  infiniteScrollDistance: {
    type: Number,
    default: 20
  },
  load: {
    type: definePropType(Function)
  },
  preLoad: {
    type: definePropType(Function)
  },
  finished: {
    type: Boolean,
    default: false
  },
  loadingText: {
    type: String
  },
  errorText: {
    type: String
  },
  noMoreText: {
    type: String
  }
});
const listEmits = {};

export { listEmits, listProps };
//# sourceMappingURL=list.mjs.map
