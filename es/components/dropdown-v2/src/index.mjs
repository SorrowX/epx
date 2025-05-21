import { defineComponent, ref, computed, h, unref, mergeProps } from 'vue';
import { useNamespace, ElIcon, ElButton, ElButtonGroup } from 'element-plus';
import { ArrowDown } from '@element-plus/icons-vue';
import { dropdownV2Props } from './dropdown-v2.mjs';
import DropdownV2Panel from './panel.mjs';

const TRIGGER = "trigger";
var DropdownV2 = defineComponent({
  name: "ElDropdownV2",
  props: dropdownV2Props,
  setup(props, { attrs, emit, slots }) {
    const ns = useNamespace("dropdown-v2");
    const panelRef = ref();
    const renderIcon = (attrs2) => {
      return h(ElIcon, { ...attrs2 }, { default: () => h(ArrowDown) });
    };
    const renderButton = (attrs2 = {}, children) => {
      const { triggerProps } = props;
      return h(
        ElButton,
        {
          type: "primary",
          ...mergeProps(attrs2, { ...triggerProps }),
          role: "trigger"
        },
        { default: () => [triggerProps == null ? void 0 : triggerProps.triggerText, ...children] }
      );
    };
    let tick;
    const rednerButtonGroup = () => {
      return h(
        ElButtonGroup,
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
            h(
              ElButton,
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
    const hasLabelSlot = computed(() => !!slots.label);
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
    const iconProps = computed(() => {
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
    const userOptions = computed(() => recursion(props.options));
    const options = computed(() => {
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
      return h(DropdownV2Panel, {
        ref: panelRef,
        tooltipOptions: {
          offset: 12,
          placement: "bottom-start"
        },
        ...attrs,
        class: props.splitButton ? ns.m("split-button") : "",
        pure: true,
        options: unref(options),
        onSelect: handleSelect
      });
    };
  }
});

export { DropdownV2 as default };
//# sourceMappingURL=index.mjs.map
