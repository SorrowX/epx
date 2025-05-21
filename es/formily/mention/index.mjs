import { connect, mapProps, mapReadPretty } from '@formily/vue';
import { ElMention } from 'element-plus';
import { FormPath } from '@formily/shared';
import { PreviewText } from '../preview-text/index.mjs';
import { transformComponent } from '../__builtins__/shared/transform-component.mjs';

const TransformElMention = transformComponent(ElMention, {
  change: "update:modelValue"
});
const Mention = connect(
  TransformElMention,
  mapProps((props, field) => {
    var _a;
    return {
      options: (_a = FormPath.getIn(field, "dataSource")) != null ? _a : [],
      modelValue: FormPath.getIn(field, "value"),
      readOnly: "readonly"
    };
  }),
  mapReadPretty(PreviewText.Input)
);

export { Mention, Mention as default };
//# sourceMappingURL=index.mjs.map
