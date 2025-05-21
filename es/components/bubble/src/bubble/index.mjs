import { defineComponent, computed, unref, ref, watchEffect, watch, h, isVNode, toValue } from 'vue';
import { useNamespace, ElAvatar } from 'element-plus';
import { UserFilled } from '@element-plus/icons-vue';
import { useBubbleContextInject } from '../context.mjs';
import useTypedEffect from '../hooks/use-typed-effect.mjs';
import useTypingConfig from '../hooks/use-typing-config.mjs';
import Loading from '../loading.mjs';
import { bubbleProps } from './bubble.mjs';
import { DIV_TAG } from '../../../../constants/tags.mjs';
import { isBoolean } from 'element-plus/es/utils/index';

var Bubble = defineComponent({
  name: "ElBubble",
  props: bubbleProps,
  setup(props, { attrs, slots, expose }) {
    const ns = useNamespace("bubble");
    const prefixCls = ns.b();
    const content = computed(() => {
      var _a;
      return (_a = props.content) != null ? _a : "";
    });
    const { onUpdate } = unref(useBubbleContextInject());
    const divRef = ref();
    const [typingEnabled, typingStep, typingInterval, typingSuffix] = useTypingConfig(props);
    const [typedContent, isTyping] = useTypedEffect(
      content,
      typingEnabled,
      typingStep,
      typingInterval
    );
    const hasTypingClass = computed(
      () => isTyping.value && !props.loading && !props.messageRender && !typingSuffix.value
    );
    const triggerTypingCompleteRef = ref(false);
    watchEffect(() => {
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
    watch(typedContent, () => {
      onUpdate == null ? void 0 : onUpdate();
    });
    expose({
      nativeElement: divRef
    });
    return () => {
      const {
        avatar,
        messageRender,
        loading,
        loadingRender,
        variant,
        shape,
        header,
        footer,
        placement
      } = props;
      const renderAvatar = () => {
        return avatar || slots.avatar ? h(
          DIV_TAG,
          {
            class: ns.b("avatar")
          },
          [
            slots.avatar ? slots.avatar() : isVNode(avatar) ? avatar : h(ElAvatar, {
              icon: UserFilled,
              ...isBoolean(avatar) ? {} : avatar
            })
          ]
        ) : "";
      };
      const renderHeader = () => {
        var _a, _b;
        return (header || slots.header) && h(
          DIV_TAG,
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
          if (loading || slots.loading) {
            return [
              slots.loading ? slots.loading() : loadingRender ? loadingRender() : h(Loading)
            ];
          } else {
            const contentSlot = (_a = slots.default) != null ? _a : slots.content;
            return [
              contentSlot ? contentSlot() : mergedContent(),
              isTyping.value ? toValue(typingSuffix) : ""
            ];
          }
        };
        return h(
          DIV_TAG,
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
        return (footer || slots.footer) && h(
          DIV_TAG,
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
          return h(
            DIV_TAG,
            {
              class: ns.b("content-wrapper")
            },
            [renderHeader(), contentVNode, renderFooter()]
          );
        }
        return contentVNode;
      };
      return h(
        DIV_TAG,
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

export { Bubble as default };
//# sourceMappingURL=index.mjs.map
