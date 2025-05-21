function getStyleNumber(value) {
  const num = Number(value);
  if (Number.isNaN(num)) {
    return value;
  } else {
    return `${value}px`;
  }
}

export { getStyleNumber };
//# sourceMappingURL=style.mjs.map
