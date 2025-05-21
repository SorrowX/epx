'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var compilerDom = require('@vue/compiler-dom');
var runtimeDom = require('@vue/runtime-dom');
var vue3 = require('@tiptap/vue-3');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var runtimeDom__namespace = /*#__PURE__*/_interopNamespace(runtimeDom);

const compileToFunction = (template) => {
  const { code } = compilerDom.compile(template);
  return new Function("Vue", code)(runtimeDom__namespace);
};
const resolve = (registry, name) => {
  return registry && (registry[name] || registry[vue.camelize(name)] || registry[vue.capitalize(vue.camelize(name))]);
};
const isVueComponent = (registry, name) => !!resolve(registry, name);
const Component = vue.defineComponent({
  name: "Component",
  inheritAttrs: false,
  props: {
    ...vue3.nodeViewProps
  },
  setup(props) {
    const instance = vue.getCurrentInstance();
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
      const parent = isCustomTag ? vue.resolveComponent(attrs.is) : attrs.is;
      const child = {
        render: compileToFunction(template)
      };
      const renderChild = () => {
        return vue.h(
          parent,
          { ...attrs },
          isCustomTag ? {
            default: () => vue.h(child)
          } : [vue.h(child)]
        );
      };
      return vue.h(
        vue3.NodeViewWrapper,
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

exports.Component = Component;
//# sourceMappingURL=component.js.map
