import { Node, mergeAttributes } from '@tiptap/core';
import { VueNodeViewRenderer } from '@tiptap/vue-3';
import { Component as Component$1 } from './component.mjs';

var Component = Node.create({
  name: "component",
  group: "inline",
  inline: true,
  addAttributes() {
    return {
      props: {
        default: null,
        parseHTML: (element) => {
          const attributes = {};
          for (const attr of element.attributes) {
            attributes[attr.name] = attr.value;
          }
          attributes["template"] = element.innerHTML;
          return attributes;
        },
        renderHTML: (attributes) => {
          return attributes.props || {};
        }
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "component"
      }
    ];
  },
  renderHTML({ HTMLAttributes }) {
    const attrs = { ...HTMLAttributes };
    delete attrs.template;
    return ["component", mergeAttributes(attrs)];
  },
  addNodeView() {
    return VueNodeViewRenderer(Component$1);
  }
});

export { Component as default };
//# sourceMappingURL=index.mjs.map
