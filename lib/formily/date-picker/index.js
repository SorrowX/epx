'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('@formily/vue');
var elementPlus = require('element-plus');
var index = require('../preview-text/index.js');
var util = require('./util.js');
var transformComponent = require('../__builtins__/shared/transform-component.js');

const TransformElDatePicker = transformComponent.transformComponent(
  elementPlus.ElDatePicker,
  {
    change: "update:modelValue"
  }
);
const DatePicker = vue.connect(
  TransformElDatePicker,
  vue.mapProps(
    {
      value: "modelValue",
      readOnly: "readonly"
    },
    (props) => {
      return {
        ...props,
        format: props.format || util.getDefaultFormat(props),
        valueFormat: props.valueFormat || util.getDefaultFormat(props, "valueFormat")
      };
    }
  ),
  vue.mapReadPretty(index.PreviewText.DatePicker)
);

exports.DatePicker = DatePicker;
exports["default"] = DatePicker;
//# sourceMappingURL=index.js.map
