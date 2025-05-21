'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('@formily/vue');
var elementPlus = require('element-plus');
var index = require('../preview-text/index.js');
var transformComponent = require('../__builtins__/shared/transform-component.js');

const TransformElSwitch = transformComponent.transformComponent(elementPlus.ElSwitch, {
  change: "update:modelValue"
});
const Switch = vue.connect(
  TransformElSwitch,
  vue.mapProps({
    value: "modelValue",
    readOnly: "readonly"
  }),
  vue.mapReadPretty(index.PreviewText.TextSwitch)
);

exports.Switch = Switch;
exports["default"] = Switch;
//# sourceMappingURL=index.js.map
