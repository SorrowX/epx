'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var core = require('@formily/core');
var vue$1 = require('@formily/vue');
var elementPlus = require('element-plus');
var iconsVue = require('@element-plus/icons-vue');
var index = require('../form-layout/index.js');
var resolveComponent = require('../__builtins__/shared/resolve-component.js');
var utils = require('../__builtins__/shared/utils.js');
var index$1 = require('../__builtins__/configs/index.js');

const useOverflow = (containerRef) => {
  const overflow = vue.ref(false);
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
  const stopWatch = vue.watch(
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
  vue.onBeforeUnmount(() => {
    cleanup();
    stopWatch();
  });
  return overflow;
};
const ICON_MAP = {
  info: () => vue.h(elementPlus.ElIcon, {}, { default: () => vue.h(iconsVue.InfoFilled) }),
  error: () => vue.h(elementPlus.ElIcon, {}, { default: () => vue.h(iconsVue.CircleClose) }),
  success: () => vue.h(elementPlus.ElIcon, {}, { default: () => vue.h(iconsVue.CircleCheck) }),
  warning: () => vue.h(elementPlus.ElIcon, {}, { default: () => vue.h(iconsVue.Warning) })
};
const FormBaseItem = vue.defineComponent({
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
    const active = vue.ref(false);
    const deepLayoutRef = index.useFormLayout();
    const prefixCls = `${index$1.stylePrefix}-form-item`;
    const ns = elementPlus.useNamespace("f-form-item");
    const containerRef = vue.ref();
    const overflow = useOverflow(containerRef);
    vue.provide(index.FormLayoutShallowContext, vue.ref({}));
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
      const formatChildren = feedbackLayout === "popover" ? vue.h(
        elementPlus.ElPopover,
        {
          disabled: !feedbackText,
          placement: "top",
          width: "auto"
        },
        {
          reference: () => vue.h("div", {}, { default: () => {
            var _a2;
            return (_a2 = slots.default) == null ? void 0 : _a2.call(slots);
          } }),
          default: () => [
            vue.h(
              "div",
              {
                class: {
                  [`${prefixCls}-${feedbackStatus}-help`]: !!feedbackStatus
                }
              },
              {
                default: () => [
                  feedbackStatus && ["error", "success", "warning"].includes(feedbackStatus) ? ICON_MAP[feedbackStatus]() : "",
                  resolveComponent.resolveComponent(feedbackText)
                ]
              }
            )
          ]
        }
      ) : (_j = slots.default) == null ? void 0 : _j.call(slots);
      const renderLabelText = () => {
        const labelChildren = vue.h(
          "div",
          {
            class: `${prefixCls}-label-content`,
            ref: containerRef
          },
          {
            default: () => [
              asterisk && vue.h(
                "span",
                { class: `${prefixCls}-asterisk` },
                { default: () => ["*"] }
              ),
              vue.h("label", {}, { default: () => [resolveComponent.resolveComponent(label)] })
            ]
          }
        );
        const isTextTooltip = tooltip && tooltipLayout === "text";
        if (isTextTooltip || overflow.value) {
          return vue.h(
            elementPlus.ElTooltip,
            {
              placement: "top"
            },
            {
              default: () => [labelChildren],
              content: () => vue.h(
                "div",
                {},
                {
                  default: () => [
                    overflow.value && resolveComponent.resolveComponent(label),
                    isTextTooltip && resolveComponent.resolveComponent(tooltip)
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
          return vue.h(
            "span",
            {
              class: `${prefixCls}-label-tooltip`
            },
            {
              default: () => [
                vue.h(
                  elementPlus.ElTooltip,
                  {
                    placement: "top"
                  },
                  {
                    default: ICON_MAP.info,
                    content: () => vue.h(
                      "div",
                      {
                        class: `${prefixCls}-label-tooltip-content`
                      },
                      {
                        default: () => [resolveComponent.resolveComponent(tooltip)]
                      }
                    )
                  }
                )
              ]
            }
          );
        }
      };
      const renderLabel = label && vue.h(
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
            prefix && vue.h(
              "div",
              { class: `${prefixCls}-label-prefix` },
              {
                default: () => [resolveComponent.resolveComponent(prefix)]
              }
            ),
            renderLabelText(),
            renderTooltipIcon(),
            label && vue.h(
              "span",
              {
                class: `${prefixCls}-colon`
              },
              { default: () => [colon ? ":" : ""] }
            ),
            suffix && vue.h(
              "div",
              { class: `${prefixCls}-label-suffix` },
              {
                default: () => [resolveComponent.resolveComponent(suffix)]
              }
            )
          ]
        }
      );
      const shouldShowError = !!feedbackText && feedbackLayout !== "popover" && feedbackLayout !== "none";
      const renderFeedback = vue.h(
        vue.Transition,
        {
          name: `${ns.namespace.value}-zoom-in-top`
        },
        {
          default: () => shouldShowError ? vue.h(
            "div",
            {
              class: {
                [`${prefixCls}-${feedbackStatus}-help`]: !!feedbackStatus,
                [`${prefixCls}-help`]: true
              }
            },
            { default: () => [resolveComponent.resolveComponent(feedbackText)] }
          ) : ""
        }
      );
      const renderExtra = extra && vue.h(
        "div",
        { class: `${prefixCls}-extra` },
        { default: () => [resolveComponent.resolveComponent(extra)] }
      );
      const renderContent = vue.h(
        "div",
        {
          class: {
            [`${prefixCls}-control`]: true,
            [`${prefixCls}-item-col-${wrapperCol}`]: enableCol && !!wrapperCol
          }
        },
        {
          default: () => [
            vue.h(
              "div",
              { class: `${prefixCls}-control-content` },
              {
                default: () => [
                  addonBefore && vue.h(
                    "div",
                    { class: `${prefixCls}-addon-before` },
                    {
                      default: () => [resolveComponent.resolveComponent(addonBefore)]
                    }
                  ),
                  vue.h(
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
                        feedbackIcon && vue.h(
                          "div",
                          { class: `${prefixCls}-feedback-icon` },
                          {
                            default: () => [
                              typeof feedbackIcon === "string" ? vue.h("i", { class: feedbackIcon }, {}) : resolveComponent.resolveComponent(feedbackIcon)
                            ]
                          }
                        )
                      ]
                    }
                  ),
                  addonAfter && vue.h(
                    "div",
                    { class: `${prefixCls}-addon-after` },
                    {
                      default: () => [resolveComponent.resolveComponent(addonAfter)]
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
      return vue.h(
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
const Item = vue$1.connect(
  FormBaseItem,
  vue$1.mapProps(
    { validateStatus: true, title: "label", required: true },
    (props, field) => {
      if (core.isVoidField(field))
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
      if (core.isVoidField(field))
        return props;
      if (!field)
        return props;
      return {
        feedbackStatus: field.validateStatus === "validating" ? "pending" : Array.isArray(field.decorator) && ((_a = field.decorator[1]) == null ? void 0 : _a.feedbackStatus) || field.validateStatus
      };
    },
    (props, field) => {
      if (core.isVoidField(field))
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
const FormItem = utils.composeExport(Item, {
  BaseItem: FormBaseItem
});

exports.FormBaseItem = FormBaseItem;
exports.FormItem = FormItem;
exports["default"] = FormItem;
//# sourceMappingURL=index.js.map
