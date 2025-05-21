import { buildProps, definePropType } from 'element-plus/es/utils/index';

const loadMoreProps = buildProps({
  status: {
    type: definePropType(String),
    default: "more"
  },
  iconType: {
    type: definePropType(String),
    default: "snow",
    values: ["snow", "circle"]
  },
  color: {
    type: definePropType(String)
  },
  textColor: {
    type: definePropType(String)
  },
  iconSize: {
    type: definePropType([String, Number]),
    default: 16
  },
  moreText: {
    type: definePropType(String)
  },
  loadingText: {
    type: definePropType(String)
  },
  noMoreText: {
    type: definePropType(String)
  },
  errorText: {
    type: definePropType(String)
  },
  height: {
    type: definePropType([String, Number]),
    default: "36"
  }
});
const loadMoreEmits = {
  click: (status) => !!status
};

export { loadMoreEmits, loadMoreProps };
//# sourceMappingURL=load-more.mjs.map
