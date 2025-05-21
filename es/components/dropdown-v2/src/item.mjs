import { defineComponent, inject, getCurrentInstance, computed, unref, h } from 'vue';
import { useNamespace, ElIcon } from 'element-plus';
import { ArrowRight } from '@element-plus/icons-vue';
import useItem from './use-item.mjs';
import { LI_TAG, SPAN_TAG } from '../../../constants/tags.mjs';
import { definePropType, isArray, isFunction } from 'element-plus/es/utils/index';

var Item = defineComponent({
  name: "ElDropdownV2Item",
  inheritAttrs: false,
  props: {
    option: {
      type: definePropType(Object),
      required: true
    },
    showArrowRight: {
      type: Boolean,
      default: false
    },
    level: {
      type: definePropType(Number)
    }
  },
  setup(props, { attrs, slots }) {
    const ns = useNamespace("dropdown-v2-item");
    const rootPanel = inject("rootPanel");
    const instance = getCurrentInstance();
    const label = computed(() => props.option.label);
    const value = computed(() => props.option.value);
    const divided = computed(() => !!props.option.divided);
    const disabled = computed(() => !!props.option.disabled);
    const hasChild = computed(
      () => isArray(props.option.children) && props.option.children.length
    );
    const trigger = computed(() => rootPanel.props.trigger);
    const isActive = computed(
      () => rootPanel.openedItems.includes(unref(value))
    );
    const { valuePath } = useItem(
      instance,
      computed(() => unref(value))
    );
    const handleClick = () => {
      var _a, _b;
      const data = {
        value: unref(value),
        valuePath: unref(valuePath)
      };
      if (!((_a = props.option) == null ? void 0 : _a.disabled) && unref(trigger) === "hover") {
        rootPanel.handleItemClick({ ...data });
      }
      if (!((_b = props.option) == null ? void 0 : _b.disabled) && unref(trigger) === "click" && !unref(hasChild)) {
        rootPanel.closeSubItem(data.value, data.valuePath);
        rootPanel.emitSelect({ ...data });
      }
    };
    const renderLabel = () => {
      const { renderLabel: renderLabel2 } = props.option;
      return isFunction(renderLabel2) ? renderLabel2(props.option) : [
        h(SPAN_TAG, { class: ns.e("label") }, unref(label)),
        props.showArrowRight ? h(
          ElIcon,
          { size: 14 },
          {
            default: () => h(ArrowRight)
          }
        ) : ""
      ];
    };
    return () => {
      return h(
        LI_TAG,
        {
          ...attrs,
          class: [
            ns.b(),
            isActive.value ? ns.m("active") : "",
            divided.value ? ns.m("divided") : "",
            disabled.value ? ns.m("disabled") : ""
          ],
          onClick: handleClick
        },
        [slots.default ? slots.default() : renderLabel()]
      );
    };
  }
});

export { Item as default };
//# sourceMappingURL=item.mjs.map
