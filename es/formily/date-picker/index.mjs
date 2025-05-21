import { connect, mapProps, mapReadPretty } from '@formily/vue';
import { ElDatePicker } from 'element-plus';
import { PreviewText } from '../preview-text/index.mjs';
import { getDefaultFormat } from './util.mjs';
import { transformComponent } from '../__builtins__/shared/transform-component.mjs';

const TransformElDatePicker = transformComponent(
  ElDatePicker,
  {
    change: "update:modelValue"
  }
);
const DatePicker = connect(
  TransformElDatePicker,
  mapProps(
    {
      value: "modelValue",
      readOnly: "readonly"
    },
    (props) => {
      return {
        ...props,
        format: props.format || getDefaultFormat(props),
        valueFormat: props.valueFormat || getDefaultFormat(props, "valueFormat")
      };
    }
  ),
  mapReadPretty(PreviewText.DatePicker)
);

export { DatePicker, DatePicker as default };
//# sourceMappingURL=index.mjs.map
