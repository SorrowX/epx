'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var vue3 = require('@tiptap/vue-3');
var StarterKit = require('@tiptap/starter-kit');
var Mention = require('@tiptap/extension-mention');
var Placeholder = require('@tiptap/extension-placeholder');
var CharacterCount = require('@tiptap/extension-character-count');
var Underline = require('@tiptap/extension-underline');
var Image = require('@tiptap/extension-image');
var TextAlign = require('@tiptap/extension-text-align');
var Link = require('@tiptap/extension-link');
var index = require('./plugins/tag/index.js');
var index$1 = require('./plugins/video/index.js');
var index$2 = require('./plugins/component/index.js');
var suggestion = require('./mention/suggestion.js');
var editor = require('./editor.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var event = require('../../../constants/event.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var StarterKit__default = /*#__PURE__*/_interopDefaultLegacy(StarterKit);
var Mention__default = /*#__PURE__*/_interopDefaultLegacy(Mention);
var Placeholder__default = /*#__PURE__*/_interopDefaultLegacy(Placeholder);
var CharacterCount__default = /*#__PURE__*/_interopDefaultLegacy(CharacterCount);
var Underline__default = /*#__PURE__*/_interopDefaultLegacy(Underline);
var Image__default = /*#__PURE__*/_interopDefaultLegacy(Image);
var TextAlign__default = /*#__PURE__*/_interopDefaultLegacy(TextAlign);
var Link__default = /*#__PURE__*/_interopDefaultLegacy(Link);

const __default__ = vue.defineComponent({
  name: "ElEditor"
});
const _sfc_main = vue.defineComponent({
  ...__default__,
  props: editor.editorProps,
  emits: editor.editorEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const slots = vue.useSlots();
    const props = __props;
    const emit = __emit;
    const ns = elementPlus.useNamespace("editor");
    const textLength = vue.ref(0);
    const maxLength = vue.computed(() => Number(props.maxlength));
    const isWordLimitVisible = vue.computed(() => maxLength.value !== 0);
    const { suggestion: suggestion$1, hiddenPopup, getVisible } = suggestion.useSuggestion({
      char: props.prefix,
      options: props.options,
      slots
    });
    const handleClickOutside = () => {
      hiddenPopup();
    };
    const handleClick = () => {
      focus();
    };
    const setTextLength = () => {
      const richEditor = editor.value;
      if (richEditor && (isWordLimitVisible.value || slots["character-count"])) {
        textLength.value = richEditor.storage.characterCount.characters();
      }
    };
    const focus = () => {
      var _a;
      const richEditor = editor.value;
      return (_a = richEditor == null ? void 0 : richEditor.commands) == null ? void 0 : _a.focus();
    };
    const getHtml = () => {
      var _a;
      const richEditor = editor.value;
      return (_a = richEditor == null ? void 0 : richEditor.getHTML()) != null ? _a : "";
    };
    const getText = () => {
      var _a;
      const richEditor = editor.value;
      return (_a = richEditor == null ? void 0 : richEditor.getText()) != null ? _a : "";
    };
    const insertHtml = (html, options2) => {
      const richEditor = editor.value;
      richEditor && richEditor.chain().insertContent(html, options2).focus().run();
    };
    const resetHtml = (html) => {
      const richEditor = editor.value;
      richEditor && richEditor.commands.setContent(html, false);
    };
    const setImage = (options2) => {
      const richEditor = editor.value;
      richEditor && richEditor.chain().focus().setImage(options2).run();
    };
    const setVideo = (options2) => {
      let attrs = "";
      Object.entries(options2).forEach(([key, value]) => {
        attrs += `${key}="${value}" `;
      });
      insertHtml(`<video ${attrs}></video>`);
    };
    const options = {
      extensions: [
        index["default"],
        index$1["default"],
        index$2["default"],
        Underline__default["default"],
        Link__default["default"].configure({
          validate: (link) => /^https?:\/\//.test(link)
        }),
        TextAlign__default["default"].configure({
          types: ["heading", "paragraph"]
        }),
        Image__default["default"].configure({
          inline: true,
          allowBase64: false,
          HTMLAttributes: {
            class: "tiptap-image"
          }
        }),
        StarterKit__default["default"].configure({
          bulletList: {
            keepMarks: true
          },
          orderedList: {
            keepMarks: true
          }
        }),
        CharacterCount__default["default"].configure({
          limit: isWordLimitVisible.value ? maxLength.value : null
        }),
        Mention__default["default"].configure({
          HTMLAttributes: {
            class: "tiptap-mention"
          },
          suggestion: suggestion$1,
          deleteTriggerWithBackspace: true
        }),
        Placeholder__default["default"].configure({
          emptyEditorClass: "tiptap-placeholder",
          placeholder: props.placeholder
        }),
        ...props.extensions
      ],
      content: props.modelValue,
      editable: !props.disabled,
      onUpdate: () => {
        emit(event.UPDATE_MODEL_EVENT, getHtml());
      },
      editorProps: {
        handleKeyDown(view, event) {
          if (props.disableEnterEmit)
            return false;
          const hasSpecialKey = [event.shiftKey, event.ctrlKey].some((bool) => bool);
          if (!getVisible() && event.key === "Enter" && !hasSpecialKey) {
            event.preventDefault();
            const values = {
              html: getHtml(),
              text: getText()
            };
            emit("enter", values);
            return true;
          }
          return false;
        }
      },
      ...props.editorOptions
    };
    const editor = vue3.useEditor(options);
    vue.watch(
      () => props.modelValue,
      (value) => {
        if (!editor.value)
          return;
        setTextLength();
        if (getHtml() === value)
          return;
        resetHtml(value);
        setTextLength();
      }
    );
    vue.watch(
      () => props.disabled,
      (value) => {
        const editable = !value;
        editor.value.setEditable(editable);
      }
    );
    vue.onMounted(() => {
      setTextLength();
    });
    vue.onBeforeUnmount(() => {
      var _a;
      (_a = editor.value) == null ? void 0 : _a.destroy();
    });
    __expose({
      editor,
      getHtml,
      getText,
      resetHtml,
      insertHtml,
      setImage,
      setVideo
    });
    return (_ctx, _cache) => {
      return vue.withDirectives((vue.openBlock(), vue.createElementBlock(
        "div",
        {
          class: vue.normalizeClass([
            vue.unref(ns).b(),
            _ctx.border ? vue.unref(ns).m("border") : "",
            _ctx.resize ? vue.unref(ns).m("resize") : "",
            _ctx.disabled ? vue.unref(ns).m("disabled") : ""
          ]),
          onClick: handleClick
        },
        [
          vue.createElementVNode(
            "div",
            {
              class: vue.normalizeClass(vue.unref(ns).b("prepend"))
            },
            [
              vue.renderSlot(_ctx.$slots, "prepend")
            ],
            2
          ),
          vue.createVNode(vue.unref(vue3.EditorContent), {
            class: vue.normalizeClass(vue.unref(ns).b("wrapper")),
            editor: vue.unref(editor)
          }, null, 8, ["class", "editor"]),
          vue.createElementVNode(
            "div",
            {
              class: vue.normalizeClass(vue.unref(ns).b("append"))
            },
            [
              vue.renderSlot(_ctx.$slots, "append")
            ],
            2
          ),
          isWordLimitVisible.value ? (vue.openBlock(), vue.createElementBlock(
            "span",
            {
              key: 0,
              class: vue.normalizeClass(vue.unref(ns).e("count"))
            },
            [
              vue.createElementVNode(
                "span",
                {
                  class: vue.normalizeClass(vue.unref(ns).e("count-inner"))
                },
                vue.toDisplayString(textLength.value) + " / " + vue.toDisplayString(maxLength.value),
                3
              )
            ],
            2
          )) : vue.createCommentVNode("v-if", true),
          vue.renderSlot(_ctx.$slots, "character-count", vue.normalizeProps(vue.guardReactiveProps({ count: textLength.value })))
        ],
        2
      )), [
        [vue.unref(elementPlus.ClickOutside), handleClickOutside]
      ]);
    };
  }
});
var Editor = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "editor.vue"]]);

exports["default"] = Editor;
//# sourceMappingURL=editor2.js.map
