import { defineComponent, h } from 'vue';
import { useLocale, useNamespace, ElSelectV2, ElIcon } from 'element-plus';
import * as index from '../../icons-vue/index.mjs';
import { ElTextEllipsis } from '../../text-ellipsis/index.mjs';
import { selectV3Props, selectV3Emits, OptionTypeEnum } from './select-v3.mjs';
import { DIV_TAG } from '../../../constants/tags.mjs';

const { BusinessWechat, Wechat } = index;
var SelectV3 = defineComponent({
  name: "ElSelectV3",
  inheritAttrs: false,
  props: selectV3Props,
  emits: selectV3Emits,
  setup(props, { attrs, slots }) {
    const { t } = useLocale();
    const ns = useNamespace("select-v3");
    const renderIcon = (item) => {
      const type = Number(item.type);
      const isWechat = type === OptionTypeEnum.Wechat;
      const isBusinessWechat = type === OptionTypeEnum.BusinessWechat;
      const comp = props.icon ? props.icon : isWechat ? Wechat : isBusinessWechat ? BusinessWechat : "";
      return comp ? h(
        ElIcon,
        {
          size: isWechat ? 16 : 18,
          color: isWechat ? "#07C160" : "",
          ...props.iconOptions
        },
        {
          default: () => h(comp)
        }
      ) : "";
    };
    const renderItem = (data) => {
      var _a;
      const { item, index } = data;
      return h(DIV_TAG, { class: ns.e("item"), key: (_a = item.value) != null ? _a : index }, [
        renderIcon(item),
        h(ElTextEllipsis, {
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
      return h(
        ElSelectV2,
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

export { SelectV3 as default };
//# sourceMappingURL=index.mjs.map
