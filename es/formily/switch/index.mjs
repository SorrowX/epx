import { connect, mapProps, mapReadPretty } from '@formily/vue';
import { ElSwitch } from 'element-plus';
import { PreviewText } from '../preview-text/index.mjs';
import { transformComponent } from '../__builtins__/shared/transform-component.mjs';

const TransformElSwitch = transformComponent(ElSwitch, {
  change: "update:modelValue"
});
const Switch = connect(
  TransformElSwitch,
  mapProps({
    value: "modelValue",
    readOnly: "readonly"
  }),
  mapReadPretty(PreviewText.TextSwitch)
);

export { Switch, Switch as default };
//# sourceMappingURL=index.mjs.map
