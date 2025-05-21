'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var reactiveVue = require('@formily/reactive-vue');
var vue$1 = require('@formily/vue');
var shared = require('@formily/shared');
var elementPlus = require('element-plus');
var util = require('../date-picker/util.js');
var index = require('../__builtins__/configs/index.js');
var createContext = require('../__builtins__/shared/create-context.js');
var utils = require('../__builtins__/shared/utils.js');
var resolveComponent = require('../__builtins__/shared/resolve-component.js');
var type = require('../../utils/type.js');

const prefixCls = `${index.stylePrefix}-preview-text`;
const PlaceholderContext = createContext.createContext("N/A");
const defaultSeparator = "; ";
const usePlaceholder = (value) => {
  const placeholderCtx = createContext.useContext(PlaceholderContext);
  const placeholder = vue.computed(() => {
    return shared.isValid(value == null ? void 0 : value.value) && (value == null ? void 0 : value.value) !== "" ? value == null ? void 0 : value.value : resolveComponent.resolveComponent(placeholderCtx.value) || "N/A";
  });
  return placeholder;
};
const Input = vue.defineComponent({
  name: "FPreviewTextInput",
  props: {
    value: {
      type: null
    }
  },
  setup(props, { attrs, slots }) {
    const value = vue.toRef(props, "value");
    const placeholder = usePlaceholder(value);
    return () => {
      var _a;
      return vue.h(
        elementPlus.ElSpace,
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
const Select = reactiveVue.observer(
  vue.defineComponent({
    name: "FPreviewTextSelect",
    setup(_props, { attrs }) {
      var _a, _b, _c;
      const fieldRef = vue$1.useField();
      const field = fieldRef.value;
      const props = attrs;
      const isTag = attrs.displayType !== "text";
      const separator = (_a = attrs.separator) != null ? _a : defaultSeparator;
      const dataSource = ((_b = field == null ? void 0 : field.dataSource) == null ? void 0 : _b.length) ? field.dataSource : ((_c = props == null ? void 0 : props.options) == null ? void 0 : _c.length) ? props.options : [];
      const placeholder = usePlaceholder();
      const getSelected = () => {
        const value = props.value;
        if (props.multiple) {
          return shared.isArr(value) ? value.map((val) => ({ label: val, value: val })) : [];
        } else {
          return shared.isValid(value) ? [{ label: value, value }] : [];
        }
      };
      const getLabels = () => {
        const selected = getSelected();
        if (!selected.length) {
          return vue.h(
            isTag ? elementPlus.ElTag : elementPlus.ElText,
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
          return vue.h(
            elementPlus.ElTag,
            {
              key,
              type: "info",
              effect: "light"
            },
            {
              default: () => text || placeholder.value
            }
          );
        }) : vue.h(
          elementPlus.ElText,
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
        return vue.h(
          elementPlus.ElSpace,
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
const Cascader = reactiveVue.observer(
  vue.defineComponent({
    name: "FPreviewTextCascader",
    setup(_props, { attrs }) {
      var _a, _b, _c, _d, _e;
      const fieldRef = vue$1.useField();
      const field = fieldRef.value;
      const props = attrs;
      const isTag = attrs.displayType !== "text";
      const separator = (_a = attrs.separator) != null ? _a : defaultSeparator;
      const dataSource = ((_b = field == null ? void 0 : field.dataSource) == null ? void 0 : _b.length) ? field.dataSource : ((_c = props == null ? void 0 : props.options) == null ? void 0 : _c.length) ? props.options : [];
      const placeholder = usePlaceholder();
      const valueKey = ((_d = props.props) == null ? void 0 : _d.value) || "value";
      const labelKey = ((_e = props.props) == null ? void 0 : _e.label) || "label";
      const getSelected = () => {
        return shared.isArr(props.value) ? props.value : shared.isUndef(props.value) ? [] : [props.value];
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
          return vue.h(
            isTag ? elementPlus.ElTag : elementPlus.ElText,
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
          return vue.h(
            elementPlus.ElTag,
            {
              key,
              type: "info",
              effect: "light"
            },
            {
              default: () => text || placeholder.value
            }
          );
        }) : vue.h(
          elementPlus.ElText,
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
        return vue.h(
          elementPlus.ElSpace,
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
const DatePicker = vue.defineComponent({
  name: "FPreviewTextDatePicker",
  setup(_props, { attrs }) {
    const { lang } = elementPlus.useLocale();
    const placeholder = usePlaceholder();
    const format = util.getDefaultFormat(attrs);
    const getLabels = () => {
      if (shared.isArr(attrs.value)) {
        const labels = attrs.value.map(
          (value) => elementPlus.formatter(value, format, lang.value) || placeholder.value
        );
        return labels.join("~");
      } else {
        return type.isDef(attrs.value) ? elementPlus.formatter(
          attrs.value,
          format,
          lang.value
        ) : placeholder.value;
      }
    };
    return () => {
      return vue.h(
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
const TimePicker = vue.defineComponent({
  name: "FPreviewTextTimePicker",
  setup(_props, { attrs }) {
    const { lang } = elementPlus.useLocale();
    const placeholder = usePlaceholder();
    const format = attrs.format || "HH:mm:ss";
    const getLabels = () => {
      if (shared.isArr(attrs.value)) {
        const labels = attrs.value.map(
          (value) => elementPlus.formatter(value, format, lang.value) || placeholder.value
        );
        return labels.join("~");
      } else {
        return type.isDef(attrs.value) ? elementPlus.formatter(
          attrs.value,
          format,
          lang.value
        ) : placeholder.value;
      }
    };
    return () => {
      return vue.h(
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
const Text = vue.defineComponent({
  name: "FPreviewText",
  setup(_props, { attrs }) {
    const placeholder = usePlaceholder();
    return () => {
      return vue.h(
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
const TextSwitch = vue.defineComponent({
  name: "FPreviewTextSwitch",
  setup(props, { attrs }) {
    var _a, _b, _c, _d;
    const value = vue.toRef(attrs, "value");
    const activeText = (_a = attrs.activeText) != null ? _a : attrs["active-text"];
    const inactiveText = (_b = attrs.inactiveText) != null ? _b : attrs["inactive-text"];
    const activeValue = (_c = attrs.activeValue) != null ? _c : attrs["active-value"];
    const inactiveValue = (_d = attrs.inactiveValue) != null ? _d : attrs["inactive-value"];
    return () => {
      var _a2, _b2;
      const placeholder = usePlaceholder(value);
      const realValue = value.value;
      const text = shared.isUndef(activeValue) && shared.isUndef(inactiveValue) ? (_a2 = realValue ? activeText : inactiveText) != null ? _a2 : placeholder.value : realValue === activeValue ? activeText : realValue === inactiveValue ? inactiveText : placeholder.value;
      return vue.h(
        elementPlus.ElSpace,
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
const PreviewText = utils.composeExport(Text, {
  Input,
  Select,
  Cascader,
  DatePicker,
  TimePicker,
  Placeholder: PlaceholderContext.Provider,
  usePlaceholder,
  TextSwitch
});

exports.PreviewText = PreviewText;
exports["default"] = PreviewText;
exports.usePlaceholder = usePlaceholder;
//# sourceMappingURL=index.js.map
