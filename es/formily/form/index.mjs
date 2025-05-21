import { defineComponent } from 'vue';
import { useForm, h, FormProvider as FormProvider$1 } from '@formily/vue';
import { PreviewText } from '../preview-text/index.mjs';
import { FormLayout } from '../form-layout/index.mjs';

const FormProvider = FormProvider$1;
const Form = defineComponent({
  name: "FForm",
  props: [
    "form",
    "component",
    "previewTextPlaceholder",
    "onAutoSubmit",
    "onAutoSubmitFailed"
  ],
  setup(props, { attrs, slots }) {
    const top = useForm();
    return () => {
      const {
        form,
        component = "form",
        onAutoSubmit = attrs.onAutoSubmit,
        onAutoSubmitFailed = attrs.onAutoSubmitFailed,
        previewTextPlaceholder = slots == null ? void 0 : slots.previewTextPlaceholder
      } = props;
      const renderContent = (form2) => {
        return h(
          PreviewText.Placeholder,
          {
            value: previewTextPlaceholder
          },
          {
            default: () => [
              h(
                FormLayout,
                { ...attrs },
                {
                  default: () => [
                    h(
                      component,
                      {
                        onSubmit: (e) => {
                          var _a, _b;
                          (_a = e == null ? void 0 : e.stopPropagation) == null ? void 0 : _a.call(e);
                          (_b = e == null ? void 0 : e.preventDefault) == null ? void 0 : _b.call(e);
                          form2.submit(onAutoSubmit).catch(onAutoSubmitFailed);
                        }
                      },
                      slots
                    )
                  ]
                }
              )
            ]
          }
        );
      };
      if (form) {
        return h(
          FormProvider,
          { form },
          {
            default: () => renderContent(form)
          }
        );
      }
      if (!top.value)
        throw new Error("must pass form instance by createForm");
      return renderContent(top.value);
    };
  }
});

export { Form, Form as default };
//# sourceMappingURL=index.mjs.map
