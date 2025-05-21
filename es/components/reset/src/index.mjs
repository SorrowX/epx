import { defineComponent, h } from 'vue';
import { ElButton } from 'element-plus';
import { resetProps } from './reset.mjs';
import { useForm } from '../../../hooks/use-form/index.mjs';
import { isFunction } from 'element-plus/es/utils/index';

var Reset = defineComponent({
  name: "ElReset",
  inheritAttrs: false,
  props: resetProps,
  setup(props, { attrs, slots }) {
    const form = useForm();
    const resetFields = form == null ? void 0 : form.resetFields;
    return () => {
      return h(
        ElButton,
        {
          nativeType: "button",
          ...attrs,
          onClick: (e) => {
            if (isFunction(attrs.onClick)) {
              if (attrs.onClick(e) === false)
                return;
            }
            resetFields == null ? void 0 : resetFields();
          }
        },
        slots
      );
    };
  }
});

export { Reset as default };
//# sourceMappingURL=index.mjs.map
