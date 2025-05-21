'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var submit = require('./submit.js');
var index = require('../../../hooks/use-form/index.js');
var index$1 = require('element-plus/es/utils/index');

var Submit = vue.defineComponent({
  name: "ElSubmit",
  inheritAttrs: false,
  props: submit.submitProps,
  setup(props, { attrs, slots }) {
    const form = index.useForm();
    const validateField = form == null ? void 0 : form.validateField;
    const loading = vue.ref(false);
    return () => {
      const { onClick, onSubmit, onSubmitSuccess, onSubmitFailed } = props;
      return vue.h(
        elementPlus.ElButton,
        {
          nativeType: "button",
          type: "primary",
          loading: loading.value,
          ...attrs,
          onClick: (e) => {
            if (index$1.isFunction(onClick)) {
              if (onClick(e) === false)
                return;
            }
            if (loading.value)
              return;
            if (onSubmit && validateField) {
              validateField(
                void 0,
                async (valid, fields) => {
                  var _a, _b;
                  try {
                    if (valid) {
                      loading.value = true;
                      await ((_b = onSubmit((_a = form.model) != null ? _a : {})) == null ? void 0 : _b.then(onSubmitSuccess));
                    } else {
                      throw fields;
                    }
                  } catch (e2) {
                    onSubmitFailed == null ? void 0 : onSubmitFailed(e2);
                  } finally {
                    loading.value = false;
                  }
                }
              );
            }
          }
        },
        slots
      );
    };
  }
});

exports["default"] = Submit;
//# sourceMappingURL=index.js.map
