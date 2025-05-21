import { buildProps, definePropType } from 'element-plus/es/utils/index';

const virtualListProps = buildProps({
  list: {
    type: definePropType(Array),
    default: () => []
  },
  itemFixed: {
    type: Boolean,
    default: false
  },
  itemSize: {
    type: definePropType(Number),
    default: 20
  },
  direction: {
    type: String,
    default: "vertical",
    values: ["vertical", "horizontal"]
  },
  overscan: {
    type: Number,
    default: 10
  },
  nativeScrollbar: {
    type: Boolean,
    default: false
  },
  infiniteScroll: {
    type: definePropType(Function)
  },
  infiniteScrollup: {
    type: definePropType(Function)
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
const virtualListEmits = {
  scroll: (e) => !!e
};

export { virtualListEmits, virtualListProps };
//# sourceMappingURL=virtual-list.mjs.map
