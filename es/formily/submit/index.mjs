import { defineComponent, h } from 'vue';
import { observer } from '@formily/reactive-vue';
import { useParentForm } from '@formily/vue';
import { ElButton } from 'element-plus';

const Submit = observer(
  defineComponent({
    name: "FSubmit",
    inheritAttrs: false,
    props: ["onClick", "onSubmit", "onSubmitSuccess", "onSubmitFailed"],
    setup(props, { attrs, slots }) {
      const formRef = useParentForm();
      return () => {
        const { onClick, onSubmit, onSubmitSuccess, onSubmitFailed } = props;
        const form = formRef == null ? void 0 : formRef.value;
        return h(
          ElButton,
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

export { Submit, Submit as default };
//# sourceMappingURL=index.mjs.map
