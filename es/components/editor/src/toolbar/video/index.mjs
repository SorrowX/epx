import { defineComponent, openBlock, createElementBlock, normalizeClass, unref, createVNode, withCtx } from 'vue';
import { useNamespace, useLocale, ElDropdown, ElDropdownMenu, ElDropdownItem } from 'element-plus';
import * as index from '../../../../icons-vue/index.mjs';
import Icon from '../icon.mjs';
import { useToolBarContext } from '../../hooks.mjs';
import UploadVideo from '../upload/index.mjs';
import OnlineVideo from './online.mjs';
import _export_sfc from '../../../../../_virtual/plugin-vue_export-helper.mjs';

const __default__ = defineComponent({
  name: "EditorVideo",
  inheritAttrs: false
});
const _sfc_main = defineComponent({
  ...__default__,
  setup(__props) {
    const ns = useNamespace("editor-video");
    const { t } = useLocale();
    const { Video } = index;
    const toolBarContext = useToolBarContext();
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
      return openBlock(), createElementBlock(
        "span",
        {
          class: normalizeClass([unref(ns).b()])
        },
        [
          createVNode(unref(ElDropdown), { trigger: "click" }, {
            dropdown: withCtx(() => [
              createVNode(unref(ElDropdownMenu), null, {
                default: withCtx(() => [
                  createVNode(unref(ElDropdownItem), null, {
                    default: withCtx(() => [
                      createVNode(OnlineVideo, { onChange: handleOnlineVideo })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(ElDropdownItem), null, {
                    default: withCtx(() => [
                      createVNode(UploadVideo, {
                        "trigger-name": unref(t)("epx.editor.uploadVideo"),
                        onChange: handleUploadVideo
                      }, null, 8, ["trigger-name"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            default: withCtx(() => [
              createVNode(Icon, {
                icon: unref(Video),
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
var Video = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "index.vue"]]);

export { Video as default };
//# sourceMappingURL=index.mjs.map
