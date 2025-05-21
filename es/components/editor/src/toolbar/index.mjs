import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, Fragment, renderList, createBlock, withCtx, createVNode, createCommentVNode } from 'vue';
import { useNamespace } from 'element-plus';
import { ElEmoji } from '../../../emoji/index.mjs';
import * as index from '../../../icons-vue/index.mjs';
import { provideToolBarContext } from '../hooks.mjs';
import Icon from './icon.mjs';
import Image from './image/index.mjs';
import Video from './video/index.mjs';
import Link from './link/index.mjs';
import _export_sfc from '../../../../_virtual/plugin-vue_export-helper.mjs';
import { definePropType, isFunction } from 'element-plus/es/utils/index';

const __default__ = defineComponent({
  name: "ElEditorToolbar",
  inheritAttrs: false
});
const _sfc_main = defineComponent({
  ...__default__,
  props: {
    editor: {
      type: definePropType(Object),
      required: true
    },
    toolbarList: {
      type: definePropType(Array),
      default: () => [
        "bold",
        "strike",
        "italic",
        "underline",
        "link",
        "ordered",
        "bullet",
        "blockquote",
        "code",
        "horizontal",
        "alignLeft",
        "alignRight",
        "alignCenter",
        "alignJustify",
        "emoji",
        "image",
        "video",
        "undo",
        "redo"
      ]
    },
    configure: {
      type: definePropType(Object),
      default: () => ({})
    }
  },
  setup(__props) {
    const {
      Bold,
      Italic,
      Bullet,
      Ordered,
      Blockquote,
      Code,
      Strike,
      Undo,
      Redo,
      Emoji,
      Underline,
      Horizontal,
      AlignLeft,
      AlignRight,
      AlignCenter,
      AlignJustify,
      Image: ImageIcon
    } = index;
    const ns = useNamespace("editor-toolbar");
    const props = __props;
    const toolBarContext = computed(() => {
      return {
        editor: props.editor,
        configure: props.configure
      };
    });
    provideToolBarContext(toolBarContext);
    const getEditor = () => {
      return props.editor;
    };
    const commands = {
      bold: {
        type: "bold",
        icon: Bold,
        command: () => getEditor().chain().focus().toggleBold().run(),
        isActive: () => getEditor().isActive("bold"),
        size: 18
      },
      italic: {
        type: "italic",
        icon: Italic,
        command: () => getEditor().chain().focus().toggleItalic().run(),
        isActive: () => getEditor().isActive("italic"),
        size: 18
      },
      bullet: {
        type: "bulletList",
        icon: Bullet,
        command: () => getEditor().chain().focus().toggleBulletList().run(),
        isActive: () => getEditor().isActive("bulletList"),
        size: 21
      },
      ordered: {
        type: "orderedList",
        icon: Ordered,
        command: () => getEditor().chain().focus().toggleOrderedList().run(),
        isActive: () => getEditor().isActive("orderedList"),
        size: 21
      },
      blockquote: {
        type: "blockquote",
        icon: Blockquote,
        command: () => getEditor().chain().focus().toggleBlockquote().run(),
        isActive: () => getEditor().isActive("blockquote"),
        size: 18
      },
      code: {
        type: "codeBlock",
        icon: Code,
        command: () => getEditor().chain().focus().toggleCodeBlock().run(),
        isActive: () => getEditor().isActive("codeBlock"),
        size: 21
      },
      strike: {
        type: "strike",
        icon: Strike,
        command: () => getEditor().chain().focus().toggleStrike().run(),
        isActive: () => getEditor().isActive("strike"),
        size: 18
      },
      undo: {
        type: "undo",
        icon: Undo,
        command: () => getEditor().chain().focus().undo().run(),
        isActive: () => false,
        size: 18
      },
      redo: {
        type: "redo",
        icon: Redo,
        command: () => getEditor().chain().focus().redo().run(),
        isActive: () => false,
        size: 18
      },
      emoji: {
        type: "emoji",
        icon: Emoji,
        command: () => getEditor().chain().focus().redo().run(),
        isActive: () => false,
        size: 21
      },
      underline: {
        type: "underline",
        icon: Underline,
        command: () => getEditor().chain().focus().toggleUnderline().run(),
        isActive: () => getEditor().isActive("underline"),
        size: 17
      },
      horizontal: {
        type: "horizontal",
        icon: Horizontal,
        command: () => getEditor().chain().focus().setHorizontalRule().run(),
        isActive: () => false,
        size: 21
      },
      alignLeft: {
        type: "alignLeft",
        icon: AlignLeft,
        command: () => {
          if (commands.alignLeft.isActive()) {
            getEditor().chain().focus().unsetTextAlign().run();
          } else {
            getEditor().chain().focus().setTextAlign("left").run();
          }
        },
        isActive: () => getEditor().isActive({ textAlign: "left" }),
        size: 21
      },
      alignRight: {
        type: "alignRight",
        icon: AlignRight,
        command: () => {
          if (commands.alignRight.isActive()) {
            getEditor().chain().focus().unsetTextAlign().run();
          } else {
            getEditor().chain().focus().setTextAlign("right").run();
          }
        },
        isActive: () => getEditor().isActive({ textAlign: "right" }),
        size: 21
      },
      alignCenter: {
        type: "alignCenter",
        icon: AlignCenter,
        command: () => {
          if (commands.alignCenter.isActive()) {
            getEditor().chain().focus().unsetTextAlign().run();
          } else {
            getEditor().chain().focus().setTextAlign("center").run();
          }
        },
        isActive: () => getEditor().isActive({ textAlign: "center" }),
        size: 21
      },
      alignJustify: {
        type: "alignJustify",
        icon: AlignJustify,
        command: () => {
          if (commands.alignJustify.isActive()) {
            getEditor().chain().focus().unsetTextAlign().run();
          } else {
            getEditor().chain().focus().setTextAlign("justify").run();
          }
        },
        isActive: () => getEditor().isActive({ textAlign: "justify" }),
        size: 21
      },
      image: {
        type: "image",
        icon: ImageIcon,
        command: () => getEditor().chain().focus().undo().run(),
        isActive: () => false,
        size: 21
      }
    };
    const handleClick = (key) => {
      const item = commands[key];
      item.command();
    };
    const isActive = (key) => {
      const item = commands[key];
      return item.isActive();
    };
    const getValueByKey = (key, prop) => {
      const item = commands[key];
      return isFunction(item[prop]) ? item[prop]() : item[prop];
    };
    const insertImage = (item) => {
      getEditor().chain().focus().setImage({
        src: item.image,
        alt: item.text
      }).run();
    };
    return (_ctx, _cache) => {
      return __props.editor ? (openBlock(), createElementBlock(
        "div",
        {
          key: 0,
          class: normalizeClass(unref(ns).b())
        },
        [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(__props.toolbarList, (key) => {
              return openBlock(), createElementBlock(
                Fragment,
                { key },
                [
                  key === "emoji" ? (openBlock(), createBlock(
                    unref(ElEmoji),
                    {
                      key: 0,
                      onChange: insertImage
                    },
                    {
                      trigger: withCtx(() => [
                        createVNode(Icon, {
                          icon: getValueByKey(key, "icon"),
                          size: getValueByKey(key, "size")
                        }, null, 8, ["icon", "size"])
                      ]),
                      _: 2
                    },
                    1024
                  )) : key === "image" ? (openBlock(), createBlock(Image, { key: 1 })) : key === "video" ? (openBlock(), createBlock(Video, { key: 2 })) : key === "link" ? (openBlock(), createBlock(Link, { key: 3 })) : (openBlock(), createBlock(Icon, {
                    key: 4,
                    active: isActive(key),
                    icon: getValueByKey(key, "icon"),
                    size: getValueByKey(key, "size"),
                    onClick: ($event) => handleClick(key)
                  }, null, 8, ["active", "icon", "size", "onClick"]))
                ],
                64
              );
            }),
            128
          ))
        ],
        2
      )) : createCommentVNode("v-if", true);
    };
  }
});
var EditorToolbar = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "index.vue"]]);

export { EditorToolbar as default };
//# sourceMappingURL=index.mjs.map
