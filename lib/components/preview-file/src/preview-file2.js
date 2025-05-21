'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('element-plus/es/utils/index');

const previewFileProps = index.buildProps({
  fileList: {
    type: index.definePropType(Array),
    default: () => index.mutable([])
  }
});
const previewFileEmits = {
  click: (item) => !!item
};

exports.previewFileEmits = previewFileEmits;
exports.previewFileProps = previewFileProps;
//# sourceMappingURL=preview-file2.js.map
