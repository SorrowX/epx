'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('@formily/vue');
var elementPlus = require('element-plus');
var shared = require('@formily/shared');
var index = require('../preview-text/index.js');
var transformComponent = require('../__builtins__/shared/transform-component.js');

const TransformElMention = transformComponent.transformComponent(elementPlus.ElMention, {
  change: "update:modelValue"
});
const Mention = vue.connect(
  TransformElMention,
  vue.mapProps((props, field) => {
    var _a;
    return {
      options: (_a = shared.FormPath.getIn(field, "dataSource")) != null ? _a : [],
      modelValue: shared.FormPath.getIn(field, "value"),
      readOnly: "readonly"
    };
  }),
  vue.mapReadPretty(index.PreviewText.Input)
);

exports.Mention = Mention;
exports["default"] = Mention;
//# sourceMappingURL=index.js.map
