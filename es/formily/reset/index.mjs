import { defineComponent, h } from 'vue';
import { observer } from '@formily/reactive-vue';
import { useParentForm } from '@formily/vue';
import { ElButton } from 'element-plus';

const Reset = observer(
  defineComponent({
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
      const formRef = useParentForm();
      return () => {
        const form = formRef == null ? void 0 : formRef.value;
        return h(
          ElButton,
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

export { Reset, Reset as default };
//# sourceMappingURL=index.mjs.map
