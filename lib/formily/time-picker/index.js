'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('@formily/vue');
var elementPlus = require('element-plus');
var index = require('../preview-text/index.js');
var transformComponent = require('../__builtins__/shared/transform-component.js');

const TransformElTimePicker = transformComponent.transformComponent(
  elementPlus.ElTimePicker,
  {
    change: "update:modelValue"
  }
);
const TimePicker = vue.connect(
  TransformElTimePicker,
  vue.mapProps({ readOnly: "readonly", value: "modelValue" }),
  vue.mapReadPretty(index.PreviewText.TimePicker)
);

exports.TimePicker = TimePicker;
exports["default"] = TimePicker;
//# sourceMappingURL=index.js.map
