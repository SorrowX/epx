import { composeExport } from '../../../utils/util.mjs';
import { ElArrayBase } from '../../array-base/index.mjs';
import ArrayTableInner from './table.mjs';
import ArrayTableColumn from './column.mjs';

const ArrayTable = composeExport(ArrayTableInner, {
  Column: ArrayTableColumn,
  Index: ElArrayBase.Index,
  SortHandle: ElArrayBase.SortHandle,
  Addition: ElArrayBase.Addition,
  Remove: ElArrayBase.Remove,
  MoveDown: ElArrayBase.MoveDown,
  MoveUp: ElArrayBase.MoveUp,
  useArray: ElArrayBase.useArray,
  useIndex: ElArrayBase.useIndex,
  useRecord: ElArrayBase.useRecord
});

export { ArrayTable, ArrayTable as default };
//# sourceMappingURL=index.mjs.map
