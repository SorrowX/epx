import { defineComponent, computed, resolveComponent, openBlock, createElementBlock, normalizeClass, unref, Fragment, renderList, renderSlot, mergeProps, createElementVNode, createVNode, withCtx, h, createTextVNode, toDisplayString } from 'vue';
import { useNamespace, ElIcon } from 'element-plus';
import { ElRenderer } from '../../renderer/index.mjs';
import { previewFileProps, previewFileEmits } from './preview-file2.mjs';
import { parseFileName, parseSize, getIconState } from './helper.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';

const __default__ = defineComponent({
  name: "ElPreviewFile"
});
const _sfc_main = defineComponent({
  ...__default__,
  props: previewFileProps,
  emits: previewFileEmits,
  setup(__props, { emit: __emit }) {
    const ns = useNamespace("preview-file");
    const props = __props;
    const emit = __emit;
    const calcFileList = computed(() => {
      const { fileList: list } = props;
      return list.map((item) => {
        var _a;
        const { fileName, fileNameSuffix } = parseFileName(item.name);
        return {
          data: item,
          meta: {
            name: item.name,
            fileName,
            fileNameSuffix,
            size: parseSize((_a = item.size) != null ? _a : 0),
            ...getIconState(fileNameSuffix)
          }
        };
      });
    });
    const handleClick = (item) => emit("click", item);
    return (_ctx, _cache) => {
      const _component_el_text = resolveComponent("el-text");
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(unref(ns).b())
        },
        [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(calcFileList.value, (item, index) => {
              return renderSlot(_ctx.$slots, "default", mergeProps({ ref_for: true }, { data: item.data, meta: item.meta }), () => [
                (openBlock(), createElementBlock("div", {
                  key: index,
                  class: normalizeClass(unref(ns).e("item")),
                  onClick: () => handleClick(item)
                }, [
                  createElementVNode(
                    "div",
                    {
                      class: normalizeClass(unref(ns).e("icon"))
                    },
                    [
                      createVNode(unref(ElIcon), {
                        size: item.meta.iconSize,
                        color: item.meta.iconColor
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(ElRenderer), {
                            renderer: () => h(item.meta.icon)
                          }, null, 8, ["renderer"])
                        ]),
                        _: 2
                      }, 1032, ["size", "color"])
                    ],
                    2
                  ),
                  createElementVNode(
                    "div",
                    {
                      class: normalizeClass(unref(ns).e("content"))
                    },
                    [
                      createElementVNode(
                        "div",
                        {
                          class: normalizeClass(unref(ns).e("content-name"))
                        },
                        [
                          createVNode(
                            _component_el_text,
                            null,
                            {
                              default: withCtx(() => [
                                createTextVNode(
                                  toDisplayString(item.meta.name),
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
                      createElementVNode(
                        "div",
                        {
                          class: normalizeClass(unref(ns).e("content-desc"))
                        },
                        [
                          createVNode(
                            _component_el_text,
                            { type: "info" },
                            {
                              default: withCtx(() => [
                                createTextVNode(
                                  toDisplayString(item.meta.size),
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
var PreviewFile = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "preview-file.vue"]]);

export { PreviewFile as default };
//# sourceMappingURL=preview-file.mjs.map
