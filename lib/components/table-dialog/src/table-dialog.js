'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var index = require('../../table-page/index.js');
var iconsVue = require('@element-plus/icons-vue');
var tableDialog = require('./table-dialog2.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var event = require('../../../constants/event.js');

const __default__ = vue.defineComponent({
  name: "ElTableDialog",
  inheritAttrs: false
});
const _sfc_main = vue.defineComponent({
  ...__default__,
  props: tableDialog.tableDialogProps,
  emits: tableDialog.tableDialogEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { t } = elementPlus.useLocale();
    const ns = elementPlus.useNamespace("table-dialog");
    const visible = vue.ref(false);
    const selectList = vue.ref([]);
    const tableRef = vue.ref();
    const tableWrapperRef = vue.ref();
    const loading = vue.ref(false);
    const selectedFieldTitle = vue.computed(
      () => props.selectedFieldTitle || t("epx.tableDialog.selectedField")
    );
    const columns = vue.computed(() => {
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
    const rowKey = vue.computed(() => {
      return props.rowKey || props.config.id;
    });
    const labelKey = vue.computed(() => props.config.label);
    const isCheckbox = vue.computed(() => props.type === "checkbox");
    const pagination = vue.computed(() => {
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
    const wrapperHeight = vue.computed(() => {
      const height = Number.parseInt(String(props.height));
      return typeof height === "number" ? `${height}px` : props.height;
    });
    const boundaryValue = vue.computed(() => {
      var _a;
      return (_a = props.boundaryValue) != null ? _a : 50;
    });
    const calcDynamicSizeListProps = vue.computed(() => {
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
      vue.nextTick(() => {
        selectList.value = [...props.modelValue];
        updateSelectionState();
      });
    };
    const openDialog = () => {
      visible.value = true;
      updateStatus();
    };
    vue.watch(
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
      vue.nextTick(() => {
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
        emit(event.UPDATE_MODEL_EVENT, values);
        closeDialog();
      }
    };
    const handleCancel = () => {
      emit(event.CANCEL_EVENT);
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
      return vue.openBlock(), vue.createElementBlock(
        "div",
        {
          class: vue.normalizeClass(vue.unref(ns).b())
        },
        [
          vue.createElementVNode(
            "div",
            {
              class: vue.normalizeClass(vue.unref(ns).e("trigger")),
              onClick: openDialog
            },
            [
              vue.renderSlot(_ctx.$slots, "trigger")
            ],
            2
          ),
          vue.createVNode(vue.unref(elementPlus.ElDialog), vue.mergeProps({
            modelValue: visible.value,
            "onUpdate:modelValue": ($event) => visible.value = $event,
            title: _ctx.title,
            width: _ctx.width,
            "append-to-body": "",
            "modal-class": vue.unref(ns).e("class")
          }, _ctx.$attrs), {
            default: vue.withCtx(() => [
              vue.createElementVNode("div", null, [
                vue.renderSlot(_ctx.$slots, "top"),
                vue.createElementVNode(
                  "div",
                  {
                    ref_key: "tableWrapperRef",
                    ref: tableWrapperRef,
                    class: vue.normalizeClass(vue.unref(ns).e("body")),
                    style: vue.normalizeStyle({ height: wrapperHeight.value })
                  },
                  [
                    vue.renderSlot(_ctx.$slots, "left"),
                    vue.createVNode(vue.unref(index.ElTablePage), vue.mergeProps({
                      ref_key: "tableRef",
                      ref: tableRef
                    }, _ctx.$attrs, {
                      "row-key": rowKey.value,
                      columns: columns.value,
                      pagination: pagination.value,
                      class: vue.unref(ns).e("body-left"),
                      "header-cell-style": _ctx.headerCellStyle,
                      "boundary-value": boundaryValue.value,
                      onRadioSelectionChange: handlelection,
                      onSelect: handleSelect,
                      onSelectAll: handleSelectAll,
                      onDataChange: updateSelectionState
                    }), {
                      header: vue.withCtx(() => [
                        vue.renderSlot(_ctx.$slots, "header")
                      ]),
                      _: 3
                    }, 16, ["row-key", "columns", "pagination", "class", "header-cell-style", "boundary-value"]),
                    vue.withDirectives(vue.createElementVNode(
                      "div",
                      {
                        class: vue.normalizeClass(vue.unref(ns).e("body-right"))
                      },
                      [
                        vue.createElementVNode("div", { class: "title" }, [
                          vue.renderSlot(_ctx.$slots, "title", vue.normalizeProps(vue.guardReactiveProps({ selectList: selectList.value, closeDialog })), () => [
                            vue.createTextVNode(
                              vue.toDisplayString(selectedFieldTitle.value),
                              1
                            )
                          ])
                        ]),
                        vue.createVNode(
                          vue.unref(elementPlus.DynamicSizeList),
                          vue.normalizeProps(vue.guardReactiveProps(calcDynamicSizeListProps.value)),
                          {
                            default: vue.withCtx(({ index, style, data }) => [
                              (vue.openBlock(), vue.createElementBlock(
                                "div",
                                {
                                  key: index,
                                  class: "select-item",
                                  style: vue.normalizeStyle(style)
                                },
                                [
                                  vue.renderSlot(_ctx.$slots, "label", vue.normalizeProps(vue.guardReactiveProps({
                                    item: data[index],
                                    index,
                                    close: () => handleDelete(data[index])
                                  })), () => [
                                    vue.createElementVNode(
                                      "div",
                                      { class: "text" },
                                      vue.toDisplayString(data[index][labelKey.value]),
                                      1
                                    ),
                                    vue.createElementVNode("div", {
                                      class: "cursor-pointer",
                                      onClick: ($event) => handleDelete(data[index])
                                    }, [
                                      vue.createVNode(vue.unref(elementPlus.ElIcon), null, {
                                        default: vue.withCtx(() => [
                                          vue.createVNode(vue.unref(iconsVue.Close))
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
                      [vue.vShow, !_ctx.hiddenRight]
                    ]),
                    vue.renderSlot(_ctx.$slots, "right")
                  ],
                  6
                ),
                vue.renderSlot(_ctx.$slots, "footer", {}, () => [
                  vue.createElementVNode(
                    "div",
                    {
                      class: vue.normalizeClass(vue.unref(ns).e("footer"))
                    },
                    [
                      vue.createElementVNode("div", null, [
                        vue.createVNode(vue.unref(elementPlus.ElButton), { onClick: handleCancel }, {
                          default: vue.withCtx(() => {
                            var _a;
                            return [
                              vue.createTextVNode(
                                vue.toDisplayString((_a = _ctx.cancelText) != null ? _a : vue.unref(t)("epx.common.cancel")),
                                1
                              )
                            ];
                          }),
                          _: 1
                        }),
                        vue.createVNode(vue.unref(elementPlus.ElButton), {
                          loading: loading.value,
                          type: "primary",
                          onClick: handleSure
                        }, {
                          default: vue.withCtx(() => {
                            var _a;
                            return [
                              vue.createTextVNode(
                                vue.toDisplayString((_a = _ctx.sureText) != null ? _a : vue.unref(t)("epx.common.sure")),
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
var TableDialog = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "table-dialog.vue"]]);

exports["default"] = TableDialog;
//# sourceMappingURL=table-dialog.js.map
