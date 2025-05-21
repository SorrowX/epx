'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var shared = require('@formily/shared');

const calcBreakpointIndex = (breakpoints, width) => {
  for (const [i, breakpoint] of breakpoints.entries()) {
    if (width <= breakpoint) {
      return i;
    }
  }
};
const calcFactor = (value, breakpointIndex) => {
  var _a;
  if (Array.isArray(value)) {
    if (breakpointIndex === -1)
      return value[0];
    return (_a = value[breakpointIndex]) != null ? _a : value[value.length - 1];
  } else {
    return value;
  }
};
const factor = (value, breakpointIndex) => shared.isValid(value) ? calcFactor(value, breakpointIndex) : value;
const calculateProps = (target, props) => {
  const { clientWidth } = target;
  const {
    breakpoints = [],
    layout,
    labelAlign,
    wrapperAlign,
    labelCol,
    wrapperCol,
    ...otherProps
  } = props;
  const breakpointIndex = calcBreakpointIndex(breakpoints, clientWidth);
  return {
    layout: factor(layout, breakpointIndex),
    labelAlign: factor(labelAlign, breakpointIndex),
    wrapperAlign: factor(wrapperAlign, breakpointIndex),
    labelCol: factor(labelCol, breakpointIndex),
    wrapperCol: factor(wrapperCol, breakpointIndex),
    ...otherProps
  };
};
const useResponsiveFormLayout = (props, root) => {
  const { breakpoints } = props;
  if (!shared.isArr(breakpoints)) {
    return { props: vue.ref(props) };
  }
  const layoutProps = vue.ref(props);
  const updateUI = () => {
    if (root.value) {
      layoutProps.value = calculateProps(root.value, props);
    }
  };
  vue.onMounted(() => {
    const observer = () => {
      updateUI();
    };
    const resizeObserver = new ResizeObserver(observer);
    if (root.value) {
      resizeObserver.observe(root.value);
    }
    updateUI();
    return () => {
      resizeObserver.disconnect();
    };
  });
  return {
    props: layoutProps
  };
};

exports.useResponsiveFormLayout = useResponsiveFormLayout;
//# sourceMappingURL=useResponsiveFormLayout.js.map
