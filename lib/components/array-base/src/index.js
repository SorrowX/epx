'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var util = require('../../../utils/util.js');
var hooks = require('./hooks.js');
var arrayBase = require('./array-base.js');
var arrayBaseItem = require('./array-base-item.js');
var addition = require('./addition.js');
var remove = require('./remove.js');
var sortHandle = require('./sort-handle.js');
var movedown = require('./movedown.js');
var moveup = require('./moveup.js');
var order = require('./order.js');
var constant = require('./constant.js');

var ArrayBase = util.composeExport(arrayBase.ArrayBase, {
  useKey: hooks.useKey,
  useArray: hooks.useArray,
  useIndex: hooks.useIndex,
  useRecord: hooks.useRecord,
  ItemSymbol: constant.ItemSymbol,
  ArrayBaseSymbol: constant.ArrayBaseSymbol,
  Item: arrayBaseItem.ArrayBaseItem,
  Addition: addition.ArrayBaseAddition,
  Remove: remove.ArrayBaseRemove,
  SortHandle: sortHandle.ArrayBaseSortHandle,
  MoveDown: movedown.ArrayBaseMoveDown,
  MoveUp: moveup.ArrayBaseMoveUp,
  Index: order.ArrayBaseIndex
});

exports["default"] = ArrayBase;
//# sourceMappingURL=index.js.map
