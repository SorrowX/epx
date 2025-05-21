import { defineComponent, ref, reactive, resolveComponent, openBlock, createElementBlock, Fragment, createVNode, unref, withCtx, createElementVNode, createTextVNode, toDisplayString } from 'vue';
import { useLocale, ElDialog, ElButton, ElForm, ElFormItem, ElInput } from 'element-plus';
import * as index from '../../../../icons-vue/index.mjs';
import Icon from '../icon.mjs';
import { useToolBarContext } from '../../hooks.mjs';
import _export_sfc from '../../../../../_virtual/plugin-vue_export-helper.mjs';

const _sfc_main = defineComponent({
  __name: "index",
  setup(__props) {
    const { Link } = index;
    const { t } = useLocale();
    const visible = ref(false);
    const toolBarContext = useToolBarContext();
    const getEditor = () => toolBarContext.value.editor;
    const ruleFormRef = ref();
    const ruleForm = reactive({
      target: true,
      href: ""
    });
    const rules = reactive({});
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
      const _component_el_checkbox = resolveComponent("el-checkbox");
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          createVNode(Icon, {
            icon: unref(Link),
            size: "18",
            onClick: () => visible.value = true
          }, null, 8, ["icon", "onClick"]),
          createVNode(unref(ElDialog), {
            modelValue: visible.value,
            "onUpdate:modelValue": ($event) => visible.value = $event,
            "append-to-body": "",
            draggable: "",
            modal: false,
            width: "400",
            title: unref(t)("epx.editor.link")
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
                      toDisplayString(unref(t)("epx.editor.add")),
                      1
                    )
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ])
            ]),
            default: withCtx(() => [
              createVNode(unref(ElForm), {
                ref_key: "ruleFormRef",
                ref: ruleFormRef,
                "label-position": "top",
                model: ruleForm,
                rules,
                "label-width": "auto",
                "status-icon": "",
                style: { "margin-top": "12px" }
              }, {
                default: withCtx(() => [
                  createVNode(unref(ElFormItem), {
                    label: unref(t)("epx.editor.link"),
                    prop: "href"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(ElInput), {
                        modelValue: ruleForm.href,
                        "onUpdate:modelValue": ($event) => ruleForm.href = $event,
                        placeholder: unref(t)("epx.editor.linkPlaceholder")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  createVNode(unref(ElFormItem), { prop: "target" }, {
                    default: withCtx(() => [
                      createVNode(_component_el_checkbox, {
                        modelValue: ruleForm.target,
                        "onUpdate:modelValue": ($event) => ruleForm.target = $event
                      }, {
                        default: withCtx(() => [
                          createTextVNode(
                            toDisplayString(unref(t)("epx.editor.target")),
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
var Link = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "index.vue"]]);

export { Link as default };
//# sourceMappingURL=index.mjs.map
