'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('@formily/vue');
var elementPlus = require('element-plus');
var index = require('../preview-text/index.js');
var transformComponent = require('../__builtins__/shared/transform-component.js');

const TransformElCascader = transformComponent.transformComponent(elementPlus.ElCascader, {
  change: "update:modelValue"
});
const Cascader = vue.connect(
  TransformElCascader,
  vue.mapProps({ dataSource: "options", value: "modelValue" }),
  vue.mapReadPretty(index.PreviewText.Cascader)
);

exports.Cascader = Cascader;
exports["default"] = Cascader;
//# sourceMappingURL=index.js.map
