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
  name: "EditorVideo",
  inheritAttrs: false
});
const _sfc_main = vue.defineComponent({
  ...__default__,
  setup(__props) {
    const ns = elementPlus.useNamespace("editor-video");
    const { t } = elementPlus.useLocale();
    const { Video } = index$1;
    const toolBarContext = hooks.useToolBarContext();
    const getEditor = () => toolBarContext.value.editor;
    const getConfigure = () => {
      var _a, _b;
      return (_b = (_a = toolBarContext.value.configure) == null ? void 0 : _a.video) != null ? _b : { onChange: () => {
      } };
    };
    const setVideo = (options) => {
      let attrs = "";
      Object.entries(options).forEach(([key, value]) => {
        attrs += `${key}="${value}" `;
      });
      const html = `<video ${attrs}></video>`;
      getEditor().chain().insertContent(html, {}).focus().run();
    };
    const handleOnlineVideo = (options) => {
      setVideo(options);
    };
    const handleUploadVideo = (uploadFile) => {
      const videoConfig = getConfigure();
      videoConfig.onChange(uploadFile, (options) => {
        setVideo(options);
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
                      vue.createVNode(online["default"], { onChange: handleOnlineVideo })
                    ]),
                    _: 1
                  }),
                  vue.createVNode(vue.unref(elementPlus.ElDropdownItem), null, {
                    default: vue.withCtx(() => [
                      vue.createVNode(index["default"], {
                        "trigger-name": vue.unref(t)("epx.editor.uploadVideo"),
                        onChange: handleUploadVideo
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
                icon: vue.unref(Video),
                size: "21",
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
var Video = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "index.vue"]]);

exports["default"] = Video;
//# sourceMappingURL=index.js.map
