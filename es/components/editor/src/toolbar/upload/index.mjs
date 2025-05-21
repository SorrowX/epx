import { defineComponent, ref, resolveComponent, openBlock, createBlock, withCtx, createElementVNode, toDisplayString } from 'vue';
import { genFileId } from 'element-plus';
import _export_sfc from '../../../../../_virtual/plugin-vue_export-helper.mjs';

const __default__ = defineComponent({
  name: "EditorUpload"
});
const _sfc_main = defineComponent({
  ...__default__,
  props: {
    triggerName: {
      type: String
    }
  },
  emits: ["change"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const upload = ref();
    const handleExceed = (files) => {
      upload.value.clearFiles();
      const file = files[0];
      file.uid = genFileId();
      upload.value.handleStart(file);
    };
    const handleCahnge = (uploadFile) => {
      emit("change", uploadFile);
    };
    return (_ctx, _cache) => {
      const _component_el_upload = resolveComponent("el-upload");
      return openBlock(), createBlock(
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
          trigger: withCtx(() => [
            createElementVNode(
              "span",
              null,
              toDisplayString(__props.triggerName),
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
var UploadVideo = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "index.vue"]]);

export { UploadVideo as default };
//# sourceMappingURL=index.mjs.map
