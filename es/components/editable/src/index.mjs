import { ref, watch, h, withDirectives, nextTick } from 'vue';
import { useNamespace, ClickOutside, ElIcon } from 'element-plus';
import { editableProps, editableEmits } from './editable.mjs';
import { DIV_TAG, SPAN_TAG } from '../../../constants/tags.mjs';
import { CHANGE_EVENT } from '../../../constants/event.mjs';

const ElEditable = {
  name: "ElEditable",
  inheritAttrs: false,
  props: editableProps,
  emits: editableEmits,
  setup(props, { slots, attrs, emit, expose }) {
    const ns = useNamespace("editable");
    const isEditable = ref(props.defaultEditState);
    const wrapper = ref();
    let oldValue = null;
    let currentValue = null;
    let preCurrentValue = null;
    let isModify = false;
    const setEditable = (editable) => {
      isEditable.value = editable;
      isModify = editable ? false : preCurrentValue === props.modelValue ? false : true;
      nextTick(() => {
        preCurrentValue = currentValue;
      });
      emit(CHANGE_EVENT, editable, {
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
    watch(
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
      const component = h(
        DIV_TAG,
        {
          class: ns.b("component"),
          key: isEditable.value
        },
        (_a = slots == null ? void 0 : slots.default) == null ? void 0 : _a.call(slots)
      );
      const editVNode = withDirectives(component, [
        [ClickOutside, setEditableFalse]
      ]);
      const textData = { class: ns.b("text") };
      if (trigger === "dblclick") {
        textData.ondblclick = setEditableTure;
      }
      if (trigger === "click") {
        textData.onClick = setEditableTure;
      }
      const iconVNode = h(
        ElIcon,
        {
          class: ns.b("icon"),
          ...pure,
          onClick: setEditableTure
        },
        {
          default: () => {
            var _a2, _b2;
            return (_b2 = (_a2 = slots == null ? void 0 : slots.icon) == null ? void 0 : _a2.call(slots)) != null ? _b2 : icon ? h(icon) : "";
          }
        }
      );
      const textVNode = h(DIV_TAG, textData, [
        (_c = (_b = slots == null ? void 0 : slots.text) == null ? void 0 : _b.call(slots)) != null ? _c : h(SPAN_TAG, props.modelValue),
        trigger === "icon" ? iconVNode : ""
      ]);
      return h(
        DIV_TAG,
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

export { ElEditable as default };
//# sourceMappingURL=index.mjs.map
