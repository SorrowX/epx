'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('@formily/vue');
var elementPlus = require('element-plus');
var index = require('../preview-text/index.js');
var transformComponent = require('../__builtins__/shared/transform-component.js');

const TransformElTreeSelect = transformComponent.transformComponent(
  elementPlus.ElTreeSelect,
  {
    change: "update:modelValue"
  }
);
const TreeSelect = vue.connect(
  TransformElTreeSelect,
  vue.mapProps({
    value: "modelValue",
    dataSource: "data"
  }),
  vue.mapReadPretty(index.PreviewText.Cascader)
);

exports.TreeSelect = TreeSelect;
exports["default"] = TreeSelect;
//# sourceMappingURL=index.js.map
