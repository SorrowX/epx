const filterOption = (query, option) => {
  const lowerCase = query.toLowerCase();
  const label = option.label || option.id;
  return label.toLowerCase().includes(lowerCase);
};
const getTextContent = (html, rules = []) => {
  if (!rules.some((rule) => rule.tag === "br")) {
    rules = rules.concat({
      tag: "br",
      attr: "no-attr",
      defaultValue: "\n"
    });
  }
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  rules.forEach(({ tag, attr, defaultValue }) => {
    const elements = doc.querySelectorAll(tag);
    elements.forEach((el) => {
      var _a, _b;
      const attrValue = (_b = (_a = el.getAttribute(attr)) != null ? _a : defaultValue) != null ? _b : "";
      el.replaceWith(attrValue);
    });
  });
  return doc.body.textContent.trim();
};

export { filterOption, getTextContent };
//# sourceMappingURL=helper.mjs.map
