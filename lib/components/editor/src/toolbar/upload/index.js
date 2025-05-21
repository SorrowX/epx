'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var pluginVue_exportHelper = require('../../../../../_virtual/plugin-vue_export-helper.js');

const __default__ = vue.defineComponent({
  name: "EditorUpload"
});
const _sfc_main = vue.defineComponent({
  ...__default__,
  props: {
    triggerName: {
      type: String
    }
  },
  emits: ["change"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const upload = vue.ref();
    const handleExceed = (files) => {
      upload.value.clearFiles();
      const file = files[0];
      file.uid = elementPlus.genFileId();
      upload.value.handleStart(file);
    };
    const handleCahnge = (uploadFile) => {
      emit("change", uploadFile);
    };
    return (_ctx, _cache) => {
      const _component_el_upload = vue.resolveComponent("el-upload");
      return vue.openBlock(), vue.createBlock(
        _component_el_upload,
        {
          ref_key: "upload",
          ref: upload,
          limit: 1,
          "on-exceed": handleExceed,
          "on-change": handleCahnge,
          "auto-upload": false,
          "show-file-list": false
        },
        {
          trigger: vue.withCtx(() => [
            vue.createElementVNode(
              "span",
              null,
              vue.toDisplayString(__props.triggerName),
              1
            )
          ]),
          _: 1
        },
        512
      );
    };
  }
});
var UploadVideo = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "index.vue"]]);

exports["default"] = UploadVideo;
//# sourceMappingURL=index.js.map
