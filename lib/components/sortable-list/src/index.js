'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var useSortable = require('@vueuse/integrations/useSortable');
var sortableList = require('./sortable-list.js');
var event = require('../../../constants/event.js');

var SortableList = vue.defineComponent({
  name: "ElSortableList",
  inheritAttrs: false,
  props: sortableList.sortableListProps,
  emits: sortableList.sortableListEmits,
  setup(props, { attrs, slots, emit, expose }) {
    const ns = elementPlus.useNamespace("sortable-list");
    const target = vue.ref();
    const list = vue.computed({
      get() {
        return props.modelValue;
      },
      set(list2) {
        emit(event.UPDATE_MODEL_EVENT, list2);
        emit(event.CHANGE_EVENT, list2);
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

exports["default"] = SortableList;
//# sourceMappingURL=index.js.map
