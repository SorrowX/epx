import { defineComponent, useSlots, ref, computed, watch, onMounted, onBeforeUnmount, withDirectives, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, renderSlot, createVNode, toDisplayString, createCommentVNode, normalizeProps, guardReactiveProps } from 'vue';
import { useNamespace, ClickOutside } from 'element-plus';
import { useEditor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import Mention from '@tiptap/extension-mention';
import Placeholder from '@tiptap/extension-placeholder';
import CharacterCount from '@tiptap/extension-character-count';
import Underline from '@tiptap/extension-underline';
import Image from '@tiptap/extension-image';
import TextAlign from '@tiptap/extension-text-align';
import Link from '@tiptap/extension-link';
import Tag from './plugins/tag/index.mjs';
import Video from './plugins/video/index.mjs';
import Component from './plugins/component/index.mjs';
import { useSuggestion } from './mention/suggestion.mjs';
import { editorProps, editorEmits } from './editor.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { UPDATE_MODEL_EVENT } from '../../../constants/event.mjs';

const __default__ = defineComponent({
  name: "ElEditor"
});
const _sfc_main = defineComponent({
  ...__default__,
  props: editorProps,
  emits: editorEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const slots = useSlots();
    const props = __props;
    const emit = __emit;
    const ns = useNamespace("editor");
    const textLength = ref(0);
    const maxLength = computed(() => Number(props.maxlength));
    const isWordLimitVisible = computed(() => maxLength.value !== 0);
    const { suggestion, hiddenPopup, getVisible } = useSuggestion({
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
        Tag,
        Video,
        Component,
        Underline,
        Link.configure({
          validate: (link) => /^https?:\/\//.test(link)
        }),
        TextAlign.configure({
          types: ["heading", "paragraph"]
        }),
        Image.configure({
          inline: true,
          allowBase64: false,
          HTMLAttributes: {
            class: "tiptap-image"
          }
        }),
        StarterKit.configure({
          bulletList: {
            keepMarks: true
          },
          orderedList: {
            keepMarks: true
          }
        }),
        CharacterCount.configure({
          limit: isWordLimitVisible.value ? maxLength.value : null
        }),
        Mention.configure({
          HTMLAttributes: {
            class: "tiptap-mention"
          },
          suggestion,
          deleteTriggerWithBackspace: true
        }),
        Placeholder.configure({
          emptyEditorClass: "tiptap-placeholder",
          placeholder: props.placeholder
        }),
        ...props.extensions
      ],
      content: props.modelValue,
      editable: !props.disabled,
      onUpdate: () => {
        emit(UPDATE_MODEL_EVENT, getHtml());
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
    const editor = useEditor(options);
    watch(
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
    watch(
      () => props.disabled,
      (value) => {
        const editable = !value;
        editor.value.setEditable(editable);
      }
    );
    onMounted(() => {
      setTextLength();
    });
    onBeforeUnmount(() => {
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
      return withDirectives((openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass([
            unref(ns).b(),
            _ctx.border ? unref(ns).m("border") : "",
            _ctx.resize ? unref(ns).m("resize") : "",
            _ctx.disabled ? unref(ns).m("disabled") : ""
          ]),
          onClick: handleClick
        },
        [
          createElementVNode(
            "div",
            {
              class: normalizeClass(unref(ns).b("prepend"))
            },
            [
              renderSlot(_ctx.$slots, "prepend")
            ],
            2
          ),
          createVNode(unref(EditorContent), {
            class: normalizeClass(unref(ns).b("wrapper")),
            editor: unref(editor)
          }, null, 8, ["class", "editor"]),
          createElementVNode(
            "div",
            {
              class: normalizeClass(unref(ns).b("append"))
            },
            [
              renderSlot(_ctx.$slots, "append")
            ],
            2
          ),
          isWordLimitVisible.value ? (openBlock(), createElementBlock(
            "span",
            {
              key: 0,
              class: normalizeClass(unref(ns).e("count"))
            },
            [
              createElementVNode(
                "span",
                {
                  class: normalizeClass(unref(ns).e("count-inner"))
                },
                toDisplayString(textLength.value) + " / " + toDisplayString(maxLength.value),
                3
              )
            ],
            2
          )) : createCommentVNode("v-if", true),
          renderSlot(_ctx.$slots, "character-count", normalizeProps(guardReactiveProps({ count: textLength.value })))
        ],
        2
      )), [
        [unref(ClickOutside), handleClickOutside]
      ]);
    };
  }
});
var Editor = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "editor.vue"]]);

export { Editor as default };
//# sourceMappingURL=editor2.mjs.map
