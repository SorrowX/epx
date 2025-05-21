import { inject, toRefs, ref, onBeforeUnmount } from 'vue';
import { formItemContextKey, formContextKey } from 'element-plus';
import { uid } from '../../../utils/uid.mjs';
import { ArrayBaseSymbol, ItemSymbol } from './constant.mjs';
import { isUndefined } from 'element-plus/es/utils/index';

const useArray = () => {
  return inject(ArrayBaseSymbol, {});
};
const useIndex = (idx) => {
  return isUndefined(idx) ? toRefs(inject(ItemSymbol)).index : ref(idx);
};
const useRecord = (item) => {
  return isUndefined(item) ? toRefs(inject(ItemSymbol)).record : ref(item);
};
const useField = () => inject(formItemContextKey, void 0);
const useForm = () => inject(formContextKey, void 0);
const useKey = () => {
  let keyMap = [];
  onBeforeUnmount(() => {
    keyMap = [];
  });
  return {
    keyMap,
    getKey: (index) => {
      if (!keyMap[index]) {
        keyMap[index] = uid();
      }
      return `${keyMap[index]}-${index}`;
    }
  };
};

export { useArray, useField, useForm, useIndex, useKey, useRecord };
//# sourceMappingURL=hooks.mjs.map
