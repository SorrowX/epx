'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var iconsVue = require('@element-plus/icons-vue');
var hooks = require('./hooks.js');

const ArrayBaseRemove = vue.defineComponent({
  name: "ArrayBaseRemove",
  inheritAttrs: false,
  props: {
    title: {
      type: String,
      default: ""
    },
    index: {
      type: Number
    }
  },
  setup(props, { attrs, slots }) {
    const ns = elementPlus.useNamespace("array-base");
    const indexRef = hooks.useIndex(props.index);
    const { field, form, keyMap } = hooks.useArray();
    return () => {
      if (!field)
        return null;
      return vue.h(
        elementPlus.ElButton,
        {
          class: `${ns.b("remove")}`,
          link: true,
          size: "small",
          icon: iconsVue.Delete,
          disabled: form == null ? void 0 : form.disabled,
          onClick: (evt) => {
            var _a;
            if (attrs.onClick) {
              return (_a = attrs.onClick) == null ? void 0 : _a.call(attrs, evt, { field, form, keyMap });
            }
            if (form == null ? void 0 : form.disabled)
              return;
            evt.stopPropagation();
            if (keyMap) {
              keyMap == null ? void 0 : keyMap.splice(indexRef.value, 1);
            }
            if (field) {
              field.fieldValue.splice(indexRef.value, 1);
            }
          },
          ...attrs
        },
        {
          default: () => {
            var _a, _b;
            return [(_b = (_a = slots == null ? void 0 : slots.default) == null ? void 0 : _a.call(slots)) != null ? _b : props.title];
          }
        }
      );
    };
  }
});

exports.ArrayBaseRemove = ArrayBaseRemove;
//# sourceMappingURL=remove.js.map
