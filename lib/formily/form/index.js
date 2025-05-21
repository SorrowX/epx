'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var vue$1 = require('@formily/vue');
var index = require('../preview-text/index.js');
var index$1 = require('../form-layout/index.js');

const FormProvider = vue$1.FormProvider;
const Form = vue.defineComponent({
  name: "FForm",
  props: [
    "form",
    "component",
    "previewTextPlaceholder",
    "onAutoSubmit",
    "onAutoSubmitFailed"
  ],
  setup(props, { attrs, slots }) {
    const top = vue$1.useForm();
    return () => {
      const {
        form,
        component = "form",
        onAutoSubmit = attrs.onAutoSubmit,
        onAutoSubmitFailed = attrs.onAutoSubmitFailed,
        previewTextPlaceholder = slots == null ? void 0 : slots.previewTextPlaceholder
      } = props;
      const renderContent = (form2) => {
        return vue$1.h(
          index.PreviewText.Placeholder,
          {
            value: previewTextPlaceholder
          },
          {
            default: () => [
              vue$1.h(
                index$1.FormLayout,
                { ...attrs },
                {
                  default: () => [
                    vue$1.h(
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
        return vue$1.h(
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

exports.Form = Form;
exports["default"] = Form;
//# sourceMappingURL=index.js.map
