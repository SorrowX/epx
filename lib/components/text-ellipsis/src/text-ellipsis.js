'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('element-plus/es/utils/index');

const textEllipsisProps = index.buildProps({
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
  clickAction: (event) => index.isObject(event)
};

exports.textEllipsisEmits = textEllipsisEmits;
exports.textEllipsisProps = textEllipsisProps;
//# sourceMappingURL=text-ellipsis.js.map
