'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var iconsVue = require('@element-plus/icons-vue');
var context = require('../context.js');
var useTypedEffect = require('../hooks/use-typed-effect.js');
var useTypingConfig = require('../hooks/use-typing-config.js');
var loading = require('../loading.js');
var bubble = require('./bubble.js');
var tags = require('../../../../constants/tags.js');
var index = require('element-plus/es/utils/index');

var Bubble = vue.defineComponent({
  name: "ElBubble",
  props: bubble.bubbleProps,
  setup(props, { attrs, slots, expose }) {
    const ns = elementPlus.useNamespace("bubble");
    const prefixCls = ns.b();
    const content = vue.computed(() => {
      var _a;
      return (_a = props.content) != null ? _a : "";
    });
    const { onUpdate } = vue.unref(context.useBubbleContextInject());
    const divRef = vue.ref();
    const [typingEnabled, typingStep, typingInterval, typingSuffix] = useTypingConfig["default"](props);
    const [typedContent, isTyping] = useTypedEffect["default"](
      content,
      typingEnabled,
      typingStep,
      typingInterval
    );
    const hasTypingClass = vue.computed(
      () => isTyping.value && !props.loading && !props.messageRender && !typingSuffix.value
    );
    const triggerTypingCompleteRef = vue.ref(false);
    vue.watchEffect(() => {
      var _a;
      if (!isTyping.value && !props.loading) {
        if (!triggerTypingCompleteRef.value) {
          triggerTypingCompleteRef.value = true;
          (_a = props.onTypingComplete) == null ? void 0 : _a.call(props);
        }
      } else {
        triggerTypingCompleteRef.value = false;
      }
    });
    vue.watch(typedContent, () => {
      onUpdate == null ? void 0 : onUpdate();
    });
    expose({
      nativeElement: divRef
    });
    return () => {
      const {
        avatar,
        messageRender,
        loading: loading$1,
        loadingRender,
        variant,
        shape,
        header,
        footer,
        placement
      } = props;
      const renderAvatar = () => {
        return avatar || slots.avatar ? vue.h(
          tags.DIV_TAG,
          {
            class: ns.b("avatar")
          },
          [
            slots.avatar ? slots.avatar() : vue.isVNode(avatar) ? avatar : vue.h(elementPlus.ElAvatar, {
              icon: iconsVue.UserFilled,
              ...index.isBoolean(avatar) ? {} : avatar
            })
          ]
        ) : "";
      };
      const renderHeader = () => {
        var _a, _b;
        return (header || slots.header) && vue.h(
          tags.DIV_TAG,
          {
            style: props.headerStyle,
            class: [`${prefixCls}-header`, props.headerClass]
          },
          (_b = (_a = slots.header) == null ? void 0 : _a.call(slots)) != null ? _b : header
        );
      };
      const renderContent = () => {
        const mergedContent = () => messageRender ? messageRender(typedContent.value) : typedContent.value;
        const contentNode = () => {
          var _a;
          if (loading$1 || slots.loading) {
            return [
              slots.loading ? slots.loading() : loadingRender ? loadingRender() : vue.h(loading["default"])
            ];
          } else {
            const contentSlot = (_a = slots.default) != null ? _a : slots.content;
            return [
              contentSlot ? contentSlot() : mergedContent(),
              isTyping.value ? vue.toValue(typingSuffix) : ""
            ];
          }
        };
        return vue.h(
          tags.DIV_TAG,
          {
            style: props.contentStyle,
            class: [
              `${prefixCls}-content`,
              `${prefixCls}-content-${variant}`,
              { [`${prefixCls}-content-${shape}`]: shape },
              props.contentClass
            ]
          },
          contentNode()
        );
      };
      const renderFooter = () => {
        var _a, _b;
        return (footer || slots.footer) && vue.h(
          tags.DIV_TAG,
          {
            style: props.footerStyle,
            class: [`${prefixCls}-footer`, props.footerClass]
          },
          (_b = (_a = slots.footer) == null ? void 0 : _a.call(slots)) != null ? _b : footer
        );
      };
      const renderFullContent = () => {
        const contentVNode = renderContent();
        if (header || slots.header || footer || slots.footer) {
          return vue.h(
            tags.DIV_TAG,
            {
              class: ns.b("content-wrapper")
            },
            [renderHeader(), contentVNode, renderFooter()]
          );
        }
        return contentVNode;
      };
      return vue.h(
        tags.DIV_TAG,
        {
          ...attrs,
          ref: divRef,
          class: [
            prefixCls,
            ns.b(placement),
            hasTypingClass.value ? [ns.b("typing")] : ""
          ].concat(attrs.class)
        },
        [renderAvatar(), renderFullContent()]
      );
    };
  }
});

exports["default"] = Bubble;
//# sourceMappingURL=index.js.map
