'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var core = require('@vueuse/core');
var item = require('./item.js');
var useItem = require('./use-item.js');
var tags = require('../../../constants/tags.js');
var index = require('element-plus/es/utils/index');

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
var SubItem = vue.defineComponent({
  name: "ElDropdownV2SubItem",
  inheritAttrs: false,
  props: {
    option: {
      type: index.definePropType(Object),
      required: true
    },
    level: {
      type: index.definePropType(Number)
    }
  },
  setup(props, { slots, expose }) {
    const ns = elementPlus.useNamespace("dropdown-v2");
    const instance = vue.getCurrentInstance();
    const value = vue.computed(() => props.option.value);
    const { valuePath, parentItem } = useItem["default"](
      instance,
      vue.computed(() => vue.unref(value))
    );
    const mouseInChild = vue.ref(false);
    const rootPanel = vue.inject("rootPanel");
    const subItem = vue.inject(
      `subItem:${parentItem.value.uid}`
    );
    const vPopper = vue.ref(null);
    const isFirstLevel = vue.computed(() => subItem.level === 0);
    const appendToBody = vue.computed(() => isFirstLevel.value ? true : false);
    const currentPlacement = vue.computed(() => {
      var _a;
      const tooltipOptions2 = rootPanel.props.tooltipOptions;
      return isFirstLevel.value ? (_a = tooltipOptions2 == null ? void 0 : tooltipOptions2.placement) != null ? _a : "right-start" : "right-start";
    });
    const trigger = vue.computed(() => rootPanel.props.trigger);
    const tooltipOptions = vue.computed(() => {
      var _a;
      return isFirstLevel.value ? (_a = rootPanel.props.tooltipOptions) != null ? _a : {} : {};
    });
    const subMenuShowTimeout = vue.computed(
      () => {
        var _a;
        return (_a = rootPanel.props.showTimeout) != null ? _a : 200;
      }
    );
    const subMenuHideTimeout = vue.computed(
      () => {
        var _a;
        return (_a = rootPanel.props.hideTimeout) != null ? _a : 200;
      }
    );
    const opened = vue.computed(() => rootPanel.openedItems.includes(vue.unref(value)));
    const panelStyle = vue.computed(() => {
      return {
        width: index.addUnit(rootPanel.props.width)
      };
    });
    let timeout;
    const handleMouseenter = (event, showTimeout = subMenuShowTimeout.value) => {
      var _a;
      if (vue.unref(trigger) !== "hover")
        return;
      subItem.mouseInChild.value = true;
      timeout == null ? void 0 : timeout();
      ({ stop: timeout } = core.useTimeoutFn(() => {
        rootPanel.openItem(vue.unref(value), valuePath.value);
      }, showTimeout));
      if (isFirstLevel.value) {
        (_a = parentItem.value.vnode.el) == null ? void 0 : _a.dispatchEvent(new MouseEvent("mouseenter"));
      }
    };
    const handleMouseleave = (deepDispatch = false) => {
      var _a;
      if (vue.unref(trigger) !== "hover")
        return;
      subItem.mouseInChild.value = false;
      timeout == null ? void 0 : timeout();
      ({ stop: timeout } = core.useTimeoutFn(() => {
        !mouseInChild.value && rootPanel.closeItem(vue.unref(value), valuePath.value);
      }, subMenuHideTimeout.value));
      if (isFirstLevel.value && deepDispatch) {
        (_a = subItem.handleMouseleave) == null ? void 0 : _a.call(subItem, true);
      }
    };
    const hide = () => {
      var _a, _b;
      return (_b = (_a = vPopper.value) == null ? void 0 : _a.hide) == null ? void 0 : _b.call(_a);
    };
    vue.provide(`subItem:${instance.uid}`, {
      handleMouseleave,
      mouseInChild,
      level: subItem.level + 1
    });
    expose({
      hide,
      level: props.level,
      value: vue.unref(value)
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
      if (vue.unref(trigger) === "click") {
        delete data.visible;
        data.trigger = "click";
      }
      return vue.h(elementPlus.ElTooltip, data, {
        content: () => {
          var _a;
          return vue.h(
            tags.UL_TAG,
            {
              class: ns.b("list"),
              style: panelStyle.value,
              onMouseenter: (evt) => handleMouseenter(evt, 100),
              onMouseleave: () => handleMouseleave(true)
            },
            [(_a = slots.default) == null ? void 0 : _a.call(slots)]
          );
        },
        default: () => vue.h(
          tags.DIV_TAG,
          {
            onMouseenter: handleMouseenter,
            onMouseleave: () => handleMouseleave()
          },
          [
            props.option.renderLabel ? props.option.renderLabel({ ...props.option }) : vue.h(item["default"], {
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

exports["default"] = SubItem;
//# sourceMappingURL=sub-item.js.map
