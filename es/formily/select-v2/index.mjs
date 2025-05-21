import { connect, mapProps, mapReadPretty } from '@formily/vue';
import { ElSelectV2 } from 'element-plus';
import { FormPath } from '@formily/shared';
import { PreviewText } from '../preview-text/index.mjs';
import { transformComponent } from '../__builtins__/shared/transform-component.mjs';

const TransformElSelectV2 = transformComponent(ElSelectV2, {
  change: "update:modelValue"
});
const SelectV2 = connect(
  TransformElSelectV2,
  mapProps((props, field) => {
    var _a;
    return {
      options: (_a = FormPath.getIn(field, "dataSource")) != null ? _a : [],
      modelValue: FormPath.getIn(field, "value")
    };
  }),
  mapReadPretty(PreviewText.Select)
);

export { SelectV2, SelectV2 as default };
//# sourceMappingURL=index.mjs.map
