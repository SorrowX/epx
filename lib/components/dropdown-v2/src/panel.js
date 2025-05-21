'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var subItem = require('./sub-item.js');
var item = require('./item.js');
var index = require('element-plus/es/utils/index');
var tags = require('../../../constants/tags.js');

const panelProps = index.buildProps({
  options: {
    type: index.definePropType(Array),
    default: () => []
  },
  showTimeout: {
    type: index.definePropType(Number),
    default: 200
  },
  hideTimeout: {
    type: index.definePropType(Number),
    default: 200
  },
  pure: {
    type: index.definePropType(Boolean),
    default: false
  },
  tooltipOptions: {
    type: index.definePropType(Object)
  },
  width: {
    type: index.definePropType([String, Number]),
    default: "140px"
  },
  trigger: {
    type: index.definePropType(String),
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
              subItem["default"],
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
            return vue.h(item["default"], { option, level });
          }
        });
      };
      return props.pure ? vue.h(
        tags.DIV_TAG,
        { class: [ns.b("panel"), attrs.class] },
        renderChilds(props.options, 0)
      ) : vue.h(tags.DIV_TAG, { class: [ns.b("panel"), attrs.class] }, [
        vue.h(
          tags.UL_TAG,
          { class: [ns.b("list"), ns.b("panel-content")] },
          renderChilds(props.options, 0)
        )
      ]);
    };
  }
});

exports["default"] = DropdownV2Panel;
exports.panelProps = panelProps;
//# sourceMappingURL=panel.js.map
