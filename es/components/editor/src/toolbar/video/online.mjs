import { defineComponent, ref, reactive, resolveComponent, openBlock, createElementBlock, Fragment, createElementVNode, toDisplayString, unref, createVNode, withCtx, createTextVNode } from 'vue';
import { useLocale, ElDialog, ElButton, ElInputNumber } from 'element-plus';
import _export_sfc from '../../../../../_virtual/plugin-vue_export-helper.mjs';

const _sfc_main = defineComponent({
  __name: "online",
  emits: ["change"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const { t } = useLocale();
    const visible = ref(false);
    const ruleFormRef = ref();
    const ruleForm = reactive({
      src: "",
      width: 320
    });
    const rules = reactive({});
    const submitForm = async (formEl) => {
      if (!formEl)
        return;
      await formEl.validate((valid) => {
        if (valid) {
          emit("change", { ...ruleForm });
          formEl.resetFields();
          visible.value = false;
        }
      });
    };
    const resetForm = (formEl) => {
      if (!formEl)
        return;
      visible.value = false;
      formEl.resetFields();
    };
    return (_ctx, _cache) => {
      const _component_el_input = resolveComponent("el-input");
      const _component_el_form_item = resolveComponent("el-form-item");
      const _component_el_form = resolveComponent("el-form");
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          createElementVNode("span", {
            onClick: ($event) => visible.value = true
          }, toDisplayString(unref(t)("epx.editor.onlineVideo")), 9, ["onClick"]),
          createVNode(unref(ElDialog), {
            modelValue: visible.value,
            "onUpdate:modelValue": ($event) => visible.value = $event,
            width: "400",
            "append-to-body": "",
            draggable: "",
            modal: false,
            title: unref(t)("epx.editor.onlineVideo")
          }, {
            footer: withCtx(() => [
              createElementVNode("div", { class: "dialog-footer" }, [
                createVNode(unref(ElButton), {
                  onClick: ($event) => resetForm(ruleFormRef.value)
                }, {
                  default: withCtx(() => [
                    createTextVNode(
                      toDisplayString(unref(t)("epx.common.cancel")),
                      1
                    )
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(unref(ElButton), {
                  type: "primary",
                  onClick: ($event) => submitForm(ruleFormRef.value)
                }, {
                  default: withCtx(() => [
                    createTextVNode(
                      toDisplayString(unref(t)("epx.editor.insert")),
                      1
                    )
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ])
            ]),
            default: withCtx(() => [
              createVNode(_component_el_form, {
                ref_key: "ruleFormRef",
                ref: ruleFormRef,
                "label-position": "top",
                model: ruleForm,
                rules,
                "label-width": "auto",
                "status-icon": "",
                style: { "margin-top": "16px" }
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_form_item, {
                    label: unref(t)("epx.editor.videoAddress"),
                    prop: "src"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_input, {
                        modelValue: ruleForm.src,
                        "onUpdate:modelValue": ($event) => ruleForm.src = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  createVNode(_component_el_form_item, {
                    label: unref(t)("epx.editor.videoWidth"),
                    prop: "width"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(ElInputNumber), {
                        modelValue: ruleForm.width,
                        "onUpdate:modelValue": ($event) => ruleForm.width = $event,
                        min: 1,
                        max: 9999,
                        "controls-position": "right",
                        style: { "width": "100%" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }, 8, ["label"])
                ]),
                _: 1
              }, 8, ["model", "rules"])
            ]),
            _: 1
          }, 8, ["modelValue", "onUpdate:modelValue", "title"])
        ],
        64
      );
    };
  }
});
var OnlineVideo = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "online.vue"]]);

export { OnlineVideo as default };
//# sourceMappingURL=online.mjs.map
