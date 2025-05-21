'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function getStyleNumber(value) {
  const num = Number(value);
  if (Number.isNaN(num)) {
    return value;
  } else {
    return `${value}px`;
  }
}

exports.getStyleNumber = getStyleNumber;
//# sourceMappingURL=style.js.map
