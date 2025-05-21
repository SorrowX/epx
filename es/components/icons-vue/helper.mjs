import { defineComponent, h } from 'vue';

const createIconComponent = (options) => {
  return defineComponent({
    name: options.name,
    render() {
      return h("div", {
        style: {
          display: "contents"
        },
        innerHTML: options.svg
      });
    }
  });
};

export { createIconComponent };
//# sourceMappingURL=helper.mjs.map
