'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var helper = require('../helper.js');

const alignRightSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
</svg>`;
var alignLeft = helper.createIconComponent({
  name: "AlignRight",
  svg: alignRightSvg
});

exports.alignRightSvg = alignRightSvg;
exports["default"] = alignLeft;
//# sourceMappingURL=align-left.js.map
