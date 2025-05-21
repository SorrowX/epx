import { defineComponent, computed, h } from 'vue';
import { useLocale, useNamespace, ElPagination } from 'element-plus';
import { ElAffixBottom } from '../../affix-bottom/index.mjs';
import { SPAN_TAG, DIV_TAG } from '../../../constants/tags.mjs';

var EpPagination = defineComponent({
  name: "EpPagination",
  inheritAttrs: false,
  setup(props, { slots, attrs }) {
    const { t } = useLocale();
    const ns = useNamespace("pagination-wrapper");
    const ROOT_PREFIX = ns.b();
    const totalPageSize = computed(() => {
      return Math.ceil(attrs.total / attrs.pageSize);
    });
    const total = computed(() => {
      return attrs.total;
    });
    const singlePage = computed(() => {
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
      const paginationVNode = h(ElPagination, paginationData, slots);
      const totalPageSizeVNode = h(
        SPAN_TAG,
        {
          class: `${ROOT_PREFIX}__total`
        },
        t("epx.tablePage.totalPageSize", { totalPageSize: totalPageSize.value })
      );
      const recordVNode = h(
        SPAN_TAG,
        {
          class: `${ROOT_PREFIX}__record`
        },
        t("epx.tablePage.total", { total: total.value })
      );
      const wrapperVNode = h(DIV_TAG, { class: ROOT_PREFIX }, [
        h(
          DIV_TAG,
          { class: `${ROOT_PREFIX}__left` },
          attrs.showRecord ? [recordVNode] : []
        ),
        h(DIV_TAG, { class: `${ROOT_PREFIX}__right` }, [
          attrs.showTotal ? totalPageSizeVNode : "",
          paginationVNode
        ])
      ]);
      return h(
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

export { EpPagination as default };
//# sourceMappingURL=pagination.mjs.map
