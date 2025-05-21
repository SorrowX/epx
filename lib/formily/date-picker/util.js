'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const getDefaultFormat = (props, formatType = "format") => {
  const type = props.type;
  if (type === "week" && formatType === "format") {
    return "[Week] ww";
  } else if (type === "month") {
    return "YYYY-MM";
  } else if (type === "year") {
    return "YYYY";
  } else if (type === "datetime" || type === "datetimerange") {
    return "YYYY-MM-DD HH:mm:ss";
  }
  return "YYYY-MM-DD";
};

exports.getDefaultFormat = getDefaultFormat;
//# sourceMappingURL=util.js.map
