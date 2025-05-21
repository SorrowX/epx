import { ref } from 'vue';
import { inBrowser } from '../../utils/browser.mjs';

let width;
let height;
function useWindowSize() {
  if (!width) {
    width = ref(0);
    height = ref(0);
    if (inBrowser) {
      const update = () => {
        width.value = window.innerWidth;
        height.value = window.innerHeight;
      };
      update();
      window.addEventListener("resize", update, { passive: true });
      window.addEventListener("orientationchange", update, { passive: true });
    }
  }
  return { width, height };
}

export { useWindowSize };
//# sourceMappingURL=index.mjs.map
