import { connect, mapProps, mapReadPretty } from '@formily/vue';
import { ElInput } from 'element-plus';
import { PreviewText } from '../preview-text/index.mjs';
import { transformComponent } from '../__builtins__/shared/transform-component.mjs';
import { composeExport } from '../__builtins__/shared/utils.mjs';

const TransformElInput = transformComponent(ElInput, {
  change: "update:modelValue"
});
const InnerInput = connect(
  TransformElInput,
  mapProps({
    value: "modelValue",
    readOnly: "readonly"
  }),
  mapReadPretty(PreviewText.Input)
);
const TextArea = connect(
  InnerInput,
  mapProps((props) => {
    return {
      ...props,
      type: "textarea"
    };
  }),
  mapReadPretty(PreviewText.Input)
);
const Input = composeExport(InnerInput, {
  TextArea
});

export { Input, Input as default };
//# sourceMappingURL=index.mjs.map
