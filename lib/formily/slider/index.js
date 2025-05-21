'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('@formily/vue');
var elementPlus = require('element-plus');
var shared = require('@formily/shared');
var index = require('../preview-text/index.js');
var transformComponent = require('../__builtins__/shared/transform-component.js');

const TransformElSlider = transformComponent.transformComponent(elementPlus.ElSlider, {
  change: "update:modelValue"
});
const Slider = vue.connect(
  TransformElSlider,
  vue.mapProps((props, field) => {
    return {
      modelValue: shared.FormPath.getIn(field, "value")
    };
  }),
  vue.mapReadPretty(index.PreviewText.Input)
);

exports.Slider = Slider;
exports["default"] = Slider;
//# sourceMappingURL=index.js.map
