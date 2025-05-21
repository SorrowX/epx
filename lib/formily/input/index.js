'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('@formily/vue');
var elementPlus = require('element-plus');
var index = require('../preview-text/index.js');
var transformComponent = require('../__builtins__/shared/transform-component.js');
var utils = require('../__builtins__/shared/utils.js');

const TransformElInput = transformComponent.transformComponent(elementPlus.ElInput, {
  change: "update:modelValue"
});
const InnerInput = vue.connect(
  TransformElInput,
  vue.mapProps({
    value: "modelValue",
    readOnly: "readonly"
  }),
  vue.mapReadPretty(index.PreviewText.Input)
);
const TextArea = vue.connect(
  InnerInput,
  vue.mapProps((props) => {
    return {
      ...props,
      type: "textarea"
    };
  }),
  vue.mapReadPretty(index.PreviewText.Input)
);
const Input = utils.composeExport(InnerInput, {
  TextArea
});

exports.Input = Input;
exports["default"] = Input;
//# sourceMappingURL=index.js.map
