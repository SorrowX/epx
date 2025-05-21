'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@tiptap/core');
var vue3 = require('@tiptap/vue-3');
var component = require('./component.js');

var Component = core.Node.create({
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
    return ["component", core.mergeAttributes(attrs)];
  },
  addNodeView() {
    return vue3.VueNodeViewRenderer(component.Component);
  }
});

exports["default"] = Component;
//# sourceMappingURL=index.js.map
