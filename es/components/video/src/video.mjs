import { buildProps, definePropType, isBoolean } from 'element-plus/es/utils/index';

const videoProps = buildProps({
  src: {
    type: definePropType(String)
  },
  poster: {
    type: definePropType(String)
  },
  duration: {
    type: definePropType([String, Number])
  },
  onCoverLoad: {
    type: definePropType(Function)
  },
  readonly: {
    type: definePropType(Boolean),
    default: false
  }
});
const videoEmits = {
  click: (paused, event) => {
    return isBoolean(paused) && event instanceof MouseEvent;
  }
};

export { videoEmits, videoProps };
//# sourceMappingURL=video.mjs.map
