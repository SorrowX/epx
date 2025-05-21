import { connect, mapProps, mapReadPretty } from '@formily/vue';
import { ElTimePicker } from 'element-plus';
import { PreviewText } from '../preview-text/index.mjs';
import { transformComponent } from '../__builtins__/shared/transform-component.mjs';

const TransformElTimePicker = transformComponent(
  ElTimePicker,
  {
    change: "update:modelValue"
  }
);
const TimePicker = connect(
  TransformElTimePicker,
  mapProps({ readOnly: "readonly", value: "modelValue" }),
  mapReadPretty(PreviewText.TimePicker)
);

export { TimePicker, TimePicker as default };
//# sourceMappingURL=index.mjs.map
