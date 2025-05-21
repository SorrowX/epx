import { defineComponent, ref, computed, watch, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, renderSlot, createVNode, mergeProps, withCtx, normalizeStyle, withDirectives, normalizeProps, guardReactiveProps, createTextVNode, toDisplayString, vShow, nextTick } from 'vue';
import { useLocale, useNamespace, ElDialog, DynamicSizeList, ElIcon, ElButton } from 'element-plus';
import { ElTablePage } from '../../table-page/index.mjs';
import { Close } from '@element-plus/icons-vue';
import { tableDialogProps, tableDialogEmits } from './table-dialog2.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { UPDATE_MODEL_EVENT, CANCEL_EVENT } from '../../../constants/event.mjs';

const __default__ = defineComponent({
  name: "ElTableDialog",
  inheritAttrs: false
});
const _sfc_main = defineComponent({
  ...__default__,
  props: tableDialogProps,
  emits: tableDialogEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { t } = useLocale();
    const ns = useNamespace("table-dialog");
    const visible = ref(false);
    const selectList = ref([]);
    const tableRef = ref();
    const tableWrapperRef = ref();
    const loading = ref(false);
    const selectedFieldTitle = computed(
      () => props.selectedFieldTitle || t("epx.tableDialog.selectedField")
    );
    const columns = computed(() => {
      var _a;
      let columns2 = (_a = props.columns) != null ? _a : [];
      const column = props.type === "checkbox" ? {
        type: "selection",
        reserveSelection: false,
        width: 50,
        selectable: props.selectable
      } : props.type === "radio" ? {
        type: "radio",
        reserveRadioSelection: false,
        width: 50,
        selectable: props.selectable
      } : null;
      if (column) {
        columns2 = [column, ...columns2];
      }
      return columns2;
    });
    const rowKey = computed(() => {
      return props.rowKey || props.config.id;
    });
    const labelKey = computed(() => props.config.label);
    const isCheckbox = computed(() => props.type === "checkbox");
    const pagination = computed(() => {
      const pagination2 = props.pagination;
      return {
        showRecord: false,
        showTotal: false,
        background: false,
        layout: "prev, pager, next, jumper",
        size: "small",
        ...pagination2
      };
    });
    const wrapperHeight = computed(() => {
      const height = Number.parseInt(String(props.height));
      return typeof height === "number" ? `${height}px` : props.height;
    });
    const boundaryValue = computed(() => {
      var _a;
      return (_a = props.boundaryValue) != null ? _a : 50;
    });
    const calcDynamicSizeListProps = computed(() => {
      return {
        width: 295,
        height: Number.parseInt(String(props.height)) - 40,
        estimatedItemSize: 32,
        data: selectList.value,
        total: selectList.value.length,
        cache: 3,
        className: "select-list",
        itemSize: () => 32,
        ...props.dynamicSizeListProps
      };
    });
    const updateStatus = () => {
      nextTick(() => {
        selectList.value = [...props.modelValue];
        updateSelectionState();
      });
    };
    const openDialog = () => {
      visible.value = true;
      updateStatus();
    };
    watch(
      () => props.modelValue,
      () => updateStatus()
    );
    const closeDialog = () => {
      visible.value = false;
    };
    const has = (row) => {
      var _a;
      const key = rowKey.value;
      return !!((_a = selectList.value) == null ? void 0 : _a.find((_) => (_ == null ? void 0 : _[key]) === row[key]));
    };
    const del = (row) => {
      const key = rowKey.value;
      const index = selectList.value.findIndex((_) => (_ == null ? void 0 : _[key]) === row[key]);
      if (index > -1) {
        selectList.value.splice(index, 1);
      }
    };
    const clear = () => {
      selectList.value = [];
    };
    const add = (rows) => {
      rows.forEach((row) => {
        if (!has(row)) {
          props.unshift ? selectList.value.unshift(row) : selectList.value.push(row);
        }
      });
    };
    const handleSelect = (selection, row) => {
      const key = rowKey.value;
      const isAdd = !!(selection == null ? void 0 : selection.find((_) => _[key] === row[key]));
      isAdd ? add([row]) : del(row);
    };
    const handleSelectAll = (rows) => {
      if (rows.length === 0) {
        const table = tableRef.value.getTable();
        table.data.forEach((row) => del(row));
      } else {
        add(rows);
      }
    };
    const handlelection = (selection) => {
      if (!isCheckbox.value) {
        const list = Array.isArray(selection) ? selection : [selection];
        clear();
        add(list);
        return;
      }
    };
    const handleDelete = (item) => {
      const key = rowKey.value;
      const value = item[key];
      const table = tableRef.value.getTable();
      const row = table.data.find((_) => _[key] === value);
      if (row) {
        isCheckbox.value ? table.toggleRowSelection(row, false) : table.toggleRadioRowSelection(row, false);
      }
      del(item);
    };
    const updateSelectionState = () => {
      nextTick(() => {
        var _a, _b, _c;
        const key = rowKey.value;
        const table = (_b = (_a = tableRef.value) == null ? void 0 : _a.getTable) == null ? void 0 : _b.call(_a);
        const tableData = (_c = table == null ? void 0 : table.data) != null ? _c : [];
        tableData.forEach((row) => {
          const index = selectList.value.findIndex((_) => _[key] === row[key]);
          if (index !== -1) {
            isCheckbox.value ? table.toggleRowSelection(row, true) : table.toggleRadioRowSelection(row, true);
          } else {
            isCheckbox.value ? table.toggleRowSelection(row, false) : table.toggleRadioRowSelection(row, false);
          }
        });
      });
    };
    const handleSure = async () => {
      var _a;
      let error = false;
      const values = [...selectList.value];
      try {
        loading.value = true;
        await ((_a = props.onSure) == null ? void 0 : _a.call(props, values, {
          loading,
          closeDialog
        }));
      } catch (e) {
        error = true;
      }
      loading.value = false;
      if (!error) {
        emit(UPDATE_MODEL_EVENT, values);
        closeDialog();
      }
    };
    const handleCancel = () => {
      emit(CANCEL_EVENT);
      closeDialog();
    };
    const getTable = (...args) => {
      var _a, _b;
      return (_b = (_a = tableRef.value) == null ? void 0 : _a.getTable) == null ? void 0 : _b.apply(null, args);
    };
    const request = (...args) => {
      var _a, _b;
      return (_b = (_a = tableRef.value) == null ? void 0 : _a.request) == null ? void 0 : _b.apply(null, args);
    };
    __expose({
      openDialog,
      closeDialog,
      getTable,
      request,
      updateStatus
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(unref(ns).b())
        },
        [
          createElementVNode(
            "div",
            {
              class: normalizeClass(unref(ns).e("trigger")),
              onClick: openDialog
            },
            [
              renderSlot(_ctx.$slots, "trigger")
            ],
            2
          ),
          createVNode(unref(ElDialog), mergeProps({
            modelValue: visible.value,
            "onUpdate:modelValue": ($event) => visible.value = $event,
            title: _ctx.title,
            width: _ctx.width,
            "append-to-body": "",
            "modal-class": unref(ns).e("class")
          }, _ctx.$attrs), {
            default: withCtx(() => [
              createElementVNode("div", null, [
                renderSlot(_ctx.$slots, "top"),
                createElementVNode(
                  "div",
                  {
                    ref_key: "tableWrapperRef",
                    ref: tableWrapperRef,
                    class: normalizeClass(unref(ns).e("body")),
                    style: normalizeStyle({ height: wrapperHeight.value })
                  },
                  [
                    renderSlot(_ctx.$slots, "left"),
                    createVNode(unref(ElTablePage), mergeProps({
                      ref_key: "tableRef",
                      ref: tableRef
                    }, _ctx.$attrs, {
                      "row-key": rowKey.value,
                      columns: columns.value,
                      pagination: pagination.value,
                      class: unref(ns).e("body-left"),
                      "header-cell-style": _ctx.headerCellStyle,
                      "boundary-value": boundaryValue.value,
                      onRadioSelectionChange: handlelection,
                      onSelect: handleSelect,
                      onSelectAll: handleSelectAll,
                      onDataChange: updateSelectionState
                    }), {
                      header: withCtx(() => [
                        renderSlot(_ctx.$slots, "header")
                      ]),
                      _: 3
                    }, 16, ["row-key", "columns", "pagination", "class", "header-cell-style", "boundary-value"]),
                    withDirectives(createElementVNode(
                      "div",
                      {
                        class: normalizeClass(unref(ns).e("body-right"))
                      },
                      [
                        createElementVNode("div", { class: "title" }, [
                          renderSlot(_ctx.$slots, "title", normalizeProps(guardReactiveProps({ selectList: selectList.value, closeDialog })), () => [
                            createTextVNode(
                              toDisplayString(selectedFieldTitle.value),
                              1
                            )
                          ])
                        ]),
                        createVNode(
                          unref(DynamicSizeList),
                          normalizeProps(guardReactiveProps(calcDynamicSizeListProps.value)),
                          {
                            default: withCtx(({ index, style, data }) => [
                              (openBlock(), createElementBlock(
                                "div",
                                {
                                  key: index,
                                  class: "select-item",
                                  style: normalizeStyle(style)
                                },
                                [
                                  renderSlot(_ctx.$slots, "label", normalizeProps(guardReactiveProps({
                                    item: data[index],
                                    index,
                                    close: () => handleDelete(data[index])
                                  })), () => [
                                    createElementVNode(
                                      "div",
                                      { class: "text" },
                                      toDisplayString(data[index][labelKey.value]),
                                      1
                                    ),
                                    createElementVNode("div", {
                                      class: "cursor-pointer",
                                      onClick: ($event) => handleDelete(data[index])
                                    }, [
                                      createVNode(unref(ElIcon), null, {
                                        default: withCtx(() => [
                                          createVNode(unref(Close))
                                        ]),
                                        _: 1
                                      })
                                    ], 8, ["onClick"])
                                  ])
                                ],
                                4
                              ))
                            ]),
                            _: 3
                          },
                          16
                        )
                      ],
                      2
                    ), [
                      [vShow, !_ctx.hiddenRight]
                    ]),
                    renderSlot(_ctx.$slots, "right")
                  ],
                  6
                ),
                renderSlot(_ctx.$slots, "footer", {}, () => [
                  createElementVNode(
                    "div",
                    {
                      class: normalizeClass(unref(ns).e("footer"))
                    },
                    [
                      createElementVNode("div", null, [
                        createVNode(unref(ElButton), { onClick: handleCancel }, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createTextVNode(
                                toDisplayString((_a = _ctx.cancelText) != null ? _a : unref(t)("epx.common.cancel")),
                                1
                              )
                            ];
                          }),
                          _: 1
                        }),
                        createVNode(unref(ElButton), {
                          loading: loading.value,
                          type: "primary",
                          onClick: handleSure
                        }, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createTextVNode(
                                toDisplayString((_a = _ctx.sureText) != null ? _a : unref(t)("epx.common.sure")),
                                1
                              )
                            ];
                          }),
                          _: 1
                        }, 8, ["loading"])
                      ])
                    ],
                    2
                  )
                ])
              ])
            ]),
            _: 3
          }, 16, ["modelValue", "onUpdate:modelValue", "title", "width", "modal-class"])
        ],
        2
      );
    };
  }
});
var TableDialog = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "table-dialog.vue"]]);

export { TableDialog as default };
//# sourceMappingURL=table-dialog.mjs.map
