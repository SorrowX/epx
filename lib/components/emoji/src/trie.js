'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var helper = require('./helper.js');

class Trie {
  constructor() {
    this.words = 0;
    this.empty = 1;
    this.index = 0;
    this.children = {};
  }
  insert(str, pos, idx) {
    if (str.length === 0) {
      return;
    }
    if (pos === void 0) {
      pos = 0;
    }
    if (pos === str.length) {
      this.index = idx;
      return;
    }
    const k = str[pos];
    if (this.children[k] === void 0) {
      this.children[k] = new Trie();
      this.empty = 0;
      this.children[k].words = this.words + 1;
    }
    const child = this.children[k];
    child.insert(str, pos + 1, idx);
  }
  build(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      this.insert(arr[i], 0, i);
    }
  }
  searchOne(str, pos) {
    if (pos === void 0) {
      pos = 0;
    }
    const result = {};
    if (str.length === 0)
      return result;
    result.arr = [];
    const k = str[pos];
    const child = this.children[k];
    if (child !== void 0 && pos < str.length) {
      return child.searchOne(str, pos + 1);
    }
    if (child === void 0 && this.empty === 0)
      return result;
    if (this.empty == 1) {
      result.arr[0] = pos - this.words;
      result.arr[1] = this.index;
      result.words = this.words;
      return result;
    }
    return result;
  }
  search(str) {
    if (this.empty == 1)
      return [];
    const len = str.length;
    const searchResult = [];
    let tmp;
    for (let i = 0; i < len - 1; i++) {
      tmp = this.searchOne(str, i);
      if (typeof tmp.arr !== "undefined" && tmp.arr.length > 0) {
        searchResult.push(tmp.arr);
        i = i + tmp.words - 1;
      }
    }
    return searchResult;
  }
}
const trie = new Trie();
trie.build(helper.emoticonListKeys);
function splice(str, index, count, add) {
  return str.slice(0, index) + add + str.slice(index + count);
}
const emotionParser = (text = "") => {
  const indices = trie.search(text);
  indices.reverse().forEach((idx) => {
    const pos = idx[0], emotion = helper.emoticonListKeys[idx[1]], img = `<img src="${helper.emoticonListMap[emotion]}" alt="${emotion}">`;
    text = splice(text, pos, emotion.length, img);
  });
  return text;
};

exports.Trie = Trie;
exports.emotionParser = emotionParser;
//# sourceMappingURL=trie.js.map
