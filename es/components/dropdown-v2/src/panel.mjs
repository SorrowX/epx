import { defineComponent, getCurrentInstance, ref, provide, reactive, h } from 'vue';
import { useNamespace } from 'element-plus';
import SubItem from './sub-item.mjs';
import Item from './item.mjs';
import { buildProps, definePropType } from 'element-plus/es/utils/index';
import { DIV_TAG, UL_TAG } from '../../../constants/tags.mjs';

const panelProps = buildProps({
  options: {
    type: definePropType(Array),
    default: () => []
  },
  showTimeout: {
    type: definePropType(Number),
    default: 200
  },
  hideTimeout: {
    type: definePropType(Number),
    default: 200
  },
  pure: {
    type: definePropType(Boolean),
    default: false
  },
  tooltipOptions: {
    type: definePropType(Object)
  },
  width: {
    type: definePropType([String, Number]),
    default: "140px"
  },
  trigger: {
    type: definePropType(String),
    default: "hover",
    values: ["hover", "click"]
  }
});
var DropdownV2Panel = defineComponent({
  name: "ElDropdownV2Panel",
  inheritAttrs: false,
  props: panelProps,
  emits: ["open", "close", "select"],
  setup(props, { emit, attrs, expose }) {
    const ns = useNamespace("dropdown-v2");
    const instance = getCurrentInstance();
    const mouseInChild = ref(false);
    const openedItems = ref([]);
    const activeIndex = ref();
    const subItemRefs = ref({});
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
    provide(
      "rootPanel",
      reactive({
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
    provide(`subItem:${instance.uid}`, {
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
            return h(
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
            return h(Item, { option, level });
          }
        });
      };
      return props.pure ? h(
        DIV_TAG,
        { class: [ns.b("panel"), attrs.class] },
        renderChilds(props.options, 0)
      ) : h(DIV_TAG, { class: [ns.b("panel"), attrs.class] }, [
        h(
          UL_TAG,
          { class: [ns.b("list"), ns.b("panel-content")] },
          renderChilds(props.options, 0)
        )
      ]);
    };
  }
});

export { DropdownV2Panel as default, panelProps };
//# sourceMappingURL=panel.mjs.map
