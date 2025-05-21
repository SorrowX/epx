'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var iconsVue = require('@element-plus/icons-vue');
var hooks = require('./hooks.js');
var constant = require('./constant.js');

const ArrayBaseSortHandle = vue.defineComponent({
  name: "ArrayBaseSortHandle",
  inheritAttrs: false,
  setup(props, { attrs, slots }) {
    const { field, form } = hooks.useArray();
    return () => {
      if (!field)
        return null;
      return vue.h(
        elementPlus.ElButton,
        {
          size: "small",
          link: true,
          icon: iconsVue.Rank,
          disabled: form == null ? void 0 : form.disabled,
          ...attrs,
          class: [(form == null ? void 0 : form.disabled) ? "" : constant.sortHandleKls.slice(1)].concat(
            attrs.class
          )
        },
        {
          default: () => {
            var _a;
            return [(_a = slots == null ? void 0 : slots.default) == null ? void 0 : _a.call(slots)];
          }
        }
      );
    };
  }
});

exports.ArrayBaseSortHandle = ArrayBaseSortHandle;
//# sourceMappingURL=sort-handle.js.map
