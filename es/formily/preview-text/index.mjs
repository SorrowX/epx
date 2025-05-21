import { defineComponent, toRef, h, computed } from 'vue';
import { observer } from '@formily/reactive-vue';
import { useField } from '@formily/vue';
import { isUndef, isValid, isArr } from '@formily/shared';
import { ElSpace, useLocale, ElTag, ElText, formatter } from 'element-plus';
import { getDefaultFormat } from '../date-picker/util.mjs';
import { stylePrefix } from '../__builtins__/configs/index.mjs';
import { createContext, useContext } from '../__builtins__/shared/create-context.mjs';
import { composeExport } from '../__builtins__/shared/utils.mjs';
import { resolveComponent } from '../__builtins__/shared/resolve-component.mjs';
import { isDef } from '../../utils/type.mjs';

const prefixCls = `${stylePrefix}-preview-text`;
const PlaceholderContext = createContext("N/A");
const defaultSeparator = "; ";
const usePlaceholder = (value) => {
  const placeholderCtx = useContext(PlaceholderContext);
  const placeholder = computed(() => {
    return isValid(value == null ? void 0 : value.value) && (value == null ? void 0 : value.value) !== "" ? value == null ? void 0 : value.value : resolveComponent(placeholderCtx.value) || "N/A";
  });
  return placeholder;
};
const Input = defineComponent({
  name: "FPreviewTextInput",
  props: {
    value: {
      type: null
    }
  },
  setup(props, { attrs, slots }) {
    const value = toRef(props, "value");
    const placeholder = usePlaceholder(value);
    return () => {
      var _a;
      return h(
        ElSpace,
        {
          class: [prefixCls, `${prefixCls}__input`],
          style: { ...(_a = attrs.style) != null ? _a : {} }
        },
        {
          default: () => {
            var _a2, _b, _c, _d;
            return [
              (_a2 = slots == null ? void 0 : slots.prepend) == null ? void 0 : _a2.call(slots),
              (_b = slots == null ? void 0 : slots.prefix) == null ? void 0 : _b.call(slots),
              placeholder.value,
              (_c = slots == null ? void 0 : slots.suffix) == null ? void 0 : _c.call(slots),
              (_d = slots == null ? void 0 : slots.append) == null ? void 0 : _d.call(slots)
            ];
          }
        }
      );
    };
  }
});
const Select = observer(
  defineComponent({
    name: "FPreviewTextSelect",
    setup(_props, { attrs }) {
      var _a, _b, _c;
      const fieldRef = useField();
      const field = fieldRef.value;
      const props = attrs;
      const isTag = attrs.displayType !== "text";
      const separator = (_a = attrs.separator) != null ? _a : defaultSeparator;
      const dataSource = ((_b = field == null ? void 0 : field.dataSource) == null ? void 0 : _b.length) ? field.dataSource : ((_c = props == null ? void 0 : props.options) == null ? void 0 : _c.length) ? props.options : [];
      const placeholder = usePlaceholder();
      const getSelected = () => {
        const value = props.value;
        if (props.multiple) {
          return isArr(value) ? value.map((val) => ({ label: val, value: val })) : [];
        } else {
          return isValid(value) ? [{ label: value, value }] : [];
        }
      };
      const getLabels = () => {
        const selected = getSelected();
        if (!selected.length) {
          return h(
            isTag ? ElTag : ElText,
            isTag ? {
              type: "info",
              effect: "light"
            } : {},
            {
              default: () => placeholder.value
            }
          );
        }
        return isTag ? selected.map(({ value, label }, key) => {
          var _a2;
          const text = ((_a2 = dataSource == null ? void 0 : dataSource.find((item) => item.value == value)) == null ? void 0 : _a2.label) || label;
          return h(
            ElTag,
            {
              key,
              type: "info",
              effect: "light"
            },
            {
              default: () => text || placeholder.value
            }
          );
        }) : h(
          ElText,
          {},
          {
            default: () => selected.map(
              ({ value, label }) => {
                var _a2;
                return ((_a2 = dataSource == null ? void 0 : dataSource.find((item) => item.value == value)) == null ? void 0 : _a2.label) || label || placeholder.value;
              }
            ).filter((_) => _).join(separator)
          }
        );
      };
      return () => {
        var _a2;
        return h(
          ElSpace,
          {
            class: [prefixCls, `${prefixCls}__select`],
            style: { ...(_a2 = attrs.style) != null ? _a2 : {} }
          },
          {
            default: () => getLabels()
          }
        );
      };
    }
  })
);
const Cascader = observer(
  defineComponent({
    name: "FPreviewTextCascader",
    setup(_props, { attrs }) {
      var _a, _b, _c, _d, _e;
      const fieldRef = useField();
      const field = fieldRef.value;
      const props = attrs;
      const isTag = attrs.displayType !== "text";
      const separator = (_a = attrs.separator) != null ? _a : defaultSeparator;
      const dataSource = ((_b = field == null ? void 0 : field.dataSource) == null ? void 0 : _b.length) ? field.dataSource : ((_c = props == null ? void 0 : props.options) == null ? void 0 : _c.length) ? props.options : [];
      const placeholder = usePlaceholder();
      const valueKey = ((_d = props.props) == null ? void 0 : _d.value) || "value";
      const labelKey = ((_e = props.props) == null ? void 0 : _e.label) || "label";
      const getSelected = () => {
        return isArr(props.value) ? props.value : isUndef(props.value) ? [] : [props.value];
      };
      const findLabel = (value, dataSource2) => {
        for (let i = 0; i < (dataSource2 == null ? void 0 : dataSource2.length); i++) {
          const item = dataSource2[i];
          if ((item == null ? void 0 : item[valueKey]) === value) {
            return item == null ? void 0 : item[labelKey];
          } else {
            const childLabel = findLabel(value, item == null ? void 0 : item.children);
            if (childLabel)
              return childLabel;
          }
        }
      };
      const getLabels = () => {
        const selected = getSelected();
        if (!(selected == null ? void 0 : selected.length)) {
          return h(
            isTag ? ElTag : ElText,
            isTag ? {
              type: "info",
              effect: "light"
            } : {},
            {
              default: () => placeholder.value
            }
          );
        }
        return isTag ? selected.map((value, key) => {
          const text = findLabel(value, dataSource);
          return h(
            ElTag,
            {
              key,
              type: "info",
              effect: "light"
            },
            {
              default: () => text || placeholder.value
            }
          );
        }) : h(
          ElText,
          {},
          {
            default: () => selected.map(
              (value) => findLabel(value, dataSource) || placeholder.value
            ).filter((_) => _).join(separator)
          }
        );
      };
      return () => {
        var _a2;
        return h(
          ElSpace,
          {
            class: [prefixCls, `${prefixCls}__cascader`],
            style: { ...(_a2 = attrs.style) != null ? _a2 : {} }
          },
          {
            default: () => getLabels()
          }
        );
      };
    }
  })
);
const DatePicker = defineComponent({
  name: "FPreviewTextDatePicker",
  setup(_props, { attrs }) {
    const { lang } = useLocale();
    const placeholder = usePlaceholder();
    const format = getDefaultFormat(attrs);
    const getLabels = () => {
      if (isArr(attrs.value)) {
        const labels = attrs.value.map(
          (value) => formatter(value, format, lang.value) || placeholder.value
        );
        return labels.join("~");
      } else {
        return isDef(attrs.value) ? formatter(
          attrs.value,
          format,
          lang.value
        ) : placeholder.value;
      }
    };
    return () => {
      return h(
        "div",
        {
          class: [prefixCls, `${prefixCls}__date-picker`],
          style: attrs.style
        },
        {
          default: () => getLabels()
        }
      );
    };
  }
});
const TimePicker = defineComponent({
  name: "FPreviewTextTimePicker",
  setup(_props, { attrs }) {
    const { lang } = useLocale();
    const placeholder = usePlaceholder();
    const format = attrs.format || "HH:mm:ss";
    const getLabels = () => {
      if (isArr(attrs.value)) {
        const labels = attrs.value.map(
          (value) => formatter(value, format, lang.value) || placeholder.value
        );
        return labels.join("~");
      } else {
        return isDef(attrs.value) ? formatter(
          attrs.value,
          format,
          lang.value
        ) : placeholder.value;
      }
    };
    return () => {
      return h(
        "div",
        {
          class: [prefixCls, `${prefixCls}__time-picker`],
          style: attrs.style
        },
        {
          default: () => getLabels()
        }
      );
    };
  }
});
const Text = defineComponent({
  name: "FPreviewText",
  setup(_props, { attrs }) {
    const placeholder = usePlaceholder();
    return () => {
      return h(
        "div",
        {
          class: [prefixCls, `${prefixCls}__text`],
          style: attrs.style
        },
        {
          default: () => placeholder.value
        }
      );
    };
  }
});
const TextSwitch = defineComponent({
  name: "FPreviewTextSwitch",
  setup(props, { attrs }) {
    var _a, _b, _c, _d;
    const value = toRef(attrs, "value");
    const activeText = (_a = attrs.activeText) != null ? _a : attrs["active-text"];
    const inactiveText = (_b = attrs.inactiveText) != null ? _b : attrs["inactive-text"];
    const activeValue = (_c = attrs.activeValue) != null ? _c : attrs["active-value"];
    const inactiveValue = (_d = attrs.inactiveValue) != null ? _d : attrs["inactive-value"];
    return () => {
      var _a2, _b2;
      const placeholder = usePlaceholder(value);
      const realValue = value.value;
      const text = isUndef(activeValue) && isUndef(inactiveValue) ? (_a2 = realValue ? activeText : inactiveText) != null ? _a2 : placeholder.value : realValue === activeValue ? activeText : realValue === inactiveValue ? inactiveText : placeholder.value;
      return h(
        ElSpace,
        {
          class: [prefixCls, `${prefixCls}__switch`],
          style: { ...(_b2 = attrs.style) != null ? _b2 : {} }
        },
        {
          default: () => String(text)
        }
      );
    };
  }
});
const PreviewText = composeExport(Text, {
  Input,
  Select,
  Cascader,
  DatePicker,
  TimePicker,
  Placeholder: PlaceholderContext.Provider,
  usePlaceholder,
  TextSwitch
});

export { PreviewText, PreviewText as default, usePlaceholder };
//# sourceMappingURL=index.mjs.map
