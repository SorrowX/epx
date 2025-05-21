import { defineComponent, getCurrentInstance, computed, unref, ref, inject, provide, h } from 'vue';
import { useNamespace, ElTooltip } from 'element-plus';
import { useTimeoutFn } from '@vueuse/core';
import Item from './item.mjs';
import useItem from './use-item.mjs';
import { UL_TAG, DIV_TAG } from '../../../constants/tags.mjs';
import { definePropType, addUnit } from 'element-plus/es/utils/index';

const fallbackPlacements = [
  "right-start",
  "right",
  "right-end",
  "left-start",
  "bottom-start",
  "bottom-end",
  "top-start",
  "top-end"
];
var SubItem = defineComponent({
  name: "ElDropdownV2SubItem",
  inheritAttrs: false,
  props: {
    option: {
      type: definePropType(Object),
      required: true
    },
    level: {
      type: definePropType(Number)
    }
  },
  setup(props, { slots, expose }) {
    const ns = useNamespace("dropdown-v2");
    const instance = getCurrentInstance();
    const value = computed(() => props.option.value);
    const { valuePath, parentItem } = useItem(
      instance,
      computed(() => unref(value))
    );
    const mouseInChild = ref(false);
    const rootPanel = inject("rootPanel");
    const subItem = inject(
      `subItem:${parentItem.value.uid}`
    );
    const vPopper = ref(null);
    const isFirstLevel = computed(() => subItem.level === 0);
    const appendToBody = computed(() => isFirstLevel.value ? true : false);
    const currentPlacement = computed(() => {
      var _a;
      const tooltipOptions2 = rootPanel.props.tooltipOptions;
      return isFirstLevel.value ? (_a = tooltipOptions2 == null ? void 0 : tooltipOptions2.placement) != null ? _a : "right-start" : "right-start";
    });
    const trigger = computed(() => rootPanel.props.trigger);
    const tooltipOptions = computed(() => {
      var _a;
      return isFirstLevel.value ? (_a = rootPanel.props.tooltipOptions) != null ? _a : {} : {};
    });
    const subMenuShowTimeout = computed(
      () => {
        var _a;
        return (_a = rootPanel.props.showTimeout) != null ? _a : 200;
      }
    );
    const subMenuHideTimeout = computed(
      () => {
        var _a;
        return (_a = rootPanel.props.hideTimeout) != null ? _a : 200;
      }
    );
    const opened = computed(() => rootPanel.openedItems.includes(unref(value)));
    const panelStyle = computed(() => {
      return {
        width: addUnit(rootPanel.props.width)
      };
    });
    let timeout;
    const handleMouseenter = (event, showTimeout = subMenuShowTimeout.value) => {
      var _a;
      if (unref(trigger) !== "hover")
        return;
      subItem.mouseInChild.value = true;
      timeout == null ? void 0 : timeout();
      ({ stop: timeout } = useTimeoutFn(() => {
        rootPanel.openItem(unref(value), valuePath.value);
      }, showTimeout));
      if (isFirstLevel.value) {
        (_a = parentItem.value.vnode.el) == null ? void 0 : _a.dispatchEvent(new MouseEvent("mouseenter"));
      }
    };
    const handleMouseleave = (deepDispatch = false) => {
      var _a;
      if (unref(trigger) !== "hover")
        return;
      subItem.mouseInChild.value = false;
      timeout == null ? void 0 : timeout();
      ({ stop: timeout } = useTimeoutFn(() => {
        !mouseInChild.value && rootPanel.closeItem(unref(value), valuePath.value);
      }, subMenuHideTimeout.value));
      if (isFirstLevel.value && deepDispatch) {
        (_a = subItem.handleMouseleave) == null ? void 0 : _a.call(subItem, true);
      }
    };
    const hide = () => {
      var _a, _b;
      return (_b = (_a = vPopper.value) == null ? void 0 : _a.hide) == null ? void 0 : _b.call(_a);
    };
    provide(`subItem:${instance.uid}`, {
      handleMouseleave,
      mouseInChild,
      level: subItem.level + 1
    });
    expose({
      hide,
      level: props.level,
      value: unref(value)
    });
    return () => {
      const data = {
        ref: vPopper,
        visible: opened.value,
        effect: "light",
        pure: true,
        offset: 0,
        showArrow: false,
        persistent: true,
        placement: currentPlacement.value,
        teleported: appendToBody.value,
        fallbackPlacements,
        transition: `${ns.namespace.value}-zoom-in-top`,
        gpuAcceleration: false,
        ...tooltipOptions.value
      };
      if (unref(trigger) === "click") {
        delete data.visible;
        data.trigger = "click";
      }
      return h(ElTooltip, data, {
        content: () => {
          var _a;
          return h(
            UL_TAG,
            {
              class: ns.b("list"),
              style: panelStyle.value,
              onMouseenter: (evt) => handleMouseenter(evt, 100),
              onMouseleave: () => handleMouseleave(true)
            },
            [(_a = slots.default) == null ? void 0 : _a.call(slots)]
          );
        },
        default: () => h(
          DIV_TAG,
          {
            onMouseenter: handleMouseenter,
            onMouseleave: () => handleMouseleave()
          },
          [
            props.option.renderLabel ? props.option.renderLabel({ ...props.option }) : h(Item, {
              showArrowRight: true,
              option: props.option,
              onMouseenter: handleMouseenter,
              onMouseleave: () => handleMouseleave()
            })
          ]
        )
      });
    };
  }
});

export { SubItem as default };
//# sourceMappingURL=sub-item.mjs.map
