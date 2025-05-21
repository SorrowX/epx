import { Node, mergeAttributes } from '@tiptap/core';
import { VueNodeViewRenderer } from '@tiptap/vue-3';
import Component from './tag.mjs';

var Tag = Node.create({
  name: "tag",
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
        tag: "tag"
      }
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["tag", mergeAttributes(HTMLAttributes)];
  },
  addNodeView() {
    return VueNodeViewRenderer(Component);
  }
});

export { Tag as default };
//# sourceMappingURL=index.mjs.map
