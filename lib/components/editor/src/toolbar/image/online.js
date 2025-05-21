'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var pluginVue_exportHelper = require('../../../../../_virtual/plugin-vue_export-helper.js');

const _sfc_main = vue.defineComponent({
  __name: "online",
  emits: ["change"],
  setup(__props, { emit: __emit }) {
    const { t } = elementPlus.useLocale();
    const emit = __emit;
    const visible = vue.ref(false);
    const ruleFormRef = vue.ref();
    const ruleForm = vue.reactive({
      src: "",
      alt: ""
    });
    const rules = vue.reactive({});
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
      const _component_el_input = vue.resolveComponent("el-input");
      const _component_el_form_item = vue.resolveComponent("el-form-item");
      const _component_el_form = vue.resolveComponent("el-form");
      return vue.openBlock(), vue.createElementBlock(
        vue.Fragment,
        null,
        [
          vue.createElementVNode("span", {
            onClick: ($event) => visible.value = true
          }, vue.toDisplayString(vue.unref(t)("epx.editor.onlinePicture")), 9, ["onClick"]),
          vue.createVNode(vue.unref(elementPlus.ElDialog), {
            modelValue: visible.value,
            "onUpdate:modelValue": ($event) => visible.value = $event,
            width: "400",
            "append-to-body": "",
            draggable: "",
            modal: false,
            title: vue.unref(t)("epx.editor.onlinePicture")
          }, {
            footer: vue.withCtx(() => [
              vue.createElementVNode("div", { class: "dialog-footer" }, [
                vue.createVNode(vue.unref(elementPlus.ElButton), {
                  onClick: ($event) => resetForm(ruleFormRef.value)
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(
                      vue.toDisplayString(vue.unref(t)("epx.common.cancel")),
                      1
                    )
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                vue.createVNode(vue.unref(elementPlus.ElButton), {
                  type: "primary",
                  onClick: ($event) => submitForm(ruleFormRef.value)
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(
                      vue.toDisplayString(vue.unref(t)("epx.editor.insert")),
                      1
                    )
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ])
            ]),
            default: vue.withCtx(() => [
              vue.createVNode(_component_el_form, {
                ref_key: "ruleFormRef",
                ref: ruleFormRef,
                "label-position": "top",
                model: ruleForm,
                rules,
                "label-width": "auto",
                "status-icon": "",
                style: { "margin-top": "16px" }
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_el_form_item, {
                    label: vue.unref(t)("epx.editor.pictureAddress"),
                    prop: "src"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_el_input, {
                        modelValue: ruleForm.src,
                        "onUpdate:modelValue": ($event) => ruleForm.src = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  vue.createVNode(_component_el_form_item, {
                    label: vue.unref(t)("epx.editor.pictureDescription"),
                    prop: "alt"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_el_input, {
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
var OnlineImage = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "online.vue"]]);

exports["default"] = OnlineImage;
//# sourceMappingURL=online.js.map
