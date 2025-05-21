import { defineComponent, getCurrentInstance, resolveComponent, h, camelize, capitalize } from 'vue';
import { compile } from '@vue/compiler-dom';
import * as runtimeDom from '@vue/runtime-dom';
import { nodeViewProps, NodeViewWrapper } from '@tiptap/vue-3';

const compileToFunction = (template) => {
  const { code } = compile(template);
  return new Function("Vue", code)(runtimeDom);
};
const resolve = (registry, name) => {
  return registry && (registry[name] || registry[camelize(name)] || registry[capitalize(camelize(name))]);
};
const isVueComponent = (registry, name) => !!resolve(registry, name);
const Component = defineComponent({
  name: "Component",
  inheritAttrs: false,
  props: {
    ...nodeViewProps
  },
  setup(props) {
    const instance = getCurrentInstance();
    return () => {
      var _a, _b;
      const { node } = props;
      const attrs = { ...node.attrs.props };
      const template = attrs.template;
      delete attrs.template;
      const isCustomTag = isVueComponent(
        (_b = (_a = instance == null ? void 0 : instance.appContext) == null ? void 0 : _a.components) != null ? _b : {},
        attrs.is
      );
      const parent = isCustomTag ? resolveComponent(attrs.is) : attrs.is;
      const child = {
        render: compileToFunction(template)
      };
      const renderChild = () => {
        return h(
          parent,
          { ...attrs },
          isCustomTag ? {
            default: () => h(child)
          } : [h(child)]
        );
      };
      return h(
        NodeViewWrapper,
        {
          class: ["tiptap-extension-component", attrs["wrap-class"]]
        },
        {
          default: () => renderChild()
        }
      );
    };
  }
});

export { Component };
//# sourceMappingURL=component.mjs.map
