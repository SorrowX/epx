import { defineComponent, computed, h } from 'vue';
import { useNamespace } from 'element-plus';
import { flexProps } from './flex.mjs';
import { createFlexClassNames, isPresetSize, omit } from './helper.mjs';
import { DIV_TAG } from '../../../constants/tags.mjs';

var Flex = defineComponent({
  name: "ElFlex",
  inheritAttrs: false,
  props: flexProps,
  setup(props, { attrs, slots }) {
    const ns = useNamespace("flex");
    const prefixCls = ns.b();
    const mergedCls = computed(() => [
      prefixCls,
      createFlexClassNames(prefixCls, props),
      {
        [`${prefixCls}-gap-${props.gap}`]: isPresetSize(props.gap),
        [`${prefixCls}-vertical`]: props.vertical
      }
    ]);
    return () => {
      const {
        flex,
        gap,
        component: Component = DIV_TAG,
        ...othersProps
      } = props;
      const mergedStyle = {};
      if (flex) {
        mergedStyle.flex = flex;
      }
      if (gap && !isPresetSize(gap)) {
        mergedStyle.gap = `${gap}px`;
      }
      return h(
        Component,
        {
          class: [attrs.class, mergedCls.value],
          style: [attrs.style, mergedStyle],
          ...omit(othersProps, ["justify", "wrap", "align", "vertical"])
        },
        {
          default: () => {
            var _a;
            return (_a = slots.default) == null ? void 0 : _a.call(slots);
          }
        }
      );
    };
  }
});

export { Flex as default };
//# sourceMappingURL=index.mjs.map
