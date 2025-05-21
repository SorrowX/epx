'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var pluginVue_exportHelper = require('../../../../_virtual/plugin-vue_export-helper.js');
var index = require('element-plus/es/utils/index');

const _sfc_main = vue.defineComponent({
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
    const ns = elementPlus.useNamespace("editor-mention");
    const scrollbarRef = vue.ref();
    const optionRefs = vue.ref();
    const dropdownRef = vue.ref();
    const selectedIndex = vue.ref(0);
    const props = __props;
    const handleMouseMove = (index) => {
      selectedIndex.value = index;
    };
    function scrollInto(index$1) {
      var _a, _b, _c, _d;
      const target = (_a = optionRefs.value) == null ? void 0 : _a[index$1];
      if (target) {
        const menu = (_c = (_b = dropdownRef.value) == null ? void 0 : _b.querySelector) == null ? void 0 : _c.call(_b, `.${ns.b("wrap")}`);
        if (menu) {
          index.scrollIntoView(menu, target);
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
      return vue.openBlock(), vue.createElementBlock(
        "div",
        {
          ref_key: "dropdownRef",
          ref: dropdownRef,
          class: vue.normalizeClass(vue.unref(ns).b())
        },
        [
          _ctx.$slots.header ? (vue.openBlock(), vue.createElementBlock(
            "div",
            {
              key: 0,
              class: vue.normalizeClass(vue.unref(ns).b("header"))
            },
            [
              vue.renderSlot(_ctx.$slots, "header")
            ],
            2
          )) : vue.createCommentVNode("v-if", true),
          vue.createVNode(vue.unref(elementPlus.ElScrollbar), {
            ref_key: "scrollbarRef",
            ref: scrollbarRef,
            tag: "ul",
            "wrap-class": vue.unref(ns).b("wrap"),
            "view-class": vue.unref(ns).b("list"),
            role: "listbox",
            "aria-orientation": "vertical"
          }, {
            default: vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "content", vue.normalizeProps(vue.guardReactiveProps({ items: __props.items, command: __props.command })), () => [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(__props.items, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("li", {
                      id: item.id,
                      ref_for: true,
                      ref_key: "optionRefs",
                      ref: optionRefs,
                      key: index,
                      role: "option",
                      class: vue.normalizeClass({ active: index === selectedIndex.value }),
                      onClick: vue.withModifiers(($event) => selectItem(index), ["stop"]),
                      onMousemove: ($event) => handleMouseMove(index)
                    }, [
                      vue.renderSlot(_ctx.$slots, "label", {
                        item,
                        index
                      }, () => {
                        var _a;
                        return [
                          item.url ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElImage), {
                            key: 0,
                            class: vue.normalizeClass(vue.unref(ns).b("image")),
                            src: item.url,
                            fit: "cover"
                          }, null, 8, ["class", "src"])) : vue.createCommentVNode("v-if", true),
                          vue.createElementVNode(
                            "span",
                            {
                              class: vue.normalizeClass(vue.unref(ns).b("text"))
                            },
                            vue.toDisplayString((_a = item.label) != null ? _a : item.id),
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
          _ctx.$slots.footer ? (vue.openBlock(), vue.createElementBlock(
            "div",
            {
              key: 1,
              class: vue.normalizeClass(vue.unref(ns).b("footer"))
            },
            [
              vue.renderSlot(_ctx.$slots, "footer")
            ],
            2
          )) : vue.createCommentVNode("v-if", true)
        ],
        2
      );
    };
  }
});
var MentionList = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "mention-list.vue"]]);

exports["default"] = MentionList;
//# sourceMappingURL=mention-list.js.map
