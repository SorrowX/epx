'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var editable = require('./editable.js');
var tags = require('../../../constants/tags.js');
var event = require('../../../constants/event.js');

const ElEditable = {
  name: "ElEditable",
  inheritAttrs: false,
  props: editable.editableProps,
  emits: editable.editableEmits,
  setup(props, { slots, attrs, emit, expose }) {
    const ns = elementPlus.useNamespace("editable");
    const isEditable = vue.ref(props.defaultEditState);
    const wrapper = vue.ref();
    let oldValue = null;
    let currentValue = null;
    let preCurrentValue = null;
    let isModify = false;
    const setEditable = (editable) => {
      isEditable.value = editable;
      isModify = editable ? false : preCurrentValue === props.modelValue ? false : true;
      vue.nextTick(() => {
        preCurrentValue = currentValue;
      });
      emit(event.CHANGE_EVENT, editable, {
        currentValue,
        oldValue,
        isModify,
        preCurrentValue
      });
    };
    const handleFocus = () => {
      setTimeout(() => {
        var _a, _b;
        (_a = wrapper.value.querySelector("input")) == null ? void 0 : _a.focus();
        (_b = wrapper.value.querySelector("textarea")) == null ? void 0 : _b.focus();
      });
    };
    const setEditableTure = () => {
      setEditable(true);
      if (props.focus) {
        handleFocus();
      }
    };
    const setEditableFalse = () => setEditable(false);
    vue.watch(
      () => props.modelValue,
      (cur, old) => {
        oldValue = old;
        currentValue = cur;
      },
      {
        immediate: true
      }
    );
    expose({
      setEditable
    });
    return () => {
      var _a, _b, _c;
      const { trigger, icon } = props;
      const pure = { ...attrs };
      delete pure.style;
      delete pure.class;
      const component = vue.h(
        tags.DIV_TAG,
        {
          class: ns.b("component"),
          key: isEditable.value
        },
        (_a = slots == null ? void 0 : slots.default) == null ? void 0 : _a.call(slots)
      );
      const editVNode = vue.withDirectives(component, [
        [elementPlus.ClickOutside, setEditableFalse]
      ]);
      const textData = { class: ns.b("text") };
      if (trigger === "dblclick") {
        textData.ondblclick = setEditableTure;
      }
      if (trigger === "click") {
        textData.onClick = setEditableTure;
      }
      const iconVNode = vue.h(
        elementPlus.ElIcon,
        {
          class: ns.b("icon"),
          ...pure,
          onClick: setEditableTure
        },
        {
          default: () => {
            var _a2, _b2;
            return (_b2 = (_a2 = slots == null ? void 0 : slots.icon) == null ? void 0 : _a2.call(slots)) != null ? _b2 : icon ? vue.h(icon) : "";
          }
        }
      );
      const textVNode = vue.h(tags.DIV_TAG, textData, [
        (_c = (_b = slots == null ? void 0 : slots.text) == null ? void 0 : _b.call(slots)) != null ? _c : vue.h(tags.SPAN_TAG, props.modelValue),
        trigger === "icon" ? iconVNode : ""
      ]);
      return vue.h(
        tags.DIV_TAG,
        {
          class: [ns.b(), attrs.class],
          style: attrs.style,
          ref: wrapper
        },
        [isEditable.value ? editVNode : textVNode]
      );
    };
  }
};

exports["default"] = ElEditable;
//# sourceMappingURL=index.js.map
