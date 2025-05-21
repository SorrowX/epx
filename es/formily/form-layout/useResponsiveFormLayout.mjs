import { ref, onMounted } from 'vue';
import { isArr, isValid } from '@formily/shared';

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
const factor = (value, breakpointIndex) => isValid(value) ? calcFactor(value, breakpointIndex) : value;
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
  if (!isArr(breakpoints)) {
    return { props: ref(props) };
  }
  const layoutProps = ref(props);
  const updateUI = () => {
    if (root.value) {
      layoutProps.value = calculateProps(root.value, props);
    }
  };
  onMounted(() => {
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

export { useResponsiveFormLayout };
//# sourceMappingURL=useResponsiveFormLayout.mjs.map
