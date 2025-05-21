'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var reactiveVue = require('@formily/reactive-vue');
var vue$1 = require('@formily/vue');
var elementPlus = require('element-plus');

const Reset = reactiveVue.observer(
  vue.defineComponent({
    name: "FReset",
    inheritAttrs: false,
    props: {
      forceClear: {
        type: Boolean,
        default: false
      },
      validate: {
        type: Boolean,
        default: false
      }
    },
    setup(props, { attrs, slots }) {
      const formRef = vue$1.useParentForm();
      return () => {
        const form = formRef == null ? void 0 : formRef.value;
        return vue.h(
          elementPlus.ElButton,
          {
            ...attrs,
            onClick: (e) => {
              if (attrs == null ? void 0 : attrs.onClick) {
                if (attrs.onClick(e) === false)
                  return;
              }
              form == null ? void 0 : form.reset("*", {
                forceClear: props.forceClear,
                validate: props.validate
              }).then(attrs.onResetValidateSuccess).catch(attrs.onResetValidateFailed);
            }
          },
          slots
        );
      };
    }
  })
);

exports.Reset = Reset;
exports["default"] = Reset;
//# sourceMappingURL=index.js.map
