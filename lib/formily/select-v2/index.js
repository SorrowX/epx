'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('@formily/vue');
var elementPlus = require('element-plus');
var shared = require('@formily/shared');
var index = require('../preview-text/index.js');
var transformComponent = require('../__builtins__/shared/transform-component.js');

const TransformElSelectV2 = transformComponent.transformComponent(elementPlus.ElSelectV2, {
  change: "update:modelValue"
});
const SelectV2 = vue.connect(
  TransformElSelectV2,
  vue.mapProps((props, field) => {
    var _a;
    return {
      options: (_a = shared.FormPath.getIn(field, "dataSource")) != null ? _a : [],
      modelValue: shared.FormPath.getIn(field, "value")
    };
  }),
  vue.mapReadPretty(index.PreviewText.Select)
);

exports.SelectV2 = SelectV2;
exports["default"] = SelectV2;
//# sourceMappingURL=index.js.map
