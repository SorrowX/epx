import { defineComponent, ref, reactive, resolveComponent, openBlock, createElementBlock, Fragment, createElementVNode, toDisplayString, unref, createVNode, withCtx, createTextVNode } from 'vue';
import { useLocale, ElDialog, ElButton } from 'element-plus';
import _export_sfc from '../../../../../_virtual/plugin-vue_export-helper.mjs';

const _sfc_main = defineComponent({
  __name: "online",
  emits: ["change"],
  setup(__props, { emit: __emit }) {
    const { t } = useLocale();
    const emit = __emit;
    const visible = ref(false);
    const ruleFormRef = ref();
    const ruleForm = reactive({
      src: "",
      alt: ""
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
          }, toDisplayString(unref(t)("epx.editor.onlinePicture")), 9, ["onClick"]),
          createVNode(unref(ElDialog), {
            modelValue: visible.value,
            "onUpdate:modelValue": ($event) => visible.value = $event,
            width: "400",
            "append-to-body": "",
            draggable: "",
            modal: false,
            title: unref(t)("epx.editor.onlinePicture")
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
                    label: unref(t)("epx.editor.pictureAddress"),
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
                    label: unref(t)("epx.editor.pictureDescription"),
                    prop: "alt"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_input, {
                        modelValue: ruleForm.alt,
                        "onUpdate:modelValue": ($event) => ruleForm.alt = $event
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
var OnlineImage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "online.vue"]]);

export { OnlineImage as default };
//# sourceMappingURL=online.mjs.map
