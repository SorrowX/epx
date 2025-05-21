'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var index$1 = require('../../../../icons-vue/index.js');
var icon = require('../icon.js');
var hooks = require('../../hooks.js');
var index = require('../upload/index.js');
var online = require('./online.js');
var pluginVue_exportHelper = require('../../../../../_virtual/plugin-vue_export-helper.js');

const __default__ = vue.defineComponent({
  name: "EditorImage",
  inheritAttrs: false
});
const _sfc_main = vue.defineComponent({
  ...__default__,
  setup(__props) {
    const ns = elementPlus.useNamespace("editor-image");
    const { t } = elementPlus.useLocale();
    const { Image } = index$1;
    const toolBarContext = hooks.useToolBarContext();
    const getEditor = () => toolBarContext.value.editor;
    const getConfigure = () => {
      var _a, _b;
      return (_b = (_a = toolBarContext.value.configure) == null ? void 0 : _a.image) != null ? _b : { onChange: () => {
      } };
    };
    const setImage = (options) => {
      getEditor().chain().focus().setImage(options).run();
    };
    const handleOnlineImage = (options) => {
      setImage(options);
    };
    const handleUploadImage = (uploadFile) => {
      const imageConfig = getConfigure();
      imageConfig.onChange(uploadFile, (options) => {
        setImage(options);
      });
    };
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock(
        "span",
        {
          class: vue.normalizeClass([vue.unref(ns).b()])
        },
        [
          vue.createVNode(vue.unref(elementPlus.ElDropdown), { trigger: "click" }, {
            dropdown: vue.withCtx(() => [
              vue.createVNode(vue.unref(elementPlus.ElDropdownMenu), null, {
                default: vue.withCtx(() => [
                  vue.createVNode(vue.unref(elementPlus.ElDropdownItem), null, {
                    default: vue.withCtx(() => [
                      vue.createVNode(online["default"], { onChange: handleOnlineImage })
                    ]),
                    _: 1
                  }),
                  vue.createVNode(vue.unref(elementPlus.ElDropdownItem), null, {
                    default: vue.withCtx(() => [
                      vue.createVNode(index["default"], {
                        "trigger-name": vue.unref(t)("epx.editor.uploadPicture"),
                        onChange: handleUploadImage
                      }, null, 8, ["trigger-name"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            default: vue.withCtx(() => [
              vue.createVNode(icon["default"], {
                icon: vue.unref(Image),
                size: "20",
                color: "#000000"
              }, null, 8, ["icon"])
            ]),
            _: 1
          })
        ],
        2
      );
    };
  }
});
var Image = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "index.vue"]]);

exports["default"] = Image;
//# sourceMappingURL=index.js.map
