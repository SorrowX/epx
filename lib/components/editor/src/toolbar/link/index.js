'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var index = require('../../../../icons-vue/index.js');
var icon = require('../icon.js');
var hooks = require('../../hooks.js');
var pluginVue_exportHelper = require('../../../../../_virtual/plugin-vue_export-helper.js');

const _sfc_main = vue.defineComponent({
  __name: "index",
  setup(__props) {
    const { Link } = index;
    const { t } = elementPlus.useLocale();
    const visible = vue.ref(false);
    const toolBarContext = hooks.useToolBarContext();
    const getEditor = () => toolBarContext.value.editor;
    const ruleFormRef = vue.ref();
    const ruleForm = vue.reactive({
      target: true,
      href: ""
    });
    const rules = vue.reactive({});
    const setLink = () => {
      getEditor().chain().focus().extendMarkRange("link").setLink({
        href: ruleForm.href,
        target: ruleForm.target ? "_blank" : "_self"
      }).run();
    };
    const submitForm = async (formEl) => {
      if (!formEl)
        return;
      await formEl.validate((valid) => {
        if (valid) {
          setLink();
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
      const _component_el_checkbox = vue.resolveComponent("el-checkbox");
      return vue.openBlock(), vue.createElementBlock(
        vue.Fragment,
        null,
        [
          vue.createVNode(icon["default"], {
            icon: vue.unref(Link),
            size: "18",
            onClick: () => visible.value = true
          }, null, 8, ["icon", "onClick"]),
          vue.createVNode(vue.unref(elementPlus.ElDialog), {
            modelValue: visible.value,
            "onUpdate:modelValue": ($event) => visible.value = $event,
            "append-to-body": "",
            draggable: "",
            modal: false,
            width: "400",
            title: vue.unref(t)("epx.editor.link")
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
                      vue.toDisplayString(vue.unref(t)("epx.editor.add")),
                      1
                    )
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ])
            ]),
            default: vue.withCtx(() => [
              vue.createVNode(vue.unref(elementPlus.ElForm), {
                ref_key: "ruleFormRef",
                ref: ruleFormRef,
                "label-position": "top",
                model: ruleForm,
                rules,
                "label-width": "auto",
                "status-icon": "",
                style: { "margin-top": "12px" }
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(vue.unref(elementPlus.ElFormItem), {
                    label: vue.unref(t)("epx.editor.link"),
                    prop: "href"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(vue.unref(elementPlus.ElInput), {
                        modelValue: ruleForm.href,
                        "onUpdate:modelValue": ($event) => ruleForm.href = $event,
                        placeholder: vue.unref(t)("epx.editor.linkPlaceholder")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  vue.createVNode(vue.unref(elementPlus.ElFormItem), { prop: "target" }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_el_checkbox, {
                        modelValue: ruleForm.target,
                        "onUpdate:modelValue": ($event) => ruleForm.target = $event
                      }, {
                        default: vue.withCtx(() => [
                          vue.createTextVNode(
                            vue.toDisplayString(vue.unref(t)("epx.editor.target")),
                            1
                          )
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
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
var Link = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "index.vue"]]);

exports["default"] = Link;
//# sourceMappingURL=index.js.map
