'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var flex = require('./flex.js');
var helper = require('./helper.js');
var tags = require('../../../constants/tags.js');

var Flex = vue.defineComponent({
  name: "ElFlex",
  inheritAttrs: false,
  props: flex.flexProps,
  setup(props, { attrs, slots }) {
    const ns = elementPlus.useNamespace("flex");
    const prefixCls = ns.b();
    const mergedCls = vue.computed(() => [
      prefixCls,
      helper.createFlexClassNames(prefixCls, props),
      {
        [`${prefixCls}-gap-${props.gap}`]: helper.isPresetSize(props.gap),
        [`${prefixCls}-vertical`]: props.vertical
      }
    ]);
    return () => {
      const {
        flex,
        gap,
        component: Component = tags.DIV_TAG,
        ...othersProps
      } = props;
      const mergedStyle = {};
      if (flex) {
        mergedStyle.flex = flex;
      }
      if (gap && !helper.isPresetSize(gap)) {
        mergedStyle.gap = `${gap}px`;
      }
      return vue.h(
        Component,
        {
          class: [attrs.class, mergedCls.value],
          style: [attrs.style, mergedStyle],
          ...helper.omit(othersProps, ["justify", "wrap", "align", "vertical"])
        },
        {
          default: () => {
            var _a;
            return (_a = slots.default) == null ? void 0 : _a.call(slots);
          }
        }
      );
    };
  }
});

exports["default"] = Flex;
//# sourceMappingURL=index.js.map
