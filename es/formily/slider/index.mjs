import { connect, mapProps, mapReadPretty } from '@formily/vue';
import { ElSlider } from 'element-plus';
import { FormPath } from '@formily/shared';
import { PreviewText } from '../preview-text/index.mjs';
import { transformComponent } from '../__builtins__/shared/transform-component.mjs';

const TransformElSlider = transformComponent(ElSlider, {
  change: "update:modelValue"
});
const Slider = connect(
  TransformElSlider,
  mapProps((props, field) => {
    return {
      modelValue: FormPath.getIn(field, "value")
    };
  }),
  mapReadPretty(PreviewText.Input)
);

export { Slider, Slider as default };
//# sourceMappingURL=index.mjs.map
