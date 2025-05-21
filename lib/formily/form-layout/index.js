'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var vue$1 = require('@formily/vue');
var useResponsiveFormLayout = require('./useResponsiveFormLayout.js');
var index = require('../__builtins__/configs/index.js');

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
    const { props } = useResponsiveFormLayout.useResponsiveFormLayout(customProps, root);
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
    const formPrefixCls = `${index.stylePrefix}-form`;
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

exports.FormLayout = FormLayout;
exports.FormLayoutDeepContext = FormLayoutDeepContext;
exports.FormLayoutShallowContext = FormLayoutShallowContext;
exports["default"] = FormLayout;
exports.useFormDeepLayout = useFormDeepLayout;
exports.useFormLayout = useFormLayout;
exports.useFormShallowLayout = useFormShallowLayout;
//# sourceMappingURL=index.js.map
