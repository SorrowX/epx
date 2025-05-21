import { defineComponent, h } from 'vue';
import { useForm } from '@formily/vue';
import { Submit } from '../submit/index.mjs';
import { Reset } from '../reset/index.mjs';

const isDef = (v) => v !== void 0 && v !== null && v !== "";
var Actions = defineComponent({
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
    const formRef = useForm();
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
        return submitText ? h(
          Submit,
          { type: "primary", onSubmit: handleSubmit, ...submitProps },
          { default: () => submitText }
        ) : "";
      };
      const renderReset = () => {
        return resetText ? h(
          Reset,
          { onClick: handleReset, ...resetProps },
          { default: () => resetText }
        ) : "";
      };
      return h(
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

export { Actions as default };
//# sourceMappingURL=actions.mjs.map
