'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');

const useField = () => vue.inject(elementPlus.formItemContextKey);
const useForm = () => vue.inject(elementPlus.formContextKey);

exports.useField = useField;
exports.useForm = useForm;
//# sourceMappingURL=index.js.map
