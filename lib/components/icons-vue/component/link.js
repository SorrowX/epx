'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var helper = require('../helper.js');

const linkSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
</svg>`;
var link = helper.createIconComponent({
  name: "Link",
  svg: linkSvg
});

exports["default"] = link;
exports.linkSvg = linkSvg;
//# sourceMappingURL=link.js.map
