import { isString, isArray, isObject } from 'element-plus/es/utils/index';

const classNames = (...args) => {
  const classes = [];
  for (const value of args) {
    if (!value)
      continue;
    if (isString(value)) {
      classes.push(value);
    } else if (isArray(value)) {
      for (const element of value) {
        const inner = classNames(element);
        if (inner) {
          classes.push(inner);
        }
      }
    } else if (isObject(value)) {
      for (const name in value) {
        if (value[name]) {
          classes.push(name);
        }
      }
    }
  }
  return classes.join(" ");
};
const flexWrapValues = ["wrap", "nowrap", "wrap-reverse"];
const justifyContentValues = [
  "flex-start",
  "flex-end",
  "start",
  "end",
  "center",
  "space-between",
  "space-around",
  "space-evenly",
  "stretch",
  "normal",
  "left",
  "right"
];
const alignItemsValues = [
  "center",
  "start",
  "end",
  "flex-start",
  "flex-end",
  "self-start",
  "self-end",
  "baseline",
  "normal",
  "stretch"
];
const genClsWrap = (prefixCls, props) => {
  const wrapCls = {};
  flexWrapValues.forEach((cssKey) => {
    wrapCls[`${prefixCls}-wrap-${cssKey}`] = props.wrap === cssKey;
  });
  return wrapCls;
};
const genClsAlign = (prefixCls, props) => {
  const alignCls = {};
  alignItemsValues.forEach((cssKey) => {
    alignCls[`${prefixCls}-align-${cssKey}`] = props.align === cssKey;
  });
  alignCls[`${prefixCls}-align-stretch`] = !props.align && !!props.vertical;
  return alignCls;
};
const genClsJustify = (prefixCls, props) => {
  const justifyCls = {};
  justifyContentValues.forEach((cssKey) => {
    justifyCls[`${prefixCls}-justify-${cssKey}`] = props.justify === cssKey;
  });
  return justifyCls;
};
function createFlexClassNames(prefixCls, props) {
  return classNames({
    ...genClsWrap(prefixCls, props),
    ...genClsAlign(prefixCls, props),
    ...genClsJustify(prefixCls, props)
  });
}
function isPresetSize(size) {
  return ["small", "default", "large"].includes(size);
}
function omit(obj, fields) {
  const shallowCopy = Object.assign({}, obj);
  for (const key of fields) {
    delete shallowCopy[key];
  }
  return shallowCopy;
}

export { alignItemsValues, createFlexClassNames, flexWrapValues, isPresetSize, justifyContentValues, omit };
//# sourceMappingURL=helper.mjs.map
