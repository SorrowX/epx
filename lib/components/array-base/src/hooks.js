'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var uid = require('../../../utils/uid.js');
var constant = require('./constant.js');
var index = require('element-plus/es/utils/index');

const useArray = () => {
  return vue.inject(constant.ArrayBaseSymbol, {});
};
const useIndex = (idx) => {
  return index.isUndefined(idx) ? vue.toRefs(vue.inject(constant.ItemSymbol)).index : vue.ref(idx);
};
const useRecord = (item) => {
  return index.isUndefined(item) ? vue.toRefs(vue.inject(constant.ItemSymbol)).record : vue.ref(item);
};
const useField = () => vue.inject(elementPlus.formItemContextKey, void 0);
const useForm = () => vue.inject(elementPlus.formContextKey, void 0);
const useKey = () => {
  let keyMap = [];
  vue.onBeforeUnmount(() => {
    keyMap = [];
  });
  return {
    keyMap,
    getKey: (index) => {
      if (!keyMap[index]) {
        keyMap[index] = uid.uid();
      }
      return `${keyMap[index]}-${index}`;
    }
  };
};

exports.useArray = useArray;
exports.useField = useField;
exports.useForm = useForm;
exports.useIndex = useIndex;
exports.useKey = useKey;
exports.useRecord = useRecord;
//# sourceMappingURL=hooks.js.map
