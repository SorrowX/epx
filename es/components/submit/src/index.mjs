import { defineComponent, ref, h } from 'vue';
import { ElButton } from 'element-plus';
import { submitProps } from './submit.mjs';
import { useForm } from '../../../hooks/use-form/index.mjs';
import { isFunction } from 'element-plus/es/utils/index';

var Submit = defineComponent({
  name: "ElSubmit",
  inheritAttrs: false,
  props: submitProps,
  setup(props, { attrs, slots }) {
    const form = useForm();
    const validateField = form == null ? void 0 : form.validateField;
    const loading = ref(false);
    return () => {
      const { onClick, onSubmit, onSubmitSuccess, onSubmitFailed } = props;
      return h(
        ElButton,
        {
          nativeType: "button",
          type: "primary",
          loading: loading.value,
          ...attrs,
          onClick: (e) => {
            if (isFunction(onClick)) {
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

export { Submit as default };
//# sourceMappingURL=index.mjs.map
