'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var index = require('../../affix-bottom/index.js');
var tags = require('../../../constants/tags.js');

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
        tags.SPAN_TAG,
        {
          class: `${ROOT_PREFIX}__total`
        },
        t("epx.tablePage.totalPageSize", { totalPageSize: totalPageSize.value })
      );
      const recordVNode = vue.h(
        tags.SPAN_TAG,
        {
          class: `${ROOT_PREFIX}__record`
        },
        t("epx.tablePage.total", { total: total.value })
      );
      const wrapperVNode = vue.h(tags.DIV_TAG, { class: ROOT_PREFIX }, [
        vue.h(
          tags.DIV_TAG,
          { class: `${ROOT_PREFIX}__left` },
          attrs.showRecord ? [recordVNode] : []
        ),
        vue.h(tags.DIV_TAG, { class: `${ROOT_PREFIX}__right` }, [
          attrs.showTotal ? totalPageSizeVNode : "",
          paginationVNode
        ])
      ]);
      return vue.h(
        index.ElAffixBottom,
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

exports["default"] = EpPagination;
//# sourceMappingURL=pagination.js.map
