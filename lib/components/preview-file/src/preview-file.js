'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var index = require('../../renderer/index.js');
var previewFile = require('./preview-file2.js');
var helper = require('./helper.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');

const __default__ = vue.defineComponent({
  name: "ElPreviewFile"
});
const _sfc_main = vue.defineComponent({
  ...__default__,
  props: previewFile.previewFileProps,
  emits: previewFile.previewFileEmits,
  setup(__props, { emit: __emit }) {
    const ns = elementPlus.useNamespace("preview-file");
    const props = __props;
    const emit = __emit;
    const calcFileList = vue.computed(() => {
      const { fileList: list } = props;
      return list.map((item) => {
        var _a;
        const { fileName, fileNameSuffix } = helper.parseFileName(item.name);
        return {
          data: item,
          meta: {
            name: item.name,
            fileName,
            fileNameSuffix,
            size: helper.parseSize((_a = item.size) != null ? _a : 0),
            ...helper.getIconState(fileNameSuffix)
          }
        };
      });
    });
    const handleClick = (item) => emit("click", item);
    return (_ctx, _cache) => {
      const _component_el_text = vue.resolveComponent("el-text");
      return vue.openBlock(), vue.createElementBlock(
        "div",
        {
          class: vue.normalizeClass(vue.unref(ns).b())
        },
        [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(calcFileList.value, (item, index$1) => {
              return vue.renderSlot(_ctx.$slots, "default", vue.mergeProps({ ref_for: true }, { data: item.data, meta: item.meta }), () => [
                (vue.openBlock(), vue.createElementBlock("div", {
                  key: index$1,
                  class: vue.normalizeClass(vue.unref(ns).e("item")),
                  onClick: () => handleClick(item)
                }, [
                  vue.createElementVNode(
                    "div",
                    {
                      class: vue.normalizeClass(vue.unref(ns).e("icon"))
                    },
                    [
                      vue.createVNode(vue.unref(elementPlus.ElIcon), {
                        size: item.meta.iconSize,
                        color: item.meta.iconColor
                      }, {
                        default: vue.withCtx(() => [
                          vue.createVNode(vue.unref(index.ElRenderer), {
                            renderer: () => vue.h(item.meta.icon)
                          }, null, 8, ["renderer"])
                        ]),
                        _: 2
                      }, 1032, ["size", "color"])
                    ],
                    2
                  ),
                  vue.createElementVNode(
                    "div",
                    {
                      class: vue.normalizeClass(vue.unref(ns).e("content"))
                    },
                    [
                      vue.createElementVNode(
                        "div",
                        {
                          class: vue.normalizeClass(vue.unref(ns).e("content-name"))
                        },
                        [
                          vue.createVNode(
                            _component_el_text,
                            null,
                            {
                              default: vue.withCtx(() => [
                                vue.createTextVNode(
                                  vue.toDisplayString(item.meta.name),
                                  1
                                )
                              ]),
                              _: 2
                            },
                            1024
                          )
                        ],
                        2
                      ),
                      vue.createElementVNode(
                        "div",
                        {
                          class: vue.normalizeClass(vue.unref(ns).e("content-desc"))
                        },
                        [
                          vue.createVNode(
                            _component_el_text,
                            { type: "info" },
                            {
                              default: vue.withCtx(() => [
                                vue.createTextVNode(
                                  vue.toDisplayString(item.meta.size),
                                  1
                                )
                              ]),
                              _: 2
                            },
                            1024
                          )
                        ],
                        2
                      )
                    ],
                    2
                  )
                ], 10, ["onClick"]))
              ]);
            }),
            256
          ))
        ],
        2
      );
    };
  }
});
var PreviewFile = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "preview-file.vue"]]);

exports["default"] = PreviewFile;
//# sourceMappingURL=preview-file.js.map
