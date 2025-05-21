'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var index$1 = require('../../../emoji/index.js');
var index$5 = require('../../../icons-vue/index.js');
var hooks = require('../hooks.js');
var icon = require('./icon.js');
var index$2 = require('./image/index.js');
var index$3 = require('./video/index.js');
var index$4 = require('./link/index.js');
var pluginVue_exportHelper = require('../../../../_virtual/plugin-vue_export-helper.js');
var index = require('element-plus/es/utils/index');

const __default__ = vue.defineComponent({
  name: "ElEditorToolbar",
  inheritAttrs: false
});
const _sfc_main = vue.defineComponent({
  ...__default__,
  props: {
    editor: {
      type: index.definePropType(Object),
      required: true
    },
    toolbarList: {
      type: index.definePropType(Array),
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
      type: index.definePropType(Object),
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
    } = index$5;
    const ns = elementPlus.useNamespace("editor-toolbar");
    const props = __props;
    const toolBarContext = vue.computed(() => {
      return {
        editor: props.editor,
        configure: props.configure
      };
    });
    hooks.provideToolBarContext(toolBarContext);
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
      return index.isFunction(item[prop]) ? item[prop]() : item[prop];
    };
    const insertImage = (item) => {
      getEditor().chain().focus().setImage({
        src: item.image,
        alt: item.text
      }).run();
    };
    return (_ctx, _cache) => {
      return __props.editor ? (vue.openBlock(), vue.createElementBlock(
        "div",
        {
          key: 0,
          class: vue.normalizeClass(vue.unref(ns).b())
        },
        [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(__props.toolbarList, (key) => {
              return vue.openBlock(), vue.createElementBlock(
                vue.Fragment,
                { key },
                [
                  key === "emoji" ? (vue.openBlock(), vue.createBlock(
                    vue.unref(index$1.ElEmoji),
                    {
                      key: 0,
                      onChange: insertImage
                    },
                    {
                      trigger: vue.withCtx(() => [
                        vue.createVNode(icon["default"], {
                          icon: getValueByKey(key, "icon"),
                          size: getValueByKey(key, "size")
                        }, null, 8, ["icon", "size"])
                      ]),
                      _: 2
                    },
                    1024
                  )) : key === "image" ? (vue.openBlock(), vue.createBlock(index$2["default"], { key: 1 })) : key === "video" ? (vue.openBlock(), vue.createBlock(index$3["default"], { key: 2 })) : key === "link" ? (vue.openBlock(), vue.createBlock(index$4["default"], { key: 3 })) : (vue.openBlock(), vue.createBlock(icon["default"], {
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
      )) : vue.createCommentVNode("v-if", true);
    };
  }
});
var EditorToolbar = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "index.vue"]]);

exports["default"] = EditorToolbar;
//# sourceMappingURL=index.js.map
