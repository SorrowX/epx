'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$1 = require('./src/index.js');
var emoticon = require('./src/emoticon.js');
var fontEmoticon = require('./src/font-emoticon.js');
var emoji = require('./src/emoji.js');
var helper = require('./src/helper.js');
var trie = require('./src/trie.js');
var index = require('element-plus/es/utils/index');

const ElEmoji = index.withInstall(index$1["default"]);
const ElEmoticon = index.withInstall(emoticon["default"]);
const ElFontEmoticon = index.withInstall(fontEmoticon["default"]);

exports.emojiEmits = emoji.emojiEmits;
exports.emojiProps = emoji.emojiProps;
exports.emoticonEmits = emoji.emoticonEmits;
exports.emoticonProps = emoji.emoticonProps;
exports.COMMOM_TYPE = helper.COMMOM_TYPE;
exports.WX_TYPE = helper.WX_TYPE;
exports.emoticonBaseList = helper.emoticonBaseList;
exports.emoticonList = helper.emoticonList;
exports.emoticonListKeys = helper.emoticonListKeys;
exports.emoticonListMap = helper.emoticonListMap;
exports.setEmojiMartData = helper.setEmojiMartData;
exports.useFontEmoticon = helper.useFontEmoticon;
exports.Trie = trie.Trie;
exports.emotionParser = trie.emotionParser;
exports.ElEmoji = ElEmoji;
exports.ElEmoticon = ElEmoticon;
exports.ElFontEmoticon = ElFontEmoticon;
exports["default"] = ElEmoji;
//# sourceMappingURL=index.js.map
