import { composeExport } from '../../../utils/util.mjs';
import { useKey, useArray, useIndex, useRecord } from './hooks.mjs';
import { ArrayBase as ArrayBase$1 } from './array-base.mjs';
import { ArrayBaseItem } from './array-base-item.mjs';
import { ArrayBaseAddition } from './addition.mjs';
import { ArrayBaseRemove } from './remove.mjs';
import { ArrayBaseSortHandle } from './sort-handle.mjs';
import { ArrayBaseMoveDown } from './movedown.mjs';
import { ArrayBaseMoveUp } from './moveup.mjs';
import { ArrayBaseIndex } from './order.mjs';
import { ItemSymbol, ArrayBaseSymbol } from './constant.mjs';

var ArrayBase = composeExport(ArrayBase$1, {
  useKey,
  useArray,
  useIndex,
  useRecord,
  ItemSymbol,
  ArrayBaseSymbol,
  Item: ArrayBaseItem,
  Addition: ArrayBaseAddition,
  Remove: ArrayBaseRemove,
  SortHandle: ArrayBaseSortHandle,
  MoveDown: ArrayBaseMoveDown,
  MoveUp: ArrayBaseMoveUp,
  Index: ArrayBaseIndex
});

export { ArrayBase as default };
//# sourceMappingURL=index.mjs.map
