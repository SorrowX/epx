import { defineComponent, ref, openBlock, createElementBlock, normalizeClass, unref, renderSlot, createCommentVNode, createVNode, withCtx, normalizeProps, guardReactiveProps, Fragment, renderList, withModifiers, createBlock, createElementVNode, toDisplayString } from 'vue';
import { useNamespace, ElScrollbar, ElImage } from 'element-plus';
import _export_sfc from '../../../../_virtual/plugin-vue_export-helper.mjs';
import { scrollIntoView } from 'element-plus/es/utils/index';

const _sfc_main = defineComponent({
  __name: "mention-list",
  props: {
    items: {
      type: Array,
      required: true
    },
    command: {
      type: Function,
      required: true
    }
  },
  setup(__props, { expose: __expose }) {
    const ns = useNamespace("editor-mention");
    const scrollbarRef = ref();
    const optionRefs = ref();
    const dropdownRef = ref();
    const selectedIndex = ref(0);
    const props = __props;
    const handleMouseMove = (index) => {
      selectedIndex.value = index;
    };
    function scrollInto(index) {
      var _a, _b, _c, _d;
      const target = (_a = optionRefs.value) == null ? void 0 : _a[index];
      if (target) {
        const menu = (_c = (_b = dropdownRef.value) == null ? void 0 : _b.querySelector) == null ? void 0 : _c.call(_b, `.${ns.b("wrap")}`);
        if (menu) {
          scrollIntoView(menu, target);
        }
      }
      (_d = scrollbarRef.value) == null ? void 0 : _d.handleScroll();
    }
    function onKeyDown({ event }) {
      if (event.key === "ArrowUp") {
        upHandler();
        return true;
      }
      if (event.key === "ArrowDown") {
        downHandler();
        return true;
      }
      if (event.key === "Enter") {
        enterHandler();
        return true;
      }
      return false;
    }
    function upHandler() {
      selectedIndex.value = (selectedIndex.value + props.items.length - 1) % props.items.length;
      scrollInto(selectedIndex.value);
    }
    function downHandler() {
      selectedIndex.value = (selectedIndex.value + 1) % props.items.length;
      scrollInto(selectedIndex.value);
    }
    function enterHandler() {
      selectItem(selectedIndex.value);
    }
    function selectItem(index) {
      const item = props.items[index];
      if (item) {
        props.command(item);
      }
    }
    __expose({
      onKeyDown
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          ref_key: "dropdownRef",
          ref: dropdownRef,
          class: normalizeClass(unref(ns).b())
        },
        [
          _ctx.$slots.header ? (openBlock(), createElementBlock(
            "div",
            {
              key: 0,
              class: normalizeClass(unref(ns).b("header"))
            },
            [
              renderSlot(_ctx.$slots, "header")
            ],
            2
          )) : createCommentVNode("v-if", true),
          createVNode(unref(ElScrollbar), {
            ref_key: "scrollbarRef",
            ref: scrollbarRef,
            tag: "ul",
            "wrap-class": unref(ns).b("wrap"),
            "view-class": unref(ns).b("list"),
            role: "listbox",
            "aria-orientation": "vertical"
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "content", normalizeProps(guardReactiveProps({ items: __props.items, command: __props.command })), () => [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList(__props.items, (item, index) => {
                    return openBlock(), createElementBlock("li", {
                      id: item.id,
                      ref_for: true,
                      ref_key: "optionRefs",
                      ref: optionRefs,
                      key: index,
                      role: "option",
                      class: normalizeClass({ active: index === selectedIndex.value }),
                      onClick: withModifiers(($event) => selectItem(index), ["stop"]),
                      onMousemove: ($event) => handleMouseMove(index)
                    }, [
                      renderSlot(_ctx.$slots, "label", {
                        item,
                        index
                      }, () => {
                        var _a;
                        return [
                          item.url ? (openBlock(), createBlock(unref(ElImage), {
                            key: 0,
                            class: normalizeClass(unref(ns).b("image")),
                            src: item.url,
                            fit: "cover"
                          }, null, 8, ["class", "src"])) : createCommentVNode("v-if", true),
                          createElementVNode(
                            "span",
                            {
                              class: normalizeClass(unref(ns).b("text"))
                            },
                            toDisplayString((_a = item.label) != null ? _a : item.id),
                            3
                          )
                        ];
                      })
                    ], 42, ["id", "onClick", "onMousemove"]);
                  }),
                  128
                ))
              ])
            ]),
            _: 3
          }, 8, ["wrap-class", "view-class"]),
          _ctx.$slots.footer ? (openBlock(), createElementBlock(
            "div",
            {
              key: 1,
              class: normalizeClass(unref(ns).b("footer"))
            },
            [
              renderSlot(_ctx.$slots, "footer")
            ],
            2
          )) : createCommentVNode("v-if", true)
        ],
        2
      );
    };
  }
});
var MentionList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "mention-list.vue"]]);

export { MentionList as default };
//# sourceMappingURL=mention-list.mjs.map
