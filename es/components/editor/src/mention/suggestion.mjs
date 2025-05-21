import { ref, watchEffect, computed, h } from 'vue';
import { useNamespace, ElTooltip } from 'element-plus';
import { VueRenderer } from '@tiptap/vue-3';
import { filterOption } from '../helper.mjs';
import MentionList from './mention-list.mjs';

const Popup = {
  name: "Popup",
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    clientRect: {
      type: Function,
      required: true
    },
    slots: {
      type: Object
    }
  },
  setup(props, { attrs, expose }) {
    const ns = useNamespace("editor-popup");
    const listRef = ref();
    const innerVisible = ref(false);
    watchEffect(() => {
      innerVisible.value = props.visible;
    });
    const virtualRef = computed(() => {
      return {
        getBoundingClientRect: props.clientRect
      };
    });
    const onKeyDown = (props2) => {
      var _a, _b;
      return (_b = (_a = listRef.value) == null ? void 0 : _a.onKeyDown) == null ? void 0 : _b.call(_a, props2);
    };
    expose({
      onKeyDown
    });
    return () => {
      return h(
        ElTooltip,
        {
          ...attrs,
          Key: props.visible,
          effect: "light",
          trigger: "click",
          placement: "bottom-start",
          popperClass: ns.b(),
          showArrow: false,
          virtualTriggering: true,
          visible: props.visible,
          virtualRef: virtualRef.value
        },
        {
          content: () => {
            return h(
              MentionList,
              { items: attrs.items, command: attrs.command, ref: listRef },
              {
                ...props.slots
              }
            );
          }
        }
      );
    };
  }
};
const useSuggestion = (opts) => {
  var _a;
  const visible = ref(false);
  let component;
  const hiddenPopup = () => {
    if (component) {
      visible.value = false;
      component.updateProps({
        visible: visible.value
      });
    }
  };
  const destroy = () => {
    hiddenPopup();
    setTimeout(() => {
      component && component.destroy();
    }, 300);
  };
  const getVisible = () => visible.value;
  const suggestion = {
    char: (_a = opts == null ? void 0 : opts.char) != null ? _a : "@",
    allowedPrefixes: null,
    items: ({ query }) => {
      const { options } = opts;
      const getOptions = typeof options === "function" ? options : () => Promise.resolve(options);
      return getOptions({ query }).then((options2) => {
        var _a2;
        const filter = (_a2 = opts.filterOption) != null ? _a2 : filterOption;
        return options2.filter((option) => filter(query, option));
      }).catch(() => []);
    },
    render: () => {
      return {
        onStart: (props) => {
          var _a2;
          if (!props.clientRect || !props.items.length) {
            return;
          }
          visible.value = true;
          component = new VueRenderer(Popup, {
            props: {
              ...props,
              visible: visible.value,
              slots: (_a2 = opts.slots) != null ? _a2 : {}
            },
            editor: props.editor
          });
        },
        onUpdate(props) {
          var _a2;
          if (!props.clientRect) {
            return;
          }
          visible.value = props.items.length ? true : false;
          component.updateProps({
            ...props,
            visible: visible.value,
            slots: (_a2 = opts.slots) != null ? _a2 : {}
          });
        },
        onKeyDown(props) {
          var _a2, _b;
          if (props.event.key === "Escape") {
            hiddenPopup();
            return true;
          }
          return (_b = (_a2 = component.ref) == null ? void 0 : _a2.onKeyDown) == null ? void 0 : _b.call(_a2, props);
        },
        onExit() {
          destroy();
        }
      };
    }
  };
  return {
    destroy,
    suggestion,
    hiddenPopup,
    getVisible
  };
};

export { useSuggestion };
//# sourceMappingURL=suggestion.mjs.map
