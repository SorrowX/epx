import { createIconComponent } from '../helper.mjs';

const horizontalSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
</svg>`;
var horizontal = createIconComponent({
  name: "Horizontal",
  svg: horizontalSvg
});

export { horizontal as default, horizontalSvg };
//# sourceMappingURL=horizontal.mjs.map
