import { connect, mapProps, mapReadPretty } from '@formily/vue';
import { ElInputNumber } from 'element-plus';
import { PreviewText } from '../preview-text/index.mjs';
import { transformComponent } from '../__builtins__/shared/transform-component.mjs';

const TransformElInputNumber = transformComponent(
  ElInputNumber,
  {
    change: "update:modelValue"
  }
);
const InputNumber = connect(
  TransformElInputNumber,
  mapProps(
    {
      value: "modelValue",
      readOnly: "readonly"
    },
    (props) => {
      let controlsPosition = "right";
      if (props.controlsPosition) {
        controlsPosition = props.controlsPosition;
      }
      return {
        controlsPosition
      };
    }
  ),
  mapReadPretty(PreviewText.Input)
);

export { InputNumber, InputNumber as default };
//# sourceMappingURL=index.mjs.map
