import { buildProps, isObject } from 'element-plus/es/utils/index';

const textEllipsisProps = buildProps({
  rows: {
    type: [Number, String],
    default: 1
  },
  dots: {
    type: String,
    default: "..."
  },
  content: {
    type: String,
    default: ""
  },
  expandText: {
    type: String,
    default: ""
  },
  collapseText: {
    type: String,
    default: ""
  },
  position: {
    type: String,
    default: "end",
    values: ["start", "middle", "end"]
  },
  showOverflowTooltip: {
    type: Boolean,
    default: false
  },
  tooltipOptions: {
    type: Object,
    default: () => ({})
  }
});
const textEllipsisEmits = {
  clickAction: (event) => isObject(event)
};

export { textEllipsisEmits, textEllipsisProps };
//# sourceMappingURL=text-ellipsis.mjs.map
