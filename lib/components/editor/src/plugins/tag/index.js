'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@tiptap/core');
var vue3 = require('@tiptap/vue-3');
var tag = require('./tag.js');

var Tag = core.Node.create({
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
    return ["tag", core.mergeAttributes(HTMLAttributes)];
  },
  addNodeView() {
    return vue3.VueNodeViewRenderer(tag["default"]);
  }
});

exports["default"] = Tag;
//# sourceMappingURL=index.js.map
