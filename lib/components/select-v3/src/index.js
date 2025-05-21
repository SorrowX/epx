'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var index$1 = require('../../icons-vue/index.js');
var index = require('../../text-ellipsis/index.js');
var selectV3 = require('./select-v3.js');
var tags = require('../../../constants/tags.js');

const { BusinessWechat, Wechat } = index$1;
var SelectV3 = vue.defineComponent({
  name: "ElSelectV3",
  inheritAttrs: false,
  props: selectV3.selectV3Props,
  emits: selectV3.selectV3Emits,
  setup(props, { attrs, slots }) {
    const { t } = elementPlus.useLocale();
    const ns = elementPlus.useNamespace("select-v3");
    const renderIcon = (item) => {
      const type = Number(item.type);
      const isWechat = type === selectV3.OptionTypeEnum.Wechat;
      const isBusinessWechat = type === selectV3.OptionTypeEnum.BusinessWechat;
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
      const { item, index: index$1 } = data;
      return vue.h(tags.DIV_TAG, { class: ns.e("item"), key: (_a = item.value) != null ? _a : index$1 }, [
        renderIcon(item),
        vue.h(index.ElTextEllipsis, {
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

exports["default"] = SelectV3;
//# sourceMappingURL=index.js.map
