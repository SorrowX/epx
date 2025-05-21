'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var util = require('../../../utils/util.js');
var index = require('../../array-base/index.js');
var table = require('./table.js');
var column = require('./column.js');

const ArrayTable = util.composeExport(table["default"], {
  Column: column["default"],
  Index: index.ElArrayBase.Index,
  SortHandle: index.ElArrayBase.SortHandle,
  Addition: index.ElArrayBase.Addition,
  Remove: index.ElArrayBase.Remove,
  MoveDown: index.ElArrayBase.MoveDown,
  MoveUp: index.ElArrayBase.MoveUp,
  useArray: index.ElArrayBase.useArray,
  useIndex: index.ElArrayBase.useIndex,
  useRecord: index.ElArrayBase.useRecord
});

exports.ArrayTable = ArrayTable;
exports["default"] = ArrayTable;
//# sourceMappingURL=index.js.map
