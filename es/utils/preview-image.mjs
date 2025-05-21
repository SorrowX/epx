import { h, render } from 'vue';
import { ElImageViewer } from 'element-plus';

const previewImage = (options) => {
  const container = document.createElement("div");
  const vnode = h(ElImageViewer, {
    ...options,
    teleported: true,
    onClose() {
      render(null, container);
    }
  });
  render(vnode, container);
};

export { previewImage };
//# sourceMappingURL=preview-image.mjs.map
