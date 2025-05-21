'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var vue$1 = require('@formily/vue');
var index = require('../submit/index.js');
var index$1 = require('../reset/index.js');

const isDef = (v) => v !== void 0 && v !== null && v !== "";
var Actions = vue.defineComponent({
  name: "Actions",
  props: {
    onSubmit: Function,
    onReset: Function,
    submitProps: {
      type: Object
    },
    resetProps: {
      type: Object
    },
    submitText: String,
    resetText: String,
    layout: {
      type: String,
      default: "submit,reset"
    }
  },
  setup(props) {
    const formRef = vue$1.useForm();
    const form = formRef.value;
    const { onSubmit, onReset } = props;
    const handleReset = () => setTimeout(() => onReset == null ? void 0 : onReset({}), 0);
    const handleSubmit = async (values) => {
      values = Object.keys(values).reduce((pre, key) => {
        const value = values[key];
        if (isDef(value)) {
          pre = {
            ...pre,
            [key]: value
          };
        }
        return pre;
      }, {});
      form.submitting = true;
      await (onSubmit == null ? void 0 : onSubmit(values));
      form.submitting = false;
    };
    return () => {
      const { submitProps, resetProps, submitText, resetText, layout } = props;
      const renderSubmit = () => {
        return submitText ? vue.h(
          index.Submit,
          { type: "primary", onSubmit: handleSubmit, ...submitProps },
          { default: () => submitText }
        ) : "";
      };
      const renderReset = () => {
        return resetText ? vue.h(
          index$1.Reset,
          { onClick: handleReset, ...resetProps },
          { default: () => resetText }
        ) : "";
      };
      return vue.h(
        "div",
        {
          class: "fep-actions"
        },
        layout.split(",").map((item) => {
          if (item === "submit") {
            return renderSubmit();
          } else if (item === "reset") {
            return renderReset();
          }
          return null;
        }).filter((vnode) => vnode)
      );
    };
  }
});

exports["default"] = Actions;
//# sourceMappingURL=actions.js.map
