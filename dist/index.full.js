/*! Element Plus v1.1.8-beta.3 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue'), require('element-plus'), require('lodash-unified'), require('element-plus/es/utils/index'), require('@vueuse/integrations/useAxios'), require('@vueuse/integrations/useSortable/component'), require('@vueuse/integrations/useSortable'), require('@tiptap/vue-3'), require('@tiptap/starter-kit'), require('@tiptap/extension-mention'), require('@tiptap/extension-placeholder'), require('@tiptap/extension-character-count'), require('@tiptap/extension-underline'), require('@tiptap/extension-image'), require('@tiptap/extension-text-align'), require('@tiptap/extension-link'), require('@tiptap/core'), require('@vue/compiler-dom'), require('@vue/runtime-dom'), require('@vueuse/core'), require('@vueuse/integrations/useQRCode'), require('qrcode'), require('@formily/reactive-vue'), require('@formily/reactive'), require('@formily/grid'), require('@formily/shared'), require('@formily/vue'), require('@formily/core')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue', 'element-plus', 'lodash-unified', 'element-plus/es/utils/index', '@vueuse/integrations/useAxios', '@vueuse/integrations/useSortable/component', '@vueuse/integrations/useSortable', '@tiptap/vue-3', '@tiptap/starter-kit', '@tiptap/extension-mention', '@tiptap/extension-placeholder', '@tiptap/extension-character-count', '@tiptap/extension-underline', '@tiptap/extension-image', '@tiptap/extension-text-align', '@tiptap/extension-link', '@tiptap/core', '@vue/compiler-dom', '@vue/runtime-dom', '@vueuse/core', '@vueuse/integrations/useQRCode', 'qrcode', '@formily/reactive-vue', '@formily/reactive', '@formily/grid', '@formily/shared', '@formily/vue', '@formily/core'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ElementPlusX = {}, global.Vue, global.ElementPlus, global.lodashUnified, global.ElementPlusUtils, global.useAxios, global.component, global.useSortable, global.vue3, global.StarterKit, global.Mention$1, global.Placeholder, global.CharacterCount, global.Underline, global.Image$2, global.TextAlign, global.Link$1, global.core, global.compilerDom, global.runtimeDom, global.core$1, global.useQRCode, global.QRCode, global.reactiveVue, global.reactive, global.grid, global.shared, global.vue$1, global.core$2));
})(this, (function (exports, vue, elementPlus, lodashUnified, index$1, useAxios, component, useSortable, vue3, StarterKit, Mention$1, Placeholder, CharacterCount, Underline, Image$2, TextAlign, Link$1, core, compilerDom, runtimeDom, core$1, useQRCode, QRCode, reactiveVue, reactive, grid, shared, vue$1, core$2) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    }
    n["default"] = e;
    return Object.freeze(n);
  }

  var StarterKit__default = /*#__PURE__*/_interopDefaultLegacy(StarterKit);
  var Mention__default = /*#__PURE__*/_interopDefaultLegacy(Mention$1);
  var Placeholder__default = /*#__PURE__*/_interopDefaultLegacy(Placeholder);
  var CharacterCount__default = /*#__PURE__*/_interopDefaultLegacy(CharacterCount);
  var Underline__default = /*#__PURE__*/_interopDefaultLegacy(Underline);
  var Image__default = /*#__PURE__*/_interopDefaultLegacy(Image$2);
  var TextAlign__default = /*#__PURE__*/_interopDefaultLegacy(TextAlign);
  var Link__default = /*#__PURE__*/_interopDefaultLegacy(Link$1);
  var runtimeDom__namespace = /*#__PURE__*/_interopNamespace(runtimeDom);
  var QRCode__default = /*#__PURE__*/_interopDefaultLegacy(QRCode);

  const INSTALLED_KEY = Symbol("INSTALLED_KEY");

  const UPDATE_MODEL_EVENT = "update:modelValue";
  const CHANGE_EVENT = "change";
  const INPUT_EVENT = "input";
  const SURE_EVENT = "sure";
  const CANCEL_EVENT = "cancel";

  const DIV_TAG = "div";
  const SPAN_TAG = "span";
  const P_TAG = "p";
  const UL_TAG = "ul";
  const LI_TAG = "li";

  const EVENT_CODE = {
    tab: "Tab",
    enter: "Enter",
    space: "Space",
    left: "ArrowLeft",
    up: "ArrowUp",
    right: "ArrowRight",
    down: "ArrowDown",
    esc: "Escape",
    delete: "Delete",
    backspace: "Backspace",
    numpadEnter: "NumpadEnter",
    pageUp: "PageUp",
    pageDown: "PageDown",
    home: "Home",
    end: "End"
  };

  const inBrowser = typeof window !== "undefined";

  const uid = () => String(Math.floor(Math.random() * 1e4));

  function composeExport$1(s0, s1) {
    return Object.assign(s0, s1);
  }

  function noop$1() {
  }

  function throttle(method, interval = 16) {
    if (typeof method !== "function") {
      return noop$1;
    }
    const invoke = (...args) => {
      method(...args);
    };
    if (interval <= 0) {
      return debounceMinor(invoke);
    }
    let lastCall = 0;
    let timer;
    return function(...args) {
      const current = Date.now();
      const elapsed = current - lastCall;
      clearTimeout(timer);
      if (elapsed >= interval) {
        lastCall = current;
        invoke(...args);
      } else {
        timer = setTimeout(() => {
          lastCall = Date.now();
          invoke(...args);
        }, Math.max(0, interval - elapsed));
      }
    };
  }
  function debounce(method, delay = 100) {
    if (typeof method !== "function") {
      return noop$1;
    }
    const invoke = (...args) => {
      method(...args);
    };
    if (delay <= 0) {
      return debounceMinor(invoke);
    }
    let timer;
    return function(...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        invoke(...args);
      }, delay);
    };
  }
  function debounceMinor(method) {
    if (typeof method !== "function") {
      return method;
    }
    let called = false;
    let lastArgs;
    let promise;
    return function(...args) {
      lastArgs = args;
      if (!called) {
        called = true;
        promise = Promise.resolve().then(() => {
          called = false;
          promise = void 0;
          return method(...lastArgs);
        });
      }
      return promise;
    };
  }

  const previewImage = (options) => {
    const container = document.createElement("div");
    const vnode = vue.h(elementPlus.ElImageViewer, {
      ...options,
      teleported: true,
      onClose() {
        vue.render(null, container);
      }
    });
    vue.render(vnode, container);
  };

  const download = (options) => {
    const { url, params, fileName, instance, ...other } = options;
    const { execute } = instance ? useAxios.useAxios(instance) : useAxios.useAxios();
    return execute(url, {
      method: "get",
      responseType: "blob",
      params,
      timeout: 1e3 * 60 * 5,
      ...other
    }).then((response) => {
      downloadBlobFile(response.data.value, fileName);
    });
  };
  function downloadBlobFile(blob, fileName) {
    if (blob && blob.size === 0) {
      elementPlus.ElMessage.error("Download Error!");
      return;
    }
    const url = window.URL.createObjectURL(
      blob instanceof Blob ? blob : new Blob([blob])
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    window.setTimeout(() => {
      URL.revokeObjectURL(url);
      document.body.removeChild(link);
    }, 0);
  }

  function isUndef(v) {
    return v === void 0 || v === null;
  }
  function isDef$1(v) {
    return v !== void 0 && v !== null;
  }

  function formatTime(duration) {
    if (!duration)
      return "";
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration - hours * 3600) / 60);
    const seconds = Math.floor(duration - hours * 3600 - minutes * 60);
    let ret = "";
    if (hours > 0) {
      ret += `${hours}:`;
    }
    ret += `${minutes}:`;
    if (seconds < 10) {
      ret += "0";
    }
    ret += seconds;
    return ret;
  }

  const configProviderV2Props = index$1.buildProps({
    tablePage: {
      type: index$1.definePropType(Object)
    }
  });

  const configProviderV2ContextKey = Symbol();

  const overrideKeys = ["pageSizes"];
  function merge(...sources) {
    return lodashUnified.mergeWith(
      {},
      ...sources,
      (objValue, srcValue, key) => {
        if (overrideKeys.includes(key)) {
          return srcValue;
        }
        return void 0;
      }
    );
  }
  const getCfgOptions = (options) => {
    const pickupProps = (props) => {
      const result = {};
      Object.keys(props).forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(options, key)) {
          result[key] = options[key];
        }
      });
      return result;
    };
    return {
      epCfg: pickupProps(elementPlus.configProviderProps),
      epxCfg: pickupProps(configProviderV2Props)
    };
  };
  const getDefaultTablePageConfig = () => {
    return {
      pagination: {
        defaultPageSize: 10,
        pageSizes: [10, 20, 50, 100],
        layout: "sizes, prev, pager, next, jumper",
        background: true,
        showRecord: true,
        showTotal: true
      },
      config: {
        currentPage: "current",
        pageSize: "size",
        total: "total"
      }
    };
  };
  const tablePageContextKey = Symbol(
    "tablePageContextKey"
  );
  const useTablePageConfig = () => {
    const initial = vue.computed(
      () => merge(
        getDefaultTablePageConfig(),
        globalConfig.value.tablePage
      )
    );
    return {
      tablePageConfig: vue.getCurrentInstance() ? vue.inject(tablePageContextKey, initial) : initial
    };
  };
  const globalConfig = vue.ref({
    tablePage: getDefaultTablePageConfig()
  });
  const mergeGlobalConfig = (cfg) => {
    globalConfig.value = merge({}, vue.toRaw(globalConfig.value), cfg);
  };

  const ConfigProviderV2 = vue.defineComponent({
    name: "ElConfigProviderV2",
    inheritAttrs: false,
    props: configProviderV2Props,
    setup(props, { attrs, slots }) {
      const cfgs = vue.computed(() => getCfgOptions({ ...props, ...attrs }));
      vue.provide(configProviderV2ContextKey, globalConfig);
      const defaultTablePageConfig = getDefaultTablePageConfig();
      const tablePageConfig = props.tablePage;
      vue.provide(
        tablePageContextKey,
        vue.computed(() => {
          return {
            pagination: {
              ...defaultTablePageConfig.pagination,
              ...tablePageConfig == null ? void 0 : tablePageConfig.pagination
            },
            config: {
              ...defaultTablePageConfig.config,
              ...tablePageConfig == null ? void 0 : tablePageConfig.config
            }
          };
        })
      );
      return () => vue.h(
        elementPlus.ElConfigProvider,
        {
          ...vue.unref(cfgs.value.epCfg)
        },
        {
          default: () => {
            var _a;
            return (_a = slots.default) == null ? void 0 : _a.call(slots);
          }
        }
      );
    }
  });
  var ConfigProviderV2$1 = ConfigProviderV2;

  const ElConfigProviderV2 = index$1.withInstall(ConfigProviderV2$1);

  const version$1 = "1.1.8-beta.3";

  const makeInstaller = (components = []) => {
    const install = (app, options) => {
      if (app[INSTALLED_KEY])
        return;
      app[INSTALLED_KEY] = true;
      components.forEach((c) => app.use(c));
      if (options) {
        const { epxCfg } = getCfgOptions(options);
        mergeGlobalConfig(epxCfg);
      }
    };
    return {
      version: version$1,
      install
    };
  };

  const caseProps = index$1.buildProps({
    str: {
      type: String,
      default: ""
    }
  });
  const caseEmits = {};

  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  const __default__$p = vue.defineComponent({
    name: "ElCase"
  });
  const _sfc_main$v = vue.defineComponent({
    ...__default__$p,
    props: caseProps,
    emits: caseEmits,
    setup(__props) {
      const { t } = elementPlus.useLocale();
      const ns = elementPlus.useNamespace("case");
      console.log(123, t("el.case.title"));
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "div",
          {
            class: vue.normalizeClass(vue.unref(ns).b())
          },
          [
            vue.createElementVNode(
              "p",
              null,
              vue.toDisplayString(vue.unref(t)("epx.case.title")),
              1
            ),
            vue.renderSlot(_ctx.$slots, "default")
          ],
          2
        );
      };
    }
  });
  var Case = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__file", "case.vue"]]);

  const ElCase = index$1.withInstall(Case);

  const affixBottomProps = index$1.buildProps({
    position: {
      type: String,
      default: "absolute",
      values: ["absolute", "fixed"]
    },
    tag: {
      type: String,
      default: "div"
    }
  });
  const affixBottomEmits = {};

  const __default__$o = vue.defineComponent({
    name: "ElAffixBottom"
  });
  const _sfc_main$u = vue.defineComponent({
    ...__default__$o,
    props: affixBottomProps,
    setup(__props) {
      const ns = elementPlus.useNamespace("affix-bottom");
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.tag), vue.mergeProps({
          style: { position: _ctx.position },
          class: vue.unref(ns).b()
        }, _ctx.$attrs), {
          default: vue.withCtx(() => [
            vue.renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16, ["style", "class"]);
      };
    }
  });
  var AffixBottom = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__file", "affix-bottom.vue"]]);

  const ElAffixBottom = index$1.withInstall(AffixBottom);

  var EpTable = vue.defineComponent({
    name: "ElTable",
    props: {
      columns: {
        type: Array,
        default: () => []
      }
    },
    setup(props, { attrs, slots, expose }) {
      var _a;
      const rowKey = (_a = attrs == null ? void 0 : attrs["row-key"]) != null ? _a : attrs == null ? void 0 : attrs["rowKey"];
      const onRadioSelectionChange = attrs == null ? void 0 : attrs.onRadioSelectionChange;
      const tableRef = vue.ref(null);
      const currentSelectRow = vue.ref(null);
      const hasRadioType = vue.computed(
        () => props.columns.some((column) => column.type === "radio")
      );
      const radioColumn = vue.computed(
        () => props.columns.find((column) => column.type === "radio")
      );
      if (hasRadioType.value && !rowKey) {
        console.error("[ElTablePage]: row-key is required");
      }
      const data = vue.computed(() => {
        var _a2, _b;
        const data2 = (_a2 = attrs == null ? void 0 : attrs.data) != null ? _a2 : [];
        const reserveRadioSelection = (_b = radioColumn.value) == null ? void 0 : _b.reserveRadioSelection;
        const currentRow = currentSelectRow.value;
        return hasRadioType.value ? data2.map((row) => {
          if (!Object.prototype.hasOwnProperty.call(row, "__radioModelValue__")) {
            row.__radioModelValue__ = reserveRadioSelection ? currentRow ? (currentRow == null ? void 0 : currentRow[rowKey]) === row[rowKey] ? true : false : false : false;
          }
          return row;
        }) : data2;
      });
      const clearRadioSelection = () => {
        data.value.forEach((item) => {
          item.__radioModelValue__ = false;
        });
        currentSelectRow.value = null;
      };
      const getRadioSelectionRow = () => currentSelectRow.value;
      const toggleRadioRowSelection = (rowData, selected) => {
        const index = data.value.findIndex(
          (_) => _[rowKey] === rowData[rowKey]
        );
        if (index !== -1) {
          data.value[index]["__radioModelValue__"] = selected;
          if (selected) {
            currentSelectRow.value = data.value[index];
          }
        }
      };
      expose({
        getTable: () => {
          var _a2;
          const table = (_a2 = tableRef.value) != null ? _a2 : {};
          table.clearRadioSelection = clearRadioSelection;
          table.getRadioSelectionRow = getRadioSelectionRow;
          table.toggleRadioRowSelection = toggleRadioRowSelection;
          return table;
        }
      });
      return () => {
        const { columns } = props;
        const children = columns.map((column) => {
          var _a2;
          const formatSlots = {
            header: (data2) => {
              var _a3, _b;
              return (_b = (_a3 = column == null ? void 0 : column.headerCellRenderer) == null ? void 0 : _a3.call(column, data2)) != null ? _b : data2.column.label;
            }
          };
          if (!column.formatter) {
            formatSlots.default = (data2) => {
              var _a3, _b, _c, _d;
              return (_d = (_a3 = column == null ? void 0 : column.cellRenderer) == null ? void 0 : _a3.call(column, data2)) != null ? _d : (_c = data2 == null ? void 0 : data2.row) == null ? void 0 : _c[(_b = data2 == null ? void 0 : data2.column) == null ? void 0 : _b.property];
            };
          }
          if (column.type === "radio") {
            column.width = (_a2 = column.width) != null ? _a2 : 50;
            column.cellRenderer = ({ row, $index }) => {
              return vue.h(elementPlus.ElRadio, {
                disabled: column.selectable ? !column.selectable.call(null, row, $index) : false,
                value: true,
                modelValue: row.__radioModelValue__,
                onChange() {
                  clearRadioSelection();
                  row.__radioModelValue__ = true;
                  currentSelectRow.value = row;
                  onRadioSelectionChange && onRadioSelectionChange(row);
                }
              });
            };
          }
          return vue.h(elementPlus.ElTableColumn, { ...column }, formatSlots);
        });
        return vue.h(
          elementPlus.ElTable,
          { ...attrs, ref: tableRef, data: data.value },
          {
            ...slots,
            default: () => children
          }
        );
      };
    }
  });

  var EpPagination = vue.defineComponent({
    name: "EpPagination",
    inheritAttrs: false,
    setup(props, { slots, attrs }) {
      const { t } = elementPlus.useLocale();
      const ns = elementPlus.useNamespace("pagination-wrapper");
      const ROOT_PREFIX = ns.b();
      const totalPageSize = vue.computed(() => {
        return Math.ceil(attrs.total / attrs.pageSize);
      });
      const total = vue.computed(() => {
        return attrs.total;
      });
      const singlePage = vue.computed(() => {
        const total2 = attrs.total;
        const pageSize = attrs.pageSize;
        return total2 <= pageSize;
      });
      return () => {
        const paginationData = { ...attrs };
        if (singlePage.value) {
          const layout = paginationData.layout;
          paginationData.layout = layout.replace(", jumper", "");
        }
        const paginationVNode = vue.h(elementPlus.ElPagination, paginationData, slots);
        const totalPageSizeVNode = vue.h(
          SPAN_TAG,
          {
            class: `${ROOT_PREFIX}__total`
          },
          t("epx.tablePage.totalPageSize", { totalPageSize: totalPageSize.value })
        );
        const recordVNode = vue.h(
          SPAN_TAG,
          {
            class: `${ROOT_PREFIX}__record`
          },
          t("epx.tablePage.total", { total: total.value })
        );
        const wrapperVNode = vue.h(DIV_TAG, { class: ROOT_PREFIX }, [
          vue.h(
            DIV_TAG,
            { class: `${ROOT_PREFIX}__left` },
            attrs.showRecord ? [recordVNode] : []
          ),
          vue.h(DIV_TAG, { class: `${ROOT_PREFIX}__right` }, [
            attrs.showTotal ? totalPageSizeVNode : "",
            paginationVNode
          ])
        ]);
        return vue.h(
          ElAffixBottom,
          {
            style: {
              position: "static"
            }
          },
          {
            default: () => [wrapperVNode]
          }
        );
      };
    }
  });

  const tablePageProps = index$1.buildProps({
    httpRequest: {
      type: Function
    },
    columns: {
      type: Array,
      default: () => []
    },
    pagination: {
      type: Object,
      default: () => ({})
    },
    config: {
      type: Object,
      default: () => ({})
    },
    firstInvoke: {
      type: Boolean,
      default: true
    },
    boundaryValue: {
      type: Number,
      default: 680
    },
    showPagination: {
      type: Boolean,
      default: true
    }
  });
  const tablePageEmits = {};

  var TablePage = vue.defineComponent({
    name: "ElTablePage",
    props: {
      ...tablePageProps
    },
    setup(props, { attrs, slots, expose, emit }) {
      const epTableRef = vue.ref();
      const pageTableRef = vue.ref();
      const headerWrapperRef = vue.ref();
      const tableWrapperRef = vue.ref();
      const footerWrapperRef = vue.ref();
      const ns = elementPlus.useNamespace("table");
      const ROOT_PREFIX = ns.b("page");
      const TABLE_PREFIX = ns.b("wrapper");
      const { tablePageConfig } = useTablePageConfig();
      const pagination = vue.computed(() => {
        return {
          ...tablePageConfig.value.pagination,
          ...props.pagination
        };
      });
      const firstPageSize = vue.computed(
        () => {
          var _a, _b, _c;
          return (_c = (_b = pagination.value.defaultPageSize) != null ? _b : (_a = pagination.value.pageSizes) == null ? void 0 : _a[0]) != null ? _c : 10;
        }
      );
      const config = vue.computed(() => {
        return {
          ...tablePageConfig.value.config,
          ...props.config
        };
      });
      const currentPageKey = vue.computed(() => config.value.currentPage);
      const pageSizeKey = vue.computed(() => config.value.pageSize);
      const totalKey = vue.computed(() => config.value.total);
      const isEmpty = vue.computed(
        () => state.loading === false && state.tableData.length === 0
      );
      const state = vue.reactive({
        [currentPageKey.value]: 1,
        [pageSizeKey.value]: firstPageSize.value,
        [totalKey.value]: 0,
        loading: false,
        tableData: []
      });
      const query = async (params = {}) => {
        var _a, _b;
        const currentPageValue = (_a = params[currentPageKey.value]) != null ? _a : state[currentPageKey.value];
        const pageSizeValue = (_b = params[pageSizeKey.value]) != null ? _b : state[pageSizeKey.value];
        state[currentPageKey.value] = currentPageValue;
        state[pageSizeKey.value] = pageSizeValue;
        return new Promise((resolve, reject) => {
          var _a2;
          state.loading = true;
          (_a2 = props == null ? void 0 : props.httpRequest) == null ? void 0 : _a2.call(props, {
            params: {
              [currentPageKey.value]: currentPageValue,
              [pageSizeKey.value]: pageSizeValue,
              ...params
            },
            resolve: ({ list, total }) => {
              state.loading = false;
              state.tableData = list;
              state[totalKey.value] = total != null ? total : 0;
              emit("data-change", state);
              return resolve(state);
            },
            reject: (e) => {
              state.loading = false;
              emit("data-change", state);
              return reject(e);
            }
          });
        });
      };
      if (props.firstInvoke) {
        query();
      }
      const handleSizeChange = (pageSize) => {
        state[pageSizeKey.value] = pageSize;
        query();
      };
      const handleCurrentChange = (currentPage) => {
        state[currentPageKey.value] = currentPage;
        query();
      };
      const request = ({ ...args }) => {
        return query(args);
      };
      const getTable = () => {
        var _a;
        return (_a = epTableRef.value) == null ? void 0 : _a.getTable();
      };
      const getState = () => state;
      const getCurrentPageCounts = (currentPage, pageSize, total) => {
        const pages = Math.ceil(total / pageSize);
        const prevSize = (currentPage - 1) * pageSize;
        return total <= pageSize ? total : currentPage === pages ? total % prevSize : pageSize;
      };
      const getCurrentPageBySubtract = (count) => {
        const currentPageValue = state[currentPageKey.value];
        const counts = getCurrentPageCounts(
          currentPageValue,
          state[pageSizeKey.value],
          state[totalKey.value]
        );
        return Math.max(
          1,
          counts - count > 0 ? currentPageValue : currentPageValue - 1
        );
      };
      const getTableWrapperHeight = () => {
        const pageTable = pageTableRef.value;
        const header = headerWrapperRef.value;
        const footer = footerWrapperRef.value;
        if (pageTable && header && footer) {
          return pageTable.offsetHeight - header.offsetHeight - footer.$el.offsetHeight;
        } else {
          return 0;
        }
      };
      expose({
        request,
        getTable,
        getState,
        getCurrentPageCounts,
        getCurrentPageBySubtract,
        tableRef: tableWrapperRef
      });
      return () => {
        var _a;
        const { columns } = props;
        const tableWrapperHeight = getTableWrapperHeight();
        const needFixed = tableWrapperHeight > props.boundaryValue;
        const pureAttrs = { ...attrs };
        delete pureAttrs.class;
        delete pureAttrs.style;
        const tableData = {
          height: "100%",
          ...pureAttrs,
          columns,
          data: state.tableData,
          ref: epTableRef,
          key: needFixed || isEmpty.value ? "true" : "false"
        };
        const empty = vue.h(elementPlus.ElEmpty, { imageSize: 120, ...pureAttrs }, slots);
        const table = vue.h(EpTable, tableData, {
          empty: () => empty,
          ...slots
        });
        const loadingTable = vue.withDirectives(table, [[elementPlus.vLoading, state.loading]]);
        const wrapperTable = vue.h(
          DIV_TAG,
          {
            class: [
              TABLE_PREFIX,
              needFixed || isEmpty.value ? `${TABLE_PREFIX}--fixed` : ""
            ],
            ref: tableWrapperRef
          },
          [
            slots.table ? vue.withDirectives((_a = slots.table({ list: state.tableData })) == null ? void 0 : _a[0], [
              [elementPlus.vLoading, state.loading]
            ]) : loadingTable
          ]
        );
        const paginationVnode = vue.h(
          EpPagination,
          {
            ...pagination.value,
            ref: footerWrapperRef,
            currentPage: state[currentPageKey.value],
            pageSize: state[pageSizeKey.value],
            total: state[totalKey.value],
            onSizeChange: handleSizeChange,
            onCurrentChange: handleCurrentChange
          },
          slots
        );
        return vue.h(
          DIV_TAG,
          {
            class: ROOT_PREFIX,
            ref: pageTableRef
          },
          [
            vue.h(
              DIV_TAG,
              {
                class: `${ROOT_PREFIX}__header`,
                ref: headerWrapperRef
              },
              [slots.header && slots.header()]
            ),
            wrapperTable,
            vue.withDirectives(paginationVnode, [[vue.vShow, props.showPagination]])
          ]
        );
      };
    }
  });

  const ElTablePage = index$1.withInstall(TablePage);

  var arrow_down_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vue.defineComponent({
    name: "ArrowDown",
    __name: "arrow-down",
    setup(__props) {
      return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
      }, [
        vue.createElementVNode("path", {
          fill: "currentColor",
          d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
        })
      ]));
    }
  });
  var arrow_down_default = arrow_down_vue_vue_type_script_setup_true_lang_default;
  var arrow_left_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vue.defineComponent({
    name: "ArrowLeft",
    __name: "arrow-left",
    setup(__props) {
      return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
      }, [
        vue.createElementVNode("path", {
          fill: "currentColor",
          d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
        })
      ]));
    }
  });
  var arrow_left_default = arrow_left_vue_vue_type_script_setup_true_lang_default;
  var arrow_right_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vue.defineComponent({
    name: "ArrowRight",
    __name: "arrow-right",
    setup(__props) {
      return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
      }, [
        vue.createElementVNode("path", {
          fill: "currentColor",
          d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
        })
      ]));
    }
  });
  var arrow_right_default = arrow_right_vue_vue_type_script_setup_true_lang_default;
  var arrow_up_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vue.defineComponent({
    name: "ArrowUp",
    __name: "arrow-up",
    setup(__props) {
      return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
      }, [
        vue.createElementVNode("path", {
          fill: "currentColor",
          d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
        })
      ]));
    }
  });
  var arrow_up_default = arrow_up_vue_vue_type_script_setup_true_lang_default;
  var circle_check_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vue.defineComponent({
    name: "CircleCheck",
    __name: "circle-check",
    setup(__props) {
      return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
      }, [
        vue.createElementVNode("path", {
          fill: "currentColor",
          d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
        }),
        vue.createElementVNode("path", {
          fill: "currentColor",
          d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
        })
      ]));
    }
  });
  var circle_check_default = circle_check_vue_vue_type_script_setup_true_lang_default;
  var circle_close_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vue.defineComponent({
    name: "CircleClose",
    __name: "circle-close",
    setup(__props) {
      return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
      }, [
        vue.createElementVNode("path", {
          fill: "currentColor",
          d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
        }),
        vue.createElementVNode("path", {
          fill: "currentColor",
          d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
        })
      ]));
    }
  });
  var circle_close_default = circle_close_vue_vue_type_script_setup_true_lang_default;
  var close_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vue.defineComponent({
    name: "Close",
    __name: "close",
    setup(__props) {
      return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
      }, [
        vue.createElementVNode("path", {
          fill: "currentColor",
          d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
        })
      ]));
    }
  });
  var close_default = close_vue_vue_type_script_setup_true_lang_default;
  var delete_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vue.defineComponent({
    name: "Delete",
    __name: "delete",
    setup(__props) {
      return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
      }, [
        vue.createElementVNode("path", {
          fill: "currentColor",
          d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32zm448-64v-64H416v64zM224 896h576V256H224zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32m192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32"
        })
      ]));
    }
  });
  var delete_default = delete_vue_vue_type_script_setup_true_lang_default;
  var edit_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vue.defineComponent({
    name: "Edit",
    __name: "edit",
    setup(__props) {
      return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
      }, [
        vue.createElementVNode("path", {
          fill: "currentColor",
          d: "M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640z"
        }),
        vue.createElementVNode("path", {
          fill: "currentColor",
          d: "m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"
        })
      ]));
    }
  });
  var edit_default = edit_vue_vue_type_script_setup_true_lang_default;
  var full_screen_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vue.defineComponent({
    name: "FullScreen",
    __name: "full-screen",
    setup(__props) {
      return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
      }, [
        vue.createElementVNode("path", {
          fill: "currentColor",
          d: "m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64z"
        })
      ]));
    }
  });
  var full_screen_default = full_screen_vue_vue_type_script_setup_true_lang_default;
  var info_filled_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vue.defineComponent({
    name: "InfoFilled",
    __name: "info-filled",
    setup(__props) {
      return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
      }, [
        vue.createElementVNode("path", {
          fill: "currentColor",
          d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
        })
      ]));
    }
  });
  var info_filled_default = info_filled_vue_vue_type_script_setup_true_lang_default;
  var loading_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vue.defineComponent({
    name: "Loading",
    __name: "loading",
    setup(__props) {
      return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
      }, [
        vue.createElementVNode("path", {
          fill: "currentColor",
          d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
        })
      ]));
    }
  });
  var loading_default = loading_vue_vue_type_script_setup_true_lang_default;
  var plus_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vue.defineComponent({
    name: "Plus",
    __name: "plus",
    setup(__props) {
      return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
      }, [
        vue.createElementVNode("path", {
          fill: "currentColor",
          d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
        })
      ]));
    }
  });
  var plus_default = plus_vue_vue_type_script_setup_true_lang_default;
  var rank_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vue.defineComponent({
    name: "Rank",
    __name: "rank",
    setup(__props) {
      return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
      }, [
        vue.createElementVNode("path", {
          fill: "currentColor",
          d: "m186.496 544 41.408 41.344a32 32 0 1 1-45.248 45.312l-96-96a32 32 0 0 1 0-45.312l96-96a32 32 0 1 1 45.248 45.312L186.496 480h290.816V186.432l-41.472 41.472a32 32 0 1 1-45.248-45.184l96-96.128a32 32 0 0 1 45.312 0l96 96.064a32 32 0 0 1-45.248 45.184l-41.344-41.28V480H832l-41.344-41.344a32 32 0 0 1 45.248-45.312l96 96a32 32 0 0 1 0 45.312l-96 96a32 32 0 0 1-45.248-45.312L832 544H541.312v293.44l41.344-41.28a32 32 0 1 1 45.248 45.248l-96 96a32 32 0 0 1-45.312 0l-96-96a32 32 0 1 1 45.312-45.248l41.408 41.408V544H186.496z"
        })
      ]));
    }
  });
  var rank_default = rank_vue_vue_type_script_setup_true_lang_default;
  var refresh_left_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vue.defineComponent({
    name: "RefreshLeft",
    __name: "refresh-left",
    setup(__props) {
      return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
      }, [
        vue.createElementVNode("path", {
          fill: "currentColor",
          d: "M289.088 296.704h92.992a32 32 0 0 1 0 64H232.96a32 32 0 0 1-32-32V179.712a32 32 0 0 1 64 0v50.56a384 384 0 0 1 643.84 282.88 384 384 0 0 1-383.936 384 384 384 0 0 1-384-384h64a320 320 0 1 0 640 0 320 320 0 0 0-555.712-216.448z"
        })
      ]));
    }
  });
  var refresh_left_default = refresh_left_vue_vue_type_script_setup_true_lang_default;
  var refresh_right_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vue.defineComponent({
    name: "RefreshRight",
    __name: "refresh-right",
    setup(__props) {
      return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
      }, [
        vue.createElementVNode("path", {
          fill: "currentColor",
          d: "M784.512 230.272v-50.56a32 32 0 1 1 64 0v149.056a32 32 0 0 1-32 32H667.52a32 32 0 1 1 0-64h92.992A320 320 0 1 0 524.8 833.152a320 320 0 0 0 320-320h64a384 384 0 0 1-384 384 384 384 0 0 1-384-384 384 384 0 0 1 643.712-282.88z"
        })
      ]));
    }
  });
  var refresh_right_default = refresh_right_vue_vue_type_script_setup_true_lang_default;
  var scale_to_original_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vue.defineComponent({
    name: "ScaleToOriginal",
    __name: "scale-to-original",
    setup(__props) {
      return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
      }, [
        vue.createElementVNode("path", {
          fill: "currentColor",
          d: "M813.176 180.706a60.235 60.235 0 0 1 60.236 60.235v481.883a60.235 60.235 0 0 1-60.236 60.235H210.824a60.235 60.235 0 0 1-60.236-60.235V240.94a60.235 60.235 0 0 1 60.236-60.235h602.352zm0-60.235H210.824A120.47 120.47 0 0 0 90.353 240.94v481.883a120.47 120.47 0 0 0 120.47 120.47h602.353a120.47 120.47 0 0 0 120.471-120.47V240.94a120.47 120.47 0 0 0-120.47-120.47zm-120.47 180.705a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 0 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118zm-361.412 0a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 1 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118M512 361.412a30.118 30.118 0 0 0-30.118 30.117v30.118a30.118 30.118 0 0 0 60.236 0V391.53A30.118 30.118 0 0 0 512 361.412M512 512a30.118 30.118 0 0 0-30.118 30.118v30.117a30.118 30.118 0 0 0 60.236 0v-30.117A30.118 30.118 0 0 0 512 512"
        })
      ]));
    }
  });
  var scale_to_original_default = scale_to_original_vue_vue_type_script_setup_true_lang_default;
  var user_filled_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vue.defineComponent({
    name: "UserFilled",
    __name: "user-filled",
    setup(__props) {
      return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
      }, [
        vue.createElementVNode("path", {
          fill: "currentColor",
          d: "M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0m544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z"
        })
      ]));
    }
  });
  var user_filled_default = user_filled_vue_vue_type_script_setup_true_lang_default;
  var warning_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vue.defineComponent({
    name: "Warning",
    __name: "warning",
    setup(__props) {
      return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
      }, [
        vue.createElementVNode("path", {
          fill: "currentColor",
          d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"
        })
      ]));
    }
  });
  var warning_default = warning_vue_vue_type_script_setup_true_lang_default;
  var zoom_in_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vue.defineComponent({
    name: "ZoomIn",
    __name: "zoom-in",
    setup(__props) {
      return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
      }, [
        vue.createElementVNode("path", {
          fill: "currentColor",
          d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704m-32-384v-96a32 32 0 0 1 64 0v96h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64z"
        })
      ]));
    }
  });
  var zoom_in_default = zoom_in_vue_vue_type_script_setup_true_lang_default;
  var zoom_out_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vue.defineComponent({
    name: "ZoomOut",
    __name: "zoom-out",
    setup(__props) {
      return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
      }, [
        vue.createElementVNode("path", {
          fill: "currentColor",
          d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704M352 448h256a32 32 0 0 1 0 64H352a32 32 0 0 1 0-64"
        })
      ]));
    }
  });
  var zoom_out_default = zoom_out_vue_vue_type_script_setup_true_lang_default;
  /*! Element Plus Icons Vue v2.3.1 */

  const tableDialogProps = index$1.buildProps({
    rowKey: {
      type: String,
      required: true
    },
    modelValue: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: ""
    },
    width: {
      type: Number,
      default: 900
    },
    height: {
      type: Number,
      default: 500
    },
    type: {
      type: String,
      values: ["checkbox", "radio"],
      default: "checkbox"
    },
    selectable: {
      type: Function
    },
    columns: {
      type: Array,
      default: () => []
    },
    pagination: {
      type: Object,
      default: () => ({})
    },
    config: {
      type: Object,
      default: () => ({
        id: "id",
        label: "label"
      })
    },
    headerCellStyle: {
      type: Object,
      default: () => ({
        background: "#EBEEF5"
      })
    },
    hiddenRight: {
      type: Boolean,
      default: false
    },
    boundaryValue: {
      type: Number,
      default: 50
    },
    dynamicSizeListProps: {
      type: Object,
      default: () => ({})
    },
    unshift: {
      type: Boolean,
      default: false
    },
    selectedFieldTitle: {
      type: String,
      default: ""
    },
    cancelText: { type: String },
    sureText: { type: String },
    onSure: {
      type: Function
    }
  });
  const tableDialogEmits = {
    [UPDATE_MODEL_EVENT]: (values) => index$1.isArray(values),
    [CANCEL_EVENT]: () => null
  };

  const __default__$n = vue.defineComponent({
    name: "ElTableDialog",
    inheritAttrs: false
  });
  const _sfc_main$t = vue.defineComponent({
    ...__default__$n,
    props: tableDialogProps,
    emits: tableDialogEmits,
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
                      vue.createVNode(vue.unref(ElTablePage), vue.mergeProps({
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
                                            vue.createVNode(vue.unref(close_default))
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
  var TableDialog = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__file", "table-dialog.vue"]]);

  const ElTableDialog = index$1.withInstall(TableDialog);

  const editableProps = index$1.buildProps({
    modelValue: {
      type: null
    },
    trigger: {
      type: String,
      values: ["dblclick", "click", "icon"],
      default: "dblclick"
    },
    icon: {
      type: null,
      default: edit_default
    },
    defaultEditState: {
      type: Boolean,
      default: false
    },
    focus: {
      type: Boolean,
      default: true
    }
  });
  const editableEmits = {
    [CHANGE_EVENT]: (editable, options) => index$1.isBoolean(editable && index$1.isObject(options))
  };

  const ElEditable$1 = {
    name: "ElEditable",
    inheritAttrs: false,
    props: editableProps,
    emits: editableEmits,
    setup(props, { slots, attrs, emit, expose }) {
      const ns = elementPlus.useNamespace("editable");
      const isEditable = vue.ref(props.defaultEditState);
      const wrapper = vue.ref();
      let oldValue = null;
      let currentValue = null;
      let preCurrentValue = null;
      let isModify = false;
      const setEditable = (editable) => {
        isEditable.value = editable;
        isModify = editable ? false : preCurrentValue === props.modelValue ? false : true;
        vue.nextTick(() => {
          preCurrentValue = currentValue;
        });
        emit(CHANGE_EVENT, editable, {
          currentValue,
          oldValue,
          isModify,
          preCurrentValue
        });
      };
      const handleFocus = () => {
        setTimeout(() => {
          var _a, _b;
          (_a = wrapper.value.querySelector("input")) == null ? void 0 : _a.focus();
          (_b = wrapper.value.querySelector("textarea")) == null ? void 0 : _b.focus();
        });
      };
      const setEditableTure = () => {
        setEditable(true);
        if (props.focus) {
          handleFocus();
        }
      };
      const setEditableFalse = () => setEditable(false);
      vue.watch(
        () => props.modelValue,
        (cur, old) => {
          oldValue = old;
          currentValue = cur;
        },
        {
          immediate: true
        }
      );
      expose({
        setEditable
      });
      return () => {
        var _a, _b, _c;
        const { trigger, icon } = props;
        const pure = { ...attrs };
        delete pure.style;
        delete pure.class;
        const component = vue.h(
          DIV_TAG,
          {
            class: ns.b("component"),
            key: isEditable.value
          },
          (_a = slots == null ? void 0 : slots.default) == null ? void 0 : _a.call(slots)
        );
        const editVNode = vue.withDirectives(component, [
          [elementPlus.ClickOutside, setEditableFalse]
        ]);
        const textData = { class: ns.b("text") };
        if (trigger === "dblclick") {
          textData.ondblclick = setEditableTure;
        }
        if (trigger === "click") {
          textData.onClick = setEditableTure;
        }
        const iconVNode = vue.h(
          elementPlus.ElIcon,
          {
            class: ns.b("icon"),
            ...pure,
            onClick: setEditableTure
          },
          {
            default: () => {
              var _a2, _b2;
              return (_b2 = (_a2 = slots == null ? void 0 : slots.icon) == null ? void 0 : _a2.call(slots)) != null ? _b2 : icon ? vue.h(icon) : "";
            }
          }
        );
        const textVNode = vue.h(DIV_TAG, textData, [
          (_c = (_b = slots == null ? void 0 : slots.text) == null ? void 0 : _b.call(slots)) != null ? _c : vue.h(SPAN_TAG, props.modelValue),
          trigger === "icon" ? iconVNode : ""
        ]);
        return vue.h(
          DIV_TAG,
          {
            class: [ns.b(), attrs.class],
            style: attrs.style,
            ref: wrapper
          },
          [isEditable.value ? editVNode : textVNode]
        );
      };
    }
  };
  var Editable = ElEditable$1;

  const ElEditable = index$1.withInstall(Editable);

  const readMoreProps = index$1.buildProps({
    height: {
      type: String,
      default: "200px"
    },
    modelValue: {
      type: Boolean,
      default: true
    },
    transition: {
      type: Boolean,
      default: true
    },
    openText: {
      type: String
    },
    closeText: {
      type: String
    },
    overlay: {
      type: Boolean,
      default: false
    }
  });
  const readMoreEmits = {
    [CHANGE_EVENT]: (value) => index$1.isBoolean(value),
    [UPDATE_MODEL_EVENT]: (value) => index$1.isBoolean(value)
  };

  const __default__$m = vue.defineComponent({
    name: "ElReadMore"
  });
  const _sfc_main$s = vue.defineComponent({
    ...__default__$m,
    props: readMoreProps,
    emits: readMoreEmits,
    setup(__props, { expose: __expose, emit: __emit }) {
      const { t } = elementPlus.useLocale();
      const ns = elementPlus.useNamespace("read-more");
      const props = __props;
      const emit = __emit;
      const wrapper = vue.ref();
      const initial = vue.ref(false);
      const dataset = vue.reactive({
        height: 0
      });
      const openText = vue.computed(() => {
        var _a;
        return (_a = props.openText) != null ? _a : t("epx.collapse.openText");
      });
      const closeText = vue.computed(() => {
        var _a;
        return (_a = props.closeText) != null ? _a : t("epx.collapse.closeText");
      });
      const warpperClass = vue.computed(
        () => !props.modelValue ? "expanded" : "collapse"
      );
      const warpperStyle = vue.computed(() => {
        return hasTrigger.value ? !props.modelValue ? {
          height: `${dataset.height}px`
        } : {
          height: props.height
        } : {
          height: "auto"
        };
      });
      const updateDataset = () => {
        const dom = wrapper.value;
        if (dom) {
          dataset.height = dom.scrollHeight;
        }
      };
      const hasTrigger = vue.computed(() => {
        const height = Number.parseFloat(props.height);
        const wrapperHeight = dataset.height;
        return wrapperHeight > height;
      });
      vue.onMounted(() => {
        updateDataset();
        vue.nextTick(() => {
          initial.value = true;
        });
      });
      vue.onUpdated(() => {
        updateDataset();
      });
      const handleToggle = () => {
        const value = !props.modelValue;
        emit(UPDATE_MODEL_EVENT, value);
        emit(CHANGE_EVENT, value);
      };
      __expose({
        handleToggle,
        hasTrigger,
        updateDataset
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "div",
          {
            class: vue.normalizeClass([vue.unref(ns).b(), _ctx.transition && initial.value ? vue.unref(ns).m("transition") : ""])
          },
          [
            vue.createElementVNode(
              "div",
              {
                ref_key: "wrapper",
                ref: wrapper,
                class: vue.normalizeClass([vue.unref(ns).e("wrapper"), warpperClass.value]),
                style: vue.normalizeStyle(warpperStyle.value)
              },
              [
                vue.renderSlot(_ctx.$slots, "default"),
                _ctx.overlay && _ctx.modelValue && hasTrigger.value ? (vue.openBlock(), vue.createElementBlock(
                  "div",
                  {
                    key: 0,
                    class: vue.normalizeClass(vue.unref(ns).e("overlay"))
                  },
                  null,
                  2
                )) : vue.createCommentVNode("v-if", true)
              ],
              6
            ),
            vue.renderSlot(_ctx.$slots, "trigger", vue.normalizeProps(vue.guardReactiveProps({ hasTrigger: hasTrigger.value })), () => [
              hasTrigger.value ? (vue.openBlock(), vue.createElementBlock(
                "div",
                {
                  key: 0,
                  class: vue.normalizeClass(vue.unref(ns).e("trigger")),
                  onClick: handleToggle
                },
                [
                  vue.createElementVNode(
                    "span",
                    null,
                    vue.toDisplayString(_ctx.modelValue ? openText.value : closeText.value),
                    1
                  ),
                  vue.createVNode(vue.unref(elementPlus.ElIcon), null, {
                    default: vue.withCtx(() => [
                      _ctx.modelValue ? (vue.openBlock(), vue.createBlock(vue.unref(arrow_down_default), { key: 0 })) : (vue.openBlock(), vue.createBlock(vue.unref(arrow_up_default), { key: 1 }))
                    ]),
                    _: 1
                  })
                ],
                2
              )) : vue.createCommentVNode("v-if", true)
            ])
          ],
          2
        );
      };
    }
  });
  var ReadMore = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__file", "read-more.vue"]]);

  const ElReadMore = index$1.withInstall(ReadMore);

  const draggableTableProps = index$1.buildProps({
    draggableProps: {
      type: Object,
      default: () => ({})
    }
  });
  const draggableTableEmits = {
    "sort-data": (data) => index$1.isArray(data)
  };

  const ElTableComp = { ...elementPlus.ElTable };
  const SORT_DATA_EVENT = "sort-data";
  const TableBody = {
    ...ElTableComp.components.TableBody,
    render() {
      const { wrappedRowRender, store } = this;
      const data = store.states.data.value || [];
      const tableIns = this.context;
      const { draggableProps } = tableIns.props;
      const options = {
        animation: 300,
        ...draggableProps,
        onUpdate: (e) => {
          const { oldIndex, newIndex } = e;
          if (index$1.isArray(store.states.data.value)) {
            useSortable.moveArrayElement(store.states.data, oldIndex, newIndex, e);
            vue.nextTick(() => {
              const newData = store.states.data.value;
              store.commit("setData", newData);
              tableIns.emit(SORT_DATA_EVENT, newData, { e });
            });
          }
        }
      };
      return vue.h(
        component.UseSortable,
        { options, tag: "tbody", tabIndex: -1, modelValue: [] },
        {
          default: () => data.reduce((acc, row) => {
            return acc.concat(wrappedRowRender(row, acc.length));
          }, [])
        }
      );
    }
  };
  const ElTableClone = {
    ...ElTableComp,
    name: "ElTableClone",
    components: { ...ElTableComp.components, TableBody },
    emits: [...ElTableComp.emits, SORT_DATA_EVENT],
    props: {
      ...ElTableComp.props,
      ...draggableTableProps
    }
  };
  const ElDraggableTable$1 = vue.defineComponent({
    name: "ElDraggableTable",
    setup(props, { slots, attrs }) {
      const ns = elementPlus.useNamespace("draggable-table");
      return () => vue.h(
        ElTableClone,
        {
          ...attrs,
          class: ns.b()
        },
        slots
      );
    }
  });
  var DraggableTable = ElDraggableTable$1;

  const ElDraggableTable = index$1.withInstall(DraggableTable);

  let width;
  let height;
  function useWindowSize() {
    if (!width) {
      width = vue.ref(0);
      height = vue.ref(0);
      if (inBrowser) {
        const update = () => {
          width.value = window.innerWidth;
          height.value = window.innerHeight;
        };
        update();
        window.addEventListener("resize", update, { passive: true });
        window.addEventListener("orientationchange", update, { passive: true });
      }
    }
    return { width, height };
  }

  const CHECK_INTERVAL = 50;
  const useOverflow$1 = (containerRef, options) => {
    var _a;
    const overflow = vue.ref(false);
    let resizeObserver;
    let mutationObserver;
    const defaultCondition = (contentWidth, containerWidth) => contentWidth > containerWidth;
    const condition = (_a = options == null ? void 0 : options.condition) != null ? _a : defaultCondition;
    const cleanup = () => {
      if (mutationObserver) {
        mutationObserver.disconnect();
        mutationObserver = null;
      }
      if (resizeObserver && containerRef.value) {
        resizeObserver.unobserve(containerRef.value);
        resizeObserver = null;
      }
    };
    const observer = () => {
      const container = containerRef.value;
      const containerWidth = container == null ? void 0 : container.getBoundingClientRect().width;
      const content = container == null ? void 0 : container.querySelector(options.selectors);
      const contentWidth = content == null ? void 0 : content.getBoundingClientRect().width;
      if (contentWidth && containerWidth && containerWidth !== 0) {
        overflow.value = condition(contentWidth, containerWidth) ? true : false;
      }
    };
    const stopWatch = vue.watch(
      () => containerRef.value,
      (el) => {
        cleanup();
        if (el) {
          resizeObserver = new ResizeObserver(observer);
          resizeObserver.observe(el);
          mutationObserver = new MutationObserver(
            throttle(observer, CHECK_INTERVAL)
          );
          mutationObserver.observe(el, { childList: true, subtree: true });
          observer();
        }
      },
      { immediate: true, flush: "post" }
    );
    vue.onBeforeUnmount(() => {
      cleanup();
      stopWatch();
    });
    return {
      overflow,
      observer,
      cleanup,
      stopWatch
    };
  };

  function useState(defaultStateValue) {
    const initValue = typeof defaultStateValue === "function" ? defaultStateValue() : defaultStateValue;
    const innerValue = vue.ref(initValue);
    function triggerChange(newValue) {
      innerValue.value = newValue;
    }
    return [innerValue, triggerChange];
  }

  function useEventCallback(handler) {
    const callbackRef = vue.ref(handler);
    const fn = vue.ref((value) => {
      callbackRef.value && callbackRef.value(value);
    });
    callbackRef.value = handler;
    return fn.value;
  }

  const useField$1 = () => vue.inject(elementPlus.formItemContextKey);
  const useForm$1 = () => vue.inject(elementPlus.formContextKey);

  const handlerMap = /* @__PURE__ */ new WeakMap();
  function handleResize(entries) {
    for (let i = 0, len = entries.length; i < len; ++i) {
      const entry = entries[i];
      const handler = handlerMap.get(entry.target);
      if (typeof handler === "function") {
        handler(entry);
      }
    }
  }
  let resizeObserver = null;
  const createResizeObserver = () => {
    if (!resizeObserver) {
      resizeObserver = new window.ResizeObserver(handleResize);
    }
  };
  function observeResize(el, handler) {
    handlerMap.set(el, handler);
    resizeObserver == null ? void 0 : resizeObserver.observe(el);
  }
  function unobserveResize(el) {
    if (handlerMap.has(el)) {
      resizeObserver == null ? void 0 : resizeObserver.unobserve(el);
      handlerMap.delete(el);
    }
  }
  function useResize() {
    createResizeObserver();
    return {
      observeResize,
      unobserveResize
    };
  }

  const textEllipsisProps = index$1.buildProps({
    rows: {
      type: [Number, String],
      default: 1
    },
    dots: {
      type: String,
      default: "..."
    },
    content: {
      type: String,
      default: ""
    },
    expandText: {
      type: String,
      default: ""
    },
    collapseText: {
      type: String,
      default: ""
    },
    position: {
      type: String,
      default: "end",
      values: ["start", "middle", "end"]
    },
    showOverflowTooltip: {
      type: Boolean,
      default: false
    },
    tooltipOptions: {
      type: Object,
      default: () => ({})
    }
  });
  const textEllipsisEmits = {
    clickAction: (event) => index$1.isObject(event)
  };

  var TextEllipsis = vue.defineComponent({
    name: "ElTextEllipsis",
    props: textEllipsisProps,
    emits: textEllipsisEmits,
    setup(props, { attrs, emit, slots, expose }) {
      const ns = elementPlus.useNamespace("text-ellipsis");
      const { width } = useWindowSize();
      const text = vue.ref(props.content);
      const expanded = vue.ref(false);
      const hasAction = vue.ref(false);
      const root = vue.ref();
      const actionRef = vue.ref();
      let needRecalculate = false;
      const actionText = vue.computed(
        () => expanded.value ? props.collapseText : props.expandText
      );
      const pxToNum = (value) => {
        if (!value)
          return 0;
        const match = value.match(/^\d*(\.\d*)?/);
        return match ? Number(match[0]) : 0;
      };
      const cloneContainer = () => {
        if (!root.value || !root.value.isConnected)
          return;
        const originStyle = window.getComputedStyle(root.value);
        const container = document.createElement("div");
        const styleNames = Array.prototype.slice.apply(originStyle);
        styleNames.forEach((name) => {
          container.style.setProperty(name, originStyle.getPropertyValue(name));
        });
        container.style.position = "fixed";
        container.style.zIndex = "-9999";
        container.style.top = "-9999px";
        container.style.height = "auto";
        container.style.minHeight = "auto";
        container.style.maxHeight = "auto";
        container.innerText = props.content;
        document.body.appendChild(container);
        return container;
      };
      const calcEllipsisText = (container, maxHeight) => {
        var _a, _b;
        const { content, position, dots } = props;
        const end = content.length;
        const middle = 0 + end >> 1;
        const actionHTML = slots.action ? (_b = (_a = actionRef.value) == null ? void 0 : _a.outerHTML) != null ? _b : "" : props.expandText;
        const calcEllipse = () => {
          const tail = (left, right) => {
            if (right - left <= 1) {
              if (position === "end") {
                return content.slice(0, left) + dots;
              }
              return dots + content.slice(right, end);
            }
            const middle2 = Math.round((left + right) / 2);
            if (position === "end") {
              container.innerText = content.slice(0, middle2) + dots;
            } else {
              container.innerText = dots + content.slice(middle2, end);
            }
            container.innerHTML += actionHTML;
            if (container.offsetHeight > maxHeight) {
              if (position === "end") {
                return tail(left, middle2);
              }
              return tail(middle2, right);
            }
            if (position === "end") {
              return tail(middle2, right);
            }
            return tail(left, middle2);
          };
          return tail(0, end);
        };
        const middleTail = (leftPart, rightPart) => {
          if (leftPart[1] - leftPart[0] <= 1 && rightPart[1] - rightPart[0] <= 1) {
            return content.slice(0, leftPart[0]) + dots + content.slice(rightPart[1], end);
          }
          const leftMiddle = Math.floor((leftPart[0] + leftPart[1]) / 2);
          const rightMiddle = Math.ceil((rightPart[0] + rightPart[1]) / 2);
          container.innerText = props.content.slice(0, leftMiddle) + props.dots + props.content.slice(rightMiddle, end);
          container.innerHTML += actionHTML;
          if (container.offsetHeight >= maxHeight) {
            return middleTail(
              [leftPart[0], leftMiddle],
              [rightMiddle, rightPart[1]]
            );
          }
          return middleTail(
            [leftMiddle, leftPart[1]],
            [rightPart[0], rightMiddle]
          );
        };
        return props.position === "middle" ? middleTail([0, middle], [middle, end]) : calcEllipse();
      };
      const calcEllipsised = () => {
        const container = cloneContainer();
        if (!container) {
          needRecalculate = true;
          return;
        }
        const { paddingBottom, paddingTop, lineHeight } = container.style;
        const maxHeight = Math.ceil(
          (Number(props.rows) + 0.5) * pxToNum(lineHeight) + pxToNum(paddingTop) + pxToNum(paddingBottom)
        );
        if (maxHeight < container.offsetHeight) {
          hasAction.value = true;
          text.value = calcEllipsisText(container, maxHeight);
        } else {
          hasAction.value = false;
          text.value = props.content;
        }
        document.body.removeChild(container);
      };
      const toggle = (isExpanded = !expanded.value) => {
        expanded.value = isExpanded;
      };
      const onClickAction = (event) => {
        toggle();
        emit("clickAction", event);
      };
      const renderAction = () => {
        const action = slots.action ? slots.action({ expanded: expanded.value }) : actionText.value;
        return vue.h(
          "span",
          {
            ref: actionRef,
            class: ns.e("action"),
            onClick: onClickAction
          },
          action
        );
      };
      vue.onMounted(() => {
        calcEllipsised();
        if (slots.action) {
          vue.nextTick(calcEllipsised);
        }
      });
      vue.onActivated(() => {
        if (needRecalculate) {
          needRecalculate = false;
          calcEllipsised();
        }
      });
      vue.watch(
        () => [props.content, props.rows, props.position, width.value],
        calcEllipsised
      );
      const renderContent = () => {
        return vue.h(
          elementPlus.ElTooltip,
          {
            disabled: !hasAction.value,
            ...props.tooltipOptions
          },
          {
            default: () => {
              return vue.h(DIV_TAG, { ref: root, class: [ns.b(), attrs.class] }, [
                text.value
              ]);
            },
            content: () => {
              var _a, _b;
              return (_b = (_a = slots.content) == null ? void 0 : _a.call(slots, { content: props.content, text: text.value })) != null ? _b : vue.h(SPAN_TAG, props.content);
            }
          }
        );
      };
      expose({ toggle });
      return () => props.showOverflowTooltip ? renderContent() : vue.h(DIV_TAG, { ref: root, class: ns.b() }, [
        expanded.value ? props.content : text.value,
        hasAction.value ? renderAction() : null
      ]);
    }
  });

  const ElTextEllipsis = index$1.withInstall(TextEllipsis);

  const _sfc_main$r = vue.defineComponent({
    __name: "tag",
    props: vue3.nodeViewProps,
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(vue.unref(vue3.NodeViewWrapper), { class: "tiptap-extension-tag" }, {
          default: vue.withCtx(() => [
            vue.createVNode(vue.unref(elementPlus.ElTag), vue.mergeProps({
              id: _ctx.node.attrs.id,
              type: "primary",
              size: "small",
              class: _ctx.node.attrs.class
            }, _ctx.node.attrs.props), {
              default: vue.withCtx(() => [
                vue.createTextVNode(
                  vue.toDisplayString(_ctx.node.attrs.props.text),
                  1
                )
              ]),
              _: 1
            }, 16, ["id", "class"])
          ]),
          _: 1
        });
      };
    }
  });
  var Component$3 = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__file", "tag.vue"]]);

  var Tag = core.Node.create({
    name: "tag",
    group: "inline",
    inline: true,
    addAttributes() {
      return {
        props: {
          default: null,
          parseHTML: (element) => {
            const attributes = {};
            for (const attr of element.attributes) {
              attributes[attr.name] = attr.value;
            }
            return attributes;
          },
          renderHTML: (attributes) => {
            return attributes.props || {};
          }
        }
      };
    },
    parseHTML() {
      return [
        {
          tag: "tag"
        }
      ];
    },
    renderHTML({ HTMLAttributes }) {
      return ["tag", core.mergeAttributes(HTMLAttributes)];
    },
    addNodeView() {
      return vue3.VueNodeViewRenderer(Component$3);
    }
  });

  const _sfc_main$q = vue.defineComponent({
    __name: "video",
    props: vue3.nodeViewProps,
    setup(__props) {
      const props = __props;
      const attrs = vue.computed(() => {
        return {
          ...props.node.attrs
        };
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(vue.unref(vue3.NodeViewWrapper), { class: "tiptap-extension-video" }, {
          default: vue.withCtx(() => [
            vue.createElementVNode(
              "video",
              vue.normalizeProps(vue.guardReactiveProps(attrs.value)),
              null,
              16
            )
          ]),
          _: 1
        });
      };
    }
  });
  var Component$2 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__file", "video.vue"]]);

  var Video$2 = core.Node.create({
    name: "video",
    group: "inline",
    inline: true,
    addAttributes() {
      return {
        id: {
          default: ""
        },
        class: {
          default: ""
        },
        src: {
          default: ""
        },
        controls: {
          default: true
        },
        autoplay: {
          default: false
        },
        loop: {
          default: false
        },
        muted: {
          default: false
        },
        poster: {
          default: ""
        },
        width: {
          default: 200
        },
        height: {
          default: ""
        },
        preload: {
          default: "auto"
        }
      };
    },
    parseHTML() {
      return [
        {
          tag: "video"
        }
      ];
    },
    renderHTML({ HTMLAttributes }) {
      return ["video", core.mergeAttributes(HTMLAttributes)];
    },
    addNodeView() {
      return vue3.VueNodeViewRenderer(Component$2);
    }
  });

  const compileToFunction = (template) => {
    const { code } = compilerDom.compile(template);
    return new Function("Vue", code)(runtimeDom__namespace);
  };
  const resolve = (registry, name) => {
    return registry && (registry[name] || registry[vue.camelize(name)] || registry[vue.capitalize(vue.camelize(name))]);
  };
  const isVueComponent = (registry, name) => !!resolve(registry, name);
  const Component$1 = vue.defineComponent({
    name: "Component",
    inheritAttrs: false,
    props: {
      ...vue3.nodeViewProps
    },
    setup(props) {
      const instance = vue.getCurrentInstance();
      return () => {
        var _a, _b;
        const { node } = props;
        const attrs = { ...node.attrs.props };
        const template = attrs.template;
        delete attrs.template;
        const isCustomTag = isVueComponent(
          (_b = (_a = instance == null ? void 0 : instance.appContext) == null ? void 0 : _a.components) != null ? _b : {},
          attrs.is
        );
        const parent = isCustomTag ? vue.resolveComponent(attrs.is) : attrs.is;
        const child = {
          render: compileToFunction(template)
        };
        const renderChild = () => {
          return vue.h(
            parent,
            { ...attrs },
            isCustomTag ? {
              default: () => vue.h(child)
            } : [vue.h(child)]
          );
        };
        return vue.h(
          vue3.NodeViewWrapper,
          {
            class: ["tiptap-extension-component", attrs["wrap-class"]]
          },
          {
            default: () => renderChild()
          }
        );
      };
    }
  });

  var Component = core.Node.create({
    name: "component",
    group: "inline",
    inline: true,
    addAttributes() {
      return {
        props: {
          default: null,
          parseHTML: (element) => {
            const attributes = {};
            for (const attr of element.attributes) {
              attributes[attr.name] = attr.value;
            }
            attributes["template"] = element.innerHTML;
            return attributes;
          },
          renderHTML: (attributes) => {
            return attributes.props || {};
          }
        }
      };
    },
    parseHTML() {
      return [
        {
          tag: "component"
        }
      ];
    },
    renderHTML({ HTMLAttributes }) {
      const attrs = { ...HTMLAttributes };
      delete attrs.template;
      return ["component", core.mergeAttributes(attrs)];
    },
    addNodeView() {
      return vue3.VueNodeViewRenderer(Component$1);
    }
  });

  const filterOption = (query, option) => {
    const lowerCase = query.toLowerCase();
    const label = option.label || option.id;
    return label.toLowerCase().includes(lowerCase);
  };
  const getTextContent = (html, rules = []) => {
    if (!rules.some((rule) => rule.tag === "br")) {
      rules = rules.concat({
        tag: "br",
        attr: "no-attr",
        defaultValue: "\n"
      });
    }
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    rules.forEach(({ tag, attr, defaultValue }) => {
      const elements = doc.querySelectorAll(tag);
      elements.forEach((el) => {
        var _a, _b;
        const attrValue = (_b = (_a = el.getAttribute(attr)) != null ? _a : defaultValue) != null ? _b : "";
        el.replaceWith(attrValue);
      });
    });
    return doc.body.textContent.trim();
  };

  const _sfc_main$p = vue.defineComponent({
    __name: "mention-list",
    props: {
      items: {
        type: Array,
        required: true
      },
      command: {
        type: Function,
        required: true
      }
    },
    setup(__props, { expose: __expose }) {
      const ns = elementPlus.useNamespace("editor-mention");
      const scrollbarRef = vue.ref();
      const optionRefs = vue.ref();
      const dropdownRef = vue.ref();
      const selectedIndex = vue.ref(0);
      const props = __props;
      const handleMouseMove = (index) => {
        selectedIndex.value = index;
      };
      function scrollInto(index) {
        var _a, _b, _c, _d;
        const target = (_a = optionRefs.value) == null ? void 0 : _a[index];
        if (target) {
          const menu = (_c = (_b = dropdownRef.value) == null ? void 0 : _b.querySelector) == null ? void 0 : _c.call(_b, `.${ns.b("wrap")}`);
          if (menu) {
            index$1.scrollIntoView(menu, target);
          }
        }
        (_d = scrollbarRef.value) == null ? void 0 : _d.handleScroll();
      }
      function onKeyDown({ event }) {
        if (event.key === "ArrowUp") {
          upHandler();
          return true;
        }
        if (event.key === "ArrowDown") {
          downHandler();
          return true;
        }
        if (event.key === "Enter") {
          enterHandler();
          return true;
        }
        return false;
      }
      function upHandler() {
        selectedIndex.value = (selectedIndex.value + props.items.length - 1) % props.items.length;
        scrollInto(selectedIndex.value);
      }
      function downHandler() {
        selectedIndex.value = (selectedIndex.value + 1) % props.items.length;
        scrollInto(selectedIndex.value);
      }
      function enterHandler() {
        selectItem(selectedIndex.value);
      }
      function selectItem(index) {
        const item = props.items[index];
        if (item) {
          props.command(item);
        }
      }
      __expose({
        onKeyDown
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "div",
          {
            ref_key: "dropdownRef",
            ref: dropdownRef,
            class: vue.normalizeClass(vue.unref(ns).b())
          },
          [
            _ctx.$slots.header ? (vue.openBlock(), vue.createElementBlock(
              "div",
              {
                key: 0,
                class: vue.normalizeClass(vue.unref(ns).b("header"))
              },
              [
                vue.renderSlot(_ctx.$slots, "header")
              ],
              2
            )) : vue.createCommentVNode("v-if", true),
            vue.createVNode(vue.unref(elementPlus.ElScrollbar), {
              ref_key: "scrollbarRef",
              ref: scrollbarRef,
              tag: "ul",
              "wrap-class": vue.unref(ns).b("wrap"),
              "view-class": vue.unref(ns).b("list"),
              role: "listbox",
              "aria-orientation": "vertical"
            }, {
              default: vue.withCtx(() => [
                vue.renderSlot(_ctx.$slots, "content", vue.normalizeProps(vue.guardReactiveProps({ items: __props.items, command: __props.command })), () => [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(__props.items, (item, index) => {
                      return vue.openBlock(), vue.createElementBlock("li", {
                        id: item.id,
                        ref_for: true,
                        ref_key: "optionRefs",
                        ref: optionRefs,
                        key: index,
                        role: "option",
                        class: vue.normalizeClass({ active: index === selectedIndex.value }),
                        onClick: vue.withModifiers(($event) => selectItem(index), ["stop"]),
                        onMousemove: ($event) => handleMouseMove(index)
                      }, [
                        vue.renderSlot(_ctx.$slots, "label", {
                          item,
                          index
                        }, () => {
                          var _a;
                          return [
                            item.url ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElImage), {
                              key: 0,
                              class: vue.normalizeClass(vue.unref(ns).b("image")),
                              src: item.url,
                              fit: "cover"
                            }, null, 8, ["class", "src"])) : vue.createCommentVNode("v-if", true),
                            vue.createElementVNode(
                              "span",
                              {
                                class: vue.normalizeClass(vue.unref(ns).b("text"))
                              },
                              vue.toDisplayString((_a = item.label) != null ? _a : item.id),
                              3
                            )
                          ];
                        })
                      ], 42, ["id", "onClick", "onMousemove"]);
                    }),
                    128
                  ))
                ])
              ]),
              _: 3
            }, 8, ["wrap-class", "view-class"]),
            _ctx.$slots.footer ? (vue.openBlock(), vue.createElementBlock(
              "div",
              {
                key: 1,
                class: vue.normalizeClass(vue.unref(ns).b("footer"))
              },
              [
                vue.renderSlot(_ctx.$slots, "footer")
              ],
              2
            )) : vue.createCommentVNode("v-if", true)
          ],
          2
        );
      };
    }
  });
  var MentionList = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__file", "mention-list.vue"]]);

  const Popup = {
    name: "Popup",
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      clientRect: {
        type: Function,
        required: true
      },
      slots: {
        type: Object
      }
    },
    setup(props, { attrs, expose }) {
      const ns = elementPlus.useNamespace("editor-popup");
      const listRef = vue.ref();
      const innerVisible = vue.ref(false);
      vue.watchEffect(() => {
        innerVisible.value = props.visible;
      });
      const virtualRef = vue.computed(() => {
        return {
          getBoundingClientRect: props.clientRect
        };
      });
      const onKeyDown = (props2) => {
        var _a, _b;
        return (_b = (_a = listRef.value) == null ? void 0 : _a.onKeyDown) == null ? void 0 : _b.call(_a, props2);
      };
      expose({
        onKeyDown
      });
      return () => {
        return vue.h(
          elementPlus.ElTooltip,
          {
            ...attrs,
            Key: props.visible,
            effect: "light",
            trigger: "click",
            placement: "bottom-start",
            popperClass: ns.b(),
            showArrow: false,
            virtualTriggering: true,
            visible: props.visible,
            virtualRef: virtualRef.value
          },
          {
            content: () => {
              return vue.h(
                MentionList,
                { items: attrs.items, command: attrs.command, ref: listRef },
                {
                  ...props.slots
                }
              );
            }
          }
        );
      };
    }
  };
  const useSuggestion = (opts) => {
    var _a;
    const visible = vue.ref(false);
    let component;
    const hiddenPopup = () => {
      if (component) {
        visible.value = false;
        component.updateProps({
          visible: visible.value
        });
      }
    };
    const destroy = () => {
      hiddenPopup();
      setTimeout(() => {
        component && component.destroy();
      }, 300);
    };
    const getVisible = () => visible.value;
    const suggestion = {
      char: (_a = opts == null ? void 0 : opts.char) != null ? _a : "@",
      allowedPrefixes: null,
      items: ({ query }) => {
        const { options } = opts;
        const getOptions = typeof options === "function" ? options : () => Promise.resolve(options);
        return getOptions({ query }).then((options2) => {
          var _a2;
          const filter = (_a2 = opts.filterOption) != null ? _a2 : filterOption;
          return options2.filter((option) => filter(query, option));
        }).catch(() => []);
      },
      render: () => {
        return {
          onStart: (props) => {
            var _a2;
            if (!props.clientRect || !props.items.length) {
              return;
            }
            visible.value = true;
            component = new vue3.VueRenderer(Popup, {
              props: {
                ...props,
                visible: visible.value,
                slots: (_a2 = opts.slots) != null ? _a2 : {}
              },
              editor: props.editor
            });
          },
          onUpdate(props) {
            var _a2;
            if (!props.clientRect) {
              return;
            }
            visible.value = props.items.length ? true : false;
            component.updateProps({
              ...props,
              visible: visible.value,
              slots: (_a2 = opts.slots) != null ? _a2 : {}
            });
          },
          onKeyDown(props) {
            var _a2, _b;
            if (props.event.key === "Escape") {
              hiddenPopup();
              return true;
            }
            return (_b = (_a2 = component.ref) == null ? void 0 : _a2.onKeyDown) == null ? void 0 : _b.call(_a2, props);
          },
          onExit() {
            destroy();
          }
        };
      }
    };
    return {
      destroy,
      suggestion,
      hiddenPopup,
      getVisible
    };
  };

  const editorProps = index$1.buildProps({
    modelValue: {
      type: String,
      default: ""
    },
    maxlength: {
      type: [String, Number],
      default: ""
    },
    options: {
      type: index$1.definePropType([Array, Function]),
      default: () => []
    },
    prefix: {
      type: index$1.definePropType(String),
      default: "@"
    },
    extensions: {
      type: index$1.definePropType(Array),
      default: () => []
    },
    placeholder: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    disableEnterEmit: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: true
    },
    editorOptions: {
      type: index$1.definePropType(Object),
      default: () => ({})
    },
    resize: {
      type: Boolean,
      default: false
    }
  });
  const editorEmits = {
    enter: (values) => index$1.isObject(values),
    [UPDATE_MODEL_EVENT]: (value) => index$1.isString(value)
  };

  const __default__$l = vue.defineComponent({
    name: "ElEditor"
  });
  const _sfc_main$o = vue.defineComponent({
    ...__default__$l,
    props: editorProps,
    emits: editorEmits,
    setup(__props, { expose: __expose, emit: __emit }) {
      const slots = vue.useSlots();
      const props = __props;
      const emit = __emit;
      const ns = elementPlus.useNamespace("editor");
      const textLength = vue.ref(0);
      const maxLength = vue.computed(() => Number(props.maxlength));
      const isWordLimitVisible = vue.computed(() => maxLength.value !== 0);
      const { suggestion, hiddenPopup, getVisible } = useSuggestion({
        char: props.prefix,
        options: props.options,
        slots
      });
      const handleClickOutside = () => {
        hiddenPopup();
      };
      const handleClick = () => {
        focus();
      };
      const setTextLength = () => {
        const richEditor = editor.value;
        if (richEditor && (isWordLimitVisible.value || slots["character-count"])) {
          textLength.value = richEditor.storage.characterCount.characters();
        }
      };
      const focus = () => {
        var _a;
        const richEditor = editor.value;
        return (_a = richEditor == null ? void 0 : richEditor.commands) == null ? void 0 : _a.focus();
      };
      const getHtml = () => {
        var _a;
        const richEditor = editor.value;
        return (_a = richEditor == null ? void 0 : richEditor.getHTML()) != null ? _a : "";
      };
      const getText = () => {
        var _a;
        const richEditor = editor.value;
        return (_a = richEditor == null ? void 0 : richEditor.getText()) != null ? _a : "";
      };
      const insertHtml = (html, options2) => {
        const richEditor = editor.value;
        richEditor && richEditor.chain().insertContent(html, options2).focus().run();
      };
      const resetHtml = (html) => {
        const richEditor = editor.value;
        richEditor && richEditor.commands.setContent(html, false);
      };
      const setImage = (options2) => {
        const richEditor = editor.value;
        richEditor && richEditor.chain().focus().setImage(options2).run();
      };
      const setVideo = (options2) => {
        let attrs = "";
        Object.entries(options2).forEach(([key, value]) => {
          attrs += `${key}="${value}" `;
        });
        insertHtml(`<video ${attrs}></video>`);
      };
      const options = {
        extensions: [
          Tag,
          Video$2,
          Component,
          Underline__default["default"],
          Link__default["default"].configure({
            validate: (link) => /^https?:\/\//.test(link)
          }),
          TextAlign__default["default"].configure({
            types: ["heading", "paragraph"]
          }),
          Image__default["default"].configure({
            inline: true,
            allowBase64: false,
            HTMLAttributes: {
              class: "tiptap-image"
            }
          }),
          StarterKit__default["default"].configure({
            bulletList: {
              keepMarks: true
            },
            orderedList: {
              keepMarks: true
            }
          }),
          CharacterCount__default["default"].configure({
            limit: isWordLimitVisible.value ? maxLength.value : null
          }),
          Mention__default["default"].configure({
            HTMLAttributes: {
              class: "tiptap-mention"
            },
            suggestion,
            deleteTriggerWithBackspace: true
          }),
          Placeholder__default["default"].configure({
            emptyEditorClass: "tiptap-placeholder",
            placeholder: props.placeholder
          }),
          ...props.extensions
        ],
        content: props.modelValue,
        editable: !props.disabled,
        onUpdate: () => {
          emit(UPDATE_MODEL_EVENT, getHtml());
        },
        editorProps: {
          handleKeyDown(view, event) {
            if (props.disableEnterEmit)
              return false;
            const hasSpecialKey = [event.shiftKey, event.ctrlKey].some((bool) => bool);
            if (!getVisible() && event.key === "Enter" && !hasSpecialKey) {
              event.preventDefault();
              const values = {
                html: getHtml(),
                text: getText()
              };
              emit("enter", values);
              return true;
            }
            return false;
          }
        },
        ...props.editorOptions
      };
      const editor = vue3.useEditor(options);
      vue.watch(
        () => props.modelValue,
        (value) => {
          if (!editor.value)
            return;
          setTextLength();
          if (getHtml() === value)
            return;
          resetHtml(value);
          setTextLength();
        }
      );
      vue.watch(
        () => props.disabled,
        (value) => {
          const editable = !value;
          editor.value.setEditable(editable);
        }
      );
      vue.onMounted(() => {
        setTextLength();
      });
      vue.onBeforeUnmount(() => {
        var _a;
        (_a = editor.value) == null ? void 0 : _a.destroy();
      });
      __expose({
        editor,
        getHtml,
        getText,
        resetHtml,
        insertHtml,
        setImage,
        setVideo
      });
      return (_ctx, _cache) => {
        return vue.withDirectives((vue.openBlock(), vue.createElementBlock(
          "div",
          {
            class: vue.normalizeClass([
              vue.unref(ns).b(),
              _ctx.border ? vue.unref(ns).m("border") : "",
              _ctx.resize ? vue.unref(ns).m("resize") : "",
              _ctx.disabled ? vue.unref(ns).m("disabled") : ""
            ]),
            onClick: handleClick
          },
          [
            vue.createElementVNode(
              "div",
              {
                class: vue.normalizeClass(vue.unref(ns).b("prepend"))
              },
              [
                vue.renderSlot(_ctx.$slots, "prepend")
              ],
              2
            ),
            vue.createVNode(vue.unref(vue3.EditorContent), {
              class: vue.normalizeClass(vue.unref(ns).b("wrapper")),
              editor: vue.unref(editor)
            }, null, 8, ["class", "editor"]),
            vue.createElementVNode(
              "div",
              {
                class: vue.normalizeClass(vue.unref(ns).b("append"))
              },
              [
                vue.renderSlot(_ctx.$slots, "append")
              ],
              2
            ),
            isWordLimitVisible.value ? (vue.openBlock(), vue.createElementBlock(
              "span",
              {
                key: 0,
                class: vue.normalizeClass(vue.unref(ns).e("count"))
              },
              [
                vue.createElementVNode(
                  "span",
                  {
                    class: vue.normalizeClass(vue.unref(ns).e("count-inner"))
                  },
                  vue.toDisplayString(textLength.value) + " / " + vue.toDisplayString(maxLength.value),
                  3
                )
              ],
              2
            )) : vue.createCommentVNode("v-if", true),
            vue.renderSlot(_ctx.$slots, "character-count", vue.normalizeProps(vue.guardReactiveProps({ count: textLength.value })))
          ],
          2
        )), [
          [vue.unref(elementPlus.ClickOutside), handleClickOutside]
        ]);
      };
    }
  });
  var Editor = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__file", "editor.vue"]]);

  const commonProps = {
    modelValue: {
      type: null
    },
    type: {
      type: String,
      default: "text",
      values: ["text", "code", "image", "icon"]
    },
    keepAlive: {
      type: Boolean,
      default: true
    }
  };
  const commonEmits = {
    [UPDATE_MODEL_EVENT]: (str) => index$1.isString(str),
    [CHANGE_EVENT]: (item, type) => index$1.isObject(item) && index$1.isString(type)
  };
  const emojiProps = index$1.buildProps({ ...commonProps });
  const emojiEmits = {
    ...commonEmits,
    "click-tab": (tab) => !!tab
  };
  const emoticonProps = index$1.buildProps({
    ...commonProps
  });
  const emoticonEmits = {
    ...commonEmits
  };

  const emoticonBaseList = [
    {
      describe: "\u5FAE\u7B11",
      code: "/::)"
    },
    {
      describe: "\u6487\u5634",
      code: "/::~"
    },
    {
      describe: "\u8272",
      code: "/::B"
    },
    {
      describe: "\u53D1\u5446",
      code: "/::|"
    },
    {
      describe: "\u5F97\u610F",
      code: "/:8-)"
    },
    {
      describe: "\u6D41\u6CEA",
      code: "/::<"
    },
    {
      describe: "\u5BB3\u7F9E",
      code: "/::$"
    },
    {
      describe: "\u95ED\u5634",
      code: "/::X"
    },
    {
      describe: "\u7761",
      code: "/::Z"
    },
    {
      describe: "\u5927\u54ED",
      code: "/::'("
    },
    {
      describe: "\u5C34\u5C2C",
      code: "/::-|"
    },
    {
      describe: "\u53D1\u6012",
      code: "/::@"
    },
    {
      describe: "\u8C03\u76AE",
      code: "/::P"
    },
    {
      describe: "\u5472\u7259",
      code: "/::D"
    },
    {
      describe: "\u60CA\u8BB6",
      code: "/::O"
    },
    {
      describe: "\u96BE\u8FC7",
      code: "/::("
    },
    {
      describe: "\u9177",
      code: "/::+"
    },
    {
      describe: "\u51B7\u6C57",
      code: "/:--b"
    },
    {
      describe: "\u6293\u72C2",
      code: "/::Q"
    },
    {
      describe: "\u5410",
      code: "/::T"
    },
    {
      describe: "\u5077\u7B11",
      code: "/:,@P"
    },
    {
      describe: "\u6109\u5FEB",
      code: "/:,@-D"
    },
    {
      describe: "\u767D\u773C",
      code: "/::d"
    },
    {
      describe: "\u50B2\u6162",
      code: "/:,@o"
    },
    {
      describe: "\u9965\u997F",
      code: "/::g"
    },
    {
      describe: "\u56F0",
      code: "/:|-)"
    },
    {
      describe: "\u60CA\u6050",
      code: "/::!"
    },
    {
      describe: "\u6D41\u6C57",
      code: "/::L"
    },
    {
      describe: "\u61A8\u7B11",
      code: "/::>"
    },
    {
      describe: "\u60A0\u95F2",
      code: "/::,@"
    },
    {
      describe: "\u594B\u6597",
      code: "/:,@f"
    },
    {
      describe: "\u5492\u9A82",
      code: "/::-S"
    },
    {
      describe: "\u7591\u95EE",
      code: "/:?"
    },
    {
      describe: "\u5618",
      code: "/:,@x"
    },
    {
      describe: "\u6655",
      code: "/:,@@"
    },
    {
      describe: "\u75AF\u4E86",
      code: "/::8"
    },
    {
      describe: "\u8870",
      code: "/:,@!"
    },
    {
      describe: "\u9AB7\u9AC5",
      code: "/:!!!"
    },
    {
      describe: "\u6572\u6253",
      code: "/:xx"
    },
    {
      describe: "\u518D\u89C1",
      code: "/:bye"
    },
    {
      describe: "\u64E6\u6C57",
      code: "/:wipe"
    },
    {
      describe: "\u62A0\u9F3B",
      code: "/:dig"
    },
    {
      describe: "\u9F13\u638C",
      code: "/:handclap"
    },
    {
      describe: "\u7CD7\u5927\u4E86",
      code: "/:&-("
    },
    {
      describe: "\u574F\u7B11",
      code: "/:B-)"
    },
    {
      describe: "\u5DE6\u54FC\u54FC",
      code: "/:<@"
    },
    {
      describe: "\u53F3\u54FC\u54FC",
      code: "/:@>"
    },
    {
      describe: "\u54C8\u6B20",
      code: "/::-O"
    },
    {
      describe: "\u9119\u89C6",
      code: "/:>-|"
    },
    {
      describe: "\u59D4\u5C48",
      code: "/:P-("
    },
    {
      describe: "\u5FEB\u54ED\u4E86",
      code: "/::'|"
    },
    {
      describe: "\u9634\u9669",
      code: "/:X-)"
    },
    {
      describe: "\u4EB2\u4EB2",
      code: "/::*"
    },
    {
      describe: "\u5413",
      code: "/:@x"
    },
    {
      describe: "\u53EF\u601C",
      code: "/:8*"
    },
    {
      describe: "\u83DC\u5200",
      code: "/:pd"
    },
    {
      describe: "\u897F\u74DC",
      code: "/:<W>"
    },
    {
      describe: "\u5564\u9152",
      code: "/:beer"
    },
    {
      describe: "\u7BEE\u7403",
      code: "/:basketb"
    },
    {
      describe: "\u4E52\u4E53",
      code: "/:oo"
    },
    {
      describe: "\u5496\u5561",
      code: "/:coffee"
    },
    {
      describe: "\u996D",
      code: "/:eat"
    },
    {
      describe: "\u732A\u5934",
      code: "/:pig"
    },
    {
      describe: "\u73AB\u7470",
      code: "/:rose"
    },
    {
      describe: "\u51CB\u8C22",
      code: "/:fade"
    },
    {
      describe: "\u5634\u5507",
      code: "/:showlove"
    },
    {
      describe: "\u7231\u5FC3",
      code: "/:heart"
    },
    {
      describe: "\u5FC3\u788E",
      code: "/:break"
    },
    {
      describe: "\u86CB\u7CD5",
      code: "/:cake"
    },
    {
      describe: "\u95EA\u7535",
      code: "/:li"
    },
    {
      describe: "\u70B8\u5F39",
      code: "/:bome"
    },
    {
      describe: "\u5200",
      code: "/:kn"
    },
    {
      describe: "\u8DB3\u7403",
      code: "/:footb"
    },
    {
      describe: "\u74E2\u866B",
      code: "/:ladybug"
    },
    {
      describe: "\u4FBF\u4FBF",
      code: "/:shit"
    },
    {
      describe: "\u6708\u4EAE",
      code: "/:moon"
    },
    {
      describe: "\u592A\u9633",
      code: "/:sun"
    },
    {
      describe: "\u793C\u7269",
      code: "/:gift"
    },
    {
      describe: "\u62E5\u62B1",
      code: "/:hug"
    },
    {
      describe: "\u5F3A",
      code: "/:strong"
    },
    {
      describe: "\u5F31",
      code: "/:weak"
    },
    {
      describe: "\u63E1\u624B",
      code: "/:share"
    },
    {
      describe: "\u80DC\u5229",
      code: "/:v"
    },
    {
      describe: "\u62B1\u62F3",
      code: "/:@)"
    },
    {
      describe: "\u52FE\u5F15",
      code: "/:jj"
    },
    {
      describe: "\u62F3\u5934",
      code: "/:@@"
    },
    {
      describe: "\u5DEE\u52B2",
      code: "/:bad"
    },
    {
      describe: "\u7231\u4F60",
      code: "/:lvu"
    },
    {
      describe: "NO",
      code: "/:no"
    },
    {
      describe: "OK",
      code: "/:ok"
    },
    {
      describe: "\u7231\u60C5",
      code: "/:love"
    },
    {
      describe: "\u98DE\u543B",
      code: "/:<L>"
    },
    {
      describe: "\u8DF3\u8DF3",
      code: "/:jump"
    },
    {
      describe: "\u53D1\u6296",
      code: "/:shake"
    },
    {
      describe: "\u6004\u706B",
      code: "/:<O>"
    },
    {
      describe: "\u8F6C\u5708",
      code: "/:circle"
    },
    {
      describe: "\u78D5\u5934",
      code: "/:kotow"
    },
    {
      describe: "\u56DE\u5934",
      code: "/:turn"
    },
    {
      describe: "\u8DF3\u7EF3",
      code: "/:skip"
    },
    {
      describe: "\u6295\u964D",
      code: "/:oY"
    },
    {
      describe: "\u6298\u78E8",
      code: "/::8"
    }
  ];
  const emoticonList = emoticonBaseList.map(
    (item, index) => {
      const image = item.describe === "\u6298\u78E8" ? `https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/35.gif` : `https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${index}.gif`;
      return {
        ...item,
        image,
        emojiId: index,
        text: `[${item.describe}]`,
        className: `face${index}`
      };
    }
  );
  const emoticonListKeys = emoticonList.reduce(
    (buff, item) => {
      return buff.concat([item.code, item.text]);
    },
    []
  );
  const emoticonListMap = emoticonListKeys.reduce(
    (buff, value) => {
      const item = emoticonList.find(
        (_) => _.code === value || _.text === value
      );
      return {
        ...buff,
        [value]: item == null ? void 0 : item["image"]
      };
    },
    {}
  );
  const WX_TYPE = "wx";
  const COMMOM_TYPE = "cm";
  const emojiMartData = vue.ref(null);
  const setEmojiMartData = (data) => {
    emojiMartData.value = data;
  };
  const initRemoteData = async () => {
    const { execute } = useAxios.useAxios();
    if (emojiMartData.value !== null)
      return;
    await execute("https://cdn.jsdelivr.net/npm/@emoji-mart/data", {
      method: "get"
    }).then((res) => {
      emojiMartData.value = res.response.value.data;
    }).catch(() => {
      emojiMartData.value = null;
    });
  };
  const useFontEmoticon = () => {
    initRemoteData();
    const peopleList = vue.computed(() => {
      var _a, _b;
      const data = emojiMartData.value;
      if (data) {
        const emojiKeys = (_b = (_a = data.categories.find((item) => item.id === "people")) == null ? void 0 : _a.emojis) != null ? _b : [];
        const emojis = emojiKeys.map((key) => data["emojis"][key]);
        const list = emojis.map((item) => item.skins[0]["native"]);
        return list.map((text) => {
          return {
            text
          };
        });
      } else {
        return [];
      }
    });
    return {
      peopleList
    };
  };

  const __default__$k = vue.defineComponent({
    name: "ElEmoticon"
  });
  const _sfc_main$n = vue.defineComponent({
    ...__default__$k,
    props: emoticonProps,
    emits: emoticonEmits,
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emit = __emit;
      const model = vue.computed({
        get: () => props.modelValue,
        set: (val) => {
          emit(UPDATE_MODEL_EVENT, val);
        }
      });
      const ns = elementPlus.useNamespace("emoji-face");
      const list = vue.computed(() => [...emoticonList]);
      const handleClick = (item) => {
        var _a;
        model.value = (_a = item[props.type]) != null ? _a : "";
        emit(CHANGE_EVENT, item, WX_TYPE);
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "div",
          {
            class: vue.normalizeClass(vue.unref(ns).b())
          },
          [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(list.value, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("a", {
                  key: index,
                  title: item.describe,
                  class: vue.normalizeClass([item.className]),
                  onClick: ($event) => handleClick(item)
                }, vue.toDisplayString(item.describe), 11, ["title", "onClick"]);
              }),
              128
            ))
          ],
          2
        );
      };
    }
  });
  var Emoticon = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__file", "emoticon.vue"]]);

  const __default__$j = vue.defineComponent({
    name: "ElFontEmoticon"
  });
  const _sfc_main$m = vue.defineComponent({
    ...__default__$j,
    props: emoticonProps,
    emits: emoticonEmits,
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emit = __emit;
      const model = vue.computed({
        get: () => props.modelValue,
        set: (val) => {
          emit(UPDATE_MODEL_EVENT, val);
        }
      });
      const ns = elementPlus.useNamespace("font-emoticon");
      const { peopleList } = useFontEmoticon();
      const handleClick = (item) => {
        var _a;
        model.value = (_a = item["text"]) != null ? _a : "";
        emit(CHANGE_EVENT, item, COMMOM_TYPE);
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "div",
          {
            class: vue.normalizeClass(vue.unref(ns).b())
          },
          [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(vue.unref(peopleList), (item, index) => {
                return vue.openBlock(), vue.createElementBlock("span", {
                  key: index,
                  class: vue.normalizeClass(vue.unref(ns).e("native")),
                  onClick: ($event) => handleClick(item)
                }, vue.toDisplayString(item.text), 11, ["onClick"]);
              }),
              128
            ))
          ],
          2
        );
      };
    }
  });
  var FontEmoticon = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__file", "font-emoticon.vue"]]);

  const __default__$i = vue.defineComponent({
    name: "ElEmojiTabs"
  });
  const _sfc_main$l = vue.defineComponent({
    ...__default__$i,
    props: {
      options: {
        type: index$1.definePropType(Array),
        default: () => []
      }
    },
    emits: {
      [CHANGE_EVENT]: (value) => !!value
    },
    setup(__props, { emit: __emit }) {
      const curIndex = vue.ref(0);
      const emit = __emit;
      const ns = elementPlus.useNamespace("emoji-tabs");
      const handleClick = (item, index) => {
        curIndex.value = index;
        emit(CHANGE_EVENT, item.value);
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "div",
          {
            class: vue.normalizeClass(vue.unref(ns).b())
          },
          [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(__props.options, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("div", {
                  key: index,
                  class: vue.normalizeClass([vue.unref(ns).e("item"), index === curIndex.value ? "active" : ""]),
                  onClick: ($event) => handleClick(item, index)
                }, [
                  vue.createElementVNode(
                    "span",
                    null,
                    vue.toDisplayString(item.label),
                    1
                  ),
                  index < __props.options.length - 1 ? (vue.openBlock(), vue.createElementBlock(
                    "div",
                    {
                      key: 0,
                      class: vue.normalizeClass(vue.unref(ns).m("line"))
                    },
                    null,
                    2
                  )) : vue.createCommentVNode("v-if", true)
                ], 10, ["onClick"]);
              }),
              128
            ))
          ],
          2
        );
      };
    }
  });
  var Tabs = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__file", "tabs.vue"]]);

  const __default__$h = vue.defineComponent({
    name: "ElEmoji"
  });
  const _sfc_main$k = vue.defineComponent({
    ...__default__$h,
    props: emojiProps,
    emits: emojiEmits,
    setup(__props, { expose: __expose, emit: __emit }) {
      const TransitionAlias = vue.Transition;
      const props = __props;
      const emit = __emit;
      const ns = elementPlus.useNamespace("emoji");
      const { t } = elementPlus.useLocale();
      const scrollbarRef = vue.ref();
      const popoverRef = vue.ref();
      const triggerRef = vue.ref();
      const visible = vue.ref(false);
      const curTab = vue.ref(WX_TYPE);
      const options = vue.ref([
        {
          label: t("epx.emoji.weixinEmoji"),
          value: WX_TYPE
        },
        {
          label: t("epx.emoji.commonEmoji"),
          value: COMMOM_TYPE
        }
      ]);
      const activeComponent = vue.computed(
        () => curTab.value === WX_TYPE ? Emoticon : FontEmoticon
      );
      const hidden = () => {
        var _a, _b;
        (_b = (_a = vue.unref(popoverRef)) == null ? void 0 : _a.hide) == null ? void 0 : _b.call(_a);
      };
      const handleChange = (item) => {
        var _a;
        hidden();
        const value = (_a = item[props.type]) != null ? _a : item["text"];
        emit(UPDATE_MODEL_EVENT, value);
        emit(CHANGE_EVENT, item, curTab.value);
      };
      const handleEnter = () => {
        visible.value = true;
      };
      const handleLeave = () => {
        if (props.keepAlive)
          return;
        visible.value = false;
        curTab.value = WX_TYPE;
      };
      const updateScrollbar = () => {
        vue.nextTick(() => {
          var _a, _b;
          (_b = (_a = scrollbarRef.value) == null ? void 0 : _a.update) == null ? void 0 : _b.call(_a);
        });
      };
      const handleChangeTab = (value) => {
        curTab.value = value;
        emit("click-tab", value);
      };
      __expose({
        scrollbarRef,
        updateScrollbar
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode(
              "span",
              {
                ref_key: "triggerRef",
                ref: triggerRef,
                class: vue.normalizeClass(vue.unref(ns).b())
              },
              [
                vue.renderSlot(_ctx.$slots, "trigger")
              ],
              2
            ),
            vue.createVNode(vue.unref(elementPlus.ElPopover), vue.mergeProps({
              ref_key: "popoverRef",
              ref: popoverRef,
              trigger: "click",
              placement: "top",
              persistent: "",
              "virtual-triggering": "",
              "virtual-ref": triggerRef.value,
              width: 347,
              "show-arrow": false
            }, _ctx.$attrs, {
              "popper-class": vue.unref(ns).b("popper-class"),
              onBeforeEnter: handleEnter,
              onAfterLeave: handleLeave
            }), {
              default: vue.withCtx(() => [
                visible.value ? (vue.openBlock(), vue.createElementBlock(
                  "div",
                  {
                    key: 0,
                    class: vue.normalizeClass(vue.unref(ns).b("panpel"))
                  },
                  [
                    vue.createVNode(Tabs, {
                      options: options.value,
                      onChange: handleChangeTab
                    }, null, 8, ["options"]),
                    vue.createVNode(
                      vue.unref(elementPlus.ElScrollbar),
                      {
                        ref_key: "scrollbarRef",
                        ref: scrollbarRef,
                        height: "300px"
                      },
                      {
                        default: vue.withCtx(() => [
                          vue.createVNode(vue.unref(TransitionAlias), {
                            mode: "out-in",
                            name: `${vue.unref(ns).namespace.value}-fade-in-linear`
                          }, {
                            default: vue.withCtx(() => [
                              (vue.openBlock(), vue.createBlock(
                                vue.resolveDynamicComponent(activeComponent.value),
                                { onChange: handleChange },
                                null,
                                32
                              ))
                            ]),
                            _: 1
                          }, 8, ["name"])
                        ]),
                        _: 1
                      },
                      512
                    )
                  ],
                  2
                )) : vue.createCommentVNode("v-if", true)
              ]),
              _: 1
            }, 16, ["virtual-ref", "popper-class"])
          ],
          64
        );
      };
    }
  });
  var Emoji = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__file", "index.vue"]]);

  class Trie {
    constructor() {
      this.words = 0;
      this.empty = 1;
      this.index = 0;
      this.children = {};
    }
    insert(str, pos, idx) {
      if (str.length === 0) {
        return;
      }
      if (pos === void 0) {
        pos = 0;
      }
      if (pos === str.length) {
        this.index = idx;
        return;
      }
      const k = str[pos];
      if (this.children[k] === void 0) {
        this.children[k] = new Trie();
        this.empty = 0;
        this.children[k].words = this.words + 1;
      }
      const child = this.children[k];
      child.insert(str, pos + 1, idx);
    }
    build(arr) {
      const len = arr.length;
      for (let i = 0; i < len; i++) {
        this.insert(arr[i], 0, i);
      }
    }
    searchOne(str, pos) {
      if (pos === void 0) {
        pos = 0;
      }
      const result = {};
      if (str.length === 0)
        return result;
      result.arr = [];
      const k = str[pos];
      const child = this.children[k];
      if (child !== void 0 && pos < str.length) {
        return child.searchOne(str, pos + 1);
      }
      if (child === void 0 && this.empty === 0)
        return result;
      if (this.empty == 1) {
        result.arr[0] = pos - this.words;
        result.arr[1] = this.index;
        result.words = this.words;
        return result;
      }
      return result;
    }
    search(str) {
      if (this.empty == 1)
        return [];
      const len = str.length;
      const searchResult = [];
      let tmp;
      for (let i = 0; i < len - 1; i++) {
        tmp = this.searchOne(str, i);
        if (typeof tmp.arr !== "undefined" && tmp.arr.length > 0) {
          searchResult.push(tmp.arr);
          i = i + tmp.words - 1;
        }
      }
      return searchResult;
    }
  }
  const trie = new Trie();
  trie.build(emoticonListKeys);
  function splice(str, index, count, add) {
    return str.slice(0, index) + add + str.slice(index + count);
  }
  const emotionParser = (text = "") => {
    const indices = trie.search(text);
    indices.reverse().forEach((idx) => {
      const pos = idx[0], emotion = emoticonListKeys[idx[1]], img = `<img src="${emoticonListMap[emotion]}" alt="${emotion}">`;
      text = splice(text, pos, emotion.length, img);
    });
    return text;
  };

  const ElEmoji = index$1.withInstall(Emoji);
  const ElEmoticon = index$1.withInstall(Emoticon);
  const ElFontEmoticon = index$1.withInstall(FontEmoticon);

  const createIconComponent = (options) => {
    return vue.defineComponent({
      name: options.name,
      render() {
        return vue.h("div", {
          style: {
            display: "contents"
          },
          innerHTML: options.svg
        });
      }
    });
  };

  const audioFileSvg = `<svg
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <path
        d="M14.1178571,4.0125 C14.225,4.11964286 14.2857143,4.26428571 14.2857143,4.41607143 L14.2857143,15.4285714 C14.2857143,15.7446429 14.0303571,16 13.7142857,16 L2.28571429,16 C1.96964286,16 1.71428571,15.7446429 1.71428571,15.4285714 L1.71428571,0.571428571 C1.71428571,0.255357143 1.96964286,0 2.28571429,0 L9.86964286,0 C10.0214286,0 10.1678571,0.0607142857 10.275,0.167857143 L14.1178571,4.0125 Z M10.7315824,7.11216117 C10.7428131,7.15148751 10.7485063,7.19218979 10.7485063,7.23309113 L10.7485063,8.07742614 C10.7484199,8.27364959 10.6183424,8.44607275 10.4296853,8.50003683 L8.32984514,9.09986306 L8.32984514,11.7071803 C8.32986605,12.5367078 7.67249692,13.217028 6.84345686,13.2454634 L6.79068592,13.2463395 C6.12766108,13.2463395 5.53916361,12.8217001 5.33010655,12.1924966 C5.1210495,11.563293 5.33842118,10.8709227 5.86959669,10.4741173 C6.40077221,10.0773119 7.12636292,10.0652587 7.67042486,10.4442027 L7.67020842,7.74937024 L7.68449368,7.74937024 C7.72405122,7.59919041 7.83988806,7.48101083 7.98924584,7.4384546 L10.1880418,6.81004755 C10.42156,6.74340323 10.6648954,6.87865515 10.7315824,7.11216117 Z M9.60714286,1.31785714 L12.9678571,4.67857143 L9.60714286,4.67857143 L9.60714286,1.31785714 Z"
        fill="currentColor"
      />
    </g>
  </svg>`;
  var audio = createIconComponent({
    name: "AudioFile",
    svg: audioFileSvg
  });

  const excelFileSvg = `<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1024">
  <path d="M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM575.34 477.84l-61.22 102.3L452.3 477.8a12 12 0 0 0-10.27-5.79h-38.44a12 12 0 0 0-6.4 1.85 12 12 0 0 0-3.75 16.56l82.34 130.42-83.45 132.78a12 12 0 0 0-1.84 6.39 12 12 0 0 0 12 12h34.46a12 12 0 0 0 10.21-5.7l62.7-101.47 62.3 101.45a12 12 0 0 0 10.23 5.72h37.48a12 12 0 0 0 6.48-1.9 12 12 0 0 0 3.62-16.58l-83.83-130.55 85.3-132.47a12 12 0 0 0 1.9-6.5 12 12 0 0 0-12-12h-35.7a12 12 0 0 0-10.29 5.84z"/>
</svg>
`;
  var excel = createIconComponent({
    name: "ExcelFile",
    svg: excelFileSvg
  });

  const imageFileSvg = `<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1024">
  <path d="M854.6 288.7L639.4 73.4c-6-6-14.2-9.4-22.7-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.6-9.4-22.6zM400 402c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm296 294H328c-6.7 0-10.4-7.7-6.3-12.9l99.8-127.2a8 8 0 0 1 12.6 0l41.1 52.4 77.8-99.2a8 8 0 0 1 12.6 0l136.5 174c4.3 5.2.5 12.9-6.1 12.9zm-94-370V137.8L790.2 326H602z"/>
</svg>`;
  var imageFile = createIconComponent({
    name: "ImageFile",
    svg: imageFileSvg
  });

  const markdownFileSvg = `<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1024">
  <path d="M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM426.13 600.93l59.11 132.97a16 16 0 0 0 14.62 9.5h24.06a16 16 0 0 0 14.63-9.51l59.1-133.35V758a16 16 0 0 0 16.01 16H641a16 16 0 0 0 16-16V486a16 16 0 0 0-16-16h-34.75a16 16 0 0 0-14.67 9.62L512.1 662.2l-79.48-182.59a16 16 0 0 0-14.67-9.61H383a16 16 0 0 0-16 16v272a16 16 0 0 0 16 16h27.13a16 16 0 0 0 16-16V600.93z"/>
</svg>`;
  var markdown = createIconComponent({
    name: "MarkdownFile",
    svg: markdownFileSvg
  });

  const pdfFileSvg = `<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1024">
  <path d="M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM633.22 637.26c-15.18-.5-31.32.67-49.65 2.96-24.3-14.99-40.66-35.58-52.28-65.83l1.07-4.38 1.24-5.18c4.3-18.13 6.61-31.36 7.3-44.7.52-10.07-.04-19.36-1.83-27.97-3.3-18.59-16.45-29.46-33.02-30.13-15.45-.63-29.65 8-33.28 21.37-5.91 21.62-2.45 50.07 10.08 98.59-15.96 38.05-37.05 82.66-51.2 107.54-18.89 9.74-33.6 18.6-45.96 28.42-16.3 12.97-26.48 26.3-29.28 40.3-1.36 6.49.69 14.97 5.36 21.92 5.3 7.88 13.28 13 22.85 13.74 24.15 1.87 53.83-23.03 86.6-79.26 3.29-1.1 6.77-2.26 11.02-3.7l11.9-4.02c7.53-2.54 12.99-4.36 18.39-6.11 23.4-7.62 41.1-12.43 57.2-15.17 27.98 14.98 60.32 24.8 82.1 24.8 17.98 0 30.13-9.32 34.52-23.99 3.85-12.88.8-27.82-7.48-36.08-8.56-8.41-24.3-12.43-45.65-13.12zM385.23 765.68v-.36l.13-.34a54.86 54.86 0 0 1 5.6-10.76c4.28-6.58 10.17-13.5 17.47-20.87 3.92-3.95 8-7.8 12.79-12.12 1.07-.96 7.91-7.05 9.19-8.25l11.17-10.4-8.12 12.93c-12.32 19.64-23.46 33.78-33 43-3.51 3.4-6.6 5.9-9.1 7.51a16.43 16.43 0 0 1-2.61 1.42c-.41.17-.77.27-1.13.3a2.2 2.2 0 0 1-1.12-.15 2.07 2.07 0 0 1-1.27-1.91zM511.17 547.4l-2.26 4-1.4-4.38c-3.1-9.83-5.38-24.64-6.01-38-.72-15.2.49-24.32 5.29-24.32 6.74 0 9.83 10.8 10.07 27.05.22 14.28-2.03 29.14-5.7 35.65zm-5.81 58.46l1.53-4.05 2.09 3.8c11.69 21.24 26.86 38.96 43.54 51.31l3.6 2.66-4.39.9c-16.33 3.38-31.54 8.46-52.34 16.85 2.17-.88-21.62 8.86-27.64 11.17l-5.25 2.01 2.8-4.88c12.35-21.5 23.76-47.32 36.05-79.77zm157.62 76.26c-7.86 3.1-24.78.33-54.57-12.39l-7.56-3.22 8.2-.6c23.3-1.73 39.8-.45 49.42 3.07 4.1 1.5 6.83 3.39 8.04 5.55a4.64 4.64 0 0 1-1.36 6.31 6.7 6.7 0 0 1-2.17 1.28z"/>
</svg>`;
  var pdf = createIconComponent({
    name: "PdfFile",
    svg: pdfFileSvg
  });

  const pptFileSvg = `<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1024">
  <path d="M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM468.53 760v-91.54h59.27c60.57 0 100.2-39.65 100.2-98.12 0-58.22-39.58-98.34-99.98-98.34H424a12 12 0 0 0-12 12v276a12 12 0 0 0 12 12h32.53a12 12 0 0 0 12-12zm0-139.33h34.9c47.82 0 67.19-12.93 67.19-50.33 0-32.05-18.12-50.12-49.87-50.12h-52.22v100.45z"/>
</svg>`;
  var ppt = createIconComponent({
    name: "PptFile",
    svg: pptFileSvg
  });

  const videoFileSvg = `<svg
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <path
        d="M14.1178571,4.0125 C14.225,4.11964286 14.2857143,4.26428571 14.2857143,4.41607143 L14.2857143,15.4285714 C14.2857143,15.7446429 14.0303571,16 13.7142857,16 L2.28571429,16 C1.96964286,16 1.71428571,15.7446429 1.71428571,15.4285714 L1.71428571,0.571428571 C1.71428571,0.255357143 1.96964286,0 2.28571429,0 L9.86964286,0 C10.0214286,0 10.1678571,0.0607142857 10.275,0.167857143 L14.1178571,4.0125 Z M12.9678571,4.67857143 L9.60714286,1.31785714 L9.60714286,4.67857143 L12.9678571,4.67857143 Z M10.5379461,10.3101106 L6.68957555,13.0059749 C6.59910784,13.0693494 6.47439406,13.0473861 6.41101953,12.9569184 C6.3874624,12.9232903 6.37482581,12.8832269 6.37482581,12.8421686 L6.37482581,7.45043999 C6.37482581,7.33998304 6.46436886,7.25043999 6.57482581,7.25043999 C6.61588409,7.25043999 6.65594753,7.26307658 6.68957555,7.28663371 L10.5379461,9.98249803 C10.6284138,10.0458726 10.6503772,10.1705863 10.5870027,10.2610541 C10.5736331,10.2801392 10.5570312,10.2967411 10.5379461,10.3101106 Z"
        fill="currentColor"
      />
    </g>
  </svg>`;
  var videoFile = createIconComponent({
    name: "VideoFile",
    svg: videoFileSvg
  });

  const wordFileSvg = `<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1024">
  <path d="M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM512 566.1l52.81 197a12 12 0 0 0 11.6 8.9h31.77a12 12 0 0 0 11.6-8.88l74.37-276a12 12 0 0 0 .4-3.12 12 12 0 0 0-12-12h-35.57a12 12 0 0 0-11.7 9.31l-45.78 199.1-49.76-199.32A12 12 0 0 0 528.1 472h-32.2a12 12 0 0 0-11.64 9.1L434.6 680.01 388.5 481.3a12 12 0 0 0-11.68-9.29h-35.39a12 12 0 0 0-3.11.41 12 12 0 0 0-8.47 14.7l74.17 276A12 12 0 0 0 415.6 772h31.99a12 12 0 0 0 11.59-8.9l52.81-197z"/>
</svg>`;
  var word = createIconComponent({
    name: "WordFile",
    svg: wordFileSvg
  });

  const zipFileSvg = `<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1024">
  <path d="M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM296 136v64h64v-64h-64zm64 64v64h64v-64h-64zm-64 64v64h64v-64h-64zm64 64v64h64v-64h-64zm-64 64v64h64v-64h-64zm64 64v64h64v-64h-64zm-64 64v64h64v-64h-64zm0 64v160h128V584H296zm48 48h32v64h-32v-64z"/>
</svg>`;
  var zip = createIconComponent({
    name: "ZipFile",
    svg: zipFileSvg
  });

  const wechatSvg = `<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1024">
  <path d="M690.1 377.4c5.9 0 11.8.2 17.6.5-24.4-128.7-158.3-227.1-319.9-227.1C209 150.8 64 271.4 64 420.2c0 81.1 43.6 154.2 111.9 203.6a21.5 21.5 0 0 1 9.1 17.6c0 2.4-.5 4.6-1.1 6.9-5.5 20.3-14.2 52.8-14.6 54.3-.7 2.6-1.7 5.2-1.7 7.9 0 5.9 4.8 10.8 10.8 10.8 2.3 0 4.2-.9 6.2-2l70.9-40.9c5.3-3.1 11-5 17.2-5 3.2 0 6.4.5 9.5 1.4 33.1 9.5 68.8 14.8 105.7 14.8 6 0 11.9-.1 17.8-.4-7.1-21-10.9-43.1-10.9-66 0-135.8 132.2-245.8 295.3-245.8zm-194.3-86.5c23.8 0 43.2 19.3 43.2 43.1s-19.3 43.1-43.2 43.1c-23.8 0-43.2-19.3-43.2-43.1s19.4-43.1 43.2-43.1zm-215.9 86.2c-23.8 0-43.2-19.3-43.2-43.1s19.3-43.1 43.2-43.1 43.2 19.3 43.2 43.1-19.4 43.1-43.2 43.1zm586.8 415.6c56.9-41.2 93.2-102 93.2-169.7 0-124-120.8-224.5-269.9-224.5-149 0-269.9 100.5-269.9 224.5S540.9 847.5 690 847.5c30.8 0 60.6-4.4 88.1-12.3 2.6-.8 5.2-1.2 7.9-1.2 5.2 0 9.9 1.6 14.3 4.1l59.1 34c1.7 1 3.3 1.7 5.2 1.7a9 9 0 0 0 6.4-2.6 9 9 0 0 0 2.6-6.4c0-2.2-.9-4.4-1.4-6.6-.3-1.2-7.6-28.3-12.2-45.3-.5-1.9-.9-3.8-.9-5.7.1-5.9 3.1-11.2 7.6-14.5zM600.2 587.2c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9c0 19.8-16.2 35.9-36 35.9zm179.9 0c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9a36.08 36.08 0 0 1-36 35.9z"/>
</svg>
`;
  var wechat = createIconComponent({
    name: "Wechat",
    svg: wechatSvg
  });

  const qqSvg = `<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1024">
  <path d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z"/>
</svg>`;
  var qq = createIconComponent({
    name: "QQ",
    svg: qqSvg
  });

  const unknownFileSvg = `<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1024">
  <path d="M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM402 549c0 5.4 4.4 9.5 9.8 9.5h32.4c5.4 0 9.8-4.2 9.8-9.4 0-28.2 25.8-51.6 58-51.6s58 23.4 58 51.5c0 25.3-21 47.2-49.3 50.9-19.3 2.8-34.5 20.3-34.7 40.1v32c0 5.5 4.5 10 10 10h32c5.5 0 10-4.5 10-10v-12.2c0-6 4-11.5 9.7-13.3 44.6-14.4 75-54 74.3-98.9-.8-55.5-49.2-100.8-108.5-101.6-61.4-.7-111.5 45.6-111.5 103zm110 227a32 32 0 1 0 0-64 32 32 0 0 0 0 64z"/>
</svg>`;
  var unknown = createIconComponent({
    name: "UnknownFile",
    svg: unknownFileSvg
  });

  const textFileSvg = `<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1024">
  <path d="M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM320 482a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h384a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8H320zm0 136a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h184a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8H320z"/>
</svg>
`;
  var text = createIconComponent({
    name: "TextFile",
    svg: textFileSvg
  });

  const exclamationFileSvg = `<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1024">
  <path d="M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM512 784a40 40 0 1 0 0-80 40 40 0 0 0 0 80zm32-152V448a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v184a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8z"/>
</svg>
`;
  var exclamation = createIconComponent({
    name: "ExclamationFile",
    svg: exclamationFileSvg
  });

  const alignCenterSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>`;
  var alignCenter = createIconComponent({
    name: "AlignCenter",
    svg: alignCenterSvg
  });

  const alignJustifySvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg>`;
  var alignJustify = createIconComponent({
    name: "AlignJustify",
    svg: alignJustifySvg
  });

  const alignRightSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
</svg>`;
  var alignLeft = createIconComponent({
    name: "AlignRight",
    svg: alignRightSvg
  });

  const alignLeftSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
</svg>`;
  var alignRight = createIconComponent({
    name: "AlignLeft",
    svg: alignLeftSvg
  });

  const blockquoteSvg = `<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.865 21C4.275 21 2 18.88 2 15.037c0-4.5 3.143-9.725 6.518-12.422a.888.888 0 0 1 1.203.107c.398.424.32 1.11-.112 1.5-2.412 2.17-5.32 6.855-5.153 9.055.215-.113 1.277-.516 2.801-.516 2.197 0 3.845 1.726 3.845 4.002A4.22 4.22 0 0 1 6.865 21Zm10.898 0c-2.59 0-4.865-2.119-4.865-5.963 0-4.5 3.143-9.725 6.518-12.422a.888.888 0 0 1 1.203.107c.398.424.32 1.11-.112 1.5-2.412 2.17-5.32 6.855-5.153 9.055.215-.113 1.277-.516 2.801-.516 2.197 0 3.845 1.726 3.845 4.002A4.22 4.22 0 0 1 17.763 21Z" fill="currentColor"></path></svg>`;
  var blockquote = createIconComponent({
    name: "Blockquote",
    svg: blockquoteSvg
  });

  const boldSvg = `<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 2.709C5 2.317 5.317 2 5.709 2h6.734a5.317 5.317 0 0 1 3.686 9.148 5.671 5.671 0 0 1-2.623 10.7H5.71a.709.709 0 0 1-.71-.707V2.71Zm2 7.798h5.443a3.19 3.19 0 0 0 3.19-3.19c0-1.762-1.428-3.317-3.19-3.317H7v6.507Zm0 2.126v7.09h6.507a3.544 3.544 0 0 0 0-7.09H7Z" fill="currentColor"></path></svg>`;
  var bold = createIconComponent({
    name: "Bold",
    svg: boldSvg
  });

  const bulletSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>`;
  var bullet = createIconComponent({
    name: "Bullet",
    svg: bulletSvg
  });

  const codeSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
</svg>`;
  var code = createIconComponent({
    name: "Code",
    svg: codeSvg
  });

  const emojiSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
</svg>`;
  var emoji = createIconComponent({
    name: "Emoji",
    svg: emojiSvg
  });

  const horizontalSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
</svg>`;
  var horizontal = createIconComponent({
    name: "Horizontal",
    svg: horizontalSvg
  });

  const imageSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>`;
  var image = createIconComponent({
    name: "Image",
    svg: imageSvg
  });

  const italicSvg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.825 5.077 11.19 18.923h4.052a1.038 1.038 0 1 1 0 2.077H4.954a1.038 1.038 0 1 1 0-2.077h4.053l3.636-13.846H8.591A1.038 1.038 0 1 1 8.59 3h10.287a1.038 1.038 0 0 1 0 2.077h-4.053Z" fill="currentColor"></path></svg>`;
  var italic = createIconComponent({
    name: "Italic",
    svg: italicSvg
  });

  const linkSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
</svg>`;
  var link = createIconComponent({
    name: "Link",
    svg: linkSvg
  });

  const orderedSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.242 5.992h12m-12 6.003H20.24m-12 5.999h12M4.117 7.495v-3.75H2.99m1.125 3.75H2.99m1.125 0H5.24m-1.92 2.577a1.125 1.125 0 1 1 1.591 1.59l-1.83 1.83h2.16M2.99 15.745h1.125a1.125 1.125 0 0 1 0 2.25H3.74m0-.002h.375a1.125 1.125 0 0 1 0 2.25H2.99" />
</svg>`;
  var ordered = createIconComponent({
    name: "Ordered",
    svg: orderedSvg
  });

  const redoSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3" />
</svg>`;
  var redo = createIconComponent({
    name: "Redo",
    svg: redoSvg
  });

  const strikeSvg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-icon="HorizontalLineOutlined"><path d="M5.49 7.226A5.107 5.107 0 0 1 6.9 3.831C8.017 2.636 9.718 2 11.819 2c2.142 0 3.779.57 4.867 1.689.4.392.869.958 1.26 1.595.443.723-.191 1.53-1.04 1.53-.606 0-1.039-.447-1.326-.981a2.864 2.864 0 0 0-.362-.517c-.735-.93-1.909-1.419-3.386-1.419-2.404 0-4.154 1.395-4.2 3.393-.02.846.337 1.58.995 2.043h-2.75c-.271-.621-.403-1.332-.385-2.107Zm8.906 6.024H4.038c-.518 0-.938-.38-.938-.897 0-.518.42-.978.938-.978h16.125c.518 0 .937.437.937.954 0 .518-.42.921-.937.921h-2.455c.542.806.96 1.954.934 3.055C18.563 19.82 15.87 22 11.572 22c-2.875 0-5.028-.964-6.13-2.745a6.884 6.884 0 0 1-.545-1.191c-.261-.72.318-1.432 1.084-1.432.574 0 1.034.416 1.24.952.17.445.4.794.733 1.142.805.858 2.104 1.305 3.766 1.305 2.845 0 4.696-1.39 4.747-3.61.024-1.072-.256-1.61-.897-2.42-.473-.598-1.174-.751-1.174-.751Z" fill="currentColor"></path></svg>`;
  var strike = createIconComponent({
    name: "Strike",
    svg: strikeSvg
  });

  const underlineSvg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-icon="UnderlineOutlined"><path d="M7.361 3.052a.99.99 0 0 0-.989-.994.998.998 0 0 0-.999.994v5.765c0 4.205 2.601 7.29 6.627 7.29s6.627-3.085 6.627-7.29V3.052a.996.996 0 0 0-.996-.994.992.992 0 0 0-.992.994v5.765c0 3.003-1.763 5.302-4.639 5.302-2.876 0-4.639-2.299-4.639-5.302V3.052ZM3.054 19.42a.988.988 0 0 0-.994.988 1 1 0 0 0 .994 1h17.892a1 1 0 0 0 .994-1.002.987.987 0 0 0-.994-.986H3.054Z" fill="currentColor"></path></svg>`;
  var underline = createIconComponent({
    name: "Underline",
    svg: underlineSvg
  });

  const undoSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
</svg>`;
  var undo = createIconComponent({
    name: "Undo",
    svg: undoSvg
  });

  const videoSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>`;
  var video = createIconComponent({
    name: "Video",
    svg: videoSvg
  });

  const sortSvg = `<svg t="1740203742959" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2598" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M96 256l832 0c19.2 0 32-12.8 32-32s-12.8-32-32-32L96 192C76.8 192 64 204.8 64 224S76.8 256 96 256z" p-id="2599"></path><path d="M928 480 96 480c-19.2 0-32 12.8-32 32s12.8 32 32 32l832 0c19.2 0 32-12.8 32-32S947.2 480 928 480z" p-id="2600"></path><path d="M928 768 96 768c-19.2 0-32 12.8-32 32s12.8 32 32 32l832 0c19.2 0 32-12.8 32-32S947.2 768 928 768z" p-id="2601"></path></svg>`;
  var sort = createIconComponent({
    name: "Sort",
    svg: sortSvg
  });

  const businessWechatSvg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" width="200" height="200" viewBox="0 0 200 200"><defs><clipPath id="master_svg0_2_28437"><rect x="0" y="0" width="200" height="200" rx="0"/></clipPath></defs><g clip-path="url(#master_svg0_2_28437)"><g><path d="M147.38309970092774,91.39165496826172C147.01609970092773,88.17925496826172,146.43709970092772,84.99455496826172,145.65009970092774,81.85835496826172C142.49609970092774,70.89245496826172,135.68909970092773,61.333754968261715,126.35809970092774,54.76665496826172C114.86489970092774,46.31216496826172,100.96799970092773,41.75675582826172,86.69999970092773,41.76667022706172C83.44999970092773,41.76667022706172,80.19999970092773,41.98333696826172,77.16669970092774,42.41667196826172C71.09169970092773,43.06667496826172,65.24999970092773,44.58333496826172,59.60829970092774,46.96667496826172C50.156599700927735,50.75828496826172,41.86219970092773,56.95825496826172,35.549999700927735,64.94995496826172C22.338839700927736,81.39395496826171,21.458609700927735,104.55055496826172,33.38332970092773,121.94995496826172C36.199999700927734,126.07495496826172,39.449999700927734,129.7583549682617,43.133299700927736,132.78335496826173C43.566699700927735,133.2250549682617,43.783299700927735,133.65835496826173,43.783299700927735,134.0916549682617C43.566699700927735,135.82505496826172,43.133299700927736,137.5583549682617,42.699999700927734,139.29165496826172C42.049999700927735,141.45835496826172,41.61669970092774,143.8416549682617,41.61669970092774,146.22465496826172C41.61669970092774,147.7416549682617,42.049999700927735,149.25865496826174,42.91669970092774,150.7746549682617C45.299999700927735,155.1086549682617,50.941699700927735,156.41665496826172,55.05829970092773,154.0246549682617C59.174999700927735,151.6496549682617,63.29169970092774,149.04165496826172,67.40829970092773,146.65865496826171C68.06259970092773,146.26865496826173,68.85639970092774,146.18865496826172,69.57499970092773,146.44165496826173C74.34999970092773,147.5246549682617,79.32499970092773,148.39165496826172,84.31669970092773,148.39165496826172C89.62219970092774,148.60565496826172,94.93389970092774,148.1686549682617,100.13329970092774,147.0916549682617C102.74169970092774,146.44165496826173,105.34169970092773,145.79165496826172,108.15829970092773,145.14165496826172L102.74169970092774,137.3416549682617L102.30829970092773,137.3416549682617C98.61669970092774,137.9916549682617,94.93329970092773,139.07505496826172,91.03329970092773,139.29165496826172C83.13589970092774,139.94385496826172,75.18679970092774,139.06095496826174,67.62499970092773,136.69165496826173C66.97889970092774,136.43865496826172,66.24979970092772,136.5196549682617,65.67499970092774,136.90835496826173C61.99169970092773,139.07495496826172,58.30829970092773,141.2416549682617,54.62499970092773,143.62465496826172C53.10829970092773,144.4916549682617,51.80829970092773,145.3586549682617,50.074999700927734,146.22465496826172C50.29169970092774,145.3586549682617,50.29169970092774,144.70865496826173,50.29169970092774,144.2746549682617C51.158299700927735,139.72495496826173,52.02499970092774,135.39165496826172,53.10829970092773,130.8416549682617C53.324999700927734,130.19165496826173,53.10829970092773,129.54165496826172,52.45829970092774,129.32495496826172C48.92749970092773,126.84695496826171,45.72179970092773,123.93535496826172,42.91669970092774,120.65835496826172C35.259099700927734,112.02405496826172,31.914419700927734,100.39125496826172,33.81666970092773,89.00835496826173C35.08929970092773,80.89685496826172,38.87889970092773,73.39045496826172,44.64999970092774,67.54995496826172C49.60229970092773,62.33665496826172,55.580599700927735,58.20555496826172,62.20829970092773,55.41665496826172C68.05629970092772,53.20285496826172,74.18509970092774,51.81725496826172,80.41669970092774,51.30000496826172C84.60489970092773,51.047314968261716,88.80629970092772,51.11975496826172,92.98329970092773,51.51667496826172C97.31669970092773,51.733334968261715,101.64999970092774,52.816654968261716,105.77499970092774,54.333354968261716C114.65829970092773,57.36665496826172,122.67499970092773,62.566654968261716,128.74209970092772,69.72505496826172C133.07509970092775,74.49165496826171,135.90009970092774,80.34165496826172,137.40809970092772,86.62505496826172C138.06709970092774,89.22505496826172,138.28309970092772,92.04165496826172,138.71709970092775,94.64165496826172L147.60009970092773,95.95005496826172C147.60009970092773,94.42505496826172,147.60009970092773,92.90835496826172,147.38309970092774,91.39165496826172Z" fill="#007AFF" fill-opacity="1"/></g><g><path d="M118.34166740234375,142.54163587646485C113.79452740234375,142.54163587646485,110.10833740234375,138.85543587646484,110.10833740234375,134.30833587646484C110.10833740234375,130.62503587646484,112.70833740234374,127.37499587646485,116.17500740234375,126.29167587646484C117.90833740234375,125.85833587646485,119.85833740234375,125.64166587646484,121.80833740234375,124.99166587646485C125.34393740234376,123.46588587646484,128.63053740234375,121.41808587646484,131.55833740234374,118.91667587646485C131.78333740234376,118.70000487646485,132.21663740234374,118.48333787646484,132.64163740234375,118.26666987646485C133.30003740234375,118.05000287646484,133.95003740234375,118.05000287646484,134.60003740234376,117.83333587646484C134.60003740234376,118.48333787646484,134.60003740234376,119.13333587646484,134.38333740234376,119.78333587646485C133.88163740234376,120.69838587646484,133.30173740234375,121.56829587646484,132.65003740234374,122.38333587646484C130.26663740234375,125.42499587646485,128.31663740234376,128.88333587646486,127.23333740234375,132.79163587646485C126.79163740234375,133.87493587646483,126.79163740234375,135.17503587646485,126.57503740234375,136.47503587646486C125.27503740234376,139.94163587646483,122.02503740234376,142.54163587646485,118.34166740234375,142.54163587646485Z" fill="#FCD514" fill-opacity="1"/></g><g><path d="M141.96669633789062,166.16665324707031C137.6332963378906,166.16665324707031,133.73332633789062,162.70005324707031,133.73332633789062,158.3666532470703C133.29998633789063,154.9000532470703,131.78332633789063,151.6500532470703,129.8333263378906,148.82499324707032C128.74999633789062,147.30833324707032,127.44165633789062,145.79165324707031,126.35832933789062,144.05833324707032C125.92499543789063,143.40834324707032,125.70832833789062,142.54167324707032,125.92499543789063,141.89166224707031C126.57499733789062,141.0249942470703,127.65832633789063,141.67500324707032,128.30833633789064,142.3249972470703C130.69999633789064,143.8416632470703,133.08332633789064,145.57499324707032,135.68333633789064,147.0916632470703C138.06669633789062,148.6083232470703,140.6666963378906,149.4749932470703,143.48329633789064,149.9083232470703C147.42129633789062,150.4122332470703,150.38209633789063,153.7467532470703,150.4166963378906,157.71665324707033C150.4166963378906,161.6166532470703,148.03329633789062,165.0833532470703,144.1332963378906,165.9499532470703C143.26669633789064,166.16665324707031,142.61669633789063,166.16665324707031,141.96669633789062,166.16665324707031Z" fill="#FF6702" fill-opacity="1"/></g><g><path d="M174.25836611328126,133.87499579589843C174.07026611328126,138.29796579589845,170.64866611328125,141.90456579589843,166.24166611328124,142.32496579589844C163.17416611328125,142.73626579589845,160.26416611328125,143.93016579589843,157.79167611328126,145.79166579589844C155.62499611328124,147.09166579589845,153.66667611328126,148.60836579589844,151.71667611328124,150.12496579589845C151.50001611328125,150.34166579589845,151.28333611328125,150.55836579589845,151.06667611328126,150.55836579589845C150.63334611328125,150.77496579589842,150.20001211328125,150.55836579589845,149.76667811328124,150.55836579589845C149.55001831328124,150.12496579589845,149.33334311328124,149.69166579589844,149.55001831328124,149.25836579589844C149.98335311328125,148.17496579589843,150.63334611328125,147.30836579589845,151.28335611328126,146.44166579589844C153.88336611328126,143.19166579589844,155.83335611328124,139.50836579589844,157.14169611328126,135.39164579589843C157.57502611328124,134.09164579589844,157.57502611328124,132.57498579589844,158.00836611328126,131.27497579589843C159.20800611328124,127.38719579589844,163.09356611328124,124.98185779589843,167.10836611328125,125.64164779589844C170.79166611328125,126.29164879589844,173.60836611328125,129.10830579589845,174.04166611328125,132.79164579589843C174.04166611328125,133.22497579589844,174.25836611328126,133.65830579589843,174.25836611328126,133.87499579589843Z" fill="#0087FA" fill-opacity="1"/></g><g><path d="M133.51666259765625,110.25000120849609C133.51666259765625,105.9166612084961,136.76666259765625,102.4499972084961,141.09999259765624,102.01666260849609C145.43336259765624,101.5833282084961,149.33336259765625,104.39999120849609,149.98336259765625,108.7333312084961C150.84996259765626,113.93330120849609,153.23336259765625,118.9167012084961,156.92496259765625,122.8167012084961C157.57496259765625,123.6917012084961,158.00836259765626,124.34170120849609,158.44166259765626,125.2083012084961C158.65826259765626,125.6417012084961,158.65826259765626,126.07500120849609,158.22496259765626,126.50830120849609C157.97546259765625,126.72170120849609,157.60786259765626,126.72170120849609,157.35836259765625,126.50830120849609C156.64016259765626,126.2806012084961,155.97456259765625,125.91230120849609,155.39996259765624,125.4250012084961C152.35106259765624,122.8702012084961,148.91316259765625,120.81930120849609,145.21666259765624,119.3500012084961C143.69996259765625,118.9167012084961,141.96666259765624,118.4833012084961,140.23332259765624,118.0500012084961C136.11665259765624,117.6167012084961,133.51666259765625,114.15000120849609,133.51666259765625,110.25000120849609Z" fill="#2AC402" fill-opacity="1"/></g></g></svg>
`;
  var businessWechat = createIconComponent({
    name: "BusinessWechat",
    svg: businessWechatSvg
  });

  const loadingSvg = `<svg t="1741942448095" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3545" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M512 960C265.6 960 64 758.4 64 512c0-19.2 12.8-32 32-32s32 12.8 32 32c0 211.2 172.8 384 384 384s384-172.8 384-384S723.2 128 512 128c-19.2 0-32-12.8-32-32s12.8-32 32-32c246.4 0 448 201.6 448 448s-201.6 448-448 448z" p-id="3546"></path></svg>
`;
  var loading = createIconComponent({
    name: "Loading",
    svg: loadingSvg
  });

  const videoPlayerSvg = `<svg t="1747703634008" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12536" width="200" height="200"><path d="M512 1024C229.2352 1024 0 794.7648 0 512S229.2352 0 512 0s512 229.2352 512 512-229.2352 512-512 512z m163.6864-501.4272a12.8 12.8 0 0 0 0-21.1456L429.6064 333.6448a12.8 12.8 0 0 0-20.0064 10.5728v335.5648a12.8 12.8 0 0 0 20.0064 10.5728l246.08-167.7824z" p-id="12537"></path></svg>`;
  var videoPlayer = createIconComponent({
    name: "VideoPlayer",
    svg: videoPlayerSvg
  });

  var IconsVue = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AudioFile: audio,
    ExcelFile: excel,
    ImageFile: imageFile,
    MarkdownFile: markdown,
    PdfFile: pdf,
    PptFile: ppt,
    VideoFile: videoFile,
    WordFile: word,
    ZipFile: zip,
    Wechat: wechat,
    QQ: qq,
    UnknownFile: unknown,
    TextFile: text,
    ExclamationFile: exclamation,
    AlignCenter: alignCenter,
    AlignJustify: alignJustify,
    AlignLeft: alignLeft,
    AlignRight: alignRight,
    Blockquote: blockquote,
    Bold: bold,
    Bullet: bullet,
    Code: code,
    Emoji: emoji,
    Horizontal: horizontal,
    Image: image,
    Italic: italic,
    Link: link,
    Ordered: ordered,
    Redo: redo,
    Strike: strike,
    Underline: underline,
    Undo: undo,
    Video: video,
    Sort: sort,
    BusinessWechat: businessWechat,
    Loading: loading,
    VideoPlayer: videoPlayer
  });

  const editorToolBarContextKey = Symbol("editorToolBarContextKey");
  const provideToolBarContext = (context) => {
    return vue.provide(editorToolBarContextKey, context);
  };
  const useToolBarContext = () => {
    return vue.inject(editorToolBarContextKey);
  };

  const __default__$g = vue.defineComponent({
    name: "EditorIcon",
    inheritAttrs: false
  });
  const _sfc_main$j = vue.defineComponent({
    ...__default__$g,
    props: {
      icon: {
        type: null
      },
      active: {
        type: Boolean,
        default: false
      },
      size: {
        type: [Number, String],
        default: 18
      }
    },
    setup(__props) {
      const ns = elementPlus.useNamespace("editor-icon");
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "div",
          {
            class: vue.normalizeClass([vue.unref(ns).b(), __props.active ? "active" : ""])
          },
          [
            vue.createVNode(vue.unref(elementPlus.ElIcon), vue.mergeProps({ size: __props.size }, _ctx.$attrs), {
              default: vue.withCtx(() => [
                (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(__props.icon)))
              ]),
              _: 1
            }, 16, ["size"])
          ],
          2
        );
      };
    }
  });
  var Icon = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__file", "icon.vue"]]);

  const __default__$f = vue.defineComponent({
    name: "EditorUpload"
  });
  const _sfc_main$i = vue.defineComponent({
    ...__default__$f,
    props: {
      triggerName: {
        type: String
      }
    },
    emits: ["change"],
    setup(__props, { emit: __emit }) {
      const emit = __emit;
      const upload = vue.ref();
      const handleExceed = (files) => {
        upload.value.clearFiles();
        const file = files[0];
        file.uid = elementPlus.genFileId();
        upload.value.handleStart(file);
      };
      const handleCahnge = (uploadFile) => {
        emit("change", uploadFile);
      };
      return (_ctx, _cache) => {
        const _component_el_upload = vue.resolveComponent("el-upload");
        return vue.openBlock(), vue.createBlock(
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
            trigger: vue.withCtx(() => [
              vue.createElementVNode(
                "span",
                null,
                vue.toDisplayString(__props.triggerName),
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
  var UploadVideo = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__file", "index.vue"]]);

  const _sfc_main$h = vue.defineComponent({
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
  var OnlineImage = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__file", "online.vue"]]);

  const __default__$e = vue.defineComponent({
    name: "EditorImage",
    inheritAttrs: false
  });
  const _sfc_main$g = vue.defineComponent({
    ...__default__$e,
    setup(__props) {
      const ns = elementPlus.useNamespace("editor-image");
      const { t } = elementPlus.useLocale();
      const { Image } = IconsVue;
      const toolBarContext = useToolBarContext();
      const getEditor = () => toolBarContext.value.editor;
      const getConfigure = () => {
        var _a, _b;
        return (_b = (_a = toolBarContext.value.configure) == null ? void 0 : _a.image) != null ? _b : { onChange: () => {
        } };
      };
      const setImage = (options) => {
        getEditor().chain().focus().setImage(options).run();
      };
      const handleOnlineImage = (options) => {
        setImage(options);
      };
      const handleUploadImage = (uploadFile) => {
        const imageConfig = getConfigure();
        imageConfig.onChange(uploadFile, (options) => {
          setImage(options);
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "span",
          {
            class: vue.normalizeClass([vue.unref(ns).b()])
          },
          [
            vue.createVNode(vue.unref(elementPlus.ElDropdown), { trigger: "click" }, {
              dropdown: vue.withCtx(() => [
                vue.createVNode(vue.unref(elementPlus.ElDropdownMenu), null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(vue.unref(elementPlus.ElDropdownItem), null, {
                      default: vue.withCtx(() => [
                        vue.createVNode(OnlineImage, { onChange: handleOnlineImage })
                      ]),
                      _: 1
                    }),
                    vue.createVNode(vue.unref(elementPlus.ElDropdownItem), null, {
                      default: vue.withCtx(() => [
                        vue.createVNode(UploadVideo, {
                          "trigger-name": vue.unref(t)("epx.editor.uploadPicture"),
                          onChange: handleUploadImage
                        }, null, 8, ["trigger-name"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              default: vue.withCtx(() => [
                vue.createVNode(Icon, {
                  icon: vue.unref(Image),
                  size: "20",
                  color: "#000000"
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ],
          2
        );
      };
    }
  });
  var Image$1 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__file", "index.vue"]]);

  const _sfc_main$f = vue.defineComponent({
    __name: "online",
    emits: ["change"],
    setup(__props, { emit: __emit }) {
      const emit = __emit;
      const { t } = elementPlus.useLocale();
      const visible = vue.ref(false);
      const ruleFormRef = vue.ref();
      const ruleForm = vue.reactive({
        src: "",
        width: 320
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
            }, vue.toDisplayString(vue.unref(t)("epx.editor.onlineVideo")), 9, ["onClick"]),
            vue.createVNode(vue.unref(elementPlus.ElDialog), {
              modelValue: visible.value,
              "onUpdate:modelValue": ($event) => visible.value = $event,
              width: "400",
              "append-to-body": "",
              draggable: "",
              modal: false,
              title: vue.unref(t)("epx.editor.onlineVideo")
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
                      label: vue.unref(t)("epx.editor.videoAddress"),
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
                      label: vue.unref(t)("epx.editor.videoWidth"),
                      prop: "width"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(vue.unref(elementPlus.ElInputNumber), {
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
  var OnlineVideo = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__file", "online.vue"]]);

  const __default__$d = vue.defineComponent({
    name: "EditorVideo",
    inheritAttrs: false
  });
  const _sfc_main$e = vue.defineComponent({
    ...__default__$d,
    setup(__props) {
      const ns = elementPlus.useNamespace("editor-video");
      const { t } = elementPlus.useLocale();
      const { Video } = IconsVue;
      const toolBarContext = useToolBarContext();
      const getEditor = () => toolBarContext.value.editor;
      const getConfigure = () => {
        var _a, _b;
        return (_b = (_a = toolBarContext.value.configure) == null ? void 0 : _a.video) != null ? _b : { onChange: () => {
        } };
      };
      const setVideo = (options) => {
        let attrs = "";
        Object.entries(options).forEach(([key, value]) => {
          attrs += `${key}="${value}" `;
        });
        const html = `<video ${attrs}></video>`;
        getEditor().chain().insertContent(html, {}).focus().run();
      };
      const handleOnlineVideo = (options) => {
        setVideo(options);
      };
      const handleUploadVideo = (uploadFile) => {
        const videoConfig = getConfigure();
        videoConfig.onChange(uploadFile, (options) => {
          setVideo(options);
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "span",
          {
            class: vue.normalizeClass([vue.unref(ns).b()])
          },
          [
            vue.createVNode(vue.unref(elementPlus.ElDropdown), { trigger: "click" }, {
              dropdown: vue.withCtx(() => [
                vue.createVNode(vue.unref(elementPlus.ElDropdownMenu), null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(vue.unref(elementPlus.ElDropdownItem), null, {
                      default: vue.withCtx(() => [
                        vue.createVNode(OnlineVideo, { onChange: handleOnlineVideo })
                      ]),
                      _: 1
                    }),
                    vue.createVNode(vue.unref(elementPlus.ElDropdownItem), null, {
                      default: vue.withCtx(() => [
                        vue.createVNode(UploadVideo, {
                          "trigger-name": vue.unref(t)("epx.editor.uploadVideo"),
                          onChange: handleUploadVideo
                        }, null, 8, ["trigger-name"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              default: vue.withCtx(() => [
                vue.createVNode(Icon, {
                  icon: vue.unref(Video),
                  size: "21",
                  color: "#000000"
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ],
          2
        );
      };
    }
  });
  var Video$1 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__file", "index.vue"]]);

  const _sfc_main$d = vue.defineComponent({
    __name: "index",
    setup(__props) {
      const { Link } = IconsVue;
      const { t } = elementPlus.useLocale();
      const visible = vue.ref(false);
      const toolBarContext = useToolBarContext();
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
            vue.createVNode(Icon, {
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
  var Link = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__file", "index.vue"]]);

  const __default__$c = vue.defineComponent({
    name: "ElEditorToolbar",
    inheritAttrs: false
  });
  const _sfc_main$c = vue.defineComponent({
    ...__default__$c,
    props: {
      editor: {
        type: index$1.definePropType(Object),
        required: true
      },
      toolbarList: {
        type: index$1.definePropType(Array),
        default: () => [
          "bold",
          "strike",
          "italic",
          "underline",
          "link",
          "ordered",
          "bullet",
          "blockquote",
          "code",
          "horizontal",
          "alignLeft",
          "alignRight",
          "alignCenter",
          "alignJustify",
          "emoji",
          "image",
          "video",
          "undo",
          "redo"
        ]
      },
      configure: {
        type: index$1.definePropType(Object),
        default: () => ({})
      }
    },
    setup(__props) {
      const {
        Bold,
        Italic,
        Bullet,
        Ordered,
        Blockquote,
        Code,
        Strike,
        Undo,
        Redo,
        Emoji,
        Underline,
        Horizontal,
        AlignLeft,
        AlignRight,
        AlignCenter,
        AlignJustify,
        Image: ImageIcon
      } = IconsVue;
      const ns = elementPlus.useNamespace("editor-toolbar");
      const props = __props;
      const toolBarContext = vue.computed(() => {
        return {
          editor: props.editor,
          configure: props.configure
        };
      });
      provideToolBarContext(toolBarContext);
      const getEditor = () => {
        return props.editor;
      };
      const commands = {
        bold: {
          type: "bold",
          icon: Bold,
          command: () => getEditor().chain().focus().toggleBold().run(),
          isActive: () => getEditor().isActive("bold"),
          size: 18
        },
        italic: {
          type: "italic",
          icon: Italic,
          command: () => getEditor().chain().focus().toggleItalic().run(),
          isActive: () => getEditor().isActive("italic"),
          size: 18
        },
        bullet: {
          type: "bulletList",
          icon: Bullet,
          command: () => getEditor().chain().focus().toggleBulletList().run(),
          isActive: () => getEditor().isActive("bulletList"),
          size: 21
        },
        ordered: {
          type: "orderedList",
          icon: Ordered,
          command: () => getEditor().chain().focus().toggleOrderedList().run(),
          isActive: () => getEditor().isActive("orderedList"),
          size: 21
        },
        blockquote: {
          type: "blockquote",
          icon: Blockquote,
          command: () => getEditor().chain().focus().toggleBlockquote().run(),
          isActive: () => getEditor().isActive("blockquote"),
          size: 18
        },
        code: {
          type: "codeBlock",
          icon: Code,
          command: () => getEditor().chain().focus().toggleCodeBlock().run(),
          isActive: () => getEditor().isActive("codeBlock"),
          size: 21
        },
        strike: {
          type: "strike",
          icon: Strike,
          command: () => getEditor().chain().focus().toggleStrike().run(),
          isActive: () => getEditor().isActive("strike"),
          size: 18
        },
        undo: {
          type: "undo",
          icon: Undo,
          command: () => getEditor().chain().focus().undo().run(),
          isActive: () => false,
          size: 18
        },
        redo: {
          type: "redo",
          icon: Redo,
          command: () => getEditor().chain().focus().redo().run(),
          isActive: () => false,
          size: 18
        },
        emoji: {
          type: "emoji",
          icon: Emoji,
          command: () => getEditor().chain().focus().redo().run(),
          isActive: () => false,
          size: 21
        },
        underline: {
          type: "underline",
          icon: Underline,
          command: () => getEditor().chain().focus().toggleUnderline().run(),
          isActive: () => getEditor().isActive("underline"),
          size: 17
        },
        horizontal: {
          type: "horizontal",
          icon: Horizontal,
          command: () => getEditor().chain().focus().setHorizontalRule().run(),
          isActive: () => false,
          size: 21
        },
        alignLeft: {
          type: "alignLeft",
          icon: AlignLeft,
          command: () => {
            if (commands.alignLeft.isActive()) {
              getEditor().chain().focus().unsetTextAlign().run();
            } else {
              getEditor().chain().focus().setTextAlign("left").run();
            }
          },
          isActive: () => getEditor().isActive({ textAlign: "left" }),
          size: 21
        },
        alignRight: {
          type: "alignRight",
          icon: AlignRight,
          command: () => {
            if (commands.alignRight.isActive()) {
              getEditor().chain().focus().unsetTextAlign().run();
            } else {
              getEditor().chain().focus().setTextAlign("right").run();
            }
          },
          isActive: () => getEditor().isActive({ textAlign: "right" }),
          size: 21
        },
        alignCenter: {
          type: "alignCenter",
          icon: AlignCenter,
          command: () => {
            if (commands.alignCenter.isActive()) {
              getEditor().chain().focus().unsetTextAlign().run();
            } else {
              getEditor().chain().focus().setTextAlign("center").run();
            }
          },
          isActive: () => getEditor().isActive({ textAlign: "center" }),
          size: 21
        },
        alignJustify: {
          type: "alignJustify",
          icon: AlignJustify,
          command: () => {
            if (commands.alignJustify.isActive()) {
              getEditor().chain().focus().unsetTextAlign().run();
            } else {
              getEditor().chain().focus().setTextAlign("justify").run();
            }
          },
          isActive: () => getEditor().isActive({ textAlign: "justify" }),
          size: 21
        },
        image: {
          type: "image",
          icon: ImageIcon,
          command: () => getEditor().chain().focus().undo().run(),
          isActive: () => false,
          size: 21
        }
      };
      const handleClick = (key) => {
        const item = commands[key];
        item.command();
      };
      const isActive = (key) => {
        const item = commands[key];
        return item.isActive();
      };
      const getValueByKey = (key, prop) => {
        const item = commands[key];
        return index$1.isFunction(item[prop]) ? item[prop]() : item[prop];
      };
      const insertImage = (item) => {
        getEditor().chain().focus().setImage({
          src: item.image,
          alt: item.text
        }).run();
      };
      return (_ctx, _cache) => {
        return __props.editor ? (vue.openBlock(), vue.createElementBlock(
          "div",
          {
            key: 0,
            class: vue.normalizeClass(vue.unref(ns).b())
          },
          [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(__props.toolbarList, (key) => {
                return vue.openBlock(), vue.createElementBlock(
                  vue.Fragment,
                  { key },
                  [
                    key === "emoji" ? (vue.openBlock(), vue.createBlock(
                      vue.unref(ElEmoji),
                      {
                        key: 0,
                        onChange: insertImage
                      },
                      {
                        trigger: vue.withCtx(() => [
                          vue.createVNode(Icon, {
                            icon: getValueByKey(key, "icon"),
                            size: getValueByKey(key, "size")
                          }, null, 8, ["icon", "size"])
                        ]),
                        _: 2
                      },
                      1024
                    )) : key === "image" ? (vue.openBlock(), vue.createBlock(Image$1, { key: 1 })) : key === "video" ? (vue.openBlock(), vue.createBlock(Video$1, { key: 2 })) : key === "link" ? (vue.openBlock(), vue.createBlock(Link, { key: 3 })) : (vue.openBlock(), vue.createBlock(Icon, {
                      key: 4,
                      active: isActive(key),
                      icon: getValueByKey(key, "icon"),
                      size: getValueByKey(key, "size"),
                      onClick: ($event) => handleClick(key)
                    }, null, 8, ["active", "icon", "size", "onClick"]))
                  ],
                  64
                );
              }),
              128
            ))
          ],
          2
        )) : vue.createCommentVNode("v-if", true);
      };
    }
  });
  var EditorToolbar = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__file", "index.vue"]]);

  const ElEditor = index$1.withInstall(Editor);
  const ElEditorToolbar = index$1.withInstall(EditorToolbar);

  const ellipsisProps = index$1.buildProps({
    rows: {
      type: [Number, String]
    },
    condition: {
      type: index$1.definePropType([Function])
    }
  });
  const ellipsisEmits = {};

  const __default__$b = vue.defineComponent({
    name: "ElEllipsis"
  });
  const _sfc_main$b = vue.defineComponent({
    ...__default__$b,
    props: ellipsisProps,
    emits: ellipsisEmits,
    setup(__props) {
      var _a;
      const props = __props;
      const ns = elementPlus.useNamespace("ellipsis");
      const rootRef = vue.ref();
      const contentRef = vue.ref();
      const { overflow } = useOverflow$1(rootRef, {
        selectors: `.${ns.b("content")}`,
        condition: (_a = props.condition) != null ? _a : (contentWidth, containerWidth) => {
          return Number(props.rows) ? contentWidth >= containerWidth : contentWidth > containerWidth;
        }
      });
      const attrs = vue.useAttrs();
      const rootStyle = vue.computed(() => {
        var _a2;
        return (_a2 = attrs.style) != null ? _a2 : {};
      });
      const tooltipAttrs = vue.computed(() => {
        const pureAttrs = {
          ...attrs
        };
        delete pureAttrs.class;
        delete pureAttrs.style;
        return pureAttrs;
      });
      const getellipsisStyle = (rows) => {
        return {
          overflow: "hidden",
          display: "-webkit-box",
          "white-space": "normal",
          "text-overflow": "ellipsis",
          "-webkit-box-orient": "vertical",
          "-webkit-line-clamp": rows
        };
      };
      const contentStyle = vue.computed(() => {
        return Number(props.rows) ? getellipsisStyle(Number(props.rows)) : {};
      });
      return (_ctx, _cache) => {
        const _component_el_tooltip = vue.resolveComponent("el-tooltip");
        return vue.openBlock(), vue.createBlock(_component_el_tooltip, vue.mergeProps({
          disabled: !vue.unref(overflow),
          placement: "top",
          effect: "light"
        }, tooltipAttrs.value), {
          content: vue.withCtx(() => [
            vue.renderSlot(_ctx.$slots, "content", {}, () => [
              vue.renderSlot(_ctx.$slots, "default")
            ])
          ]),
          default: vue.withCtx(() => {
            var _a2;
            return [
              vue.createElementVNode(
                "div",
                {
                  ref_key: "rootRef",
                  ref: rootRef,
                  class: vue.normalizeClass([vue.unref(ns).b(), (_a2 = _ctx.$attrs) == null ? void 0 : _a2.class]),
                  style: vue.normalizeStyle(rootStyle.value)
                },
                [
                  vue.createElementVNode(
                    "div",
                    {
                      class: vue.normalizeClass([vue.unref(ns).b("container")])
                    },
                    [
                      vue.createElementVNode(
                        "div",
                        {
                          ref_key: "contentRef",
                          ref: contentRef,
                          class: vue.normalizeClass([vue.unref(ns).b("content")]),
                          style: vue.normalizeStyle(contentStyle.value)
                        },
                        [
                          vue.renderSlot(_ctx.$slots, "default")
                        ],
                        6
                      )
                    ],
                    2
                  ),
                  vue.unref(overflow) ? (vue.openBlock(), vue.createElementBlock(
                    "div",
                    {
                      key: 0,
                      class: vue.normalizeClass(vue.unref(ns).b("action"))
                    },
                    [
                      vue.renderSlot(_ctx.$slots, "action")
                    ],
                    2
                  )) : vue.createCommentVNode("v-if", true)
                ],
                6
              )
            ];
          }),
          _: 3
        }, 16, ["disabled"]);
      };
    }
  });
  var Ellipsis = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__file", "ellipsis.vue"]]);

  const ElEllipsis = index$1.withInstall(Ellipsis);

  const ArrayBaseSymbol = Symbol("ArrayBaseContext");
  const ItemSymbol = Symbol("ItemContext");
  const sortHandleKls = ".array-base-sort-handle";

  const useArray = () => {
    return vue.inject(ArrayBaseSymbol, {});
  };
  const useIndex = (idx) => {
    return index$1.isUndefined(idx) ? vue.toRefs(vue.inject(ItemSymbol)).index : vue.ref(idx);
  };
  const useRecord = (item) => {
    return index$1.isUndefined(item) ? vue.toRefs(vue.inject(ItemSymbol)).record : vue.ref(item);
  };
  const useField = () => vue.inject(elementPlus.formItemContextKey, void 0);
  const useForm = () => vue.inject(elementPlus.formContextKey, void 0);
  const useKey = () => {
    let keyMap = [];
    vue.onBeforeUnmount(() => {
      keyMap = [];
    });
    return {
      keyMap,
      getKey: (index) => {
        if (!keyMap[index]) {
          keyMap[index] = uid();
        }
        return `${keyMap[index]}-${index}`;
      }
    };
  };

  const ArrayBase$2 = vue.defineComponent({
    name: "ArrayBase",
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      keyMap: {
        type: [Array]
      }
    },
    setup(props, { slots }) {
      const field = useField();
      const form = useForm();
      vue.provide(ArrayBaseSymbol, {
        field,
        form,
        keyMap: props.keyMap
      });
      return () => vue.renderSlot(slots, "default");
    }
  });

  const ArrayBaseItem = vue.defineComponent({
    name: "ArrayBaseItem",
    props: {
      index: {
        type: Number
      },
      record: {
        type: null
      }
    },
    setup(props, { slots }) {
      vue.provide(ItemSymbol, props);
      return () => vue.renderSlot(slots, "default");
    }
  });

  const ArrayBaseAddition = vue.defineComponent({
    name: "ArrayBaseAddition",
    inheritAttrs: false,
    props: {
      title: {
        type: String,
        default: ""
      },
      method: {
        type: String,
        default: "push"
      },
      defaultValue: {
        type: null,
        default: ""
      }
    },
    setup(props, { attrs, slots }) {
      const ns = elementPlus.useNamespace("array-base");
      const { field, form, keyMap } = useArray();
      return () => {
        if (!field)
          return null;
        return vue.h(
          elementPlus.ElButton,
          {
            class: `${ns.b("addition")}`,
            icon: plus_default,
            disabled: form == null ? void 0 : form.disabled,
            ...attrs,
            onClick: (evt) => {
              var _a;
              if (attrs.onClick) {
                return (_a = attrs.onClick) == null ? void 0 : _a.call(attrs, evt, { field, form, keyMap });
              }
              if (form == null ? void 0 : form.disabled)
                return;
              evt.stopPropagation();
              const defaultValue = props.defaultValue;
              if (props.method === "unshift") {
                field == null ? void 0 : field.fieldValue.unshift(defaultValue);
              } else {
                field == null ? void 0 : field.fieldValue.push(defaultValue);
              }
            }
          },
          {
            default: () => {
              var _a, _b;
              return [(_b = (_a = slots == null ? void 0 : slots.default) == null ? void 0 : _a.call(slots)) != null ? _b : props.title];
            }
          }
        );
      };
    }
  });

  const ArrayBaseRemove = vue.defineComponent({
    name: "ArrayBaseRemove",
    inheritAttrs: false,
    props: {
      title: {
        type: String,
        default: ""
      },
      index: {
        type: Number
      }
    },
    setup(props, { attrs, slots }) {
      const ns = elementPlus.useNamespace("array-base");
      const indexRef = useIndex(props.index);
      const { field, form, keyMap } = useArray();
      return () => {
        if (!field)
          return null;
        return vue.h(
          elementPlus.ElButton,
          {
            class: `${ns.b("remove")}`,
            link: true,
            size: "small",
            icon: delete_default,
            disabled: form == null ? void 0 : form.disabled,
            onClick: (evt) => {
              var _a;
              if (attrs.onClick) {
                return (_a = attrs.onClick) == null ? void 0 : _a.call(attrs, evt, { field, form, keyMap });
              }
              if (form == null ? void 0 : form.disabled)
                return;
              evt.stopPropagation();
              if (keyMap) {
                keyMap == null ? void 0 : keyMap.splice(indexRef.value, 1);
              }
              if (field) {
                field.fieldValue.splice(indexRef.value, 1);
              }
            },
            ...attrs
          },
          {
            default: () => {
              var _a, _b;
              return [(_b = (_a = slots == null ? void 0 : slots.default) == null ? void 0 : _a.call(slots)) != null ? _b : props.title];
            }
          }
        );
      };
    }
  });

  const ArrayBaseSortHandle = vue.defineComponent({
    name: "ArrayBaseSortHandle",
    inheritAttrs: false,
    setup(props, { attrs, slots }) {
      const { field, form } = useArray();
      return () => {
        if (!field)
          return null;
        return vue.h(
          elementPlus.ElButton,
          {
            size: "small",
            link: true,
            icon: rank_default,
            disabled: form == null ? void 0 : form.disabled,
            ...attrs,
            class: [(form == null ? void 0 : form.disabled) ? "" : sortHandleKls.slice(1)].concat(
              attrs.class
            )
          },
          {
            default: () => {
              var _a;
              return [(_a = slots == null ? void 0 : slots.default) == null ? void 0 : _a.call(slots)];
            }
          }
        );
      };
    }
  });

  const ArrayBaseMoveDown = vue.defineComponent({
    name: "ArrayBaseMoveDown",
    props: {
      title: {
        type: String,
        default: ""
      },
      index: {
        type: Number
      }
    },
    setup(props, { attrs, slots }) {
      const ns = elementPlus.useNamespace("array-base");
      const indexRef = useIndex(props.index);
      const { field, form, keyMap } = useArray();
      return () => {
        if (!field)
          return null;
        return vue.h(
          elementPlus.ElButton,
          {
            class: `${ns.b("move-down")}`,
            size: "small",
            link: true,
            icon: arrow_down_default,
            disabled: form == null ? void 0 : form.disabled,
            onClick: (evt) => {
              var _a;
              if (attrs.onClick) {
                return (_a = attrs.onClick) == null ? void 0 : _a.call(attrs, evt, { field, form, keyMap });
              }
              if (form == null ? void 0 : form.disabled)
                return;
              evt.stopPropagation();
              const curIndex = indexRef.value;
              if (Array.isArray(keyMap)) {
                let nextIndex = indexRef.value + 1;
                const length = keyMap.length;
                nextIndex = nextIndex >= length ? 0 : nextIndex;
                keyMap.splice(nextIndex, 0, keyMap.splice(curIndex, 1)[0]);
              }
              if (Array.isArray(field.fieldValue)) {
                let nextIndex = indexRef.value + 1;
                const length = field.fieldValue.length;
                nextIndex = nextIndex >= length ? 0 : nextIndex;
                field.fieldValue.splice(
                  nextIndex,
                  0,
                  field.fieldValue.splice(curIndex, 1)[0]
                );
              }
            },
            ...attrs
          },
          {
            default: () => {
              var _a, _b;
              return [(_b = (_a = slots == null ? void 0 : slots.default) == null ? void 0 : _a.call(slots)) != null ? _b : props.title];
            }
          }
        );
      };
    }
  });

  const ArrayBaseMoveUp = vue.defineComponent({
    name: "ArrayBaseMoveUp",
    props: {
      title: {
        type: String,
        default: ""
      },
      index: {
        type: Number
      }
    },
    setup(props, { attrs, slots }) {
      const ns = elementPlus.useNamespace("array-base");
      const indexRef = useIndex(props.index);
      const { field, form, keyMap } = useArray();
      return () => {
        if (!field)
          return null;
        return vue.h(
          elementPlus.ElButton,
          {
            class: `${ns.b("move-up")}`,
            size: "small",
            link: true,
            icon: arrow_up_default,
            disabled: form == null ? void 0 : form.disabled,
            onClick: (evt) => {
              var _a;
              if (attrs.onClick) {
                return (_a = attrs.onClick) == null ? void 0 : _a.call(attrs, evt, { field, form, keyMap });
              }
              if (form == null ? void 0 : form.disabled)
                return;
              evt.stopPropagation();
              const curIndex = indexRef.value;
              if (Array.isArray(keyMap)) {
                const length = keyMap.length - 1;
                let preIndex = indexRef.value - 1;
                preIndex = preIndex < 0 ? length : preIndex;
                keyMap.splice(preIndex, 0, keyMap.splice(curIndex, 1)[0]);
              }
              if (Array.isArray(field.fieldValue)) {
                const length = field.fieldValue.length - 1;
                let preIndex = indexRef.value - 1;
                preIndex = preIndex < 0 ? length : preIndex;
                field.fieldValue.splice(
                  preIndex,
                  0,
                  field.fieldValue.splice(curIndex, 1)[0]
                );
              }
            },
            ...attrs
          },
          {
            default: () => {
              var _a, _b;
              return [(_b = (_a = slots == null ? void 0 : slots.default) == null ? void 0 : _a.call(slots)) != null ? _b : props.title];
            }
          }
        );
      };
    }
  });

  const ArrayBaseIndex = vue.defineComponent({
    name: "ArrayBaseIndex",
    props: {
      index: {
        type: Number
      },
      formatter: {
        type: Function
      }
    },
    setup(props, { attrs, slots }) {
      var _a;
      const ns = elementPlus.useNamespace("array-base");
      const index = useIndex(props.index);
      const formatter = (_a = props.formatter) != null ? _a : (index2) => `#${index2 + 1}.`;
      return () => {
        return vue.h(
          "span",
          {
            class: ns.b("index"),
            ...attrs
          },
          {
            default: () => {
              var _a2, _b;
              return (_b = (_a2 = slots == null ? void 0 : slots.default) == null ? void 0 : _a2.call(slots)) != null ? _b : formatter(index.value);
            }
          }
        );
      };
    }
  });

  var ArrayBase$1 = composeExport$1(ArrayBase$2, {
    useKey,
    useArray,
    useIndex,
    useRecord,
    ItemSymbol,
    ArrayBaseSymbol,
    Item: ArrayBaseItem,
    Addition: ArrayBaseAddition,
    Remove: ArrayBaseRemove,
    SortHandle: ArrayBaseSortHandle,
    MoveDown: ArrayBaseMoveDown,
    MoveUp: ArrayBaseMoveUp,
    Index: ArrayBaseIndex
  });

  const ElArrayBase = index$1.withInstall(ArrayBase$1);
  var ArrayBase = ElArrayBase;

  const ArrayItemsInner = vue.defineComponent({
    name: "ElArrayItems",
    setup(props, { slots }) {
      const ns = elementPlus.useNamespace("array-items");
      const prefixCls = ns.b();
      const field = useField();
      const { getKey, keyMap } = ArrayBase.useKey();
      const target = vue.ref();
      const dataSource = vue.computed(
        () => field ? index$1.isArray(field.fieldValue) ? field.fieldValue.slice() : [] : []
      );
      useSortable.useSortable(target, [], {
        animation: 200,
        handle: sortHandleKls,
        onUpdate: (e) => {
          const { oldIndex, newIndex } = e;
          if (field && index$1.isArray(field.fieldValue)) {
            useSortable.moveArrayElement(field.fieldValue, oldIndex, newIndex, e);
          }
          if (index$1.isArray(keyMap)) {
            keyMap.splice(newIndex, 0, keyMap.splice(oldIndex, 1)[0]);
          }
        }
      });
      return () => {
        const renderItems = () => {
          const renderItem = ({
            record,
            index
          }) => {
            const key = getKey(index);
            return vue.h(
              DIV_TAG,
              {
                key,
                class: [ns.b("list-item")]
              },
              vue.h(
                ArrayBase.Item,
                {
                  key,
                  index,
                  record
                },
                {
                  default: () => {
                    var _a;
                    return (_a = slots == null ? void 0 : slots.default) == null ? void 0 : _a.call(slots, {
                      $index: index,
                      $record: record,
                      field
                    });
                  }
                }
              )
            );
          };
          return vue.h(
            DIV_TAG,
            {
              ref: target,
              class: [ns.b("list")]
            },
            dataSource.value.map(
              (data, index) => renderItem({ record: data, index })
            )
          );
        };
        return vue.h(
          ArrayBase,
          {
            keyMap
          },
          {
            default: () => vue.h(
              DIV_TAG,
              {
                class: [prefixCls]
              },
              {
                default: () => {
                  var _a, _b, _c;
                  return [
                    (_a = slots == null ? void 0 : slots.prepend) == null ? void 0 : _a.call(slots, { field, keyMap, getKey }),
                    renderItems(),
                    (_b = slots == null ? void 0 : slots.addition) == null ? void 0 : _b.call(slots, { field, keyMap, getKey }),
                    (_c = slots == null ? void 0 : slots.append) == null ? void 0 : _c.call(slots, { field, keyMap, getKey })
                  ];
                }
              }
            )
          }
        );
      };
    }
  });
  var ArrayItems = composeExport$1(ArrayItemsInner, {
    Addition: ArrayBase.Addition,
    Remove: ArrayBase.Remove,
    SortHandle: ArrayBase.SortHandle,
    MoveDown: ArrayBase.MoveDown,
    MoveUp: ArrayBase.MoveUp,
    Index: ArrayBase.Index
  });

  const ElArrayItems = index$1.withInstall(ArrayItems);

  const StartIndexSymbol = Symbol("startIndex");
  const GetKeySymbol = Symbol("getKey");

  var ArrayTableInner = vue.defineComponent({
    name: "ElArrayTable",
    props: {
      pagination: {
        type: null
      }
    },
    setup(props, { attrs, slots }) {
      const ns = elementPlus.useNamespace("array-table");
      const field = useField();
      const { keyMap, getKey } = ArrayBase.useKey();
      const pagination = props.pagination;
      const hasPagination = vue.computed(() => index$1.isObject(pagination));
      const paginationProps = vue.computed(
        () => hasPagination.value ? pagination : {}
      );
      const dataSource = vue.computed(
        () => field ? Array.isArray(field.fieldValue) ? field.fieldValue.slice() : [] : []
      );
      const current = vue.ref(1);
      const total = vue.computed(() => {
        var _a;
        return ((_a = dataSource.value) == null ? void 0 : _a.length) || 0;
      });
      const pageSize = vue.computed(() => {
        var _a;
        return ((_a = paginationProps.value) == null ? void 0 : _a.pageSize) || 10;
      });
      const startIndex = vue.computed(() => (current.value - 1) * pageSize.value);
      const endIndex = vue.computed(() => startIndex.value + pageSize.value - 1);
      vue.provide(StartIndexSymbol, startIndex);
      vue.provide(GetKeySymbol, getKey);
      const data = vue.computed(
        () => {
          var _a;
          return (_a = dataSource.value) == null ? void 0 : _a.slice(startIndex.value, endIndex.value + 1);
        }
      );
      const handleCurrentChange = (currentPage) => {
        current.value = currentPage;
      };
      const handleSortData = (data2, { e }) => {
        if (field && Array.isArray(field.fieldValue)) {
          const { oldIndex, newIndex } = e;
          const newIdx = newIndex + startIndex.value;
          const oldIdx = oldIndex + startIndex.value;
          field.fieldValue.splice(
            newIdx,
            0,
            field.fieldValue.splice(oldIdx, 1)[0]
          );
        }
      };
      return () => {
        const renderPagination = () => {
          return [
            vue.h(
              elementPlus.ElPagination,
              {
                background: true,
                layout: "total, prev, pager, next",
                ...paginationProps.value,
                class: ns.b("pagination"),
                currentPage: current.value,
                pageSize: pageSize.value,
                total: total.value,
                onCurrentChange: handleCurrentChange
              },
              slots
            )
          ];
        };
        const paginationVNode = hasPagination.value ? renderPagination() : [];
        const renderTable = (data2) => {
          return vue.h(
            ArrayBase,
            {
              keyMap
            },
            {
              default: () => {
                var _a, _b;
                return [
                  (_a = slots == null ? void 0 : slots.prepend) == null ? void 0 : _a.call(slots, { field, keyMap, getKey }),
                  vue.h(
                    ElDraggableTable,
                    {
                      ...attrs,
                      data: data2,
                      draggableProps: {
                        handle: sortHandleKls
                      },
                      onSortData: handleSortData
                    },
                    {
                      ...slots,
                      default: () => {
                        var _a2;
                        return [(_a2 = slots.default) == null ? void 0 : _a2.call(slots, { field, keyMap, getKey })];
                      }
                    }
                  ),
                  ...paginationVNode,
                  (_b = slots == null ? void 0 : slots.addition) == null ? void 0 : _b.call(slots, { field, keyMap, getKey })
                ];
              }
            }
          );
        };
        return vue.h(DIV_TAG, { class: ns.b() }, [renderTable(data.value)]);
      };
    }
  });

  var ArrayTableColumn = vue.defineComponent({
    name: "ElArrayTableColumn",
    setup(props, { attrs, slots }) {
      const startIndex = vue.inject(StartIndexSymbol, vue.ref(0));
      const getKey = vue.inject(GetKeySymbol, (index) => String(index));
      return () => {
        return vue.h(
          elementPlus.ElTableColumn,
          {
            ...attrs
          },
          {
            ...slots,
            default: ({ $index, column, row }) => {
              const realIndex = startIndex.value + $index;
              return vue.h(
                ArrayBase.Item,
                {
                  index: realIndex,
                  record: row,
                  key: getKey($index)
                },
                {
                  default: () => {
                    var _a;
                    return (_a = slots.default) == null ? void 0 : _a.call(slots, {
                      $index: realIndex,
                      $record: row,
                      index: $index,
                      column,
                      row
                    });
                  }
                }
              );
            }
          }
        );
      };
    }
  });

  const ArrayTable = composeExport$1(ArrayTableInner, {
    Column: ArrayTableColumn,
    Index: ArrayBase.Index,
    SortHandle: ArrayBase.SortHandle,
    Addition: ArrayBase.Addition,
    Remove: ArrayBase.Remove,
    MoveDown: ArrayBase.MoveDown,
    MoveUp: ArrayBase.MoveUp,
    useArray: ArrayBase.useArray,
    useIndex: ArrayBase.useIndex,
    useRecord: ArrayBase.useRecord
  });

  const ElArrayTable = index$1.withInstall(ArrayTable);
  const ElArrayTableColumn = index$1.withInstall(ArrayTableColumn);

  const BubbleContextKey = Symbol("BubbleContext");
  const globalBubbleContextApi = vue.shallowRef();
  const useBubbleContextProvider = (value) => {
    vue.provide(BubbleContextKey, value);
    vue.watch(
      value,
      () => {
        globalBubbleContextApi.value = vue.unref(value);
        vue.triggerRef(globalBubbleContextApi);
      },
      { immediate: true, deep: true }
    );
  };
  const useBubbleContextInject = () => {
    return vue.inject(
      BubbleContextKey,
      vue.computed(() => globalBubbleContextApi.value || {})
    );
  };
  const BubbleContextProvider = vue.defineComponent({
    props: {
      value: index$1.definePropType(Object)
    },
    setup(props, { slots }) {
      useBubbleContextProvider(vue.computed(() => props.value || {}));
      return () => {
        var _a;
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      };
    }
  });
  var BubbleContextProvider$1 = BubbleContextProvider;

  const useTypedEffect = (content, typingEnabled, typingStep, typingInterval) => {
    const [prevContent, setPrevContent] = useState("");
    const [typingIndex, setTypingIndex] = useState(1);
    const mergedTypingEnabled = vue.computed(
      () => typingEnabled.value && index$1.isString(content.value)
    );
    vue.watch(content, () => {
      const prevContentValue = vue.unref(prevContent);
      setPrevContent(content.value);
      if (!mergedTypingEnabled.value && index$1.isString(content.value)) {
        setTypingIndex(content.value.length);
      } else if (index$1.isString(content.value) && index$1.isString(prevContentValue) && content.value.indexOf(prevContentValue) !== 0) {
        setTypingIndex(1);
      }
    });
    vue.watch(
      [typingIndex, typingEnabled, content],
      (newValue, oldValue, onCleanup) => {
        if (mergedTypingEnabled.value && index$1.isString(content.value) && vue.unref(typingIndex) < content.value.length) {
          const id = setTimeout(() => {
            setTypingIndex(vue.unref(typingIndex) + typingStep.value);
          }, typingInterval.value);
          onCleanup(() => {
            clearTimeout(id);
          });
        }
      },
      { immediate: true }
    );
    const mergedTypingContent = vue.computed(() => {
      return mergedTypingEnabled.value && index$1.isString(content.value) ? content.value.slice(0, vue.unref(typingIndex)) : content.value;
    });
    return [
      mergedTypingContent,
      vue.computed(
        () => mergedTypingEnabled.value && index$1.isString(content.value) && vue.unref(typingIndex) < content.value.length
      )
    ];
  };
  var useTypedEffect$1 = useTypedEffect;

  function useTypingConfig(props) {
    const typingEnabled = vue.computed(() => {
      const { typing } = props;
      return index$1.isBoolean(typing) && typing || index$1.isObject(typing);
    });
    const baseConfig = {
      step: 1,
      interval: 50,
      suffix: null
    };
    const config = vue.computed(() => ({
      ...baseConfig,
      ...typeof props.typing === "object" ? props.typing : {}
    }));
    return [
      typingEnabled,
      vue.computed(() => config.value.step),
      vue.computed(() => config.value.interval),
      vue.computed(() => config.value.suffix)
    ];
  }

  var Loading = vue.defineComponent({
    name: "ElBubbleLoading",
    inheritAttrs: false,
    setup(props, { attrs }) {
      const ns = elementPlus.useNamespace("bubble-dot");
      const itemKlass = ns.b("item");
      return () => {
        return vue.h(
          "span",
          { ...attrs, class: ns.b() },
          Array.from({ length: 3 }).map((_, index) => {
            return vue.h("i", {
              key: `item-${index + 1}`,
              class: itemKlass
            });
          })
        );
      };
    }
  });

  const bubbleProps = index$1.buildProps({
    avatar: {
      type: index$1.definePropType([
        Object,
        Boolean
      ])
    },
    placement: {
      type: index$1.definePropType(String),
      default: "start",
      values: ["start", "end"]
    },
    loading: {
      type: Boolean,
      default: false
    },
    typing: {
      type: index$1.definePropType([Boolean, Object])
    },
    messageRender: {
      type: index$1.definePropType(Function)
    },
    loadingRender: {
      type: index$1.definePropType(Function)
    },
    variant: {
      type: index$1.definePropType(
        String
      ),
      default: "filled",
      values: ["filled", "borderless", "outlined", "shadow"]
    },
    shape: {
      type: index$1.definePropType(String),
      values: ["round", "corner", "arrow"]
    },
    onTypingComplete: {
      type: index$1.definePropType(Function)
    },
    header: {
      type: index$1.definePropType([Object, String])
    },
    content: {
      type: index$1.definePropType([Object, String])
    },
    footer: {
      type: index$1.definePropType([Object, String])
    },
    headerStyle: {
      type: index$1.definePropType([String, Object, Array])
    },
    headerClass: {
      type: String
    },
    contentStyle: {
      type: index$1.definePropType([String, Object, Array])
    },
    contentClass: {
      type: String
    },
    footerStyle: {
      type: index$1.definePropType([String, Object, Array])
    },
    footerClass: {
      type: String
    }
  });
  const bubbleEmits = {};

  var Bubble = vue.defineComponent({
    name: "ElBubble",
    props: bubbleProps,
    setup(props, { attrs, slots, expose }) {
      const ns = elementPlus.useNamespace("bubble");
      const prefixCls = ns.b();
      const content = vue.computed(() => {
        var _a;
        return (_a = props.content) != null ? _a : "";
      });
      const { onUpdate } = vue.unref(useBubbleContextInject());
      const divRef = vue.ref();
      const [typingEnabled, typingStep, typingInterval, typingSuffix] = useTypingConfig(props);
      const [typedContent, isTyping] = useTypedEffect$1(
        content,
        typingEnabled,
        typingStep,
        typingInterval
      );
      const hasTypingClass = vue.computed(
        () => isTyping.value && !props.loading && !props.messageRender && !typingSuffix.value
      );
      const triggerTypingCompleteRef = vue.ref(false);
      vue.watchEffect(() => {
        var _a;
        if (!isTyping.value && !props.loading) {
          if (!triggerTypingCompleteRef.value) {
            triggerTypingCompleteRef.value = true;
            (_a = props.onTypingComplete) == null ? void 0 : _a.call(props);
          }
        } else {
          triggerTypingCompleteRef.value = false;
        }
      });
      vue.watch(typedContent, () => {
        onUpdate == null ? void 0 : onUpdate();
      });
      expose({
        nativeElement: divRef
      });
      return () => {
        const {
          avatar,
          messageRender,
          loading,
          loadingRender,
          variant,
          shape,
          header,
          footer,
          placement
        } = props;
        const renderAvatar = () => {
          return avatar || slots.avatar ? vue.h(
            DIV_TAG,
            {
              class: ns.b("avatar")
            },
            [
              slots.avatar ? slots.avatar() : vue.isVNode(avatar) ? avatar : vue.h(elementPlus.ElAvatar, {
                icon: user_filled_default,
                ...index$1.isBoolean(avatar) ? {} : avatar
              })
            ]
          ) : "";
        };
        const renderHeader = () => {
          var _a, _b;
          return (header || slots.header) && vue.h(
            DIV_TAG,
            {
              style: props.headerStyle,
              class: [`${prefixCls}-header`, props.headerClass]
            },
            (_b = (_a = slots.header) == null ? void 0 : _a.call(slots)) != null ? _b : header
          );
        };
        const renderContent = () => {
          const mergedContent = () => messageRender ? messageRender(typedContent.value) : typedContent.value;
          const contentNode = () => {
            var _a;
            if (loading || slots.loading) {
              return [
                slots.loading ? slots.loading() : loadingRender ? loadingRender() : vue.h(Loading)
              ];
            } else {
              const contentSlot = (_a = slots.default) != null ? _a : slots.content;
              return [
                contentSlot ? contentSlot() : mergedContent(),
                isTyping.value ? vue.toValue(typingSuffix) : ""
              ];
            }
          };
          return vue.h(
            DIV_TAG,
            {
              style: props.contentStyle,
              class: [
                `${prefixCls}-content`,
                `${prefixCls}-content-${variant}`,
                { [`${prefixCls}-content-${shape}`]: shape },
                props.contentClass
              ]
            },
            contentNode()
          );
        };
        const renderFooter = () => {
          var _a, _b;
          return (footer || slots.footer) && vue.h(
            DIV_TAG,
            {
              style: props.footerStyle,
              class: [`${prefixCls}-footer`, props.footerClass]
            },
            (_b = (_a = slots.footer) == null ? void 0 : _a.call(slots)) != null ? _b : footer
          );
        };
        const renderFullContent = () => {
          const contentVNode = renderContent();
          if (header || slots.header || footer || slots.footer) {
            return vue.h(
              DIV_TAG,
              {
                class: ns.b("content-wrapper")
              },
              [renderHeader(), contentVNode, renderFooter()]
            );
          }
          return contentVNode;
        };
        return vue.h(
          DIV_TAG,
          {
            ...attrs,
            ref: divRef,
            class: [
              prefixCls,
              ns.b(placement),
              hasTypingClass.value ? [ns.b("typing")] : ""
            ].concat(attrs.class)
          },
          [renderAvatar(), renderFullContent()]
        );
      };
    }
  });

  function useListData(items, roles) {
    const getRoleBubbleProps = (bubble) => {
      if (typeof roles === "function") {
        return roles(bubble);
      }
      if (roles) {
        return roles[bubble.role] || {};
      }
      return {};
    };
    const listData = vue.computed(
      () => (items.value || []).map((bubbleData, i) => {
        var _a;
        const mergedKey = (_a = bubbleData.key) != null ? _a : `preset_${i}`;
        return {
          ...getRoleBubbleProps(bubbleData),
          ...bubbleData,
          key: mergedKey
        };
      })
    );
    return listData;
  }

  function useDisplayData(items, displayListLastItemTypingComplete) {
    const [displayCount, setDisplayCount] = useState(items.value.length);
    const displayList = vue.computed(() => {
      return items.value.slice(0, vue.unref(displayCount));
    });
    const displayListLastKey = vue.computed(() => {
      const lastItem = vue.unref(displayList)[vue.unref(displayList).length - 1];
      return lastItem ? lastItem.key : null;
    });
    vue.watch(
      items,
      () => {
        var _a;
        if (vue.unref(displayList).length && vue.unref(displayList).every(
          (item, index) => {
            var _a2;
            return item.key === ((_a2 = items.value[index]) == null ? void 0 : _a2.key);
          }
        )) {
          return;
        }
        if (vue.unref(displayList).length === 0) {
          setDisplayCount(1);
        } else {
          for (let i = 0; i < vue.unref(displayList).length; i += 1) {
            if (vue.unref(displayList)[i].key !== ((_a = items.value[i]) == null ? void 0 : _a.key)) {
              setDisplayCount(i);
              break;
            }
          }
        }
      },
      { immediate: true, deep: true }
    );
    const onTypingComplete = useEventCallback((key) => {
      if (key === vue.unref(displayListLastKey)) {
        setDisplayCount(vue.unref(displayCount) + 1);
        displayListLastItemTypingComplete == null ? void 0 : displayListLastItemTypingComplete(key);
      }
    });
    return [displayList, onTypingComplete];
  }

  const bubbleListProps = index$1.buildProps({
    autoScroll: {
      type: Boolean,
      default: true
    },
    items: {
      type: index$1.definePropType(Array),
      default: () => []
    },
    roles: {
      type: index$1.definePropType([Object, Function])
    },
    onLastBubbleTypingComplete: {
      type: index$1.definePropType(Function)
    }
  });
  const bubbleListEmits = {};

  var BubbleList = vue.defineComponent({
    name: "ElBubbleList",
    props: bubbleListProps,
    setup(props, { attrs, slots, expose }) {
      const ns = elementPlus.useNamespace("bubble-list");
      const listPrefixCls = ns.b();
      const TOLERANCE = 1;
      const listRef = vue.ref();
      const bubbleRefs = vue.ref({});
      const items = vue.computed(() => props.items);
      const mergedData = useListData(items, props.roles);
      const [displayData, onTypingComplete] = useDisplayData(
        mergedData,
        (key) => {
          var _a;
          (_a = props.onLastBubbleTypingComplete) == null ? void 0 : _a.call(props, key);
        }
      );
      const [scrollReachEnd, setScrollReachEnd] = useState(true);
      const [updateCount, setUpdateCount] = useState(0);
      const onInternalScroll = (e) => {
        const target = e.target;
        setScrollReachEnd(
          target.scrollHeight - Math.abs(target.scrollTop) - target.clientHeight <= TOLERANCE
        );
      };
      vue.watch(updateCount, () => {
        var _a, _b;
        if (props.autoScroll && vue.unref(listRef) && vue.unref(scrollReachEnd)) {
          (_b = vue.unref(listRef)) == null ? void 0 : _b.scrollTo({
            top: (_a = vue.unref(listRef)) == null ? void 0 : _a.scrollHeight
          });
        }
      });
      vue.watch(
        () => vue.unref(displayData).length,
        () => {
          var _a;
          if (props.autoScroll) {
            const lastItemKey = (_a = vue.unref(displayData)[vue.unref(displayData).length - 2]) == null ? void 0 : _a.key;
            const bubbleInst = vue.unref(bubbleRefs)[lastItemKey];
            if (bubbleInst && bubbleInst.nativeElement) {
              const { top, bottom } = bubbleInst.nativeElement.getBoundingClientRect();
              const { top: listTop, bottom: listBottom } = vue.unref(listRef).getBoundingClientRect();
              const isVisible = top < listBottom && bottom > listTop;
              if (isVisible) {
                setUpdateCount(vue.unref(updateCount) + 1);
                setScrollReachEnd(true);
              }
            }
          }
        }
      );
      const onBubbleUpdate = useEventCallback(() => {
        if (props.autoScroll) {
          setUpdateCount(vue.unref(updateCount) + 1);
        }
      });
      const context = vue.computed(() => ({
        onUpdate: onBubbleUpdate
      }));
      expose({
        nativeElement: listRef,
        scrollTo: ({
          key,
          offset,
          behavior = "smooth",
          block
        }) => {
          if (typeof offset === "number") {
            vue.unref(listRef).scrollTo({
              top: offset,
              behavior
            });
          } else if (key !== void 0) {
            const bubbleInst = vue.unref(bubbleRefs)[key];
            if (bubbleInst) {
              const index = vue.unref(displayData).findIndex(
                (dataItem) => dataItem.key === key
              );
              setScrollReachEnd(index === vue.unref(displayData).length - 1);
              bubbleInst.nativeElement.scrollIntoView({
                behavior,
                block
              });
            }
          }
        }
      });
      return () => {
        return vue.h(
          BubbleContextProvider$1,
          {
            value: context.value
          },
          {
            default: () => {
              return vue.h(
                DIV_TAG,
                {
                  ...attrs,
                  class: [
                    ns.b(),
                    scrollReachEnd.value ? `${listPrefixCls}-reach-end` : ""
                  ].concat(attrs.class),
                  ref: listRef,
                  onScroll: onInternalScroll
                },
                vue.unref(displayData).map(({ key, ...bubble }) => {
                  return vue.h(
                    Bubble,
                    {
                      ...bubble,
                      key,
                      ref: (node) => {
                        if (node) {
                          bubbleRefs.value[key] = node;
                        } else {
                          delete bubbleRefs.value[key];
                        }
                      },
                      onTypingComplete: () => {
                        var _a;
                        (_a = bubble.onTypingComplete) == null ? void 0 : _a.call(bubble);
                        onTypingComplete(key);
                      }
                    },
                    slots
                  );
                })
              );
            }
          }
        );
      };
    }
  });

  const ElBubble = index$1.withInstall(Bubble);
  const ElBubbleList = index$1.withInstall(BubbleList);

  const flexProps = index$1.buildProps({
    vertical: {
      type: Boolean,
      default: false
    },
    wrap: {
      type: index$1.definePropType(String)
    },
    justify: {
      type: index$1.definePropType(String)
    },
    align: {
      type: index$1.definePropType(String)
    },
    flex: {
      type: index$1.definePropType([Number, String])
    },
    gap: {
      type: index$1.definePropType([
        Number,
        String
      ])
    },
    component: {
      type: null
    }
  });
  const flexEmits = {};

  const classNames = (...args) => {
    const classes = [];
    for (const value of args) {
      if (!value)
        continue;
      if (index$1.isString(value)) {
        classes.push(value);
      } else if (index$1.isArray(value)) {
        for (const element of value) {
          const inner = classNames(element);
          if (inner) {
            classes.push(inner);
          }
        }
      } else if (index$1.isObject(value)) {
        for (const name in value) {
          if (value[name]) {
            classes.push(name);
          }
        }
      }
    }
    return classes.join(" ");
  };
  const flexWrapValues = ["wrap", "nowrap", "wrap-reverse"];
  const justifyContentValues = [
    "flex-start",
    "flex-end",
    "start",
    "end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
    "stretch",
    "normal",
    "left",
    "right"
  ];
  const alignItemsValues = [
    "center",
    "start",
    "end",
    "flex-start",
    "flex-end",
    "self-start",
    "self-end",
    "baseline",
    "normal",
    "stretch"
  ];
  const genClsWrap = (prefixCls, props) => {
    const wrapCls = {};
    flexWrapValues.forEach((cssKey) => {
      wrapCls[`${prefixCls}-wrap-${cssKey}`] = props.wrap === cssKey;
    });
    return wrapCls;
  };
  const genClsAlign = (prefixCls, props) => {
    const alignCls = {};
    alignItemsValues.forEach((cssKey) => {
      alignCls[`${prefixCls}-align-${cssKey}`] = props.align === cssKey;
    });
    alignCls[`${prefixCls}-align-stretch`] = !props.align && !!props.vertical;
    return alignCls;
  };
  const genClsJustify = (prefixCls, props) => {
    const justifyCls = {};
    justifyContentValues.forEach((cssKey) => {
      justifyCls[`${prefixCls}-justify-${cssKey}`] = props.justify === cssKey;
    });
    return justifyCls;
  };
  function createFlexClassNames(prefixCls, props) {
    return classNames({
      ...genClsWrap(prefixCls, props),
      ...genClsAlign(prefixCls, props),
      ...genClsJustify(prefixCls, props)
    });
  }
  function isPresetSize(size) {
    return ["small", "default", "large"].includes(size);
  }
  function omit(obj, fields) {
    const shallowCopy = Object.assign({}, obj);
    for (const key of fields) {
      delete shallowCopy[key];
    }
    return shallowCopy;
  }

  var Flex = vue.defineComponent({
    name: "ElFlex",
    inheritAttrs: false,
    props: flexProps,
    setup(props, { attrs, slots }) {
      const ns = elementPlus.useNamespace("flex");
      const prefixCls = ns.b();
      const mergedCls = vue.computed(() => [
        prefixCls,
        createFlexClassNames(prefixCls, props),
        {
          [`${prefixCls}-gap-${props.gap}`]: isPresetSize(props.gap),
          [`${prefixCls}-vertical`]: props.vertical
        }
      ]);
      return () => {
        const {
          flex,
          gap,
          component: Component = DIV_TAG,
          ...othersProps
        } = props;
        const mergedStyle = {};
        if (flex) {
          mergedStyle.flex = flex;
        }
        if (gap && !isPresetSize(gap)) {
          mergedStyle.gap = `${gap}px`;
        }
        return vue.h(
          Component,
          {
            class: [attrs.class, mergedCls.value],
            style: [attrs.style, mergedStyle],
            ...omit(othersProps, ["justify", "wrap", "align", "vertical"])
          },
          {
            default: () => {
              var _a;
              return (_a = slots.default) == null ? void 0 : _a.call(slots);
            }
          }
        );
      };
    }
  });

  const ElFlex = index$1.withInstall(Flex);

  const submitProps = index$1.buildProps({
    onClick: {
      type: index$1.definePropType(Function)
    },
    onSubmit: {
      type: index$1.definePropType(Function)
    },
    onSubmitSuccess: {
      type: index$1.definePropType(Function)
    },
    onSubmitFailed: {
      type: index$1.definePropType(Function)
    }
  });
  const submitEmits = {};

  var Submit$1 = vue.defineComponent({
    name: "ElSubmit",
    inheritAttrs: false,
    props: submitProps,
    setup(props, { attrs, slots }) {
      const form = useForm$1();
      const validateField = form == null ? void 0 : form.validateField;
      const loading = vue.ref(false);
      return () => {
        const { onClick, onSubmit, onSubmitSuccess, onSubmitFailed } = props;
        return vue.h(
          elementPlus.ElButton,
          {
            nativeType: "button",
            type: "primary",
            loading: loading.value,
            ...attrs,
            onClick: (e) => {
              if (index$1.isFunction(onClick)) {
                if (onClick(e) === false)
                  return;
              }
              if (loading.value)
                return;
              if (onSubmit && validateField) {
                validateField(
                  void 0,
                  async (valid, fields) => {
                    var _a, _b;
                    try {
                      if (valid) {
                        loading.value = true;
                        await ((_b = onSubmit((_a = form.model) != null ? _a : {})) == null ? void 0 : _b.then(onSubmitSuccess));
                      } else {
                        throw fields;
                      }
                    } catch (e2) {
                      onSubmitFailed == null ? void 0 : onSubmitFailed(e2);
                    } finally {
                      loading.value = false;
                    }
                  }
                );
              }
            }
          },
          slots
        );
      };
    }
  });

  const ElSubmit = index$1.withInstall(Submit$1);

  const resetProps = index$1.buildProps({});
  const resetEmits = {};

  var Reset$1 = vue.defineComponent({
    name: "ElReset",
    inheritAttrs: false,
    props: resetProps,
    setup(props, { attrs, slots }) {
      const form = useForm$1();
      const resetFields = form == null ? void 0 : form.resetFields;
      return () => {
        return vue.h(
          elementPlus.ElButton,
          {
            nativeType: "button",
            ...attrs,
            onClick: (e) => {
              if (index$1.isFunction(attrs.onClick)) {
                if (attrs.onClick(e) === false)
                  return;
              }
              resetFields == null ? void 0 : resetFields();
            }
          },
          slots
        );
      };
    }
  });

  const ElReset = index$1.withInstall(Reset$1);

  const dialogV2Props = index$1.buildProps({
    title: {
      type: String
    },
    triggerProps: {
      type: index$1.definePropType(Object)
    },
    cancelProps: {
      type: index$1.definePropType(Object)
    },
    sureProps: {
      type: index$1.definePropType(Object)
    },
    onCancel: {
      type: index$1.definePropType(Function)
    },
    onSure: {
      type: index$1.definePropType(Function)
    }
  });
  const dialogV2Emits = {};

  const __default__$a = vue.defineComponent({
    name: "ElDialogV2",
    inheritAttrs: false
  });
  const _sfc_main$a = vue.defineComponent({
    ...__default__$a,
    props: dialogV2Props,
    setup(__props, { expose: __expose }) {
      const props = __props;
      const ns = elementPlus.useNamespace("dialog-v2");
      const { t } = elementPlus.useLocale();
      const visible = vue.ref(false);
      const loading = vue.ref(false);
      const hiddenCancel = vue.computed(() => {
        var _a, _b;
        return (_b = (_a = props.cancelProps) == null ? void 0 : _a.hidden) != null ? _b : false;
      });
      const hiddenSure = vue.computed(() => {
        var _a, _b;
        return (_b = (_a = props.sureProps) == null ? void 0 : _a.hidden) != null ? _b : false;
      });
      const close = () => visible.value = false;
      const open = () => visible.value = true;
      const handleCancel = () => {
        props.onCancel ? props.onCancel({ close }) : close();
      };
      const handleSure = async () => {
        if (!props.onSure) {
          return close();
        }
        try {
          loading.value = true;
          await props.onSure({ close });
        } catch (e) {
        } finally {
          loading.value = false;
        }
      };
      __expose({
        close,
        open
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode(
              "div",
              {
                class: vue.normalizeClass(vue.unref(ns).b("trigger")),
                onClick: open
              },
              [
                vue.renderSlot(_ctx.$slots, "trigger", {}, () => [
                  vue.createVNode(
                    vue.unref(elementPlus.ElButton),
                    vue.normalizeProps(vue.guardReactiveProps(_ctx.triggerProps)),
                    {
                      default: vue.withCtx(() => {
                        var _a;
                        return [
                          vue.createTextVNode(
                            vue.toDisplayString((_a = _ctx.triggerProps) == null ? void 0 : _a.triggerText),
                            1
                          )
                        ];
                      }),
                      _: 1
                    },
                    16
                  )
                ])
              ],
              2
            ),
            vue.createVNode(vue.unref(elementPlus.ElDialog), vue.mergeProps({
              modelValue: visible.value,
              "onUpdate:modelValue": ($event) => visible.value = $event,
              "append-to-body": "",
              "show-close": false,
              "modal-class": vue.unref(ns).b()
            }, _ctx.$attrs), {
              header: vue.withCtx((scoped) => [
                vue.renderSlot(_ctx.$slots, "header", vue.normalizeProps(vue.guardReactiveProps(scoped)), () => [
                  vue.createElementVNode(
                    "div",
                    {
                      class: vue.normalizeClass(vue.unref(ns).b("header"))
                    },
                    [
                      vue.createElementVNode(
                        "span",
                        { class: "title" },
                        vue.toDisplayString(_ctx.title),
                        1
                      ),
                      vue.createVNode(vue.unref(elementPlus.ElIcon), {
                        size: "16",
                        onClick: scoped.close
                      }, {
                        default: vue.withCtx(() => [
                          vue.createVNode(vue.unref(close_default))
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ],
                    2
                  )
                ])
              ]),
              default: vue.withCtx(() => [
                vue.createElementVNode(
                  "div",
                  {
                    class: vue.normalizeClass(vue.unref(ns).b("content"))
                  },
                  [
                    vue.renderSlot(_ctx.$slots, "default")
                  ],
                  2
                )
              ]),
              footer: vue.withCtx(() => [
                vue.renderSlot(_ctx.$slots, "footer", {}, () => [
                  vue.createElementVNode(
                    "div",
                    {
                      class: vue.normalizeClass(vue.unref(ns).b("footer"))
                    },
                    [
                      !hiddenCancel.value ? (vue.openBlock(), vue.createBlock(
                        vue.unref(elementPlus.ElButton),
                        vue.mergeProps({ key: 0 }, _ctx.cancelProps, { onClick: handleCancel }),
                        {
                          default: vue.withCtx(() => {
                            var _a, _b;
                            return [
                              vue.createTextVNode(
                                vue.toDisplayString((_b = (_a = _ctx.cancelProps) == null ? void 0 : _a.cancelText) != null ? _b : vue.unref(t)("epx.common.cancel")),
                                1
                              )
                            ];
                          }),
                          _: 1
                        },
                        16
                      )) : vue.createCommentVNode("v-if", true),
                      !hiddenSure.value ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElButton), vue.mergeProps({ key: 1 }, _ctx.sureProps, {
                        type: "primary",
                        loading: loading.value,
                        onClick: handleSure
                      }), {
                        default: vue.withCtx(() => {
                          var _a, _b;
                          return [
                            vue.createTextVNode(
                              vue.toDisplayString((_b = (_a = _ctx.sureProps) == null ? void 0 : _a.sureText) != null ? _b : vue.unref(t)("epx.common.sure")),
                              1
                            )
                          ];
                        }),
                        _: 1
                      }, 16, ["loading"])) : vue.createCommentVNode("v-if", true)
                    ],
                    2
                  )
                ])
              ]),
              _: 3
            }, 16, ["modelValue", "onUpdate:modelValue", "modal-class"])
          ],
          64
        );
      };
    }
  });
  var DialogV2 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__file", "dialog-v2.vue"]]);

  const ElDialogV2 = index$1.withInstall(DialogV2);

  const drawerV2Props = index$1.buildProps({
    title: {
      type: String
    },
    triggerProps: {
      type: index$1.definePropType(Object)
    },
    cancelProps: {
      type: index$1.definePropType(Object)
    },
    sureProps: {
      type: index$1.definePropType(Object)
    },
    onCancel: {
      type: index$1.definePropType(Function)
    },
    onSure: {
      type: index$1.definePropType(Function)
    }
  });
  const drawerV2Emits = {};

  const __default__$9 = vue.defineComponent({
    name: "ElDrawerV2",
    inheritAttrs: false
  });
  const _sfc_main$9 = vue.defineComponent({
    ...__default__$9,
    props: drawerV2Props,
    setup(__props, { expose: __expose }) {
      const props = __props;
      const ns = elementPlus.useNamespace("drawer-v2");
      const { t } = elementPlus.useLocale();
      const visible = vue.ref(false);
      const loading = vue.ref(false);
      const hiddenCancel = vue.computed(() => {
        var _a, _b;
        return (_b = (_a = props.cancelProps) == null ? void 0 : _a.hidden) != null ? _b : false;
      });
      const hiddenSure = vue.computed(() => {
        var _a, _b;
        return (_b = (_a = props.sureProps) == null ? void 0 : _a.hidden) != null ? _b : false;
      });
      const close = () => visible.value = false;
      const open = () => visible.value = true;
      const handleCancel = () => {
        props.onCancel ? props.onCancel({ close }) : close();
      };
      const handleSure = async () => {
        if (!props.onSure) {
          return close();
        }
        try {
          loading.value = true;
          await props.onSure({ close });
        } catch (e) {
        } finally {
          loading.value = false;
        }
      };
      __expose({
        close,
        open
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode(
              "div",
              {
                class: vue.normalizeClass(vue.unref(ns).b("trigger")),
                onClick: open
              },
              [
                vue.renderSlot(_ctx.$slots, "trigger", {}, () => [
                  vue.createVNode(
                    vue.unref(elementPlus.ElButton),
                    vue.normalizeProps(vue.guardReactiveProps(_ctx.triggerProps)),
                    {
                      default: vue.withCtx(() => {
                        var _a;
                        return [
                          vue.createTextVNode(
                            vue.toDisplayString((_a = _ctx.triggerProps) == null ? void 0 : _a.triggerText),
                            1
                          )
                        ];
                      }),
                      _: 1
                    },
                    16
                  )
                ])
              ],
              2
            ),
            vue.createVNode(vue.unref(elementPlus.ElDrawer), vue.mergeProps({
              modelValue: visible.value,
              "onUpdate:modelValue": ($event) => visible.value = $event,
              "append-to-body": "",
              "show-close": false,
              "modal-class": vue.unref(ns).b()
            }, _ctx.$attrs), {
              header: vue.withCtx((scoped) => [
                vue.renderSlot(_ctx.$slots, "header", vue.normalizeProps(vue.guardReactiveProps(scoped)), () => [
                  vue.createElementVNode(
                    "div",
                    {
                      class: vue.normalizeClass(vue.unref(ns).b("header"))
                    },
                    [
                      vue.createElementVNode(
                        "span",
                        { class: "title" },
                        vue.toDisplayString(_ctx.title),
                        1
                      ),
                      vue.createVNode(vue.unref(elementPlus.ElIcon), {
                        size: "16",
                        onClick: scoped.close
                      }, {
                        default: vue.withCtx(() => [
                          vue.createVNode(vue.unref(close_default))
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ],
                    2
                  )
                ])
              ]),
              default: vue.withCtx(() => [
                vue.createElementVNode(
                  "div",
                  {
                    class: vue.normalizeClass(vue.unref(ns).b("content"))
                  },
                  [
                    vue.renderSlot(_ctx.$slots, "default")
                  ],
                  2
                )
              ]),
              footer: vue.withCtx(() => [
                vue.renderSlot(_ctx.$slots, "footer", {}, () => [
                  vue.createElementVNode(
                    "div",
                    {
                      class: vue.normalizeClass(vue.unref(ns).b("footer"))
                    },
                    [
                      !hiddenCancel.value ? (vue.openBlock(), vue.createBlock(
                        vue.unref(elementPlus.ElButton),
                        vue.mergeProps({ key: 0 }, _ctx.cancelProps, { onClick: handleCancel }),
                        {
                          default: vue.withCtx(() => {
                            var _a, _b;
                            return [
                              vue.createTextVNode(
                                vue.toDisplayString((_b = (_a = _ctx.cancelProps) == null ? void 0 : _a.cancelText) != null ? _b : vue.unref(t)("epx.common.cancel")),
                                1
                              )
                            ];
                          }),
                          _: 1
                        },
                        16
                      )) : vue.createCommentVNode("v-if", true),
                      !hiddenSure.value ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElButton), vue.mergeProps({ key: 1 }, _ctx.sureProps, {
                        type: "primary",
                        loading: loading.value,
                        onClick: handleSure
                      }), {
                        default: vue.withCtx(() => {
                          var _a, _b;
                          return [
                            vue.createTextVNode(
                              vue.toDisplayString((_b = (_a = _ctx.sureProps) == null ? void 0 : _a.sureText) != null ? _b : vue.unref(t)("epx.common.sure")),
                              1
                            )
                          ];
                        }),
                        _: 1
                      }, 16, ["loading"])) : vue.createCommentVNode("v-if", true)
                    ],
                    2
                  )
                ])
              ]),
              _: 3
            }, 16, ["modelValue", "onUpdate:modelValue", "modal-class"])
          ],
          64
        );
      };
    }
  });
  var DrawerV2 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__file", "drawer-v2.vue"]]);

  const ElDrawerV2 = index$1.withInstall(DrawerV2);

  const loadMoreProps = index$1.buildProps({
    status: {
      type: index$1.definePropType(String),
      default: "more"
    },
    iconType: {
      type: index$1.definePropType(String),
      default: "snow",
      values: ["snow", "circle"]
    },
    color: {
      type: index$1.definePropType(String)
    },
    textColor: {
      type: index$1.definePropType(String)
    },
    iconSize: {
      type: index$1.definePropType([String, Number]),
      default: 16
    },
    moreText: {
      type: index$1.definePropType(String)
    },
    loadingText: {
      type: index$1.definePropType(String)
    },
    noMoreText: {
      type: index$1.definePropType(String)
    },
    errorText: {
      type: index$1.definePropType(String)
    },
    height: {
      type: index$1.definePropType([String, Number]),
      default: "36"
    }
  });
  const loadMoreEmits = {
    click: (status) => !!status
  };

  const __default__$8 = vue.defineComponent({
    name: "ElLoadMore"
  });
  const _sfc_main$8 = vue.defineComponent({
    ...__default__$8,
    props: loadMoreProps,
    emits: loadMoreEmits,
    setup(__props, { emit: __emit }) {
      const { Loading: CircleLoading } = IconsVue;
      const props = __props;
      const emit = __emit;
      const { t } = elementPlus.useLocale();
      const ns = elementPlus.useNamespace("load-more");
      const Loading = vue.computed(
        () => props.iconType === "circle" ? CircleLoading : loading_default
      );
      const loadingKlass = vue.computed(
        () => props.iconType === "circle" ? ns.m("circle-loading") : ns.m("snow-loading")
      );
      const isMore = vue.computed(() => props.status === "more");
      const isLoading = vue.computed(() => props.status === "loading");
      const isNoMore = vue.computed(() => props.status === "noMore");
      const isError = vue.computed(() => props.status === "error");
      const calcMoreText = vue.computed(
        () => {
          var _a;
          return (_a = props.moreText) != null ? _a : t("epx.loadMore.moreText");
        }
      );
      const calcLoadingText = vue.computed(
        () => {
          var _a;
          return (_a = props.loadingText) != null ? _a : t("epx.loadMore.loadingText");
        }
      );
      const calcNoMoreText = vue.computed(
        () => {
          var _a;
          return (_a = props.noMoreText) != null ? _a : t("epx.loadMore.noMoreText");
        }
      );
      const calcErrorText = vue.computed(
        () => {
          var _a;
          return (_a = props.errorText) != null ? _a : t("epx.loadMore.errorText");
        }
      );
      const text = vue.computed(() => {
        let text2 = "";
        if (isMore.value) {
          text2 = calcMoreText.value;
        }
        if (isLoading.value) {
          text2 = calcLoadingText.value;
        }
        if (isNoMore.value) {
          text2 = calcNoMoreText.value;
        }
        if (isError.value) {
          text2 = calcErrorText.value;
        }
        return text2;
      });
      const textStyle = vue.computed(() => {
        var _a;
        return {
          color: (_a = props.textColor) != null ? _a : props.color
        };
      });
      const rootStyle = vue.computed(() => {
        return {
          height: index$1.addUnit(props.height)
        };
      });
      const handleClick = () => {
        emit("click", props.status);
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "div",
          {
            class: vue.normalizeClass([vue.unref(ns).b(), _ctx.$attrs.class]),
            style: vue.normalizeStyle([rootStyle.value])
          },
          [
            isLoading.value ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElIcon), {
              key: 0,
              size: _ctx.iconSize,
              color: _ctx.color,
              class: vue.normalizeClass([vue.unref(ns).e("loading-icon"), loadingKlass.value])
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(vue.unref(Loading))
              ]),
              _: 1
            }, 8, ["size", "color", "class"])) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode(
              "span",
              {
                class: vue.normalizeClass([vue.unref(ns).e("text"), vue.unref(ns).m(_ctx.status)]),
                style: vue.normalizeStyle(textStyle.value),
                onClick: handleClick
              },
              vue.toDisplayString(text.value),
              7
            )
          ],
          6
        );
      };
    }
  });
  var LoadMore = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__file", "load-more.vue"]]);

  const ElLoadMore = index$1.withInstall(LoadMore);

  const useLoad = (props, options = {
    direction: "bottom"
  }) => {
    const {
      load,
      preLoad,
      finished,
      loadingText,
      errorText,
      noMoreText,
      infiniteScrollDistance
    } = props;
    const { t } = elementPlus.useLocale();
    const loading = vue.ref(false);
    const error = vue.ref(false);
    const isBottomDirection = options.direction === "bottom";
    const hasLoad = vue.computed(
      () => isBottomDirection ? load.value && index$1.isFunction(load.value) : preLoad.value && index$1.isFunction(preLoad.value)
    );
    const shouldRenderLoading = vue.computed(
      () => hasLoad.value && loading.value && !error.value && !finished.value
    );
    const shouldRenderError = vue.computed(
      () => hasLoad.value && error.value && !finished.value
    );
    const shouldRenderFinished = vue.computed(() => hasLoad.value && finished.value);
    const calcLoadingText = vue.computed(
      () => {
        var _a;
        return (_a = loadingText.value) != null ? _a : t("epx.loadMore.loadingText");
      }
    );
    const calcErrorText = vue.computed(
      () => {
        var _a;
        return (_a = errorText.value) != null ? _a : t("epx.loadMore.errorText");
      }
    );
    const calcFinishedText = vue.computed(
      () => {
        var _a;
        return (_a = noMoreText.value) != null ? _a : t("epx.loadMore.noMoreText");
      }
    );
    const status = vue.computed(() => {
      let status2 = "";
      if (shouldRenderLoading.value) {
        status2 = "loading";
      }
      if (shouldRenderFinished.value) {
        status2 = "noMore";
      }
      if (shouldRenderError.value) {
        status2 = "error";
      }
      return status2;
    });
    const handleLoad = async (shouldTrigger, options2) => {
      var _a, _b, _c, _d;
      if (shouldTrigger && hasLoad.value && !loading.value && !finished.value && !error.value) {
        try {
          loading.value = true;
          error.value = false;
          await ((_a = load.value) == null ? void 0 : _a.call(load));
          (_b = options2 == null ? void 0 : options2.successCallback) == null ? void 0 : _b.call(options2);
        } catch (e) {
          error.value = true;
          (_c = options2 == null ? void 0 : options2.errorCallback) == null ? void 0 : _c.call(options2);
        } finally {
          loading.value = false;
          (_d = options2 == null ? void 0 : options2.finallyCallback) == null ? void 0 : _d.call(options2);
        }
      }
    };
    const cache = {
      scrollHeight: 0
    };
    const recordCache = (target) => {
      var _a;
      cache.scrollHeight = (_a = target == null ? void 0 : target.scrollHeight) != null ? _a : 0;
    };
    const fixedScrollbarPosition = (target) => {
      vue.nextTick(() => {
        var _a;
        if (target) {
          const scrollHeight = (_a = target.scrollHeight) != null ? _a : 0;
          const oldScrollHeight = cache.scrollHeight;
          target.scrollTop = Math.max(scrollHeight - oldScrollHeight, 0);
        }
      });
    };
    const handlePreLoad = async (shouldTrigger, target) => {
      var _a;
      if (shouldTrigger && hasLoad.value && !loading.value && !finished.value && !error.value) {
        try {
          loading.value = true;
          error.value = false;
          recordCache(target);
          await ((_a = preLoad.value) == null ? void 0 : _a.call(preLoad));
        } catch (e) {
          error.value = true;
        } finally {
          loading.value = false;
          fixedScrollbarPosition(target);
        }
      }
    };
    const handleClickError = (type) => {
      var _a;
      if (type === "error") {
        loading.value = false;
        error.value = false;
        (_a = options.handleError) == null ? void 0 : _a.call(options);
      }
    };
    const renderLoadMore = (placeholder = false) => {
      const loadMoreVNode = hasLoad.value && status.value ? vue.h(ElLoadMore, {
        status: status.value,
        loadingText: calcLoadingText.value,
        noMoreText: calcFinishedText.value,
        errorText: calcErrorText.value,
        onClick: handleClickError
      }) : "";
      return placeholder && hasLoad.value ? vue.h(
        DIV_TAG,
        {
          style: {
            height: "36px"
          }
        },
        [loadMoreVNode]
      ) : loadMoreVNode;
    };
    let preScrollTop = 0;
    const isShouldTrigger = (target) => {
      const { scrollHeight, scrollTop, clientHeight } = target;
      if (isBottomDirection) {
        const isDownward = scrollTop > preScrollTop;
        preScrollTop = scrollTop;
        const shouldTrigger = scrollHeight - (scrollTop + clientHeight) < infiniteScrollDistance.value;
        return isDownward && shouldTrigger;
      } else {
        return scrollTop === 0;
      }
    };
    return {
      handleLoad,
      handlePreLoad,
      renderLoadMore,
      isShouldTrigger
    };
  };

  const cacheKey = Symbol("cacheKey");
  const useCache = (props) => {
    const map = vue.ref(/* @__PURE__ */ new Map());
    const size = vue.computed(
      () => props.direction === "vertical" ? "height" : "width"
    );
    const getDataSize = (entry, el) => {
      var _a, _b, _c, _d, _e, _f;
      const height = (_c = (_b = (_a = entry.borderBoxSize) == null ? void 0 : _a[0]) == null ? void 0 : _b.blockSize) != null ? _c : entry.contentRect.height;
      const width = (_f = (_e = (_d = entry.borderBoxSize) == null ? void 0 : _d[0]) == null ? void 0 : _e.inlineSize) != null ? _f : entry.contentRect.width;
      let marginHeight = 0;
      let marginWidth = 0;
      const computedStyle = window.getComputedStyle(el);
      marginHeight += Number.parseInt(computedStyle.marginBottom, 10);
      marginWidth += Number.parseInt(computedStyle.marginRight, 10);
      return {
        height: height + marginHeight,
        width: width + marginWidth
      };
    };
    const setRealSize = (i, el, entry) => {
      if (!vue.unref(map).has(i)) {
        vue.unref(map).set(i, getDataSize(entry, el));
      } else {
        const oldDataSize = vue.unref(map).get(i);
        const newDataSize = getDataSize(entry, el);
        if (oldDataSize.height !== newDataSize.height || oldDataSize.width !== newDataSize.width) {
          vue.unref(map).set(i, newDataSize);
        }
      }
    };
    const getRealSize = (i) => {
      if (vue.unref(map).has(i)) {
        return vue.unref(map).get(i)[size.value];
      } else {
        return props.itemSize;
      }
    };
    return {
      map,
      setRealSize,
      getRealSize
    };
  };

  const virtualListProps = index$1.buildProps({
    list: {
      type: index$1.definePropType(Array),
      default: () => []
    },
    itemFixed: {
      type: Boolean,
      default: false
    },
    itemSize: {
      type: index$1.definePropType(Number),
      default: 20
    },
    direction: {
      type: String,
      default: "vertical",
      values: ["vertical", "horizontal"]
    },
    overscan: {
      type: Number,
      default: 10
    },
    nativeScrollbar: {
      type: Boolean,
      default: false
    },
    infiniteScroll: {
      type: index$1.definePropType(Function)
    },
    infiniteScrollup: {
      type: index$1.definePropType(Function)
    },
    infiniteScrollDisabled: {
      type: Boolean,
      default: false
    },
    infiniteScrollDelay: {
      type: Number,
      default: 16
    },
    infiniteScrollDistance: {
      type: Number,
      default: 20
    },
    load: {
      type: index$1.definePropType(Function)
    },
    finished: {
      type: Boolean,
      default: false
    },
    loadingText: {
      type: String
    },
    errorText: {
      type: String
    },
    noMoreText: {
      type: String
    }
  });
  const virtualListEmits = {
    scroll: (e) => !!e
  };

  var Scrollbar = {
    extends: elementPlus.ElScrollbar,
    props: {
      wrapOptions: {
        type: Object,
        default: () => ({})
      }
    },
    setup(props, ctx) {
      const instance = vue.getCurrentInstance();
      const render = elementPlus.ElScrollbar.setup(props, ctx);
      return () => {
        const VNode = render(instance.ctx, instance.proxy);
        const wrapVNode = VNode.children[0];
        wrapVNode.props = vue.mergeProps(wrapVNode.props, {
          ...props.wrapOptions
        });
        return VNode;
      };
    }
  };

  var Item$2 = vue.defineComponent({
    name: "Item",
    inheritAttrs: false,
    props: {
      index: {
        type: Number
      },
      data: {
        type: index$1.definePropType(Object),
        default: () => ({})
      },
      isDynamicSize: {
        type: Boolean,
        default: true
      }
    },
    setup(props, { slots }) {
      const cache = vue.inject(cacheKey);
      const { observeResize, unobserveResize } = useResize();
      const instance = vue.getCurrentInstance();
      const getEl = () => {
        var _a, _b;
        const el = (_a = instance == null ? void 0 : instance.proxy) == null ? void 0 : _a.$el;
        if ((el == null ? void 0 : el.nextElementSibling) && el.nextElementSibling !== el.nextSibling && el.nodeType === 3 && el.nodeValue !== "") {
          return null;
        } else {
          return (_b = el == null ? void 0 : el.nextElementSibling) != null ? _b : null;
        }
      };
      let observed = false;
      const setRealSize = (entry) => {
        if (props.isDynamicSize) {
          const el = getEl();
          cache.setRealSize(props.index, el, entry);
        }
      };
      function handleResize(entry) {
        setRealSize(entry);
      }
      const throttleResize = throttle(handleResize, 100);
      function observe() {
        if (observed)
          return;
        const el = getEl();
        if (el) {
          observeResize(el, throttleResize);
          observed = true;
        }
      }
      function unobserve() {
        if (observed) {
          const el = getEl();
          if (el) {
            unobserveResize(el);
          }
          observed = false;
        }
      }
      vue.onMounted(() => {
        observe();
      });
      vue.onBeforeUnmount(() => {
        unobserve();
      });
      return () => vue.renderSlot(slots, "default");
    }
  });

  var VirtualList = vue.defineComponent({
    name: "ElVirtualList",
    inheritAttrs: false,
    props: virtualListProps,
    emits: virtualListEmits,
    setup(props, { attrs, slots, expose, emit }) {
      const ns = elementPlus.useNamespace("virtual-list");
      const propsRefs = vue.toRefs(props);
      const { list: listRef } = propsRefs;
      const { direction, overscan } = props;
      const scrollbarRef = vue.ref();
      const { isShouldTrigger, handleLoad, renderLoadMore } = useLoad(propsRefs, {
        direction: "bottom",
        handleError: () => {
          handleLoad(true, {
            finallyCallback: updateRenderList
          });
        }
      });
      const cache = useCache(props);
      vue.provide(cacheKey, cache);
      const isDynamicSize = vue.computed(() => !props.itemFixed);
      const createItemSize = () => {
        return isDynamicSize.value ? (i) => cache.getRealSize(i) : props.itemSize;
      };
      const { list, containerProps, wrapperProps, scrollTo } = core$1.useVirtualList(
        listRef,
        {
          [direction === "vertical" ? "itemHeight" : "itemWidth"]: createItemSize(),
          overscan
        }
      );
      const updateRenderList = () => {
        const container = containerProps.ref.value;
        if (container) {
          const offset = direction === "vertical" ? "scrollTop" : "scrollLeft";
          container[offset] += 1;
        }
      };
      const handleInfiniteScroll = (shouldTrigger) => {
        var _a;
        if (index$1.isFunction(props.infiniteScroll) && !props.infiniteScrollDisabled && shouldTrigger) {
          (_a = props.infiniteScroll) == null ? void 0 : _a.call(props);
        }
      };
      const handleInfiniteScrollup = async (e) => {
        var _a;
        const { scrollTop } = e.target;
        const shouldTrigger = scrollTop < props.infiniteScrollDistance;
        if (index$1.isFunction(props.infiniteScrollup) && !props.infiniteScrollDisabled && shouldTrigger) {
          let firstData = null;
          try {
            firstData = listRef.value[0];
            await ((_a = props.infiniteScrollup) == null ? void 0 : _a.call(props));
          } catch (e2) {
          } finally {
            const index = listRef.value.indexOf(firstData);
            if (index !== -1) {
              scrollTo(index);
            }
          }
        }
      };
      const onThrottleScroll = throttle((e) => {
        const shouldTrigger = isShouldTrigger(e.target);
        handleLoad(shouldTrigger, {
          finallyCallback: updateRenderList
        });
        handleInfiniteScroll(shouldTrigger);
        handleInfiniteScrollup(e);
      }, props.infiniteScrollDelay);
      const { onScroll } = containerProps;
      const handleScroll = (e) => {
        emit("scroll", e);
        onScroll();
        onThrottleScroll(e);
      };
      const initContainerRef = () => {
        if (!props.nativeScrollbar) {
          containerProps.ref.value = scrollbarRef.value.wrapRef;
        }
      };
      vue.onMounted(() => {
        initContainerRef();
      });
      expose({
        scrollTo
      });
      return () => {
        var _a;
        const renderContent = () => vue.h(
          DIV_TAG,
          {
            style: {
              ...wrapperProps.value.style
            },
            class: ns.b("wrapper")
          },
          list.value.map((item) => {
            const { data, index } = item;
            return vue.h(
              Item$2,
              { data, isDynamicSize: isDynamicSize.value, key: index, index },
              {
                default: () => {
                  var _a2;
                  return (_a2 = slots.default) == null ? void 0 : _a2.call(slots, item);
                }
              }
            );
          })
        );
        const renderChild = () => {
          var _a2, _b;
          return [
            vue.h(DIV_TAG, { class: ns.b("before") }, (_a2 = slots.before) == null ? void 0 : _a2.call(slots)),
            renderContent(),
            renderLoadMore(),
            vue.h(DIV_TAG, { class: ns.b("after") }, (_b = slots.after) == null ? void 0 : _b.call(slots))
          ];
        };
        return props.nativeScrollbar ? vue.h(
          DIV_TAG,
          {
            class: [ns.b(), attrs.class],
            style: {
              ...(_a = attrs.style) != null ? _a : {},
              ...index$1.isObject(containerProps.style) ? containerProps.style : {}
            },
            ref: containerProps.ref,
            onScroll: handleScroll
          },
          renderChild()
        ) : vue.h(
          Scrollbar,
          {
            ref: scrollbarRef,
            class: [ns.b(), attrs.class],
            style: attrs.style,
            wrapOptions: {
              style: {
                ...index$1.isObject(containerProps.style) ? containerProps.style : {}
              },
              onScroll: handleScroll
            }
          },
          {
            default: () => renderChild()
          }
        );
      };
    }
  });

  const ElVirtualList = index$1.withInstall(VirtualList);

  const dotProps = index$1.buildProps({
    type: {
      type: String,
      values: ["primary", "success", "info", "warning", "danger"],
      default: "primary"
    },
    color: String,
    size: {
      type: String
    }
  });
  const dotEmits = {};

  const __default__$7 = vue.defineComponent({
    name: "ElDot"
  });
  const _sfc_main$7 = vue.defineComponent({
    ...__default__$7,
    props: dotProps,
    setup(__props) {
      const props = __props;
      const ns = elementPlus.useNamespace("dot");
      const isPresetsSize = vue.computed(
        () => {
          var _a;
          return ["large", "default", "small"].includes((_a = props.size) != null ? _a : "");
        }
      );
      const spotStyle = vue.computed(() => {
        const size = index$1.isUndefined(props.size) || isPresetsSize.value ? "" : index$1.addUnit(props.size);
        return {
          width: size,
          height: size,
          backgroundColor: props.color
        };
      });
      const sizeKls = vue.computed(() => isPresetsSize.value ? ns.m(props.size) : "");
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "div",
          {
            class: vue.normalizeClass([vue.unref(ns).b(), vue.unref(ns).m(_ctx.type), sizeKls.value])
          },
          [
            vue.createElementVNode(
              "span",
              {
                class: vue.normalizeClass(vue.unref(ns).e("spot")),
                style: vue.normalizeStyle(spotStyle.value)
              },
              null,
              6
            ),
            vue.renderSlot(_ctx.$slots, "default")
          ],
          2
        );
      };
    }
  });
  var Dot = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__file", "dot.vue"]]);

  const ElDot = index$1.withInstall(Dot);

  const textHighlightProps = index$1.buildProps({
    content: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#1677FF"
    },
    ignoreCase: {
      type: Boolean,
      default: false
    }
  });
  const textHighlightEmits = {};

  const __default__$6 = vue.defineComponent({
    name: "ElTextHighlight"
  });
  const _sfc_main$6 = vue.defineComponent({
    ...__default__$6,
    props: textHighlightProps,
    setup(__props) {
      const ns = elementPlus.useNamespace("text-highlight");
      const props = __props;
      const highlightCharacter = () => {
        const { content: content2, text, color, ignoreCase } = props;
        const regex = new RegExp(text, ignoreCase ? "gi" : "g");
        return content2.replace(
          regex,
          (t) => `<span style="color: ${color}">${t}</span>`
        );
      };
      const content = vue.computed(
        () => props.text ? highlightCharacter() : props.content
      );
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("span", {
          class: vue.normalizeClass(vue.unref(ns).b()),
          innerHTML: content.value
        }, null, 10, ["innerHTML"]);
      };
    }
  });
  var TextHighlight = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__file", "text-highlight.vue"]]);

  const ElTextHighlight = index$1.withInstall(TextHighlight);

  const dropdownV2Props = index$1.buildProps({
    options: {
      type: index$1.definePropType(Array),
      default: () => []
    },
    splitButton: {
      type: index$1.definePropType(Boolean),
      default: false
    },
    triggerProps: {
      type: index$1.definePropType(Object)
    }
  });
  const dropdownV2Emits = {
    change: (value, valuePath) => !!value && !!valuePath
  };

  function useItem(instance, currentValue) {
    const valuePath = vue.computed(() => {
      let parent = instance.parent;
      const path = [currentValue.value];
      while (parent.type.name !== "ElDropdownV2Panel") {
        const option = parent.props.option;
        if (option) {
          path.unshift(option.value);
        }
        parent = parent.parent;
      }
      return path;
    });
    const parentItem = vue.computed(() => {
      let parent = instance.parent;
      while (parent && !["ElDropdownV2Panel", "ElDropdownV2SubItem"].includes(parent.type.name)) {
        parent = parent.parent;
      }
      return parent;
    });
    return {
      parentItem,
      valuePath
    };
  }

  var Item$1 = vue.defineComponent({
    name: "ElDropdownV2Item",
    inheritAttrs: false,
    props: {
      option: {
        type: index$1.definePropType(Object),
        required: true
      },
      showArrowRight: {
        type: Boolean,
        default: false
      },
      level: {
        type: index$1.definePropType(Number)
      }
    },
    setup(props, { attrs, slots }) {
      const ns = elementPlus.useNamespace("dropdown-v2-item");
      const rootPanel = vue.inject("rootPanel");
      const instance = vue.getCurrentInstance();
      const label = vue.computed(() => props.option.label);
      const value = vue.computed(() => props.option.value);
      const divided = vue.computed(() => !!props.option.divided);
      const disabled = vue.computed(() => !!props.option.disabled);
      const hasChild = vue.computed(
        () => index$1.isArray(props.option.children) && props.option.children.length
      );
      const trigger = vue.computed(() => rootPanel.props.trigger);
      const isActive = vue.computed(
        () => rootPanel.openedItems.includes(vue.unref(value))
      );
      const { valuePath } = useItem(
        instance,
        vue.computed(() => vue.unref(value))
      );
      const handleClick = () => {
        var _a, _b;
        const data = {
          value: vue.unref(value),
          valuePath: vue.unref(valuePath)
        };
        if (!((_a = props.option) == null ? void 0 : _a.disabled) && vue.unref(trigger) === "hover") {
          rootPanel.handleItemClick({ ...data });
        }
        if (!((_b = props.option) == null ? void 0 : _b.disabled) && vue.unref(trigger) === "click" && !vue.unref(hasChild)) {
          rootPanel.closeSubItem(data.value, data.valuePath);
          rootPanel.emitSelect({ ...data });
        }
      };
      const renderLabel = () => {
        const { renderLabel: renderLabel2 } = props.option;
        return index$1.isFunction(renderLabel2) ? renderLabel2(props.option) : [
          vue.h(SPAN_TAG, { class: ns.e("label") }, vue.unref(label)),
          props.showArrowRight ? vue.h(
            elementPlus.ElIcon,
            { size: 14 },
            {
              default: () => vue.h(arrow_right_default)
            }
          ) : ""
        ];
      };
      return () => {
        return vue.h(
          LI_TAG,
          {
            ...attrs,
            class: [
              ns.b(),
              isActive.value ? ns.m("active") : "",
              divided.value ? ns.m("divided") : "",
              disabled.value ? ns.m("disabled") : ""
            ],
            onClick: handleClick
          },
          [slots.default ? slots.default() : renderLabel()]
        );
      };
    }
  });

  const fallbackPlacements = [
    "right-start",
    "right",
    "right-end",
    "left-start",
    "bottom-start",
    "bottom-end",
    "top-start",
    "top-end"
  ];
  var SubItem = vue.defineComponent({
    name: "ElDropdownV2SubItem",
    inheritAttrs: false,
    props: {
      option: {
        type: index$1.definePropType(Object),
        required: true
      },
      level: {
        type: index$1.definePropType(Number)
      }
    },
    setup(props, { slots, expose }) {
      const ns = elementPlus.useNamespace("dropdown-v2");
      const instance = vue.getCurrentInstance();
      const value = vue.computed(() => props.option.value);
      const { valuePath, parentItem } = useItem(
        instance,
        vue.computed(() => vue.unref(value))
      );
      const mouseInChild = vue.ref(false);
      const rootPanel = vue.inject("rootPanel");
      const subItem = vue.inject(
        `subItem:${parentItem.value.uid}`
      );
      const vPopper = vue.ref(null);
      const isFirstLevel = vue.computed(() => subItem.level === 0);
      const appendToBody = vue.computed(() => isFirstLevel.value ? true : false);
      const currentPlacement = vue.computed(() => {
        var _a;
        const tooltipOptions2 = rootPanel.props.tooltipOptions;
        return isFirstLevel.value ? (_a = tooltipOptions2 == null ? void 0 : tooltipOptions2.placement) != null ? _a : "right-start" : "right-start";
      });
      const trigger = vue.computed(() => rootPanel.props.trigger);
      const tooltipOptions = vue.computed(() => {
        var _a;
        return isFirstLevel.value ? (_a = rootPanel.props.tooltipOptions) != null ? _a : {} : {};
      });
      const subMenuShowTimeout = vue.computed(
        () => {
          var _a;
          return (_a = rootPanel.props.showTimeout) != null ? _a : 200;
        }
      );
      const subMenuHideTimeout = vue.computed(
        () => {
          var _a;
          return (_a = rootPanel.props.hideTimeout) != null ? _a : 200;
        }
      );
      const opened = vue.computed(() => rootPanel.openedItems.includes(vue.unref(value)));
      const panelStyle = vue.computed(() => {
        return {
          width: index$1.addUnit(rootPanel.props.width)
        };
      });
      let timeout;
      const handleMouseenter = (event, showTimeout = subMenuShowTimeout.value) => {
        var _a;
        if (vue.unref(trigger) !== "hover")
          return;
        subItem.mouseInChild.value = true;
        timeout == null ? void 0 : timeout();
        ({ stop: timeout } = core$1.useTimeoutFn(() => {
          rootPanel.openItem(vue.unref(value), valuePath.value);
        }, showTimeout));
        if (isFirstLevel.value) {
          (_a = parentItem.value.vnode.el) == null ? void 0 : _a.dispatchEvent(new MouseEvent("mouseenter"));
        }
      };
      const handleMouseleave = (deepDispatch = false) => {
        var _a;
        if (vue.unref(trigger) !== "hover")
          return;
        subItem.mouseInChild.value = false;
        timeout == null ? void 0 : timeout();
        ({ stop: timeout } = core$1.useTimeoutFn(() => {
          !mouseInChild.value && rootPanel.closeItem(vue.unref(value), valuePath.value);
        }, subMenuHideTimeout.value));
        if (isFirstLevel.value && deepDispatch) {
          (_a = subItem.handleMouseleave) == null ? void 0 : _a.call(subItem, true);
        }
      };
      const hide = () => {
        var _a, _b;
        return (_b = (_a = vPopper.value) == null ? void 0 : _a.hide) == null ? void 0 : _b.call(_a);
      };
      vue.provide(`subItem:${instance.uid}`, {
        handleMouseleave,
        mouseInChild,
        level: subItem.level + 1
      });
      expose({
        hide,
        level: props.level,
        value: vue.unref(value)
      });
      return () => {
        const data = {
          ref: vPopper,
          visible: opened.value,
          effect: "light",
          pure: true,
          offset: 0,
          showArrow: false,
          persistent: true,
          placement: currentPlacement.value,
          teleported: appendToBody.value,
          fallbackPlacements,
          transition: `${ns.namespace.value}-zoom-in-top`,
          gpuAcceleration: false,
          ...tooltipOptions.value
        };
        if (vue.unref(trigger) === "click") {
          delete data.visible;
          data.trigger = "click";
        }
        return vue.h(elementPlus.ElTooltip, data, {
          content: () => {
            var _a;
            return vue.h(
              UL_TAG,
              {
                class: ns.b("list"),
                style: panelStyle.value,
                onMouseenter: (evt) => handleMouseenter(evt, 100),
                onMouseleave: () => handleMouseleave(true)
              },
              [(_a = slots.default) == null ? void 0 : _a.call(slots)]
            );
          },
          default: () => vue.h(
            DIV_TAG,
            {
              onMouseenter: handleMouseenter,
              onMouseleave: () => handleMouseleave()
            },
            [
              props.option.renderLabel ? props.option.renderLabel({ ...props.option }) : vue.h(Item$1, {
                showArrowRight: true,
                option: props.option,
                onMouseenter: handleMouseenter,
                onMouseleave: () => handleMouseleave()
              })
            ]
          )
        });
      };
    }
  });

  const panelProps = index$1.buildProps({
    options: {
      type: index$1.definePropType(Array),
      default: () => []
    },
    showTimeout: {
      type: index$1.definePropType(Number),
      default: 200
    },
    hideTimeout: {
      type: index$1.definePropType(Number),
      default: 200
    },
    pure: {
      type: index$1.definePropType(Boolean),
      default: false
    },
    tooltipOptions: {
      type: index$1.definePropType(Object)
    },
    width: {
      type: index$1.definePropType([String, Number]),
      default: "140px"
    },
    trigger: {
      type: index$1.definePropType(String),
      default: "hover",
      values: ["hover", "click"]
    }
  });
  var DropdownV2Panel = vue.defineComponent({
    name: "ElDropdownV2Panel",
    inheritAttrs: false,
    props: panelProps,
    emits: ["open", "close", "select"],
    setup(props, { emit, attrs, expose }) {
      const ns = elementPlus.useNamespace("dropdown-v2");
      const instance = vue.getCurrentInstance();
      const mouseInChild = vue.ref(false);
      const openedItems = vue.ref([]);
      const activeIndex = vue.ref();
      const subItemRefs = vue.ref({});
      const openItem = (value, valuePath) => {
        if (openedItems.value.includes(value))
          return;
        openedItems.value.push(value);
        emit("open", value, valuePath);
      };
      const close = (value) => {
        const i = openedItems.value.indexOf(value);
        if (i !== -1) {
          openedItems.value.splice(i, 1);
        }
      };
      const closeItem = (value, valuePath) => {
        close(value);
        emit("close", value, valuePath);
      };
      const closeSubItem = (value, valuePath) => {
        const items = Object.values(subItemRefs.value).filter(
          (_) => valuePath.includes(_.value)
        );
        items.forEach((_) => _.hide());
      };
      const handleItemClick = (item) => {
        openedItems.value = [];
        activeIndex.value = item.value;
        emitSelect(item);
      };
      const emitSelect = (item) => {
        const { value, valuePath } = item;
        emit("select", value, valuePath, { value, valuePath });
      };
      vue.provide(
        "rootPanel",
        vue.reactive({
          props,
          openedItems,
          activeIndex,
          openItem,
          closeItem,
          handleItemClick,
          closeSubItem,
          emitSelect
        })
      );
      vue.provide(`subItem:${instance.uid}`, {
        mouseInChild,
        level: 0
      });
      expose({
        close,
        openItem,
        closeItem
      });
      return () => {
        const renderChilds = (options = [], level) => {
          return options.map((option) => {
            if (Array.isArray(option.children) && option.children.length) {
              return vue.h(
                SubItem,
                {
                  level,
                  option,
                  ref: (expose2) => {
                    subItemRefs["value"][option.value] = expose2;
                  }
                },
                {
                  default: () => renderChilds(option.children, level + 1)
                }
              );
            } else {
              return vue.h(Item$1, { option, level });
            }
          });
        };
        return props.pure ? vue.h(
          DIV_TAG,
          { class: [ns.b("panel"), attrs.class] },
          renderChilds(props.options, 0)
        ) : vue.h(DIV_TAG, { class: [ns.b("panel"), attrs.class] }, [
          vue.h(
            UL_TAG,
            { class: [ns.b("list"), ns.b("panel-content")] },
            renderChilds(props.options, 0)
          )
        ]);
      };
    }
  });

  const TRIGGER = "trigger";
  var DropdownV2 = vue.defineComponent({
    name: "ElDropdownV2",
    props: dropdownV2Props,
    setup(props, { attrs, emit, slots }) {
      const ns = elementPlus.useNamespace("dropdown-v2");
      const panelRef = vue.ref();
      const renderIcon = (attrs2) => {
        return vue.h(elementPlus.ElIcon, { ...attrs2 }, { default: () => vue.h(arrow_down_default) });
      };
      const renderButton = (attrs2 = {}, children) => {
        const { triggerProps } = props;
        return vue.h(
          elementPlus.ElButton,
          {
            type: "primary",
            ...vue.mergeProps(attrs2, { ...triggerProps }),
            role: "trigger"
          },
          { default: () => [triggerProps == null ? void 0 : triggerProps.triggerText, ...children] }
        );
      };
      let tick;
      const rednerButtonGroup = () => {
        return vue.h(
          elementPlus.ElButtonGroup,
          {},
          {
            default: () => [
              renderButton(
                {
                  trigger: "disabled",
                  onClick(e) {
                    e.stopPropagation();
                  },
                  onMouseenter() {
                    clearTimeout(tick);
                    tick = setTimeout(() => {
                      panelRef.value.close(TRIGGER);
                    }, 200);
                  },
                  onMouseleave() {
                    clearTimeout(tick);
                  }
                },
                []
              ),
              vue.h(
                elementPlus.ElButton,
                {
                  type: "primary",
                  ...{
                    ...iconProps.value,
                    onMouseenter() {
                      panelRef.value.openItem(TRIGGER, [TRIGGER]);
                    }
                  },
                  role: "icon"
                },
                {
                  default: () => renderIcon()
                }
              )
            ]
          }
        );
      };
      const renderTrigger = (option) => {
        const { splitButton } = props;
        if (slots.default) {
          return slots.default(option);
        } else {
          return splitButton ? rednerButtonGroup() : renderButton({}, [renderIcon({ style: { marginLeft: "8px" } })]);
        }
      };
      const hasLabelSlot = vue.computed(() => !!slots.label);
      const recursion = (options2) => {
        return options2.map((option) => {
          const newOption = {
            children: [],
            disabled: false,
            divided: false,
            ...option
          };
          if (hasLabelSlot.value) {
            newOption.renderLabel = (option2) => {
              var _a;
              return (_a = slots.label) == null ? void 0 : _a.call(slots, option2);
            };
          }
          if (option.children) {
            newOption.children = recursion(option.children);
          }
          return newOption;
        });
      };
      const iconProps = vue.computed(() => {
        const { triggerProps = {} } = props;
        return Object.keys(triggerProps).reduce(
          (pre, key) => {
            if (!key.startsWith("on")) {
              pre[key] = triggerProps[key];
            }
            return pre;
          },
          {}
        );
      });
      const userOptions = vue.computed(() => recursion(props.options));
      const options = vue.computed(() => {
        return [
          {
            label: TRIGGER,
            value: TRIGGER,
            children: userOptions.value,
            renderLabel: (option) => renderTrigger(option)
          }
        ];
      });
      const handleSelect = (value, valuePath) => {
        emit(
          "change",
          value,
          valuePath.filter((_) => _ !== TRIGGER)
        );
      };
      return () => {
        return vue.h(DropdownV2Panel, {
          ref: panelRef,
          tooltipOptions: {
            offset: 12,
            placement: "bottom-start"
          },
          ...attrs,
          class: props.splitButton ? ns.m("split-button") : "",
          pure: true,
          options: vue.unref(options),
          onSelect: handleSelect
        });
      };
    }
  });

  const ElDropdownV2Panel = index$1.withInstall(DropdownV2Panel);
  const ElDropdownV2 = index$1.withInstall(DropdownV2);

  const contextmenuProps = index$1.buildProps({
    data: {
      type: null
    },
    options: {
      type: index$1.definePropType(Array),
      default: () => []
    }
  });
  const contextmenuEmits = {
    change: (value, valuePath) => !!value && !!valuePath
  };

  const useContextMenu = () => {
    const visible = vue.ref(false);
    const position = vue.ref({
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    });
    const triggerRef = vue.ref({
      getBoundingClientRect() {
        return position.value;
      }
    });
    const handleContextMenu = (e) => {
      e.preventDefault();
      position.value = DOMRect.fromRect({
        x: e.clientX,
        y: e.clientY
      });
      visible.value = true;
    };
    return {
      visible,
      triggerRef,
      handleContextMenu
    };
  };

  const __default__$5 = vue.defineComponent({
    name: "ElContextmenu"
  });
  const _sfc_main$5 = vue.defineComponent({
    ...__default__$5,
    props: contextmenuProps,
    emits: contextmenuEmits,
    setup(__props, { expose: __expose, emit: __emit }) {
      const emit = __emit;
      const { visible, triggerRef, handleContextMenu } = useContextMenu();
      const ns = elementPlus.useNamespace("contextmenu");
      const hide = () => visible.value = false;
      const handleChange = (value, valuePath) => {
        emit("change", value, valuePath);
        hide();
      };
      __expose({
        hide,
        handleContextMenu
      });
      return (_ctx, _cache) => {
        const _component_el_tooltip = vue.resolveComponent("el-tooltip");
        return vue.openBlock(), vue.createElementBlock(
          "div",
          {
            class: vue.normalizeClass(vue.unref(ns).b())
          },
          [
            vue.createElementVNode("div", {
              class: vue.normalizeClass(vue.unref(ns).e("trigger")),
              onContextmenu: vue.unref(handleContextMenu)
            }, [
              vue.renderSlot(_ctx.$slots, "default")
            ], 42, ["onContextmenu"]),
            vue.createVNode(_component_el_tooltip, vue.mergeProps({
              visible: vue.unref(visible),
              "onUpdate:visible": ($event) => vue.isRef(visible) ? visible.value = $event : null,
              effect: "light",
              trigger: "click",
              placement: "bottom-start",
              "popper-class": "contextmenu__popper-kls",
              offset: 0,
              "hide-after": 0,
              "virtual-triggering": "",
              "show-arrow": false,
              "gpu-acceleration": false,
              "virtual-ref": vue.unref(triggerRef),
              transition: `${vue.unref(ns).namespace.value}-zoom-in-top`
            }, _ctx.$attrs), {
              content: vue.withCtx(() => [
                vue.renderSlot(_ctx.$slots, "menu", vue.normalizeProps(vue.guardReactiveProps({ data: _ctx.data })), () => [
                  vue.unref(visible) ? (vue.openBlock(), vue.createElementBlock(
                    "div",
                    {
                      key: 0,
                      class: vue.normalizeClass(vue.unref(ns).e("menu"))
                    },
                    [
                      vue.createVNode(vue.unref(ElDropdownV2Panel), {
                        options: _ctx.options,
                        onSelect: handleChange
                      }, null, 8, ["options"])
                    ],
                    2
                  )) : vue.createCommentVNode("v-if", true)
                ])
              ]),
              _: 3
            }, 16, ["visible", "onUpdate:visible", "virtual-ref", "transition"])
          ],
          2
        );
      };
    }
  });
  var Contextmenu = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__file", "contextmenu.vue"]]);

  const ElContextmenu = index$1.withInstall(Contextmenu);

  const rendererProps = index$1.buildProps({
    renderer: {
      type: Function
    },
    data: {
      type: index$1.definePropType(Object)
    }
  });
  const rendererEmits = {};

  var Renderer = vue.defineComponent({
    name: "ElRenderer",
    props: rendererProps,
    setup(props, { slots }) {
      return () => {
        var _a;
        if (typeof props.renderer !== "function") {
          return vue.renderSlot(slots, "default", props.data);
        }
        return (_a = props.renderer) == null ? void 0 : _a.call(props, props.data);
      };
    }
  });

  const ElRenderer = index$1.withInstall(Renderer);

  const previewFileProps = index$1.buildProps({
    fileList: {
      type: index$1.definePropType(Array),
      default: () => index$1.mutable([])
    }
  });
  const previewFileEmits = {
    click: (item) => !!item
  };

  const {
    ImageFile,
    MarkdownFile,
    PdfFile,
    PptFile,
    WordFile,
    ZipFile,
    VideoFile,
    AudioFile,
    ExcelFile,
    UnknownFile
  } = IconsVue;
  const DEFAULT_ICON_COLOR = "#8c8c8c";
  const DEFAULT_ICON_SIZE = 32;
  const IMG_EXTS = ["png", "jpg", "jpeg", "gif", "bmp", "webp", "svg"];
  const EXCEL_TYPE = "excel";
  const IMAGE_TYPE = "image";
  const MARKDOWN_TYPE = "markdown";
  const PDF_TYPE = "pdf";
  const PPT_TYPE = "ppt";
  const WORD_TYPE = "word";
  const ZIP_TYPE = "zip";
  const VIDEO_TYPE = "video";
  const AUDIO_TYPE = "audio";
  const UNKNOWN_TYPE = "unknown";
  const PRESET_FILE_ICONS = [
    {
      type: EXCEL_TYPE,
      icon: ExcelFile,
      iconSize: DEFAULT_ICON_SIZE,
      iconColor: "#22b35e",
      ext: ["xlsx", "xls"]
    },
    {
      type: IMAGE_TYPE,
      icon: ImageFile,
      iconSize: DEFAULT_ICON_SIZE,
      iconColor: DEFAULT_ICON_COLOR,
      ext: IMG_EXTS
    },
    {
      type: MARKDOWN_TYPE,
      icon: MarkdownFile,
      iconSize: DEFAULT_ICON_SIZE,
      iconColor: "#393f4d",
      ext: ["md", "mdx"]
    },
    {
      type: PDF_TYPE,
      icon: PdfFile,
      iconSize: DEFAULT_ICON_SIZE,
      iconColor: "#ff4d4f",
      ext: ["pdf"]
    },
    {
      type: PPT_TYPE,
      icon: PptFile,
      iconSize: DEFAULT_ICON_SIZE,
      iconColor: "#ff6e31",
      ext: ["ppt", "pptx"]
    },
    {
      type: WORD_TYPE,
      icon: WordFile,
      iconSize: DEFAULT_ICON_SIZE,
      iconColor: "#1677ff",
      ext: ["doc", "docx"]
    },
    {
      type: ZIP_TYPE,
      icon: ZipFile,
      iconSize: DEFAULT_ICON_SIZE,
      iconColor: "#fab714",
      ext: ["zip", "rar", "7z", "tar", "gz"]
    },
    {
      type: VIDEO_TYPE,
      icon: VideoFile,
      iconSize: 28,
      iconColor: "#ff4d4f",
      ext: ["mp4", "avi", "mov", "wmv", "flv", "mkv"]
    },
    {
      type: AUDIO_TYPE,
      icon: AudioFile,
      iconSize: 28,
      iconColor: "#ffdc04",
      ext: ["mp3", "wav", "flac", "ape", "aac", "ogg"]
    }
  ];
  const parseSize = (size = 0) => {
    let retSize = size;
    const units = ["B", "KB", "MB", "GB", "TB", "PB", "EB"];
    let unitIndex = 0;
    while (retSize >= 1024 && unitIndex < units.length - 1) {
      retSize /= 1024;
      unitIndex++;
    }
    return `${retSize.toFixed(0)} ${units[unitIndex]}`;
  };
  const parseFileName = (str = "") => {
    const match = str.match(/^(.*)\.[^.]+$/);
    return {
      fileName: match ? match[1] : str,
      fileNameSuffix: match ? str.slice(match[1].length) : ""
    };
  };
  const matchExt = (suffix, ext) => {
    return ext.some((e) => suffix.toLowerCase() === `.${e}`);
  };
  const getIconState = (fileNameSuffix) => {
    var _a, _b, _c, _d;
    const presetIconState = PRESET_FILE_ICONS.find(
      (icon) => matchExt(fileNameSuffix, icon.ext)
    );
    return {
      type: (_a = presetIconState == null ? void 0 : presetIconState.type) != null ? _a : UNKNOWN_TYPE,
      icon: (_b = presetIconState == null ? void 0 : presetIconState.icon) != null ? _b : UnknownFile,
      iconColor: (_c = presetIconState == null ? void 0 : presetIconState.iconColor) != null ? _c : DEFAULT_ICON_COLOR,
      iconSize: (_d = presetIconState == null ? void 0 : presetIconState.iconSize) != null ? _d : DEFAULT_ICON_SIZE
    };
  };

  const __default__$4 = vue.defineComponent({
    name: "ElPreviewFile"
  });
  const _sfc_main$4 = vue.defineComponent({
    ...__default__$4,
    props: previewFileProps,
    emits: previewFileEmits,
    setup(__props, { emit: __emit }) {
      const ns = elementPlus.useNamespace("preview-file");
      const props = __props;
      const emit = __emit;
      const calcFileList = vue.computed(() => {
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
              vue.renderList(calcFileList.value, (item, index) => {
                return vue.renderSlot(_ctx.$slots, "default", vue.mergeProps({ ref_for: true }, { data: item.data, meta: item.meta }), () => [
                  (vue.openBlock(), vue.createElementBlock("div", {
                    key: index,
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
                            vue.createVNode(vue.unref(ElRenderer), {
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
  var PreviewFile = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "preview-file.vue"]]);

  const ElPreviewFile = index$1.withInstall(PreviewFile);

  var OptionTypeEnum = /* @__PURE__ */ ((OptionTypeEnum2) => {
    OptionTypeEnum2[OptionTypeEnum2["Wechat"] = 1] = "Wechat";
    OptionTypeEnum2[OptionTypeEnum2["BusinessWechat"] = 2] = "BusinessWechat";
    return OptionTypeEnum2;
  })(OptionTypeEnum || {});
  const selectV3Props = index$1.buildProps({
    options: {
      type: index$1.definePropType(Array),
      required: true
    },
    textEllipsisOptions: {
      type: Object,
      default: () => ({})
    },
    icon: {
      type: index$1.definePropType(Object)
    },
    iconOptions: {
      type: Object,
      default: () => ({})
    }
  });
  const selectV3Emits = {};

  const { BusinessWechat, Wechat } = IconsVue;
  var SelectV3 = vue.defineComponent({
    name: "ElSelectV3",
    inheritAttrs: false,
    props: selectV3Props,
    emits: selectV3Emits,
    setup(props, { attrs, slots }) {
      const { t } = elementPlus.useLocale();
      const ns = elementPlus.useNamespace("select-v3");
      const renderIcon = (item) => {
        const type = Number(item.type);
        const isWechat = type === OptionTypeEnum.Wechat;
        const isBusinessWechat = type === OptionTypeEnum.BusinessWechat;
        const comp = props.icon ? props.icon : isWechat ? Wechat : isBusinessWechat ? BusinessWechat : "";
        return comp ? vue.h(
          elementPlus.ElIcon,
          {
            size: isWechat ? 16 : 18,
            color: isWechat ? "#07C160" : "",
            ...props.iconOptions
          },
          {
            default: () => vue.h(comp)
          }
        ) : "";
      };
      const renderItem = (data) => {
        var _a;
        const { item, index } = data;
        return vue.h(DIV_TAG, { class: ns.e("item"), key: (_a = item.value) != null ? _a : index }, [
          renderIcon(item),
          vue.h(ElTextEllipsis, {
            rows: 1,
            position: "middle",
            class: ns.e("item-text"),
            content: String(item.label),
            showOverflowTooltip: true,
            tooltipOptions: {
              hideAfter: 0,
              placement: "top",
              transition: "unknown"
            },
            ...props.textEllipsisOptions
          })
        ]);
      };
      return () => {
        return vue.h(
          elementPlus.ElSelectV2,
          {
            clearable: true,
            filterable: true,
            placeholder: t("epx.common.selectPlaceholder"),
            ...attrs,
            options: props.options,
            class: [attrs.class, ns.b()],
            popperClass: ns.e("popper"),
            persistent: false
          },
          {
            default: renderItem,
            ...slots
          }
        );
      };
    }
  });

  const ElSelectV3 = index$1.withInstall(SelectV3);

  const sortableListProps = index$1.buildProps({
    modelValue: {
      type: index$1.definePropType(Array),
      required: true
    },
    tag: {
      type: index$1.definePropType(String),
      default: "div"
    },
    options: {
      type: index$1.definePropType(Object),
      default: () => ({
        animation: 300
      })
    }
  });
  const sortableListEmits = {
    [UPDATE_MODEL_EVENT]: (value) => !!value,
    [CHANGE_EVENT]: (value) => !!value
  };

  var SortableList = vue.defineComponent({
    name: "ElSortableList",
    inheritAttrs: false,
    props: sortableListProps,
    emits: sortableListEmits,
    setup(props, { attrs, slots, emit, expose }) {
      const ns = elementPlus.useNamespace("sortable-list");
      const target = vue.ref();
      const list = vue.computed({
        get() {
          return props.modelValue;
        },
        set(list2) {
          emit(UPDATE_MODEL_EVENT, list2);
          emit(CHANGE_EVENT, list2);
        }
      });
      const { start, stop, option } = useSortable.useSortable(target, list, props.options);
      expose({
        start,
        stop,
        option
      });
      return () => {
        return vue.h(
          props.tag,
          { ref: target, ...attrs, class: [ns.b(), attrs.class] },
          list.value.map((data, index) => {
            var _a;
            return (_a = slots.default) == null ? void 0 : _a.call(slots, { data, index });
          })
        );
      };
    }
  });

  const ElSortableList = index$1.withInstall(SortableList);

  const listProps = index$1.buildProps({
    list: {
      type: index$1.definePropType(Array),
      default: () => []
    },
    nativeScrollbar: {
      type: Boolean,
      default: false
    },
    infiniteScrollDisabled: {
      type: Boolean,
      default: false
    },
    infiniteScrollDelay: {
      type: Number,
      default: 16
    },
    infiniteScrollDistance: {
      type: Number,
      default: 20
    },
    load: {
      type: index$1.definePropType(Function)
    },
    preLoad: {
      type: index$1.definePropType(Function)
    },
    finished: {
      type: Boolean,
      default: false
    },
    loadingText: {
      type: String
    },
    errorText: {
      type: String
    },
    noMoreText: {
      type: String
    }
  });
  const listEmits = {};

  var List = vue.defineComponent({
    name: "ElList",
    inheritAttrs: false,
    props: listProps,
    emits: listEmits,
    setup(props, { attrs, slots, expose }) {
      const ns = elementPlus.useNamespace("list");
      const target = vue.ref();
      const scrollbarRef = vue.ref();
      const { handleLoad, renderLoadMore, isShouldTrigger } = useLoad(
        vue.toRefs(props),
        {
          direction: "bottom",
          handleError: () => handleLoad(true)
        }
      );
      const {
        handlePreLoad,
        renderLoadMore: renderLoadMoreTop,
        isShouldTrigger: isShouldTriggerTop
      } = useLoad(vue.toRefs(props), {
        direction: "top",
        handleError: () => handlePreLoad(true, target.value)
      });
      const onThrottleScroll = throttle(() => {
        handleLoad(isShouldTrigger(target.value));
        handlePreLoad(
          isShouldTriggerTop(target.value),
          target.value
        );
      }, props.infiniteScrollDelay);
      const handleScroll = () => {
        onThrottleScroll();
      };
      const initTarget = () => {
        if (!props.nativeScrollbar) {
          target.value = scrollbarRef.value.wrapRef;
        }
      };
      vue.onMounted(() => {
        initTarget();
      });
      const scrollToBottom = () => {
        vue.nextTick(() => {
          const content = target.value;
          if (content) {
            content.scrollTop = content.scrollHeight - content.clientHeight;
          }
        });
      };
      expose({
        target,
        scrollToBottom
      });
      return () => {
        const { nativeScrollbar } = props;
        const renderChild = () => {
          const list = vue.h(
            DIV_TAG,
            { class: ns.b("wrap") },
            props.list.map((item, index) => {
              var _a;
              return (_a = slots.default) == null ? void 0 : _a.call(slots, { data: item, index });
            })
          );
          return [renderLoadMoreTop(true), list, renderLoadMore()];
        };
        const data = {
          ...attrs,
          class: [ns.b(), attrs.class, nativeScrollbar ? ns.m("scrollbar") : ""],
          ref: nativeScrollbar ? target : scrollbarRef,
          onScroll: handleScroll
        };
        return nativeScrollbar ? vue.h(DIV_TAG, data, [...renderChild()]) : vue.h(elementPlus.ElScrollbar, data, {
          default: () => renderChild()
        });
      };
    }
  });

  const ElList = index$1.withInstall(List);

  const fullScreenProps = index$1.buildProps({
    tag: {
      type: index$1.definePropType(String),
      default: DIV_TAG
    },
    type: {
      type: index$1.definePropType(String),
      default: "window",
      values: ["window", "browser"]
    }
  });
  const fullScreenEmits = {};

  const __default__$3 = vue.defineComponent({ name: "Portal" });
  const _sfc_main$3 = vue.defineComponent({
    ...__default__$3,
    props: {
      to: {
        type: String,
        default: ""
      }
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(vue.Teleport, {
          to: __props.to || "body",
          disabled: !__props.to
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 8, ["to", "disabled"]);
      };
    }
  });
  var Teleport = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "teleport.vue"]]);

  const useWindowFullscreen = () => {
    const isFullscreen = vue.ref(false);
    async function exit() {
      isFullscreen.value = false;
    }
    async function enter() {
      isFullscreen.value = true;
    }
    async function toggle() {
      isFullscreen.value = !isFullscreen.value;
    }
    return {
      isFullscreen,
      exit,
      enter,
      toggle,
      isSupported: vue.ref(true)
    };
  };

  const WINDOW_TYPE = "window";
  const BROWSER_TYPE = "browser";
  var FullScreen = vue.defineComponent({
    name: "ElFullScreen",
    inheritAttrs: false,
    props: fullScreenProps,
    emits: fullScreenEmits,
    setup(props, { attrs, slots, expose }) {
      const ns = elementPlus.useNamespace("full-screen");
      const fullType = vue.ref();
      const target = vue.ref();
      const teleportEl = vue.ref();
      const browserReturn = core$1.useFullscreen(target);
      const windowReturn = useWindowFullscreen();
      const { nextZIndex } = elementPlus.useZIndex();
      const zIndex = vue.ref(nextZIndex());
      const transferTo = vue.computed(
        () => fullType.value === WINDOW_TYPE && isFullscreen.value ? "body" : ""
      );
      const isBrowser = vue.computed(() => fullType.value === BROWSER_TYPE);
      const wrapKlass = vue.computed(() => {
        return {
          [ns.m("full")]: fullType.value === WINDOW_TYPE && isFullscreen.value
        };
      });
      const setType = (type) => {
        var _a;
        type = (_a = type != null ? type : props.type) != null ? _a : WINDOW_TYPE;
        fullType.value = type !== WINDOW_TYPE ? BROWSER_TYPE : WINDOW_TYPE;
      };
      const enter = async (type) => {
        setType(type);
        zIndex.value = nextZIndex();
        isBrowser.value ? browserReturn.enter() : windowReturn.enter();
      };
      const exit = async (type) => {
        setType(type);
        zIndex.value = nextZIndex();
        isBrowser.value ? browserReturn.exit() : windowReturn.exit();
      };
      const toggle = async (type) => {
        setType(type);
        zIndex.value = nextZIndex();
        isBrowser.value ? browserReturn.toggle() : windowReturn.toggle();
      };
      const isFullscreen = vue.computed(
        () => isBrowser.value ? browserReturn.isFullscreen.value : windowReturn.isFullscreen.value
      );
      expose({
        enter,
        exit,
        toggle,
        isFullscreen,
        appendTo: teleportEl
      });
      return () => {
        return vue.h(
          Teleport,
          {
            to: transferTo.value
          },
          {
            default: () => {
              var _a, _b;
              return vue.h(
                props.tag,
                {
                  ...attrs,
                  ref: target,
                  class: [ns.b(), attrs.class, wrapKlass.value],
                  style: {
                    ...(_a = attrs.style) != null ? _a : {},
                    zIndex: zIndex.value
                  }
                },
                [
                  (_b = slots.default) == null ? void 0 : _b.call(slots, {
                    enter,
                    exit,
                    toggle,
                    isFullscreen,
                    appendTo: teleportEl.value
                  }),
                  vue.h(DIV_TAG, {
                    ref: teleportEl,
                    role: "none",
                    class: ns.e("teleport")
                  })
                ]
              );
            }
          }
        );
      };
    }
  });

  const ElFullScreen = index$1.withInstall(FullScreen);

  const splitProps = index$1.buildProps({
    modelValue: {
      type: index$1.definePropType(Number),
      default: 0.5
    },
    vertical: {
      type: index$1.definePropType(Boolean),
      default: false
    },
    min: {
      type: index$1.definePropType(Number),
      default: 0.1
    },
    max: {
      type: index$1.definePropType(Number),
      default: 0.9
    }
  });
  const splitEmits = {
    [UPDATE_MODEL_EVENT]: (value) => value,
    [CHANGE_EVENT]: (value) => value
  };

  function disableEvent(event) {
    if (event.cancelable) {
      event.stopPropagation();
      event.preventDefault();
    }
  }
  function useMoving(options) {
    const target = options.target || vue.ref(null);
    const x = vue.isRef(options.x) ? options.x : vue.ref(0);
    const y = vue.isRef(options.y) ? options.y : vue.ref(0);
    const lazy = vue.isRef(options.lazy) ? options.lazy : vue.ref(options.lazy || false);
    const disabled = vue.isRef(options.disabled) ? options.disabled : vue.ref(options.disabled || false);
    const { capture = true, stopMouse = true, stopTouch = true } = options;
    const moving = vue.ref(false);
    const internalState = {
      xStart: 0,
      yStart: 0,
      xEnd: 0,
      yEnd: 0,
      clientX: 0,
      clientY: 0,
      deltaX: 0,
      deltaY: 0,
      lazy: false
    };
    let current = 0;
    let record = 0;
    const throttleMove = throttle((event) => {
      var _a;
      if (record < current)
        return;
      updateState(event);
      if (!internalState.lazy) {
        x.value = internalState.xEnd;
        y.value = internalState.yEnd;
      }
      (_a = options.onMove) == null ? void 0 : _a.call(options, internalState, event);
    });
    function start(event) {
      var _a;
      if (disabled.value)
        return;
      Object.assign(internalState, {
        xStart: x.value,
        yStart: y.value,
        xEnd: x.value,
        yEnd: y.value,
        clientX: event.clientX,
        clientY: event.clientY,
        lazy: lazy.value
      });
      if (((_a = options.onStart) == null ? void 0 : _a.call(options, internalState, event)) === false) {
        return;
      }
      document.addEventListener("pointermove", move, { capture });
      document.addEventListener("pointerup", end, { capture });
      record = current;
      moving.value = true;
    }
    function move(event) {
      if (disabled.value)
        return;
      disableEvent(event);
      throttleMove(event);
    }
    function end(event) {
      var _a;
      document.removeEventListener("pointermove", move, { capture });
      document.removeEventListener("pointerup", end, { capture });
      if (disabled.value)
        return;
      updateState(event);
      if (internalState.lazy) {
        x.value = internalState.xEnd;
        y.value = internalState.yEnd;
      }
      moving.value = false;
      ++current;
      (_a = options.onEnd) == null ? void 0 : _a.call(options, internalState, event);
    }
    function updateState(event) {
      const { clientX, clientY } = event;
      const {
        xStart,
        yStart,
        clientX: clientXStart,
        clientY: clientYStart
      } = internalState;
      const deltaX = clientX - clientXStart;
      const deltaY = clientY - clientYStart;
      internalState.deltaX = deltaX;
      internalState.deltaY = deltaY;
      internalState.xEnd = xStart + deltaX;
      internalState.yEnd = yStart + deltaY;
    }
    core$1.useEventListener(target, "pointerdown", start, { capture });
    stopMouse && core$1.useEventListener(target, "mousedown", disableEvent, { capture });
    stopTouch && core$1.useEventListener(target, "touchstart", disableEvent, { capture });
    return {
      target,
      moving: vue.computed(() => moving.value),
      x,
      y,
      lazy,
      disabled
    };
  }

  const __default__$2 = vue.defineComponent({
    name: "ElSplit"
  });
  const _sfc_main$2 = vue.defineComponent({
    ...__default__$2,
    props: splitProps,
    emits: splitEmits,
    setup(__props, { emit: __emit }) {
      const ns = elementPlus.useNamespace("split");
      const nsPanel = elementPlus.useNamespace("split__panel");
      const props = __props;
      const emit = __emit;
      const wrapper = vue.ref();
      const currentValue = vue.ref(props.modelValue);
      const offset = vue.computed(() => {
        return props.vertical ? "offsetHeight" : "offsetWidth";
      });
      const position = vue.computed(() => {
        return props.vertical ? ["top", "bottom"] : ["left", "right"];
      });
      const outer = vue.computed(() => {
        var _a, _b;
        return (_b = (_a = wrapper.value) == null ? void 0 : _a[offset.value]) != null ? _b : 0;
      });
      const min = vue.computed(
        () => props.min <= 1 ? props.min : props.min / outer.value
      );
      const max = vue.computed(
        () => props.max <= 1 ? props.max : props.max / outer.value
      );
      function handleChange(value) {
        if (value.toFixed(5) !== currentValue.value.toFixed(5)) {
          currentValue.value = value;
          emit(CHANGE_EVENT, value);
          emit(UPDATE_MODEL_EVENT, value);
        }
      }
      const { target: handler, moving } = useMoving({
        lazy: true,
        capture: false,
        onStart: (state, event) => {
          if (!wrapper.value || event.button > 0) {
            return false;
          }
          state.start = currentValue.value * outer.value;
          state.target = currentValue.value;
        },
        onMove: (state) => {
          const delta = props.vertical ? state.deltaY : state.deltaX;
          const start = state.start;
          const value = Math.min(
            Math.max(min.value, (start + delta) / outer.value),
            max.value
          );
          handleChange(value);
        }
      });
      const leftPaneStyle = vue.computed(() => {
        return {
          [position.value[1]]: `${(1 - currentValue.value) * 100}%`
        };
      });
      const rightPaneStyle = vue.computed(() => {
        return {
          [position.value[0]]: `${currentValue.value * 100}%`
        };
      });
      const triggerStyle = vue.computed(() => {
        return {
          [position.value[0]]: `calc(${currentValue.value * 100}% - var(${ns.cssVarName("split-handler-size")}) * 0.5)`
        };
      });
      return (_ctx, _cache) => {
        var _a;
        return vue.openBlock(), vue.createElementBlock(
          "div",
          {
            ref_key: "wrapper",
            ref: wrapper,
            class: vue.normalizeClass([
              vue.unref(ns).b(),
              vue.unref(ns).m(vue.unref(moving) ? "moving" : ""),
              vue.unref(ns).m(_ctx.vertical ? "vertical" : "horizontal"),
              _ctx.$attrs.class
            ]),
            style: vue.normalizeStyle({ ...(_a = _ctx.$attrs.style) != null ? _a : {} })
          },
          [
            vue.createElementVNode(
              "div",
              {
                class: vue.normalizeClass([vue.unref(ns).e("panel"), vue.unref(nsPanel).m(_ctx.vertical ? "top" : "left")]),
                style: vue.normalizeStyle(leftPaneStyle.value)
              },
              [
                vue.renderSlot(_ctx.$slots, "left")
              ],
              6
            ),
            vue.createElementVNode(
              "div",
              {
                class: vue.normalizeClass([vue.unref(ns).e("panel"), vue.unref(nsPanel).m(_ctx.vertical ? "bottom" : "right")]),
                style: vue.normalizeStyle(rightPaneStyle.value)
              },
              [
                vue.renderSlot(_ctx.$slots, "right")
              ],
              6
            ),
            vue.createElementVNode(
              "div",
              {
                class: vue.normalizeClass(vue.unref(ns).e("trigger")),
                style: vue.normalizeStyle(triggerStyle.value)
              },
              [
                vue.createElementVNode(
                  "div",
                  {
                    ref_key: "handler",
                    ref: handler,
                    class: vue.normalizeClass(vue.unref(ns).e("handler"))
                  },
                  [
                    vue.renderSlot(_ctx.$slots, "handler", {}, () => [
                      vue.createElementVNode(
                        "span",
                        {
                          class: vue.normalizeClass(vue.unref(ns).e("pointer"))
                        },
                        null,
                        2
                      )
                    ])
                  ],
                  2
                )
              ],
              6
            )
          ],
          6
        );
      };
    }
  });
  var Split = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "split.vue"]]);

  const ElSplit = index$1.withInstall(Split);

  const getDefaultIconConfig = () => {
    return {
      radius: 4,
      size: 40,
      backgroundColor: "#fff",
      padding: 4
    };
  };
  const qrCodeProps = index$1.buildProps({
    text: {
      type: index$1.definePropType(String),
      default: ""
    },
    options: {
      type: index$1.definePropType(Object),
      default: () => ({})
    },
    size: {
      type: index$1.definePropType([Number, String]),
      default: 120
    },
    margin: {
      type: index$1.definePropType([Number, String]),
      default: 2
    },
    color: {
      type: index$1.definePropType(String)
    },
    backgroundColor: {
      type: index$1.definePropType(String)
    },
    iconSrc: {
      type: index$1.definePropType(String)
    },
    iconConfig: {
      type: index$1.definePropType(Object),
      default: () => getDefaultIconConfig()
    }
  });
  const qrCodeEmits = {};

  const QRCodeComp = vue.defineComponent({
    name: "QRCodeComp",
    inheritAttrs: false,
    props: qrCodeProps,
    setup(props) {
      const qrcode = useQRCode.useQRCode(props.text, props.options);
      const hasIcon = vue.computed(() => !!props.iconSrc);
      const canvasRef = vue.ref();
      const loadImage = (src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.crossOrigin = "anonymous";
          img.onload = () => {
            return resolve(img);
          };
          img.onerror = () => {
            return reject(img);
          };
        });
      };
      const drawCanvas = async () => {
        const canvas = canvasRef.value;
        if (!canvas)
          return;
        const options = props.options;
        await QRCode__default["default"].toCanvas(canvas, props.text, options);
        const icon = await loadImage(props.iconSrc);
        const ctx = canvas.getContext("2d");
        const iconConfig = Object.assign(
          getDefaultIconConfig(),
          props.iconConfig
        );
        const { backgroundColor, radius, size, padding } = iconConfig;
        const paddingSize = padding * 2;
        const centerX = (canvas.width - size) / 2;
        const centerY = (canvas.height - size) / 2;
        ctx.fillStyle = backgroundColor;
        ctx.beginPath();
        ctx.roundRect(centerX, centerY, size, size, radius);
        ctx.fill();
        const ratio = icon.width / icon.height;
        const scaledWidth = ratio >= 1 ? size : size * ratio;
        const scaledHeight = ratio <= 1 ? size : size / ratio;
        const left = centerX + (size - scaledWidth) / 2;
        const top = centerY + (size - scaledHeight) / 2;
        ctx.drawImage(
          icon,
          left + padding,
          top + padding,
          scaledWidth - paddingSize,
          scaledHeight - paddingSize
        );
      };
      vue.onMounted(() => {
        drawCanvas();
      });
      return () => {
        const { text } = props;
        const renderImage = () => {
          return text ? [vue.h("img", { src: qrcode.value, alt: text })] : "";
        };
        const renderCanvas = () => {
          return text ? vue.h("canvas", { ref: canvasRef }) : "";
        };
        return hasIcon.value ? renderCanvas() : renderImage();
      };
    }
  });
  var QrCode = vue.defineComponent({
    name: "ElQrCode",
    inheritAttrs: false,
    props: qrCodeProps,
    emits: qrCodeEmits,
    setup(props, { attrs, slots, expose }) {
      const ns = elementPlus.useNamespace("qr-code");
      const containerRef = vue.ref();
      const options = vue.computed(() => {
        const color = {
          dark: "#000000ff",
          light: "#ffffffff"
        };
        if (isDef$1(props.color)) {
          color.dark = props.color;
        }
        if (isDef$1(props.backgroundColor)) {
          color.light = props.backgroundColor;
        }
        return {
          width: Number(props.size),
          margin: Number(props.margin),
          color,
          ...props.options
        };
      });
      const key = vue.ref(1);
      vue.watch(
        () => [props.text, options.value],
        () => {
          key.value += 1;
        }
      );
      const downloadQRCode = (name) => {
        const hasIcon = !!props.iconSrc;
        const dom = containerRef.value.querySelector(hasIcon ? "canvas" : "img");
        if (dom) {
          const url = hasIcon ? dom.toDataURL() : dom.src;
          const a = document.createElement("a");
          a.download = name != null ? name : "QRCode.png";
          a.href = url;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        }
      };
      expose({
        downloadQRCode
      });
      return () => {
        return vue.h(
          DIV_TAG,
          {
            ...vue.mergeProps(
              {
                class: ns.b()
              },
              attrs
            ),
            ref: containerRef
          },
          [
            vue.h(
              QRCodeComp,
              {
                text: props.text,
                options: options.value,
                iconSrc: props.iconSrc,
                iconConfig: props.iconConfig,
                key: key.value
              },
              slots
            )
          ]
        );
      };
    }
  });

  const ElQrCode = index$1.withInstall(QrCode);

  const videoProps = index$1.buildProps({
    src: {
      type: index$1.definePropType(String)
    },
    poster: {
      type: index$1.definePropType(String)
    },
    duration: {
      type: index$1.definePropType([String, Number])
    },
    onCoverLoad: {
      type: index$1.definePropType(Function)
    },
    readonly: {
      type: index$1.definePropType(Boolean),
      default: false
    }
  });
  const videoEmits = {
    click: (paused, event) => {
      return index$1.isBoolean(paused) && event instanceof MouseEvent;
    }
  };

  const __default__$1 = vue.defineComponent({
    name: "ElVideo"
  });
  const _sfc_main$1 = vue.defineComponent({
    ...__default__$1,
    props: videoProps,
    emits: videoEmits,
    setup(__props, { expose: __expose, emit: __emit }) {
      const { VideoPlayer } = IconsVue;
      const props = __props;
      const emit = __emit;
      const ns = elementPlus.useNamespace("video");
      const isPlayed = vue.ref(false);
      const paused = vue.ref(true);
      const videoRef = vue.ref(null);
      const setPaused = (bool) => paused.value = bool;
      const setIsPlayed = (bool) => isPlayed.value = bool;
      const hasPoster = vue.computed(() => !isPlayed.value && !!props.poster);
      const hasDuration = vue.computed(() => hasPoster.value && !!props.duration);
      const formatDuration = vue.computed(
        () => index$1.isNumber(props.duration) ? formatTime(props.duration) : props.duration
      );
      const handlePlay = () => {
        setPaused(false);
      };
      const handlePause = () => {
        setPaused(true);
      };
      const handleClick = (e) => {
        setIsPlayed(true);
        const video = videoRef.value;
        if (video) {
          if (video.ended || video.paused) {
            video.play();
          } else {
            video.pause();
          }
        }
        emit("click", paused.value, e);
      };
      __expose({
        video: videoRef
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "div",
          {
            class: vue.normalizeClass(vue.unref(ns).b())
          },
          [
            vue.renderSlot(_ctx.$slots, "poster", {}, () => [
              hasPoster.value ? (vue.openBlock(), vue.createElementBlock("img", {
                key: 0,
                class: vue.normalizeClass(vue.unref(ns).e("poster")),
                src: _ctx.poster,
                onLoad: _ctx.onCoverLoad
              }, null, 42, ["src", "onLoad"])) : vue.createCommentVNode("v-if", true)
            ]),
            vue.renderSlot(_ctx.$slots, "duration", vue.normalizeProps(vue.guardReactiveProps({ formatDuration: formatDuration.value })), () => [
              hasDuration.value ? (vue.openBlock(), vue.createElementBlock(
                "span",
                {
                  key: 0,
                  class: vue.normalizeClass(vue.unref(ns).e("duration"))
                },
                vue.toDisplayString(formatDuration.value),
                3
              )) : vue.createCommentVNode("v-if", true)
            ]),
            vue.createElementVNode("video", {
              ref_key: "videoRef",
              ref: videoRef,
              controls: "",
              class: vue.normalizeClass(vue.unref(ns).e("video")),
              src: _ctx.src,
              hidden: hasPoster.value,
              onEnded: handlePause,
              onPause: handlePause,
              onPlay: handlePlay
            }, [
              vue.renderSlot(_ctx.$slots, "default")
            ], 42, ["src", "hidden"]),
            hasPoster.value ? (vue.openBlock(), vue.createElementBlock(
              "div",
              {
                key: 0,
                class: vue.normalizeClass(vue.unref(ns).e("player-wrap")),
                onClick: handleClick
              },
              [
                vue.renderSlot(_ctx.$slots, "player", vue.normalizeProps(vue.guardReactiveProps({ handleClick })), () => [
                  vue.createVNode(vue.unref(elementPlus.ElIcon), {
                    class: vue.normalizeClass(vue.unref(ns).e("player")),
                    size: "42",
                    color: "rgba(0,0,0,0.6)"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(vue.unref(VideoPlayer))
                    ]),
                    _: 1
                  }, 8, ["class"])
                ])
              ],
              2
            )) : vue.createCommentVNode("v-if", true)
          ],
          2
        );
      };
    }
  });
  var Video = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "video.vue"]]);

  const ElVideo = index$1.withInstall(Video);

  const videoViewerProps = index$1.buildProps({
    urlList: {
      type: index$1.definePropType(Array),
      default: () => index$1.mutable([])
    },
    zIndex: {
      type: Number
    },
    initialIndex: {
      type: Number,
      default: 0
    },
    infinite: {
      type: Boolean,
      default: true
    },
    hideOnClickModal: Boolean,
    teleported: Boolean,
    closeOnPressEscape: {
      type: Boolean,
      default: true
    },
    zoomRate: {
      type: Number,
      default: 1.2
    },
    minScale: {
      type: Number,
      default: 0.2
    },
    maxScale: {
      type: Number,
      default: 7
    },
    crossorigin: {
      type: index$1.definePropType(String)
    }
  });
  const videoViewerEmits = {
    close: () => true,
    switch: (index) => index$1.isNumber(index),
    rotate: (deg) => index$1.isNumber(deg)
  };

  const __default__ = vue.defineComponent({
    name: "ElVideoViewer"
  });
  const _sfc_main = vue.defineComponent({
    ...__default__,
    props: videoViewerProps,
    emits: videoViewerEmits,
    setup(__props, { expose: __expose, emit: __emit }) {
      var _a;
      const modes = {
        CONTAIN: {
          name: "contain",
          icon: vue.markRaw(full_screen_default)
        },
        ORIGINAL: {
          name: "original",
          icon: vue.markRaw(scale_to_original_default)
        }
      };
      const props = __props;
      const emit = __emit;
      const { t } = elementPlus.useLocale();
      const ns = elementPlus.useNamespace("video-viewer");
      const { nextZIndex } = elementPlus.useZIndex();
      const wrapper = vue.ref();
      const imgRefs = vue.ref([]);
      const scopeEventListener = vue.effectScope();
      const loading = vue.ref(true);
      const activeIndex = vue.ref(props.initialIndex);
      const mode = vue.shallowRef(modes.CONTAIN);
      const transform = vue.ref({
        scale: 1,
        deg: 0,
        offsetX: 0,
        offsetY: 0,
        enableTransition: false
      });
      const zIndex = vue.ref((_a = props.zIndex) != null ? _a : nextZIndex());
      const isSingle = vue.computed(() => {
        const { urlList } = props;
        return urlList.length <= 1;
      });
      const isFirst = vue.computed(() => {
        return activeIndex.value === 0;
      });
      const isLast = vue.computed(() => {
        return activeIndex.value === props.urlList.length - 1;
      });
      const currentImg = vue.computed(() => {
        return props.urlList[activeIndex.value];
      });
      const arrowPrevKls = vue.computed(() => [
        ns.e("btn"),
        ns.e("prev"),
        ns.is("disabled", !props.infinite && isFirst.value)
      ]);
      const arrowNextKls = vue.computed(() => [
        ns.e("btn"),
        ns.e("next"),
        ns.is("disabled", !props.infinite && isLast.value)
      ]);
      const imgStyle = vue.computed(() => {
        const { scale, deg, offsetX, offsetY, enableTransition } = transform.value;
        let translateX = offsetX / scale;
        let translateY = offsetY / scale;
        const radian = deg * Math.PI / 180;
        const cosRadian = Math.cos(radian);
        const sinRadian = Math.sin(radian);
        translateX = translateX * cosRadian + translateY * sinRadian;
        translateY = translateY * cosRadian - offsetX / scale * sinRadian;
        const style = {
          transform: `scale(${scale}) rotate(${deg}deg) translate(${translateX}px, ${translateY}px)`,
          transition: enableTransition ? "transform .3s" : ""
        };
        if (mode.value.name === modes.CONTAIN.name) {
          style.maxWidth = style.maxHeight = "100%";
        }
        return style;
      });
      function hide() {
        unregisterEventListener();
        emit("close");
      }
      function registerEventListener() {
        const keydownHandler = lodashUnified.throttle((e) => {
          switch (e.code) {
            case EVENT_CODE.esc:
              props.closeOnPressEscape && hide();
              break;
            case EVENT_CODE.space:
              toggleMode();
              break;
            case EVENT_CODE.left:
              prev();
              break;
            case EVENT_CODE.up:
              handleActions("zoomIn");
              break;
            case EVENT_CODE.right:
              next();
              break;
            case EVENT_CODE.down:
              handleActions("zoomOut");
              break;
          }
        });
        const mousewheelHandler = lodashUnified.throttle((e) => {
          const delta = e.deltaY || e.deltaX;
          handleActions(delta < 0 ? "zoomIn" : "zoomOut", {
            zoomRate: props.zoomRate,
            enableTransition: false
          });
        });
        scopeEventListener.run(() => {
          core$1.useEventListener(document, "keydown", keydownHandler);
          core$1.useEventListener(document, "wheel", mousewheelHandler);
        });
      }
      function unregisterEventListener() {
        scopeEventListener.stop();
      }
      function handleImgLoad() {
        loading.value = false;
      }
      function handleImgError(e) {
        loading.value = false;
        e.target.alt = t("el.image.error");
      }
      function handleMouseDown(e) {
        if (loading.value || e.button !== 0 || !wrapper.value)
          return;
        transform.value.enableTransition = false;
        const { offsetX, offsetY } = transform.value;
        const startX = e.pageX;
        const startY = e.pageY;
        const dragHandler = lodashUnified.throttle((ev) => {
          transform.value = {
            ...transform.value,
            offsetX: offsetX + ev.pageX - startX,
            offsetY: offsetY + ev.pageY - startY
          };
        });
        const removeMousemove = core$1.useEventListener(document, "mousemove", dragHandler);
        core$1.useEventListener(document, "mouseup", () => {
          removeMousemove();
        });
        e.preventDefault();
      }
      function reset() {
        transform.value = {
          scale: 1,
          deg: 0,
          offsetX: 0,
          offsetY: 0,
          enableTransition: false
        };
      }
      function toggleMode() {
        if (loading.value)
          return;
        const modeNames = index$1.keysOf(modes);
        const modeValues = Object.values(modes);
        const currentMode = mode.value.name;
        const index = modeValues.findIndex((i) => i.name === currentMode);
        const nextIndex = (index + 1) % modeNames.length;
        mode.value = modes[modeNames[nextIndex]];
        reset();
      }
      function setActiveItem(index) {
        const len = props.urlList.length;
        activeIndex.value = (index + len) % len;
      }
      function prev() {
        if (isFirst.value && !props.infinite)
          return;
        setActiveItem(activeIndex.value - 1);
      }
      function next() {
        if (isLast.value && !props.infinite)
          return;
        setActiveItem(activeIndex.value + 1);
      }
      function handleActions(action, options = {}) {
        if (loading.value)
          return;
        const { minScale, maxScale } = props;
        const { zoomRate, rotateDeg, enableTransition } = {
          zoomRate: props.zoomRate,
          rotateDeg: 90,
          enableTransition: true,
          ...options
        };
        switch (action) {
          case "zoomOut":
            if (transform.value.scale > minScale) {
              transform.value.scale = Number.parseFloat(
                (transform.value.scale / zoomRate).toFixed(3)
              );
            }
            break;
          case "zoomIn":
            if (transform.value.scale < maxScale) {
              transform.value.scale = Number.parseFloat(
                (transform.value.scale * zoomRate).toFixed(3)
              );
            }
            break;
          case "clockwise":
            transform.value.deg += rotateDeg;
            emit("rotate", transform.value.deg);
            break;
          case "anticlockwise":
            transform.value.deg -= rotateDeg;
            emit("rotate", transform.value.deg);
            break;
        }
        transform.value.enableTransition = enableTransition;
      }
      vue.watch(currentImg, () => {
        vue.nextTick(() => {
          const $img = imgRefs.value[0];
          if (!($img == null ? void 0 : $img.complete)) {
            loading.value = true;
          }
        });
      });
      vue.watch(activeIndex, (val) => {
        reset();
        emit("switch", val);
      });
      vue.onMounted(() => {
        registerEventListener();
      });
      __expose({
        setActiveItem
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.teleported ? vue.Teleport : "div"), {
          to: "body",
          disabled: !_ctx.teleported
        }, {
          default: vue.withCtx(() => [
            vue.createVNode(vue.Transition, {
              name: "viewer-fade",
              appear: ""
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode(
                  "div",
                  {
                    ref_key: "wrapper",
                    ref: wrapper,
                    tabindex: -1,
                    class: vue.normalizeClass(vue.unref(ns).e("wrapper")),
                    style: vue.normalizeStyle({ zIndex: zIndex.value })
                  },
                  [
                    vue.createElementVNode("div", {
                      class: vue.normalizeClass(vue.unref(ns).e("mask")),
                      onClick: vue.withModifiers(($event) => _ctx.hideOnClickModal && hide(), ["self"])
                    }, null, 10, ["onClick"]),
                    vue.createCommentVNode(" CLOSE "),
                    vue.createElementVNode(
                      "span",
                      {
                        class: vue.normalizeClass([vue.unref(ns).e("btn"), vue.unref(ns).e("close")]),
                        onClick: hide
                      },
                      [
                        vue.createVNode(vue.unref(elementPlus.ElIcon), null, {
                          default: vue.withCtx(() => [
                            vue.createVNode(vue.unref(close_default))
                          ]),
                          _: 1
                        })
                      ],
                      2
                    ),
                    vue.createCommentVNode(" ARROW "),
                    !isSingle.value ? (vue.openBlock(), vue.createElementBlock(
                      vue.Fragment,
                      { key: 0 },
                      [
                        vue.createElementVNode(
                          "span",
                          {
                            class: vue.normalizeClass(arrowPrevKls.value),
                            onClick: prev
                          },
                          [
                            vue.createVNode(vue.unref(elementPlus.ElIcon), null, {
                              default: vue.withCtx(() => [
                                vue.createVNode(vue.unref(arrow_left_default))
                              ]),
                              _: 1
                            })
                          ],
                          2
                        ),
                        vue.createElementVNode(
                          "span",
                          {
                            class: vue.normalizeClass(arrowNextKls.value),
                            onClick: next
                          },
                          [
                            vue.createVNode(vue.unref(elementPlus.ElIcon), null, {
                              default: vue.withCtx(() => [
                                vue.createVNode(vue.unref(arrow_right_default))
                              ]),
                              _: 1
                            })
                          ],
                          2
                        )
                      ],
                      64
                    )) : vue.createCommentVNode("v-if", true),
                    vue.createCommentVNode(" ACTIONS "),
                    vue.createElementVNode(
                      "div",
                      {
                        class: vue.normalizeClass([vue.unref(ns).e("btn"), vue.unref(ns).e("actions")])
                      },
                      [
                        vue.createElementVNode(
                          "div",
                          {
                            class: vue.normalizeClass(vue.unref(ns).e("actions__inner"))
                          },
                          [
                            vue.createVNode(vue.unref(elementPlus.ElIcon), {
                              onClick: ($event) => handleActions("zoomOut")
                            }, {
                              default: vue.withCtx(() => [
                                vue.createVNode(vue.unref(zoom_out_default))
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            vue.createVNode(vue.unref(elementPlus.ElIcon), {
                              onClick: ($event) => handleActions("zoomIn")
                            }, {
                              default: vue.withCtx(() => [
                                vue.createVNode(vue.unref(zoom_in_default))
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            vue.createElementVNode(
                              "i",
                              {
                                class: vue.normalizeClass(vue.unref(ns).e("actions__divider"))
                              },
                              null,
                              2
                            ),
                            vue.createVNode(vue.unref(elementPlus.ElIcon), { onClick: toggleMode }, {
                              default: vue.withCtx(() => [
                                (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(mode.value.icon)))
                              ]),
                              _: 1
                            }),
                            vue.createElementVNode(
                              "i",
                              {
                                class: vue.normalizeClass(vue.unref(ns).e("actions__divider"))
                              },
                              null,
                              2
                            ),
                            vue.createVNode(vue.unref(elementPlus.ElIcon), {
                              onClick: ($event) => handleActions("anticlockwise")
                            }, {
                              default: vue.withCtx(() => [
                                vue.createVNode(vue.unref(refresh_left_default))
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            vue.createVNode(vue.unref(elementPlus.ElIcon), {
                              onClick: ($event) => handleActions("clockwise")
                            }, {
                              default: vue.withCtx(() => [
                                vue.createVNode(vue.unref(refresh_right_default))
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ],
                          2
                        )
                      ],
                      2
                    ),
                    vue.createCommentVNode(" CANVAS "),
                    vue.createElementVNode(
                      "div",
                      {
                        class: vue.normalizeClass(vue.unref(ns).e("canvas"))
                      },
                      [
                        (vue.openBlock(true), vue.createElementBlock(
                          vue.Fragment,
                          null,
                          vue.renderList(_ctx.urlList, (url, i) => {
                            return vue.withDirectives((vue.openBlock(), vue.createElementBlock("img", {
                              ref_for: true,
                              ref: (el) => imgRefs.value[i] = el,
                              key: url,
                              src: url,
                              style: vue.normalizeStyle(imgStyle.value),
                              class: vue.normalizeClass(vue.unref(ns).e("img")),
                              crossorigin: _ctx.crossorigin,
                              onLoad: handleImgLoad,
                              onError: handleImgError,
                              onMousedown: handleMouseDown
                            }, null, 46, ["src", "crossorigin"])), [
                              [vue.vShow, i === activeIndex.value]
                            ]);
                          }),
                          128
                        )),
                        vue.createCommentVNode(' <el-video\n            duration="00:11"\n            style="max-width: 80%; max-height: 65%"\n            src="https://realbot-oss.oss-accelerate.aliyuncs.com/scrm/2025/2025-22-19/ab77e3d0-8933-4746-94af-bb66f6e58d38/\u89C6\u9891.mp4"\n            poster="https://realbot-oss.oss-accelerate.aliyuncs.com/scrm/2025/2025-22-19/ab77e3d0-8933-4746-94af-bb66f6e58d38/\u89C6\u9891.mp4?x-oss-process=video/snapshot,t_1000,f_jpg,m_fast"\n          /> ')
                      ],
                      2
                    ),
                    vue.renderSlot(_ctx.$slots, "default")
                  ],
                  6
                )
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 8, ["disabled"]);
      };
    }
  });
  var VideoViewer = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "video-viewer.vue"]]);

  const ElVideoViewer = index$1.withInstall(VideoViewer);

  var Components = [
    ElCase,
    ElAffixBottom,
    ElTablePage,
    ElTableDialog,
    ElEditable,
    ElReadMore,
    ElDraggableTable,
    ElTextEllipsis,
    ElEditor,
    ElEllipsis,
    ElArrayItems,
    ElArrayTable,
    ElArrayTableColumn,
    ElBubble,
    ElBubbleList,
    ElFlex,
    ElSubmit,
    ElReset,
    ElDialogV2,
    ElDrawerV2,
    ElEmoji,
    ElEmoticon,
    ElFontEmoticon,
    ElEditorToolbar,
    ElVirtualList,
    ElDot,
    ElTextHighlight,
    ElContextmenu,
    ElPreviewFile,
    ElRenderer,
    ElSelectV3,
    ElDropdownV2,
    ElDropdownV2Panel,
    ElLoadMore,
    ElSortableList,
    ElList,
    ElFullScreen,
    ElSplit,
    ElQrCode,
    ElConfigProviderV2,
    ElVideo,
    ElVideoViewer
  ];

  var Plugins = [];

  var installer = makeInstaller([...Components, ...Plugins]);

  const directives = {};

  const stylePrefix = "fep";

  const noop = () => {
  };
  const transformComponent = (tag, transformRules, defaultProps) => {
    return vue.defineComponent({
      setup(props, { attrs, slots }) {
        return () => {
          let data = {
            ...attrs
          };
          if (transformRules) {
            const listeners = transformRules;
            shared.each(listeners, (event, extract) => {
              data[`on${event[0].toUpperCase()}${event.slice(1)}`] = attrs[`on${extract[0].toUpperCase()}${extract.slice(1)}`] || noop;
            });
          }
          if (defaultProps) {
            data = shared.merge(defaultProps, attrs);
          }
          return vue.h(tag, data, slots);
        };
      }
    });
  };

  const resolveComponent = (child, props) => {
    if (child) {
      if (typeof child === "string" || typeof child === "number") {
        return child;
      } else if (typeof child === "function") {
        return child(props);
      } else if (vue.isVNode(child)) {
        return child;
      } else {
        return vue.h(vue.toRaw(child), props);
      }
    }
    return null;
  };

  const createContext = (defaultValue) => {
    const injectKey = Symbol();
    return {
      Provider: vue.defineComponent({
        name: "ContextProvider",
        props: {
          value: {
            type: null,
            default() {
              return defaultValue != null ? defaultValue : null;
            }
          }
        },
        setup(props, { slots }) {
          const value = vue.toRef(props, "value");
          vue.provide(injectKey, vue.readonly(value));
          return () => {
            var _a;
            return (_a = slots == null ? void 0 : slots.default) == null ? void 0 : _a.call(slots);
          };
        }
      }),
      Consumer: vue.defineComponent({
        name: "ContextConsumer",
        setup(_props, { slots }) {
          const value = vue.inject(injectKey);
          return () => {
            var _a;
            return (_a = slots == null ? void 0 : slots.default) == null ? void 0 : _a.call(slots, value);
          };
        }
      }),
      injectKey
    };
  };
  const useContext = (context) => {
    const key = context.injectKey;
    return vue.inject(key, vue.ref(null));
  };

  function composeExport(s0, s1) {
    return Object.assign(s0, s1);
  }

  const calcBreakpointIndex = (breakpoints, width) => {
    for (const [i, breakpoint] of breakpoints.entries()) {
      if (width <= breakpoint) {
        return i;
      }
    }
  };
  const calcFactor = (value, breakpointIndex) => {
    var _a;
    if (Array.isArray(value)) {
      if (breakpointIndex === -1)
        return value[0];
      return (_a = value[breakpointIndex]) != null ? _a : value[value.length - 1];
    } else {
      return value;
    }
  };
  const factor = (value, breakpointIndex) => shared.isValid(value) ? calcFactor(value, breakpointIndex) : value;
  const calculateProps = (target, props) => {
    const { clientWidth } = target;
    const {
      breakpoints = [],
      layout,
      labelAlign,
      wrapperAlign,
      labelCol,
      wrapperCol,
      ...otherProps
    } = props;
    const breakpointIndex = calcBreakpointIndex(breakpoints, clientWidth);
    return {
      layout: factor(layout, breakpointIndex),
      labelAlign: factor(labelAlign, breakpointIndex),
      wrapperAlign: factor(wrapperAlign, breakpointIndex),
      labelCol: factor(labelCol, breakpointIndex),
      wrapperCol: factor(wrapperCol, breakpointIndex),
      ...otherProps
    };
  };
  const useResponsiveFormLayout = (props, root) => {
    const { breakpoints } = props;
    if (!shared.isArr(breakpoints)) {
      return { props: vue.ref(props) };
    }
    const layoutProps = vue.ref(props);
    const updateUI = () => {
      if (root.value) {
        layoutProps.value = calculateProps(root.value, props);
      }
    };
    vue.onMounted(() => {
      const observer = () => {
        updateUI();
      };
      const resizeObserver = new ResizeObserver(observer);
      if (root.value) {
        resizeObserver.observe(root.value);
      }
      updateUI();
      return () => {
        resizeObserver.disconnect();
      };
    });
    return {
      props: layoutProps
    };
  };

  const FormLayoutDeepContext = Symbol(
    "FormLayoutDeepContext"
  );
  const FormLayoutShallowContext = Symbol("FormLayoutShallowContext");
  const useFormDeepLayout = () => vue.inject(FormLayoutDeepContext, vue.ref({}));
  const useFormShallowLayout = () => vue.inject(FormLayoutShallowContext, vue.ref({}));
  const useFormLayout = () => {
    const shallowLayout = useFormShallowLayout();
    const deepLayout = useFormDeepLayout();
    const formLayout = vue.ref({
      ...deepLayout.value,
      ...shallowLayout.value
    });
    vue.watch(
      [shallowLayout, deepLayout],
      () => {
        formLayout.value = {
          ...deepLayout.value,
          ...shallowLayout.value
        };
      },
      {
        deep: true
      }
    );
    return formLayout;
  };
  const FormLayout = vue.defineComponent({
    name: "FFormLayout",
    props: {
      className: {},
      colon: { default: true },
      labelAlign: {},
      wrapperAlign: {},
      labelWrap: { default: false },
      labelWidth: {},
      wrapperWidth: {},
      wrapperWrap: { default: false },
      labelCol: {},
      wrapperCol: {},
      fullness: { default: false },
      size: { default: "default" },
      layout: { default: "horizontal" },
      direction: { default: "ltr" },
      shallow: { default: true },
      feedbackLayout: {},
      tooltipLayout: {},
      bordered: { default: true },
      inset: { default: false },
      breakpoints: {},
      spaceGap: {},
      gridColumnGap: {},
      gridRowGap: {}
    },
    setup(customProps, { slots }) {
      const root = vue.ref();
      const { props } = useResponsiveFormLayout(customProps, root);
      const deepLayout = useFormDeepLayout();
      const newDeepLayout = vue.ref({
        ...deepLayout.value
      });
      const shallowProps = vue.ref({});
      vue.watch(
        [props, deepLayout],
        () => {
          shallowProps.value = props.value.shallow ? props.value : {};
          if (!props.value.shallow) {
            Object.assign(newDeepLayout.value, props.value);
          } else {
            if (props.value.size) {
              newDeepLayout.value.size = props.value.size;
            }
            if (props.value.colon) {
              newDeepLayout.value.colon = props.value.colon;
            }
          }
        },
        { deep: true, immediate: true }
      );
      vue.provide(FormLayoutDeepContext, newDeepLayout);
      vue.provide(FormLayoutShallowContext, shallowProps);
      const formPrefixCls = `${stylePrefix}-form`;
      return () => {
        const classNames = {
          [`${formPrefixCls}-${props == null ? void 0 : props.value.layout}`]: true,
          [`${formPrefixCls}-rtl`]: (props == null ? void 0 : props.value.direction) === "rtl",
          [`${formPrefixCls}-${props == null ? void 0 : props.value.size}`]: (props == null ? void 0 : props.value.size) !== void 0,
          [`${props == null ? void 0 : props.value.className}`]: (props == null ? void 0 : props.value.className) !== void 0
        };
        return vue$1.h(
          "div",
          {
            ref: root,
            class: classNames
          },
          slots
        );
      };
    }
  });

  const FormGridSymbol = Symbol("FormGridContext");
  const createFormGrid = (props) => {
    return reactive.markRaw(new grid.Grid(props));
  };
  const useFormGrid = () => vue.inject(FormGridSymbol);
  const useGridSpan = (gridSpan) => {
    return gridSpan;
  };
  const useGridColumn = (gridSpan = 1) => {
    return gridSpan;
  };
  const FormGridInner = reactiveVue.observer(
    vue.defineComponent({
      name: "FFormGrid",
      props: {
        columnGap: {
          type: Number
        },
        rowGap: {
          type: Number
        },
        minColumns: {
          type: [Number, Array]
        },
        minWidth: {
          type: [Number, Array]
        },
        maxColumns: {
          type: [Number, Array]
        },
        maxWidth: {
          type: [Number, Array]
        },
        breakpoints: {
          type: Array
        },
        colWrap: {
          type: Boolean,
          default: true
        },
        strictAutoFit: {
          type: Boolean,
          default: false
        },
        shouldVisible: {
          type: Function,
          default() {
            return () => true;
          }
        },
        grid: {
          type: Object
        }
      },
      setup(props, { slots }) {
        const layout = useFormLayout();
        const gridInstance = vue.computed(() => {
          var _a, _b, _c, _d;
          const newProps = {};
          Object.keys(props).forEach((key) => {
            if (typeof props[key] !== "undefined") {
              newProps[key] = props[key];
            }
          });
          const options = {
            columnGap: (_b = (_a = layout.value) == null ? void 0 : _a.gridColumnGap) != null ? _b : 8,
            rowGap: (_d = (_c = layout.value) == null ? void 0 : _c.gridRowGap) != null ? _d : 4,
            ...newProps
          };
          return reactive.markRaw((options == null ? void 0 : options.grid) ? options.grid : new grid.Grid(options));
        });
        const prefixCls = `${stylePrefix}-form-grid`;
        const root = vue.ref();
        vue.provide(FormGridSymbol, gridInstance);
        vue.onMounted(() => {
          vue.watchEffect((onInvalidate) => {
            const dispose = gridInstance.value.connect(root.value);
            onInvalidate(() => {
              dispose();
            });
          });
        });
        return () => {
          return vue.h(
            "div",
            {
              class: `${prefixCls}`,
              style: {
                gridTemplateColumns: gridInstance.value.templateColumns,
                gap: gridInstance.value.gap
              },
              ref: root
            },
            slots
          );
        };
      }
    })
  );
  const FormGridColumn = reactiveVue.observer({
    name: "FFormGridColumn",
    props: {
      gridSpan: {
        type: Number,
        default: 1
      }
    },
    setup(props, { slots }) {
      return () => {
        return vue.h(
          "div",
          {
            "data-grid-span": props.gridSpan
          },
          slots
        );
      };
    }
  });
  const FormGrid = composeExport(FormGridInner, {
    GridColumn: FormGridColumn,
    useGridSpan,
    useFormGrid,
    createFormGrid
  });

  const useOverflow = (containerRef) => {
    const overflow = vue.ref(false);
    let resizeObserver = null;
    const cleanup = () => {
      if (resizeObserver) {
        resizeObserver.unobserve(containerRef.value);
        resizeObserver = null;
      }
    };
    const observer = () => {
      const container = containerRef.value;
      const content = container.querySelector("label");
      const containerWidth = container.getBoundingClientRect().width;
      const contentWidth = content.getBoundingClientRect().width;
      if (containerWidth !== 0) {
        if (contentWidth > containerWidth) {
          overflow.value = true;
        } else {
          overflow.value = false;
        }
      }
    };
    const stopWatch = vue.watch(
      () => containerRef.value,
      (el) => {
        cleanup();
        if (el) {
          resizeObserver = new ResizeObserver(observer);
          resizeObserver.observe(el);
        }
      },
      { immediate: true, flush: "post" }
    );
    vue.onBeforeUnmount(() => {
      cleanup();
      stopWatch();
    });
    return overflow;
  };
  const ICON_MAP = {
    info: () => vue.h(elementPlus.ElIcon, {}, { default: () => vue.h(info_filled_default) }),
    error: () => vue.h(elementPlus.ElIcon, {}, { default: () => vue.h(circle_close_default) }),
    success: () => vue.h(elementPlus.ElIcon, {}, { default: () => vue.h(circle_check_default) }),
    warning: () => vue.h(elementPlus.ElIcon, {}, { default: () => vue.h(warning_default) })
  };
  const FormBaseItem = vue.defineComponent({
    name: "FormItem",
    props: {
      className: {},
      required: {},
      label: {},
      colon: {},
      layout: {},
      tooltip: {},
      labelStyle: {},
      labelAlign: {},
      labelWrap: {},
      labelWidth: {},
      wrapperWidth: {},
      labelCol: {},
      wrapperCol: {},
      wrapperAlign: {},
      wrapperWrap: {},
      wrapperStyle: {},
      fullness: {},
      addonBefore: {},
      addonAfter: {},
      size: {},
      extra: {},
      feedbackText: {},
      feedbackLayout: {},
      tooltipLayout: {},
      feedbackStatus: {},
      feedbackIcon: {},
      asterisk: {},
      gridSpan: {},
      bordered: { default: true },
      inset: { default: false },
      prefix: {},
      suffix: {}
    },
    setup(props, { slots }) {
      const active = vue.ref(false);
      const deepLayoutRef = useFormLayout();
      const prefixCls = `${stylePrefix}-form-item`;
      const ns = elementPlus.useNamespace("f-form-item");
      const containerRef = vue.ref();
      const overflow = useOverflow(containerRef);
      vue.provide(FormLayoutShallowContext, vue.ref({}));
      return () => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
        const gridStyles = {};
        const deepLayout = deepLayoutRef.value;
        const {
          label,
          colon = (_a = deepLayout.colon) != null ? _a : true,
          layout = (_b = deepLayout.layout) != null ? _b : "horizontal",
          tooltip,
          labelStyle = {},
          labelWrap = (_c = deepLayout.labelWrap) != null ? _c : false,
          labelWidth = deepLayout.labelWidth,
          wrapperWidth = deepLayout.wrapperWidth,
          labelCol = deepLayout.labelCol,
          wrapperCol = deepLayout.wrapperCol,
          wrapperAlign = (_d = deepLayout.wrapperAlign) != null ? _d : "left",
          wrapperWrap = deepLayout.wrapperWrap,
          wrapperStyle = {},
          fullness = deepLayout.fullness,
          addonBefore,
          addonAfter,
          prefix,
          suffix,
          size = deepLayout.size,
          extra,
          feedbackText,
          feedbackLayout = deepLayout.feedbackLayout,
          tooltipLayout = (_e = deepLayout.tooltipLayout) != null ? _e : "icon",
          feedbackStatus,
          feedbackIcon,
          asterisk,
          bordered = deepLayout.bordered,
          inset = deepLayout.inset
        } = props;
        const labelAlign = deepLayout.layout === "vertical" ? (_g = (_f = props.labelAlign) != null ? _f : deepLayout.labelAlign) != null ? _g : "left" : (_i = (_h = props.labelAlign) != null ? _h : deepLayout.labelAlign) != null ? _i : "right";
        let enableCol = false;
        if (labelWidth || wrapperWidth) {
          if (labelWidth) {
            labelStyle.width = `${labelWidth}px`;
            labelStyle.maxWidth = `${labelWidth}px`;
          }
          if (wrapperWidth) {
            wrapperStyle.width = `${wrapperWidth}px`;
            wrapperStyle.maxWidth = `${wrapperWidth}px`;
          }
        } else if (labelCol || wrapperCol) {
          enableCol = true;
        }
        const formatChildren = feedbackLayout === "popover" ? vue.h(
          elementPlus.ElPopover,
          {
            disabled: !feedbackText,
            placement: "top",
            width: "auto"
          },
          {
            reference: () => vue.h("div", {}, { default: () => {
              var _a2;
              return (_a2 = slots.default) == null ? void 0 : _a2.call(slots);
            } }),
            default: () => [
              vue.h(
                "div",
                {
                  class: {
                    [`${prefixCls}-${feedbackStatus}-help`]: !!feedbackStatus
                  }
                },
                {
                  default: () => [
                    feedbackStatus && ["error", "success", "warning"].includes(feedbackStatus) ? ICON_MAP[feedbackStatus]() : "",
                    resolveComponent(feedbackText)
                  ]
                }
              )
            ]
          }
        ) : (_j = slots.default) == null ? void 0 : _j.call(slots);
        const renderLabelText = () => {
          const labelChildren = vue.h(
            "div",
            {
              class: `${prefixCls}-label-content`,
              ref: containerRef
            },
            {
              default: () => [
                asterisk && vue.h(
                  "span",
                  { class: `${prefixCls}-asterisk` },
                  { default: () => ["*"] }
                ),
                vue.h("label", {}, { default: () => [resolveComponent(label)] })
              ]
            }
          );
          const isTextTooltip = tooltip && tooltipLayout === "text";
          if (isTextTooltip || overflow.value) {
            return vue.h(
              elementPlus.ElTooltip,
              {
                placement: "top"
              },
              {
                default: () => [labelChildren],
                content: () => vue.h(
                  "div",
                  {},
                  {
                    default: () => [
                      overflow.value && resolveComponent(label),
                      isTextTooltip && resolveComponent(tooltip)
                    ]
                  }
                )
              }
            );
          } else {
            return labelChildren;
          }
        };
        const renderTooltipIcon = () => {
          if (tooltip && tooltipLayout === "icon") {
            return vue.h(
              "span",
              {
                class: `${prefixCls}-label-tooltip`
              },
              {
                default: () => [
                  vue.h(
                    elementPlus.ElTooltip,
                    {
                      placement: "top"
                    },
                    {
                      default: ICON_MAP.info,
                      content: () => vue.h(
                        "div",
                        {
                          class: `${prefixCls}-label-tooltip-content`
                        },
                        {
                          default: () => [resolveComponent(tooltip)]
                        }
                      )
                    }
                  )
                ]
              }
            );
          }
        };
        const renderLabel = label && vue.h(
          "div",
          {
            class: {
              [`${prefixCls}-label`]: true,
              [`${prefixCls}-item-col-${labelCol}`]: enableCol && !!labelCol
            },
            style: labelStyle
          },
          {
            default: () => [
              prefix && vue.h(
                "div",
                { class: `${prefixCls}-label-prefix` },
                {
                  default: () => [resolveComponent(prefix)]
                }
              ),
              renderLabelText(),
              renderTooltipIcon(),
              label && vue.h(
                "span",
                {
                  class: `${prefixCls}-colon`
                },
                { default: () => [colon ? ":" : ""] }
              ),
              suffix && vue.h(
                "div",
                { class: `${prefixCls}-label-suffix` },
                {
                  default: () => [resolveComponent(suffix)]
                }
              )
            ]
          }
        );
        const shouldShowError = !!feedbackText && feedbackLayout !== "popover" && feedbackLayout !== "none";
        const renderFeedback = vue.h(
          vue.Transition,
          {
            name: `${ns.namespace.value}-zoom-in-top`
          },
          {
            default: () => shouldShowError ? vue.h(
              "div",
              {
                class: {
                  [`${prefixCls}-${feedbackStatus}-help`]: !!feedbackStatus,
                  [`${prefixCls}-help`]: true
                }
              },
              { default: () => [resolveComponent(feedbackText)] }
            ) : ""
          }
        );
        const renderExtra = extra && vue.h(
          "div",
          { class: `${prefixCls}-extra` },
          { default: () => [resolveComponent(extra)] }
        );
        const renderContent = vue.h(
          "div",
          {
            class: {
              [`${prefixCls}-control`]: true,
              [`${prefixCls}-item-col-${wrapperCol}`]: enableCol && !!wrapperCol
            }
          },
          {
            default: () => [
              vue.h(
                "div",
                { class: `${prefixCls}-control-content` },
                {
                  default: () => [
                    addonBefore && vue.h(
                      "div",
                      { class: `${prefixCls}-addon-before` },
                      {
                        default: () => [resolveComponent(addonBefore)]
                      }
                    ),
                    vue.h(
                      "div",
                      {
                        class: {
                          [`${prefixCls}-control-content-component`]: true,
                          [`${prefixCls}-control-content-component-has-feedback-icon`]: !!feedbackIcon
                        },
                        style: wrapperStyle
                      },
                      {
                        default: () => [
                          formatChildren,
                          feedbackIcon && vue.h(
                            "div",
                            { class: `${prefixCls}-feedback-icon` },
                            {
                              default: () => [
                                typeof feedbackIcon === "string" ? vue.h("i", { class: feedbackIcon }, {}) : resolveComponent(feedbackIcon)
                              ]
                            }
                          )
                        ]
                      }
                    ),
                    addonAfter && vue.h(
                      "div",
                      { class: `${prefixCls}-addon-after` },
                      {
                        default: () => [resolveComponent(addonAfter)]
                      }
                    )
                  ]
                }
              ),
              renderFeedback,
              renderExtra
            ]
          }
        );
        return vue.h(
          "div",
          {
            "data-grid-span": props.gridSpan,
            style: {
              ...gridStyles
            },
            class: {
              [`${prefixCls}`]: true,
              [`${prefixCls}-layout-${layout}`]: true,
              [`${prefixCls}-${feedbackStatus}`]: !!feedbackStatus,
              [`${prefixCls}-feedback-has-text`]: !!feedbackText,
              [`${prefixCls}-size-${size}`]: !!size,
              [`${prefixCls}-feedback-layout-${feedbackLayout}`]: !!feedbackLayout,
              [`${prefixCls}-fullness`]: !!fullness || !!inset || !!feedbackIcon,
              [`${prefixCls}-inset`]: !!inset,
              [`${prefixCls}-active`]: active.value,
              [`${prefixCls}-inset-active`]: !!inset && active.value,
              [`${prefixCls}-label-align-${labelAlign}`]: true,
              [`${prefixCls}-control-align-${wrapperAlign}`]: true,
              [`${prefixCls}-label-wrap`]: !!labelWrap,
              [`${prefixCls}-control-wrap`]: !!wrapperWrap,
              [`${prefixCls}-bordered-none`]: bordered === false || !!inset || !!feedbackIcon,
              [`${props.className}`]: !!props.className
            },
            onFocus: () => {
              if (feedbackIcon || inset) {
                active.value = true;
              }
            },
            onBlur: () => {
              if (feedbackIcon || inset) {
                active.value = false;
              }
            }
          },
          {
            default: () => [renderLabel, renderContent]
          }
        );
      };
    }
  });
  const Item = vue$1.connect(
    FormBaseItem,
    vue$1.mapProps(
      { validateStatus: true, title: "label", required: true },
      (props, field) => {
        if (core$2.isVoidField(field))
          return props;
        if (!field)
          return props;
        const takeMessage = () => {
          if (field.validating)
            return;
          if (props.feedbackText)
            return props.feedbackText;
          if (field.selfErrors.length)
            return field.selfErrors;
          if (field.selfWarnings.length)
            return field.selfWarnings;
          if (field.selfSuccesses.length)
            return field.selfSuccesses;
        };
        const errorMessages = takeMessage();
        return {
          feedbackText: Array.isArray(errorMessages) ? errorMessages.join(", ") : errorMessages,
          extra: props.extra || field.description
        };
      },
      (props, field) => {
        var _a;
        if (core$2.isVoidField(field))
          return props;
        if (!field)
          return props;
        return {
          feedbackStatus: field.validateStatus === "validating" ? "pending" : Array.isArray(field.decorator) && ((_a = field.decorator[1]) == null ? void 0 : _a.feedbackStatus) || field.validateStatus
        };
      },
      (props, field) => {
        if (core$2.isVoidField(field))
          return props;
        if (!field)
          return props;
        let asterisk = false;
        if (field.required && field.pattern !== "readPretty") {
          asterisk = true;
        }
        if ("asterisk" in props) {
          asterisk = props.asterisk;
        }
        return {
          asterisk
        };
      }
    )
  );
  const FormItem = composeExport(Item, {
    BaseItem: FormBaseItem
  });

  const getDefaultFormat = (props, formatType = "format") => {
    const type = props.type;
    if (type === "week" && formatType === "format") {
      return "[Week] ww";
    } else if (type === "month") {
      return "YYYY-MM";
    } else if (type === "year") {
      return "YYYY";
    } else if (type === "datetime" || type === "datetimerange") {
      return "YYYY-MM-DD HH:mm:ss";
    }
    return "YYYY-MM-DD";
  };

  const prefixCls = `${stylePrefix}-preview-text`;
  const PlaceholderContext = createContext("N/A");
  const defaultSeparator = "; ";
  const usePlaceholder = (value) => {
    const placeholderCtx = useContext(PlaceholderContext);
    const placeholder = vue.computed(() => {
      return shared.isValid(value == null ? void 0 : value.value) && (value == null ? void 0 : value.value) !== "" ? value == null ? void 0 : value.value : resolveComponent(placeholderCtx.value) || "N/A";
    });
    return placeholder;
  };
  const Input$1 = vue.defineComponent({
    name: "FPreviewTextInput",
    props: {
      value: {
        type: null
      }
    },
    setup(props, { attrs, slots }) {
      const value = vue.toRef(props, "value");
      const placeholder = usePlaceholder(value);
      return () => {
        var _a;
        return vue.h(
          elementPlus.ElSpace,
          {
            class: [prefixCls, `${prefixCls}__input`],
            style: { ...(_a = attrs.style) != null ? _a : {} }
          },
          {
            default: () => {
              var _a2, _b, _c, _d;
              return [
                (_a2 = slots == null ? void 0 : slots.prepend) == null ? void 0 : _a2.call(slots),
                (_b = slots == null ? void 0 : slots.prefix) == null ? void 0 : _b.call(slots),
                placeholder.value,
                (_c = slots == null ? void 0 : slots.suffix) == null ? void 0 : _c.call(slots),
                (_d = slots == null ? void 0 : slots.append) == null ? void 0 : _d.call(slots)
              ];
            }
          }
        );
      };
    }
  });
  const Select$1 = reactiveVue.observer(
    vue.defineComponent({
      name: "FPreviewTextSelect",
      setup(_props, { attrs }) {
        var _a, _b, _c;
        const fieldRef = vue$1.useField();
        const field = fieldRef.value;
        const props = attrs;
        const isTag = attrs.displayType !== "text";
        const separator = (_a = attrs.separator) != null ? _a : defaultSeparator;
        const dataSource = ((_b = field == null ? void 0 : field.dataSource) == null ? void 0 : _b.length) ? field.dataSource : ((_c = props == null ? void 0 : props.options) == null ? void 0 : _c.length) ? props.options : [];
        const placeholder = usePlaceholder();
        const getSelected = () => {
          const value = props.value;
          if (props.multiple) {
            return shared.isArr(value) ? value.map((val) => ({ label: val, value: val })) : [];
          } else {
            return shared.isValid(value) ? [{ label: value, value }] : [];
          }
        };
        const getLabels = () => {
          const selected = getSelected();
          if (!selected.length) {
            return vue.h(
              isTag ? elementPlus.ElTag : elementPlus.ElText,
              isTag ? {
                type: "info",
                effect: "light"
              } : {},
              {
                default: () => placeholder.value
              }
            );
          }
          return isTag ? selected.map(({ value, label }, key) => {
            var _a2;
            const text = ((_a2 = dataSource == null ? void 0 : dataSource.find((item) => item.value == value)) == null ? void 0 : _a2.label) || label;
            return vue.h(
              elementPlus.ElTag,
              {
                key,
                type: "info",
                effect: "light"
              },
              {
                default: () => text || placeholder.value
              }
            );
          }) : vue.h(
            elementPlus.ElText,
            {},
            {
              default: () => selected.map(
                ({ value, label }) => {
                  var _a2;
                  return ((_a2 = dataSource == null ? void 0 : dataSource.find((item) => item.value == value)) == null ? void 0 : _a2.label) || label || placeholder.value;
                }
              ).filter((_) => _).join(separator)
            }
          );
        };
        return () => {
          var _a2;
          return vue.h(
            elementPlus.ElSpace,
            {
              class: [prefixCls, `${prefixCls}__select`],
              style: { ...(_a2 = attrs.style) != null ? _a2 : {} }
            },
            {
              default: () => getLabels()
            }
          );
        };
      }
    })
  );
  const Cascader$1 = reactiveVue.observer(
    vue.defineComponent({
      name: "FPreviewTextCascader",
      setup(_props, { attrs }) {
        var _a, _b, _c, _d, _e;
        const fieldRef = vue$1.useField();
        const field = fieldRef.value;
        const props = attrs;
        const isTag = attrs.displayType !== "text";
        const separator = (_a = attrs.separator) != null ? _a : defaultSeparator;
        const dataSource = ((_b = field == null ? void 0 : field.dataSource) == null ? void 0 : _b.length) ? field.dataSource : ((_c = props == null ? void 0 : props.options) == null ? void 0 : _c.length) ? props.options : [];
        const placeholder = usePlaceholder();
        const valueKey = ((_d = props.props) == null ? void 0 : _d.value) || "value";
        const labelKey = ((_e = props.props) == null ? void 0 : _e.label) || "label";
        const getSelected = () => {
          return shared.isArr(props.value) ? props.value : shared.isUndef(props.value) ? [] : [props.value];
        };
        const findLabel = (value, dataSource2) => {
          for (let i = 0; i < (dataSource2 == null ? void 0 : dataSource2.length); i++) {
            const item = dataSource2[i];
            if ((item == null ? void 0 : item[valueKey]) === value) {
              return item == null ? void 0 : item[labelKey];
            } else {
              const childLabel = findLabel(value, item == null ? void 0 : item.children);
              if (childLabel)
                return childLabel;
            }
          }
        };
        const getLabels = () => {
          const selected = getSelected();
          if (!(selected == null ? void 0 : selected.length)) {
            return vue.h(
              isTag ? elementPlus.ElTag : elementPlus.ElText,
              isTag ? {
                type: "info",
                effect: "light"
              } : {},
              {
                default: () => placeholder.value
              }
            );
          }
          return isTag ? selected.map((value, key) => {
            const text = findLabel(value, dataSource);
            return vue.h(
              elementPlus.ElTag,
              {
                key,
                type: "info",
                effect: "light"
              },
              {
                default: () => text || placeholder.value
              }
            );
          }) : vue.h(
            elementPlus.ElText,
            {},
            {
              default: () => selected.map(
                (value) => findLabel(value, dataSource) || placeholder.value
              ).filter((_) => _).join(separator)
            }
          );
        };
        return () => {
          var _a2;
          return vue.h(
            elementPlus.ElSpace,
            {
              class: [prefixCls, `${prefixCls}__cascader`],
              style: { ...(_a2 = attrs.style) != null ? _a2 : {} }
            },
            {
              default: () => getLabels()
            }
          );
        };
      }
    })
  );
  const DatePicker$1 = vue.defineComponent({
    name: "FPreviewTextDatePicker",
    setup(_props, { attrs }) {
      const { lang } = elementPlus.useLocale();
      const placeholder = usePlaceholder();
      const format = getDefaultFormat(attrs);
      const getLabels = () => {
        if (shared.isArr(attrs.value)) {
          const labels = attrs.value.map(
            (value) => elementPlus.formatter(value, format, lang.value) || placeholder.value
          );
          return labels.join("~");
        } else {
          return isDef$1(attrs.value) ? elementPlus.formatter(
            attrs.value,
            format,
            lang.value
          ) : placeholder.value;
        }
      };
      return () => {
        return vue.h(
          "div",
          {
            class: [prefixCls, `${prefixCls}__date-picker`],
            style: attrs.style
          },
          {
            default: () => getLabels()
          }
        );
      };
    }
  });
  const TimePicker$1 = vue.defineComponent({
    name: "FPreviewTextTimePicker",
    setup(_props, { attrs }) {
      const { lang } = elementPlus.useLocale();
      const placeholder = usePlaceholder();
      const format = attrs.format || "HH:mm:ss";
      const getLabels = () => {
        if (shared.isArr(attrs.value)) {
          const labels = attrs.value.map(
            (value) => elementPlus.formatter(value, format, lang.value) || placeholder.value
          );
          return labels.join("~");
        } else {
          return isDef$1(attrs.value) ? elementPlus.formatter(
            attrs.value,
            format,
            lang.value
          ) : placeholder.value;
        }
      };
      return () => {
        return vue.h(
          "div",
          {
            class: [prefixCls, `${prefixCls}__time-picker`],
            style: attrs.style
          },
          {
            default: () => getLabels()
          }
        );
      };
    }
  });
  const Text = vue.defineComponent({
    name: "FPreviewText",
    setup(_props, { attrs }) {
      const placeholder = usePlaceholder();
      return () => {
        return vue.h(
          "div",
          {
            class: [prefixCls, `${prefixCls}__text`],
            style: attrs.style
          },
          {
            default: () => placeholder.value
          }
        );
      };
    }
  });
  const TextSwitch = vue.defineComponent({
    name: "FPreviewTextSwitch",
    setup(props, { attrs }) {
      var _a, _b, _c, _d;
      const value = vue.toRef(attrs, "value");
      const activeText = (_a = attrs.activeText) != null ? _a : attrs["active-text"];
      const inactiveText = (_b = attrs.inactiveText) != null ? _b : attrs["inactive-text"];
      const activeValue = (_c = attrs.activeValue) != null ? _c : attrs["active-value"];
      const inactiveValue = (_d = attrs.inactiveValue) != null ? _d : attrs["inactive-value"];
      return () => {
        var _a2, _b2;
        const placeholder = usePlaceholder(value);
        const realValue = value.value;
        const text = shared.isUndef(activeValue) && shared.isUndef(inactiveValue) ? (_a2 = realValue ? activeText : inactiveText) != null ? _a2 : placeholder.value : realValue === activeValue ? activeText : realValue === inactiveValue ? inactiveText : placeholder.value;
        return vue.h(
          elementPlus.ElSpace,
          {
            class: [prefixCls, `${prefixCls}__switch`],
            style: { ...(_b2 = attrs.style) != null ? _b2 : {} }
          },
          {
            default: () => String(text)
          }
        );
      };
    }
  });
  const PreviewText = composeExport(Text, {
    Input: Input$1,
    Select: Select$1,
    Cascader: Cascader$1,
    DatePicker: DatePicker$1,
    TimePicker: TimePicker$1,
    Placeholder: PlaceholderContext.Provider,
    usePlaceholder,
    TextSwitch
  });

  const Reset = reactiveVue.observer(
    vue.defineComponent({
      name: "FReset",
      inheritAttrs: false,
      props: {
        forceClear: {
          type: Boolean,
          default: false
        },
        validate: {
          type: Boolean,
          default: false
        }
      },
      setup(props, { attrs, slots }) {
        const formRef = vue$1.useParentForm();
        return () => {
          const form = formRef == null ? void 0 : formRef.value;
          return vue.h(
            elementPlus.ElButton,
            {
              ...attrs,
              onClick: (e) => {
                if (attrs == null ? void 0 : attrs.onClick) {
                  if (attrs.onClick(e) === false)
                    return;
                }
                form == null ? void 0 : form.reset("*", {
                  forceClear: props.forceClear,
                  validate: props.validate
                }).then(attrs.onResetValidateSuccess).catch(attrs.onResetValidateFailed);
              }
            },
            slots
          );
        };
      }
    })
  );

  const Submit = reactiveVue.observer(
    vue.defineComponent({
      name: "FSubmit",
      inheritAttrs: false,
      props: ["onClick", "onSubmit", "onSubmitSuccess", "onSubmitFailed"],
      setup(props, { attrs, slots }) {
        const formRef = vue$1.useParentForm();
        return () => {
          const { onClick, onSubmit, onSubmitSuccess, onSubmitFailed } = props;
          const form = formRef == null ? void 0 : formRef.value;
          return vue.h(
            elementPlus.ElButton,
            {
              nativeType: (attrs == null ? void 0 : attrs.submit) ? "button" : "submit",
              type: "primary",
              ...attrs,
              loading: attrs.loading !== void 0 ? attrs.loading : form == null ? void 0 : form.submitting,
              onClick: (e) => {
                if (onClick) {
                  if (onClick(e) === false)
                    return;
                }
                if (onSubmit) {
                  (form == null ? void 0 : form.submit).call(
                    form,
                    onSubmit,
                    attrs.scrollIntoView
                  ).then(onSubmitSuccess).catch(onSubmitFailed);
                }
              }
            },
            slots
          );
        };
      }
    })
  );

  const FormProvider = vue$1.FormProvider;
  const Form = vue.defineComponent({
    name: "FForm",
    props: [
      "form",
      "component",
      "previewTextPlaceholder",
      "onAutoSubmit",
      "onAutoSubmitFailed"
    ],
    setup(props, { attrs, slots }) {
      const top = vue$1.useForm();
      return () => {
        const {
          form,
          component = "form",
          onAutoSubmit = attrs.onAutoSubmit,
          onAutoSubmitFailed = attrs.onAutoSubmitFailed,
          previewTextPlaceholder = slots == null ? void 0 : slots.previewTextPlaceholder
        } = props;
        const renderContent = (form2) => {
          return vue$1.h(
            PreviewText.Placeholder,
            {
              value: previewTextPlaceholder
            },
            {
              default: () => [
                vue$1.h(
                  FormLayout,
                  { ...attrs },
                  {
                    default: () => [
                      vue$1.h(
                        component,
                        {
                          onSubmit: (e) => {
                            var _a, _b;
                            (_a = e == null ? void 0 : e.stopPropagation) == null ? void 0 : _a.call(e);
                            (_b = e == null ? void 0 : e.preventDefault) == null ? void 0 : _b.call(e);
                            form2.submit(onAutoSubmit).catch(onAutoSubmitFailed);
                          }
                        },
                        slots
                      )
                    ]
                  }
                )
              ]
            }
          );
        };
        if (form) {
          return vue$1.h(
            FormProvider,
            { form },
            {
              default: () => renderContent(form)
            }
          );
        }
        if (!top.value)
          throw new Error("must pass form instance by createForm");
        return renderContent(top.value);
      };
    }
  });

  const TransformElInput = transformComponent(elementPlus.ElInput, {
    change: "update:modelValue"
  });
  const InnerInput = vue$1.connect(
    TransformElInput,
    vue$1.mapProps({
      value: "modelValue",
      readOnly: "readonly"
    }),
    vue$1.mapReadPretty(PreviewText.Input)
  );
  const TextArea = vue$1.connect(
    InnerInput,
    vue$1.mapProps((props) => {
      return {
        ...props,
        type: "textarea"
      };
    }),
    vue$1.mapReadPretty(PreviewText.Input)
  );
  const Input = composeExport(InnerInput, {
    TextArea
  });

  const SelectOption = vue.defineComponent({
    name: "FSelect",
    inheritAttrs: false,
    props: {
      options: {
        type: Array,
        default: () => []
      }
    },
    setup(props, { attrs, slots }) {
      return () => {
        const options = props.options || [];
        return vue.h(
          elementPlus.ElSelect,
          {
            ...attrs
          },
          {
            default: () => options.map((option) => {
              if (typeof option === "string") {
                return vue.h(
                  elementPlus.ElOption,
                  { key: option, value: option, label: option },
                  {
                    default: () => [
                      resolveComponent(slots == null ? void 0 : slots.option, { option })
                    ]
                  }
                );
              } else {
                return vue.h(
                  elementPlus.ElOption,
                  {
                    key: option.value,
                    ...option
                  },
                  {
                    default: () => [
                      resolveComponent(slots == null ? void 0 : slots.option, {
                        option
                      })
                    ]
                  }
                );
              }
            }),
            ...slots
          }
        );
      };
    }
  });
  const Select = vue$1.connect(
    SelectOption,
    vue$1.mapProps({ dataSource: "options", value: "modelValue", loading: true }),
    vue$1.mapReadPretty(PreviewText.Select)
  );

  const TransformElDatePicker = transformComponent(
    elementPlus.ElDatePicker,
    {
      change: "update:modelValue"
    }
  );
  const DatePicker = vue$1.connect(
    TransformElDatePicker,
    vue$1.mapProps(
      {
        value: "modelValue",
        readOnly: "readonly"
      },
      (props) => {
        return {
          ...props,
          format: props.format || getDefaultFormat(props),
          valueFormat: props.valueFormat || getDefaultFormat(props, "valueFormat")
        };
      }
    ),
    vue$1.mapReadPretty(PreviewText.DatePicker)
  );

  const TransformElTimePicker = transformComponent(
    elementPlus.ElTimePicker,
    {
      change: "update:modelValue"
    }
  );
  const TimePicker = vue$1.connect(
    TransformElTimePicker,
    vue$1.mapProps({ readOnly: "readonly", value: "modelValue" }),
    vue$1.mapReadPretty(PreviewText.TimePicker)
  );

  const TransformElCascader = transformComponent(elementPlus.ElCascader, {
    change: "update:modelValue"
  });
  const Cascader = vue$1.connect(
    TransformElCascader,
    vue$1.mapProps({ dataSource: "options", value: "modelValue" }),
    vue$1.mapReadPretty(PreviewText.Cascader)
  );

  const TransformElInputNumber = transformComponent(
    elementPlus.ElInputNumber,
    {
      change: "update:modelValue"
    }
  );
  const InputNumber = vue$1.connect(
    TransformElInputNumber,
    vue$1.mapProps(
      {
        value: "modelValue",
        readOnly: "readonly"
      },
      (props) => {
        let controlsPosition = "right";
        if (props.controlsPosition) {
          controlsPosition = props.controlsPosition;
        }
        return {
          controlsPosition
        };
      }
    ),
    vue$1.mapReadPretty(PreviewText.Input)
  );

  const TransformElSwitch = transformComponent(elementPlus.ElSwitch, {
    change: "update:modelValue"
  });
  const Switch = vue$1.connect(
    TransformElSwitch,
    vue$1.mapProps({
      value: "modelValue",
      readOnly: "readonly"
    }),
    vue$1.mapReadPretty(PreviewText.TextSwitch)
  );

  const RadioGroupOption = vue.defineComponent({
    name: "FRadioGroup",
    props: {
      options: {
        type: Array,
        default: () => []
      },
      optionType: {
        type: String,
        default: "default"
      }
    },
    setup(props, { attrs, slots }) {
      return () => {
        const options = props.options || [];
        const OptionType = props.optionType === "button" ? elementPlus.ElRadioButton : elementPlus.ElRadio;
        return vue.h(
          elementPlus.ElRadioGroup,
          {
            ...attrs
          },
          {
            ...slots,
            default: () => options.map((option) => {
              if (typeof option === "string") {
                return vue.h(
                  OptionType,
                  { label: option, value: option, key: option },
                  {
                    default: () => {
                      var _a;
                      return [
                        resolveComponent((_a = slots == null ? void 0 : slots.option) != null ? _a : option, { option })
                      ];
                    }
                  }
                );
              } else {
                return vue.h(
                  OptionType,
                  {
                    key: String(option.value),
                    ...option
                  },
                  {
                    default: () => {
                      var _a;
                      return [
                        resolveComponent((_a = slots == null ? void 0 : slots.option) != null ? _a : option.label, {
                          option
                        })
                      ];
                    }
                  }
                );
              }
            })
          }
        );
      };
    }
  });
  const RadioGroup = vue$1.connect(
    transformComponent(RadioGroupOption, {
      change: "update:modelValue"
    }),
    vue$1.mapProps({ dataSource: "options", value: "modelValue" }),
    vue$1.mapReadPretty(PreviewText.Select)
  );
  const Radio = composeExport(elementPlus.ElRadio, {
    Group: RadioGroup
  });

  const CheckboxOption = vue.defineComponent({
    name: "Checkbox",
    inheritAttrs: false,
    props: {
      optionType: {
        type: String,
        default: "default"
      }
    },
    setup(props, { attrs, slots }) {
      return () => {
        const option = {
          label: attrs.label,
          value: attrs.value
        };
        return vue.h(
          props.optionType === "button" ? elementPlus.ElCheckboxButton : elementPlus.ElCheckbox,
          {
            ...attrs
          },
          {
            default: () => {
              var _a;
              return [
                resolveComponent((_a = slots.default) != null ? _a : option == null ? void 0 : option.label, {
                  option
                })
              ];
            }
          }
        );
      };
    }
  });
  const CheckboxGroupOption = vue.defineComponent({
    name: "CheckboxGroup",
    props: {
      options: {
        type: Array,
        default: () => []
      },
      optionType: {
        type: String,
        default: "default"
      }
    },
    setup(props, { attrs, slots }) {
      return () => {
        const options = props.options || [];
        const OptionType = props.optionType === "button" ? elementPlus.ElCheckboxButton : elementPlus.ElCheckbox;
        return vue.h(
          elementPlus.ElCheckboxGroup,
          {
            ...attrs
          },
          {
            ...slots,
            default: () => options.map((option) => {
              if (typeof option === "string") {
                return vue.h(
                  OptionType,
                  { label: option, value: option, key: option },
                  {
                    default: () => {
                      var _a;
                      return [
                        resolveComponent((_a = slots == null ? void 0 : slots.option) != null ? _a : option, { option })
                      ];
                    }
                  }
                );
              } else {
                return vue.h(
                  OptionType,
                  {
                    key: String(option.value),
                    ...option
                  },
                  {
                    default: () => {
                      var _a;
                      return [
                        resolveComponent((_a = slots == null ? void 0 : slots.option) != null ? _a : option.label, {
                          option
                        })
                      ];
                    }
                  }
                );
              }
            })
          }
        );
      };
    }
  });
  const CheckboxGroup = vue$1.connect(
    transformComponent(CheckboxGroupOption, {
      change: "update:modelValue"
    }),
    vue$1.mapProps({ dataSource: "options", value: "modelValue" }),
    vue$1.mapReadPretty(PreviewText.Select, { multiple: true })
  );
  const Checkbox = composeExport(
    vue$1.connect(
      transformComponent(CheckboxOption, {
        change: "update:modelValue"
      }),
      vue$1.mapProps({ value: "modelValue" }),
      vue$1.mapReadPretty(PreviewText.Select)
    ),
    {
      Group: CheckboxGroup
    }
  );

  const FormButtonGroup = vue.defineComponent({
    name: "FFormButtonGroup",
    props: {
      align: {
        type: String,
        default: "left"
      },
      gutter: {
        type: Number,
        default: 8
      },
      alignFormItem: {
        type: Boolean,
        default: false
      }
    },
    setup(props, { slots, attrs }) {
      const prefixCls = `${stylePrefix}-form-button-group`;
      const spaceStyle = vue.computed(() => {
        return {
          justifyContent: props.align === "left" ? "flex-start" : props.align === "right" ? "flex-end" : "center",
          display: "flex"
        };
      });
      return () => {
        if (props.alignFormItem) {
          return vue.h(
            FormBaseItem,
            {
              style: {
                margin: 0,
                padding: 0,
                width: "100%"
              },
              colon: false,
              label: " ",
              ...attrs
            },
            {
              default: () => vue.h(
                elementPlus.ElSpace,
                { size: props.gutter, style: [{ ...spaceStyle.value }] },
                slots
              )
            }
          );
        } else {
          return vue.h(
            elementPlus.ElSpace,
            {
              class: [prefixCls],
              style: [{ ...spaceStyle.value }],
              ...attrs,
              size: props.gutter
            },
            slots
          );
        }
      };
    }
  });

  const TransformElTreeSelect = transformComponent(
    elementPlus.ElTreeSelect,
    {
      change: "update:modelValue"
    }
  );
  const TreeSelect = vue$1.connect(
    TransformElTreeSelect,
    vue$1.mapProps({
      value: "modelValue",
      dataSource: "data"
    }),
    vue$1.mapReadPretty(PreviewText.Cascader)
  );

  const TransformElSelectV2 = transformComponent(elementPlus.ElSelectV2, {
    change: "update:modelValue"
  });
  const SelectV2 = vue$1.connect(
    TransformElSelectV2,
    vue$1.mapProps((props, field) => {
      var _a;
      return {
        options: (_a = shared.FormPath.getIn(field, "dataSource")) != null ? _a : [],
        modelValue: shared.FormPath.getIn(field, "value")
      };
    }),
    vue$1.mapReadPretty(PreviewText.Select)
  );

  const TransformElSlider = transformComponent(elementPlus.ElSlider, {
    change: "update:modelValue"
  });
  const Slider = vue$1.connect(
    TransformElSlider,
    vue$1.mapProps((props, field) => {
      return {
        modelValue: shared.FormPath.getIn(field, "value")
      };
    }),
    vue$1.mapReadPretty(PreviewText.Input)
  );

  const TransformElMention = transformComponent(elementPlus.ElMention, {
    change: "update:modelValue"
  });
  const Mention = vue$1.connect(
    TransformElMention,
    vue$1.mapProps((props, field) => {
      var _a;
      return {
        options: (_a = shared.FormPath.getIn(field, "dataSource")) != null ? _a : [],
        modelValue: shared.FormPath.getIn(field, "value"),
        readOnly: "readonly"
      };
    }),
    vue$1.mapReadPretty(PreviewText.Input)
  );

  const isDef = (v) => v !== void 0 && v !== null && v !== "";
  var Actions = vue.defineComponent({
    name: "Actions",
    props: {
      onSubmit: Function,
      onReset: Function,
      submitProps: {
        type: Object
      },
      resetProps: {
        type: Object
      },
      submitText: String,
      resetText: String,
      layout: {
        type: String,
        default: "submit,reset"
      }
    },
    setup(props) {
      const formRef = vue$1.useForm();
      const form = formRef.value;
      const { onSubmit, onReset } = props;
      const handleReset = () => setTimeout(() => onReset == null ? void 0 : onReset({}), 0);
      const handleSubmit = async (values) => {
        values = Object.keys(values).reduce((pre, key) => {
          const value = values[key];
          if (isDef(value)) {
            pre = {
              ...pre,
              [key]: value
            };
          }
          return pre;
        }, {});
        form.submitting = true;
        await (onSubmit == null ? void 0 : onSubmit(values));
        form.submitting = false;
      };
      return () => {
        const { submitProps, resetProps, submitText, resetText, layout } = props;
        const renderSubmit = () => {
          return submitText ? vue.h(
            Submit,
            { type: "primary", onSubmit: handleSubmit, ...submitProps },
            { default: () => submitText }
          ) : "";
        };
        const renderReset = () => {
          return resetText ? vue.h(
            Reset,
            { onClick: handleReset, ...resetProps },
            { default: () => resetText }
          ) : "";
        };
        return vue.h(
          "div",
          {
            class: "fep-actions"
          },
          layout.split(",").map((item) => {
            if (item === "submit") {
              return renderSubmit();
            } else if (item === "reset") {
              return renderReset();
            }
            return null;
          }).filter((vnode) => vnode)
        );
      };
    }
  });

  const defaultComponents = {
    Form,
    FormItem,
    FormGrid,
    FormLayout,
    Submit,
    Reset,
    Input,
    InputNumber,
    Select,
    DatePicker,
    TimePicker,
    Radio,
    Checkbox,
    Switch,
    Cascader,
    Actions,
    TreeSelect,
    SelectV2,
    Slider,
    Mention,
    Space: elementPlus.ElSpace
  };
  const staticKlass = "json-schema__form";
  const JsonSchema = vue.defineComponent({
    name: "JsonSchema",
    inheritAttrs: false,
    props: {
      iFormProps: {
        type: Object,
        default: () => ({})
      },
      components: {
        type: Object
      },
      scope: {
        type: Object
      },
      schema: {
        type: Object
      },
      forceCreateForm: {
        type: Boolean,
        default: false
      },
      iSchemaFieldVueFactoryOptions: {
        type: Object,
        default: () => ({})
      }
    },
    setup(props, { attrs, expose }) {
      const formRef = vue$1.useForm();
      const containerRef = vue.ref();
      const hasTopForm = vue.computed(() => !props.forceCreateForm && !!formRef.value);
      const fields = vue.computed(() => {
        var _a;
        const { components, scope, iSchemaFieldVueFactoryOptions } = props;
        return vue$1.createSchemaField({
          components: {
            ...defaultComponents,
            ...components,
            ...iSchemaFieldVueFactoryOptions == null ? void 0 : iSchemaFieldVueFactoryOptions.components
          },
          scope: scope ? scope : (_a = iSchemaFieldVueFactoryOptions == null ? void 0 : iSchemaFieldVueFactoryOptions.scope) != null ? _a : {}
        });
      });
      const handleScrollIntoView = () => {
        var _a, _b, _c;
        const container = containerRef.value;
        if (container) {
          const elements = container.querySelectorAll(".fep-form-item-error-help");
          if (elements && elements.length) {
            const formItemEle = (_b = (_a = elements[0]) == null ? void 0 : _a.parentElement) == null ? void 0 : _b.parentElement;
            (_c = formItemEle == null ? void 0 : formItemEle.scrollIntoView) == null ? void 0 : _c.call(formItemEle, {
              behavior: "smooth",
              block: "nearest",
              inline: "nearest"
            });
          }
        }
      };
      const submit = (originSubmit) => {
        return (onSubmit, scrollIntoView) => {
          var _a;
          return (_a = originSubmit(onSubmit)) == null ? void 0 : _a.catch((e) => {
            if (scrollIntoView)
              handleScrollIntoView();
            throw e;
          });
        };
      };
      const form = vue.computed(() => {
        return hasTopForm.value ? formRef.value : core$2.createForm(props.iFormProps);
      });
      if (form.value) {
        const originSubmit = form.value.submit;
        form.value.submit = submit(originSubmit);
      }
      expose({ formInstance: form.value });
      return () => {
        const { schema } = props;
        const { SchemaField } = fields.value;
        return vue.h(
          "div",
          {
            class: staticKlass,
            ref: containerRef
          },
          [
            vue.h(
              Form,
              {
                colon: false,
                component: "div",
                ...attrs,
                form: form.value
              },
              {
                default: () => vue.h(SchemaField, { schema })
              }
            )
          ]
        );
      };
    }
  });

  var index = /*#__PURE__*/Object.freeze({
    __proto__: null,
    createFormGrid: createFormGrid,
    useFormGrid: useFormGrid,
    useGridColumn: useGridColumn,
    FormGrid: FormGrid,
    FormBaseItem: FormBaseItem,
    FormItem: FormItem,
    FormLayoutDeepContext: FormLayoutDeepContext,
    FormLayoutShallowContext: FormLayoutShallowContext,
    useFormDeepLayout: useFormDeepLayout,
    useFormShallowLayout: useFormShallowLayout,
    useFormLayout: useFormLayout,
    FormLayout: FormLayout,
    usePlaceholder: usePlaceholder,
    PreviewText: PreviewText,
    Reset: Reset,
    Submit: Submit,
    Form: Form,
    Input: Input,
    Select: Select,
    DatePicker: DatePicker,
    TimePicker: TimePicker,
    Cascader: Cascader,
    InputNumber: InputNumber,
    Switch: Switch,
    Radio: Radio,
    Checkbox: Checkbox,
    FormButtonGroup: FormButtonGroup,
    JsonSchema: JsonSchema,
    TreeSelect: TreeSelect,
    SelectV2: SelectV2,
    Slider: Slider,
    Mention: Mention
  });

  const install = installer.install;
  const version = installer.version;

  Object.defineProperty(exports, 'addClass', {
    enumerable: true,
    get: function () { return index$1.addClass; }
  });
  Object.defineProperty(exports, 'addUnit', {
    enumerable: true,
    get: function () { return index$1.addUnit; }
  });
  Object.defineProperty(exports, 'buildProps', {
    enumerable: true,
    get: function () { return index$1.buildProps; }
  });
  Object.defineProperty(exports, 'definePropType', {
    enumerable: true,
    get: function () { return index$1.definePropType; }
  });
  Object.defineProperty(exports, 'getScrollBarWidth', {
    enumerable: true,
    get: function () { return index$1.getScrollBarWidth; }
  });
  Object.defineProperty(exports, 'getStyle', {
    enumerable: true,
    get: function () { return index$1.getStyle; }
  });
  Object.defineProperty(exports, 'hasClass', {
    enumerable: true,
    get: function () { return index$1.hasClass; }
  });
  Object.defineProperty(exports, 'isArray', {
    enumerable: true,
    get: function () { return index$1.isArray; }
  });
  Object.defineProperty(exports, 'isBoolean', {
    enumerable: true,
    get: function () { return index$1.isBoolean; }
  });
  Object.defineProperty(exports, 'isClient', {
    enumerable: true,
    get: function () { return index$1.isClient; }
  });
  Object.defineProperty(exports, 'isDate', {
    enumerable: true,
    get: function () { return index$1.isDate; }
  });
  Object.defineProperty(exports, 'isFunction', {
    enumerable: true,
    get: function () { return index$1.isFunction; }
  });
  Object.defineProperty(exports, 'isNumber', {
    enumerable: true,
    get: function () { return index$1.isNumber; }
  });
  Object.defineProperty(exports, 'isObject', {
    enumerable: true,
    get: function () { return index$1.isObject; }
  });
  Object.defineProperty(exports, 'isPromise', {
    enumerable: true,
    get: function () { return index$1.isPromise; }
  });
  Object.defineProperty(exports, 'isString', {
    enumerable: true,
    get: function () { return index$1.isString; }
  });
  Object.defineProperty(exports, 'isUndefined', {
    enumerable: true,
    get: function () { return index$1.isUndefined; }
  });
  Object.defineProperty(exports, 'isWindow', {
    enumerable: true,
    get: function () { return index$1.isWindow; }
  });
  Object.defineProperty(exports, 'keysOf', {
    enumerable: true,
    get: function () { return index$1.keysOf; }
  });
  Object.defineProperty(exports, 'mutable', {
    enumerable: true,
    get: function () { return index$1.mutable; }
  });
  Object.defineProperty(exports, 'removeClass', {
    enumerable: true,
    get: function () { return index$1.removeClass; }
  });
  Object.defineProperty(exports, 'scrollIntoView', {
    enumerable: true,
    get: function () { return index$1.scrollIntoView; }
  });
  Object.defineProperty(exports, 'withInstall', {
    enumerable: true,
    get: function () { return index$1.withInstall; }
  });
  exports.AUDIO_TYPE = AUDIO_TYPE;
  exports.ArrayItemsInner = ArrayItemsInner;
  exports.ArrayTable = ArrayTable;
  exports.CANCEL_EVENT = CANCEL_EVENT;
  exports.CHANGE_EVENT = CHANGE_EVENT;
  exports.COMMOM_TYPE = COMMOM_TYPE;
  exports.DIV_TAG = DIV_TAG;
  exports.EVENT_CODE = EVENT_CODE;
  exports.EXCEL_TYPE = EXCEL_TYPE;
  exports.ElAffixBottom = ElAffixBottom;
  exports.ElArrayItems = ElArrayItems;
  exports.ElArrayTable = ElArrayTable;
  exports.ElArrayTableColumn = ElArrayTableColumn;
  exports.ElBubble = ElBubble;
  exports.ElBubbleList = ElBubbleList;
  exports.ElCase = ElCase;
  exports.ElConfigProviderV2 = ElConfigProviderV2;
  exports.ElContextmenu = ElContextmenu;
  exports.ElDialogV2 = ElDialogV2;
  exports.ElDot = ElDot;
  exports.ElDraggableTable = ElDraggableTable;
  exports.ElDrawerV2 = ElDrawerV2;
  exports.ElDropdownV2 = ElDropdownV2;
  exports.ElDropdownV2Panel = ElDropdownV2Panel;
  exports.ElEditable = ElEditable;
  exports.ElEditor = ElEditor;
  exports.ElEditorToolbar = ElEditorToolbar;
  exports.ElEllipsis = ElEllipsis;
  exports.ElEmoji = ElEmoji;
  exports.ElEmoticon = ElEmoticon;
  exports.ElFlex = ElFlex;
  exports.ElFontEmoticon = ElFontEmoticon;
  exports.ElFullScreen = ElFullScreen;
  exports.ElList = ElList;
  exports.ElLoadMore = ElLoadMore;
  exports.ElPreviewFile = ElPreviewFile;
  exports.ElQrCode = ElQrCode;
  exports.ElReadMore = ElReadMore;
  exports.ElRenderer = ElRenderer;
  exports.ElReset = ElReset;
  exports.ElSelectV3 = ElSelectV3;
  exports.ElSortableList = ElSortableList;
  exports.ElSplit = ElSplit;
  exports.ElSubmit = ElSubmit;
  exports.ElTableDialog = ElTableDialog;
  exports.ElTablePage = ElTablePage;
  exports.ElTextEllipsis = ElTextEllipsis;
  exports.ElTextHighlight = ElTextHighlight;
  exports.ElVideo = ElVideo;
  exports.ElVideoViewer = ElVideoViewer;
  exports.ElVirtualList = ElVirtualList;
  exports.Formily = index;
  exports.IMAGE_TYPE = IMAGE_TYPE;
  exports.INPUT_EVENT = INPUT_EVENT;
  exports.INSTALLED_KEY = INSTALLED_KEY;
  exports.IconsVue = IconsVue;
  exports.LI_TAG = LI_TAG;
  exports.MARKDOWN_TYPE = MARKDOWN_TYPE;
  exports.OptionTypeEnum = OptionTypeEnum;
  exports.PDF_TYPE = PDF_TYPE;
  exports.PPT_TYPE = PPT_TYPE;
  exports.PRESET_FILE_ICONS = PRESET_FILE_ICONS;
  exports.P_TAG = P_TAG;
  exports.SPAN_TAG = SPAN_TAG;
  exports.SURE_EVENT = SURE_EVENT;
  exports.Trie = Trie;
  exports.UL_TAG = UL_TAG;
  exports.UNKNOWN_TYPE = UNKNOWN_TYPE;
  exports.UPDATE_MODEL_EVENT = UPDATE_MODEL_EVENT;
  exports.VIDEO_TYPE = VIDEO_TYPE;
  exports.WORD_TYPE = WORD_TYPE;
  exports.WX_TYPE = WX_TYPE;
  exports.ZIP_TYPE = ZIP_TYPE;
  exports.affixBottomEmits = affixBottomEmits;
  exports.affixBottomProps = affixBottomProps;
  exports.bubbleEmits = bubbleEmits;
  exports.bubbleListEmits = bubbleListEmits;
  exports.bubbleListProps = bubbleListProps;
  exports.bubbleProps = bubbleProps;
  exports.caseEmits = caseEmits;
  exports.caseProps = caseProps;
  exports.composeExport = composeExport$1;
  exports.configProviderV2ContextKey = configProviderV2ContextKey;
  exports.configProviderV2Props = configProviderV2Props;
  exports.contextmenuEmits = contextmenuEmits;
  exports.contextmenuProps = contextmenuProps;
  exports.debounce = debounce;
  exports.debounceMinor = debounceMinor;
  exports["default"] = installer;
  exports.dialogV2Emits = dialogV2Emits;
  exports.dialogV2Props = dialogV2Props;
  exports.directives = directives;
  exports.dotEmits = dotEmits;
  exports.dotProps = dotProps;
  exports.download = download;
  exports.downloadBlobFile = downloadBlobFile;
  exports.draggableTableEmits = draggableTableEmits;
  exports.draggableTableProps = draggableTableProps;
  exports.drawerV2Emits = drawerV2Emits;
  exports.drawerV2Props = drawerV2Props;
  exports.dropdownV2Emits = dropdownV2Emits;
  exports.dropdownV2Props = dropdownV2Props;
  exports.editableEmits = editableEmits;
  exports.editableProps = editableProps;
  exports.editorEmits = editorEmits;
  exports.editorProps = editorProps;
  exports.ellipsisEmits = ellipsisEmits;
  exports.ellipsisProps = ellipsisProps;
  exports.emojiEmits = emojiEmits;
  exports.emojiProps = emojiProps;
  exports.emoticonBaseList = emoticonBaseList;
  exports.emoticonEmits = emoticonEmits;
  exports.emoticonList = emoticonList;
  exports.emoticonListKeys = emoticonListKeys;
  exports.emoticonListMap = emoticonListMap;
  exports.emoticonProps = emoticonProps;
  exports.emotionParser = emotionParser;
  exports.filterOption = filterOption;
  exports.flexEmits = flexEmits;
  exports.flexProps = flexProps;
  exports.formatTime = formatTime;
  exports.fullScreenEmits = fullScreenEmits;
  exports.fullScreenProps = fullScreenProps;
  exports.getCfgOptions = getCfgOptions;
  exports.getDefaultIconConfig = getDefaultIconConfig;
  exports.getDefaultTablePageConfig = getDefaultTablePageConfig;
  exports.getIconState = getIconState;
  exports.getTextContent = getTextContent;
  exports.globalConfig = globalConfig;
  exports.inBrowser = inBrowser;
  exports.install = install;
  exports.isDef = isDef$1;
  exports.isUndef = isUndef;
  exports.listEmits = listEmits;
  exports.listProps = listProps;
  exports.loadMoreEmits = loadMoreEmits;
  exports.loadMoreProps = loadMoreProps;
  exports.matchExt = matchExt;
  exports.mergeGlobalConfig = mergeGlobalConfig;
  exports.observeResize = observeResize;
  exports.parseFileName = parseFileName;
  exports.parseSize = parseSize;
  exports.previewFileEmits = previewFileEmits;
  exports.previewFileProps = previewFileProps;
  exports.previewImage = previewImage;
  exports.qrCodeEmits = qrCodeEmits;
  exports.qrCodeProps = qrCodeProps;
  exports.readMoreEmits = readMoreEmits;
  exports.readMoreProps = readMoreProps;
  exports.rendererEmits = rendererEmits;
  exports.rendererProps = rendererProps;
  exports.resetEmits = resetEmits;
  exports.resetProps = resetProps;
  exports.selectV3Emits = selectV3Emits;
  exports.selectV3Props = selectV3Props;
  exports.setEmojiMartData = setEmojiMartData;
  exports.sortableListEmits = sortableListEmits;
  exports.sortableListProps = sortableListProps;
  exports.splitEmits = splitEmits;
  exports.splitProps = splitProps;
  exports.submitEmits = submitEmits;
  exports.submitProps = submitProps;
  exports.tableDialogEmits = tableDialogEmits;
  exports.tableDialogProps = tableDialogProps;
  exports.tablePageContextKey = tablePageContextKey;
  exports.tablePageEmits = tablePageEmits;
  exports.tablePageProps = tablePageProps;
  exports.textEllipsisEmits = textEllipsisEmits;
  exports.textEllipsisProps = textEllipsisProps;
  exports.textHighlightEmits = textHighlightEmits;
  exports.textHighlightProps = textHighlightProps;
  exports.throttle = throttle;
  exports.uid = uid;
  exports.unobserveResize = unobserveResize;
  exports.useEventCallback = useEventCallback;
  exports.useField = useField$1;
  exports.useFontEmoticon = useFontEmoticon;
  exports.useForm = useForm$1;
  exports.useOverflow = useOverflow$1;
  exports.useResize = useResize;
  exports.useState = useState;
  exports.useTablePageConfig = useTablePageConfig;
  exports.useWindowSize = useWindowSize;
  exports.version = version;
  exports.videoEmits = videoEmits;
  exports.videoProps = videoProps;
  exports.videoViewerEmits = videoViewerEmits;
  exports.videoViewerProps = videoViewerProps;
  exports.virtualListEmits = virtualListEmits;
  exports.virtualListProps = virtualListProps;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
