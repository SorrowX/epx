'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var iconsVue = require('@element-plus/icons-vue');
var dropdownV2 = require('./dropdown-v2.js');
var panel = require('./panel.js');

const TRIGGER = "trigger";
var DropdownV2 = vue.defineComponent({
  name: "ElDropdownV2",
  props: dropdownV2.dropdownV2Props,
  setup(props, { attrs, emit, slots }) {
    const ns = elementPlus.useNamespace("dropdown-v2");
    const panelRef = vue.ref();
    const renderIcon = (attrs2) => {
      return vue.h(elementPlus.ElIcon, { ...attrs2 }, { default: () => vue.h(iconsVue.ArrowDown) });
    };
    const renderButton = (attrs2 = {}, children) => {
      const { triggerProps } = props;
      return vue.h(
        elementPlus.ElButton,
        {
          type: "primary",
          ...vue.mergeProps(attrs2, { ...triggerProps }),
          role: "trigger"
        },
        { default: () => [triggerProps == null ? void 0 : triggerProps.triggerText, ...children] }
      );
    };
    let tick;
    const rednerButtonGroup = () => {
      return vue.h(
        elementPlus.ElButtonGroup,
        {},
        {
          default: () => [
            renderButton(
              {
                trigger: "disabled",
                onClick(e) {
                  e.stopPropagation();
                },
                onMouseenter() {
                  clearTimeout(tick);
                  tick = setTimeout(() => {
                    panelRef.value.close(TRIGGER);
                  }, 200);
                },
                onMouseleave() {
                  clearTimeout(tick);
                }
              },
              []
            ),
            vue.h(
              elementPlus.ElButton,
              {
                type: "primary",
                ...{
                  ...iconProps.value,
                  onMouseenter() {
                    panelRef.value.openItem(TRIGGER, [TRIGGER]);
                  }
                },
                role: "icon"
              },
              {
                default: () => renderIcon()
              }
            )
          ]
        }
      );
    };
    const renderTrigger = (option) => {
      const { splitButton } = props;
      if (slots.default) {
        return slots.default(option);
      } else {
        return splitButton ? rednerButtonGroup() : renderButton({}, [renderIcon({ style: { marginLeft: "8px" } })]);
      }
    };
    const hasLabelSlot = vue.computed(() => !!slots.label);
    const recursion = (options2) => {
      return options2.map((option) => {
        const newOption = {
          children: [],
          disabled: false,
          divided: false,
          ...option
        };
        if (hasLabelSlot.value) {
          newOption.renderLabel = (option2) => {
            var _a;
            return (_a = slots.label) == null ? void 0 : _a.call(slots, option2);
          };
        }
        if (option.children) {
          newOption.children = recursion(option.children);
        }
        return newOption;
      });
    };
    const iconProps = vue.computed(() => {
      const { triggerProps = {} } = props;
      return Object.keys(triggerProps).reduce(
        (pre, key) => {
          if (!key.startsWith("on")) {
            pre[key] = triggerProps[key];
          }
          return pre;
        },
        {}
      );
    });
    const userOptions = vue.computed(() => recursion(props.options));
    const options = vue.computed(() => {
      return [
        {
          label: TRIGGER,
          value: TRIGGER,
          children: userOptions.value,
          renderLabel: (option) => renderTrigger(option)
        }
      ];
    });
    const handleSelect = (value, valuePath) => {
      emit(
        "change",
        value,
        valuePath.filter((_) => _ !== TRIGGER)
      );
    };
    return () => {
      return vue.h(panel["default"], {
        ref: panelRef,
        tooltipOptions: {
          offset: 12,
          placement: "bottom-start"
        },
        ...attrs,
        class: props.splitButton ? ns.m("split-button") : "",
        pure: true,
        options: vue.unref(options),
        onSelect: handleSelect
      });
    };
  }
});

exports["default"] = DropdownV2;
//# sourceMappingURL=index.js.map
