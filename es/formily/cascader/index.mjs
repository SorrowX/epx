import { connect, mapProps, mapReadPretty } from '@formily/vue';
import { ElCascader } from 'element-plus';
import { PreviewText } from '../preview-text/index.mjs';
import { transformComponent } from '../__builtins__/shared/transform-component.mjs';

const TransformElCascader = transformComponent(ElCascader, {
  change: "update:modelValue"
});
const Cascader = connect(
  TransformElCascader,
  mapProps({ dataSource: "options", value: "modelValue" }),
  mapReadPretty(PreviewText.Cascader)
);

export { Cascader, Cascader as default };
//# sourceMappingURL=index.mjs.map
