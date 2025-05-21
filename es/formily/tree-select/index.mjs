import { connect, mapProps, mapReadPretty } from '@formily/vue';
import { ElTreeSelect } from 'element-plus';
import { PreviewText } from '../preview-text/index.mjs';
import { transformComponent } from '../__builtins__/shared/transform-component.mjs';

const TransformElTreeSelect = transformComponent(
  ElTreeSelect,
  {
    change: "update:modelValue"
  }
);
const TreeSelect = connect(
  TransformElTreeSelect,
  mapProps({
    value: "modelValue",
    dataSource: "data"
  }),
  mapReadPretty(PreviewText.Cascader)
);

export { TreeSelect, TreeSelect as default };
//# sourceMappingURL=index.mjs.map
