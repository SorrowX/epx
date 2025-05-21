import { defineComponent, ref, provide, h, Transition, watch, onBeforeUnmount } from 'vue';
import { isVoidField } from '@formily/core';
import { connect, mapProps } from '@formily/vue';
import { useNamespace, ElPopover, ElIcon, ElTooltip } from 'element-plus';
import { InfoFilled, CircleClose, CircleCheck, Warning } from '@element-plus/icons-vue';
import { useFormLayout, FormLayoutShallowContext } from '../form-layout/index.mjs';
import { resolveComponent } from '../__builtins__/shared/resolve-component.mjs';
import { composeExport } from '../__builtins__/shared/utils.mjs';
import { stylePrefix } from '../__builtins__/configs/index.mjs';

const useOverflow = (containerRef) => {
  const overflow = ref(false);
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
  const stopWatch = watch(
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
  onBeforeUnmount(() => {
    cleanup();
    stopWatch();
  });
  return overflow;
};
const ICON_MAP = {
  info: () => h(ElIcon, {}, { default: () => h(InfoFilled) }),
  error: () => h(ElIcon, {}, { default: () => h(CircleClose) }),
  success: () => h(ElIcon, {}, { default: () => h(CircleCheck) }),
  warning: () => h(ElIcon, {}, { default: () => h(Warning) })
};
const FormBaseItem = defineComponent({
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
    const active = ref(false);
    const deepLayoutRef = useFormLayout();
    const prefixCls = `${stylePrefix}-form-item`;
    const ns = useNamespace("f-form-item");
    const containerRef = ref();
    const overflow = useOverflow(containerRef);
    provide(FormLayoutShallowContext, ref({}));
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
      const formatChildren = feedbackLayout === "popover" ? h(
        ElPopover,
        {
          disabled: !feedbackText,
          placement: "top",
          width: "auto"
        },
        {
          reference: () => h("div", {}, { default: () => {
            var _a2;
            return (_a2 = slots.default) == null ? void 0 : _a2.call(slots);
          } }),
          default: () => [
            h(
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
        const labelChildren = h(
          "div",
          {
            class: `${prefixCls}-label-content`,
            ref: containerRef
          },
          {
            default: () => [
              asterisk && h(
                "span",
                { class: `${prefixCls}-asterisk` },
                { default: () => ["*"] }
              ),
              h("label", {}, { default: () => [resolveComponent(label)] })
            ]
          }
        );
        const isTextTooltip = tooltip && tooltipLayout === "text";
        if (isTextTooltip || overflow.value) {
          return h(
            ElTooltip,
            {
              placement: "top"
            },
            {
              default: () => [labelChildren],
              content: () => h(
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
          return h(
            "span",
            {
              class: `${prefixCls}-label-tooltip`
            },
            {
              default: () => [
                h(
                  ElTooltip,
                  {
                    placement: "top"
                  },
                  {
                    default: ICON_MAP.info,
                    content: () => h(
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
      const renderLabel = label && h(
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
            prefix && h(
              "div",
              { class: `${prefixCls}-label-prefix` },
              {
                default: () => [resolveComponent(prefix)]
              }
            ),
            renderLabelText(),
            renderTooltipIcon(),
            label && h(
              "span",
              {
                class: `${prefixCls}-colon`
              },
              { default: () => [colon ? ":" : ""] }
            ),
            suffix && h(
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
      const renderFeedback = h(
        Transition,
        {
          name: `${ns.namespace.value}-zoom-in-top`
        },
        {
          default: () => shouldShowError ? h(
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
      const renderExtra = extra && h(
        "div",
        { class: `${prefixCls}-extra` },
        { default: () => [resolveComponent(extra)] }
      );
      const renderContent = h(
        "div",
        {
          class: {
            [`${prefixCls}-control`]: true,
            [`${prefixCls}-item-col-${wrapperCol}`]: enableCol && !!wrapperCol
          }
        },
        {
          default: () => [
            h(
              "div",
              { class: `${prefixCls}-control-content` },
              {
                default: () => [
                  addonBefore && h(
                    "div",
                    { class: `${prefixCls}-addon-before` },
                    {
                      default: () => [resolveComponent(addonBefore)]
                    }
                  ),
                  h(
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
                        feedbackIcon && h(
                          "div",
                          { class: `${prefixCls}-feedback-icon` },
                          {
                            default: () => [
                              typeof feedbackIcon === "string" ? h("i", { class: feedbackIcon }, {}) : resolveComponent(feedbackIcon)
                            ]
                          }
                        )
                      ]
                    }
                  ),
                  addonAfter && h(
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
      return h(
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
const Item = connect(
  FormBaseItem,
  mapProps(
    { validateStatus: true, title: "label", required: true },
    (props, field) => {
      if (isVoidField(field))
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
      if (isVoidField(field))
        return props;
      if (!field)
        return props;
      return {
        feedbackStatus: field.validateStatus === "validating" ? "pending" : Array.isArray(field.decorator) && ((_a = field.decorator[1]) == null ? void 0 : _a.feedbackStatus) || field.validateStatus
      };
    },
    (props, field) => {
      if (isVoidField(field))
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

export { FormBaseItem, FormItem, FormItem as default };
//# sourceMappingURL=index.mjs.map
