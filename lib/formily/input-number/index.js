'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('@formily/vue');
var elementPlus = require('element-plus');
var index = require('../preview-text/index.js');
var transformComponent = require('../__builtins__/shared/transform-component.js');

const TransformElInputNumber = transformComponent.transformComponent(
  elementPlus.ElInputNumber,
  {
    change: "update:modelValue"
  }
);
const InputNumber = vue.connect(
  TransformElInputNumber,
  vue.mapProps(
    {
      value: "modelValue",
      readOnly: "readonly"
    },
    (props) => {
      let controlsPosition = "right";
      if (props.controlsPosition) {
        controlsPosition = props.controlsPosition;
      }
      return {
        controlsPosition
      };
    }
  ),
  vue.mapReadPretty(index.PreviewText.Input)
);

exports.InputNumber = InputNumber;
exports["default"] = InputNumber;
//# sourceMappingURL=index.js.map
