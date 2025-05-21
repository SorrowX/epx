'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function formatTime(duration) {
  if (!duration)
    return "";
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration - hours * 3600) / 60);
  const seconds = Math.floor(duration - hours * 3600 - minutes * 60);
  let ret = "";
  if (hours > 0) {
    ret += `${hours}:`;
  }
  ret += `${minutes}:`;
  if (seconds < 10) {
    ret += "0";
  }
  ret += seconds;
  return ret;
}

exports.formatTime = formatTime;
//# sourceMappingURL=date-time.js.map
