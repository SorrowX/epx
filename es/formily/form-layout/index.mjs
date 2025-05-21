import { defineComponent, ref, watch, provide, inject } from 'vue';
import { h } from '@formily/vue';
import { useResponsiveFormLayout } from './useResponsiveFormLayout.mjs';
import { stylePrefix } from '../__builtins__/configs/index.mjs';

const FormLayoutDeepContext = Symbol(
  "FormLayoutDeepContext"
);
const FormLayoutShallowContext = Symbol("FormLayoutShallowContext");
const useFormDeepLayout = () => inject(FormLayoutDeepContext, ref({}));
const useFormShallowLayout = () => inject(FormLayoutShallowContext, ref({}));
const useFormLayout = () => {
  const shallowLayout = useFormShallowLayout();
  const deepLayout = useFormDeepLayout();
  const formLayout = ref({
    ...deepLayout.value,
    ...shallowLayout.value
  });
  watch(
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
const FormLayout = defineComponent({
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
    const root = ref();
    const { props } = useResponsiveFormLayout(customProps, root);
    const deepLayout = useFormDeepLayout();
    const newDeepLayout = ref({
      ...deepLayout.value
    });
    const shallowProps = ref({});
    watch(
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
    provide(FormLayoutDeepContext, newDeepLayout);
    provide(FormLayoutShallowContext, shallowProps);
    const formPrefixCls = `${stylePrefix}-form`;
    return () => {
      const classNames = {
        [`${formPrefixCls}-${props == null ? void 0 : props.value.layout}`]: true,
        [`${formPrefixCls}-rtl`]: (props == null ? void 0 : props.value.direction) === "rtl",
        [`${formPrefixCls}-${props == null ? void 0 : props.value.size}`]: (props == null ? void 0 : props.value.size) !== void 0,
        [`${props == null ? void 0 : props.value.className}`]: (props == null ? void 0 : props.value.className) !== void 0
      };
      return h(
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

export { FormLayout, FormLayoutDeepContext, FormLayoutShallowContext, FormLayout as default, useFormDeepLayout, useFormLayout, useFormShallowLayout };
//# sourceMappingURL=index.mjs.map
