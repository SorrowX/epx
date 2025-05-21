'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var reactiveVue = require('@formily/reactive-vue');
var vue$1 = require('@formily/vue');
var elementPlus = require('element-plus');

const Submit = reactiveVue.observer(
  vue.defineComponent({
    name: "FSubmit",
    inheritAttrs: false,
    props: ["onClick", "onSubmit", "onSubmitSuccess", "onSubmitFailed"],
    setup(props, { attrs, slots }) {
      const formRef = vue$1.useParentForm();
      return () => {
        const { onClick, onSubmit, onSubmitSuccess, onSubmitFailed } = props;
        const form = formRef == null ? void 0 : formRef.value;
        return vue.h(
          elementPlus.ElButton,
          {
            nativeType: (attrs == null ? void 0 : attrs.submit) ? "button" : "submit",
            type: "primary",
            ...attrs,
            loading: attrs.loading !== void 0 ? attrs.loading : form == null ? void 0 : form.submitting,
            onClick: (e) => {
              if (onClick) {
                if (onClick(e) === false)
                  return;
              }
              if (onSubmit) {
                (form == null ? void 0 : form.submit).call(
                  form,
                  onSubmit,
                  attrs.scrollIntoView
                ).then(onSubmitSuccess).catch(onSubmitFailed);
              }
            }
          },
          slots
        );
      };
    }
  })
);

exports.Submit = Submit;
exports["default"] = Submit;
//# sourceMappingURL=index.js.map
