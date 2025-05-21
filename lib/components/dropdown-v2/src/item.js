'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var iconsVue = require('@element-plus/icons-vue');
var useItem = require('./use-item.js');
var tags = require('../../../constants/tags.js');
var index = require('element-plus/es/utils/index');

var Item = vue.defineComponent({
  name: "ElDropdownV2Item",
  inheritAttrs: false,
  props: {
    option: {
      type: index.definePropType(Object),
      required: true
    },
    showArrowRight: {
      type: Boolean,
      default: false
    },
    level: {
      type: index.definePropType(Number)
    }
  },
  setup(props, { attrs, slots }) {
    const ns = elementPlus.useNamespace("dropdown-v2-item");
    const rootPanel = vue.inject("rootPanel");
    const instance = vue.getCurrentInstance();
    const label = vue.computed(() => props.option.label);
    const value = vue.computed(() => props.option.value);
    const divided = vue.computed(() => !!props.option.divided);
    const disabled = vue.computed(() => !!props.option.disabled);
    const hasChild = vue.computed(
      () => index.isArray(props.option.children) && props.option.children.length
    );
    const trigger = vue.computed(() => rootPanel.props.trigger);
    const isActive = vue.computed(
      () => rootPanel.openedItems.includes(vue.unref(value))
    );
    const { valuePath } = useItem["default"](
      instance,
      vue.computed(() => vue.unref(value))
    );
    const handleClick = () => {
      var _a, _b;
      const data = {
        value: vue.unref(value),
        valuePath: vue.unref(valuePath)
      };
      if (!((_a = props.option) == null ? void 0 : _a.disabled) && vue.unref(trigger) === "hover") {
        rootPanel.handleItemClick({ ...data });
      }
      if (!((_b = props.option) == null ? void 0 : _b.disabled) && vue.unref(trigger) === "click" && !vue.unref(hasChild)) {
        rootPanel.closeSubItem(data.value, data.valuePath);
        rootPanel.emitSelect({ ...data });
      }
    };
    const renderLabel = () => {
      const { renderLabel: renderLabel2 } = props.option;
      return index.isFunction(renderLabel2) ? renderLabel2(props.option) : [
        vue.h(tags.SPAN_TAG, { class: ns.e("label") }, vue.unref(label)),
        props.showArrowRight ? vue.h(
          elementPlus.ElIcon,
          { size: 14 },
          {
            default: () => vue.h(iconsVue.ArrowRight)
          }
        ) : ""
      ];
    };
    return () => {
      return vue.h(
        tags.LI_TAG,
        {
          ...attrs,
          class: [
            ns.b(),
            isActive.value ? ns.m("active") : "",
            divided.value ? ns.m("divided") : "",
            disabled.value ? ns.m("disabled") : ""
          ],
          onClick: handleClick
        },
        [slots.default ? slots.default() : renderLabel()]
      );
    };
  }
});

exports["default"] = Item;
//# sourceMappingURL=item.js.map
