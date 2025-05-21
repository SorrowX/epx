import Emoji from './src/index.mjs';
import Emoticon from './src/emoticon.mjs';
import FontEmoticon from './src/font-emoticon.mjs';
export { emojiEmits, emojiProps, emoticonEmits, emoticonProps } from './src/emoji.mjs';
export { COMMOM_TYPE, WX_TYPE, emoticonBaseList, emoticonList, emoticonListKeys, emoticonListMap, setEmojiMartData, useFontEmoticon } from './src/helper.mjs';
export { Trie, emotionParser } from './src/trie.mjs';
import { withInstall } from 'element-plus/es/utils/index';

const ElEmoji = withInstall(Emoji);
const ElEmoticon = withInstall(Emoticon);
const ElFontEmoticon = withInstall(FontEmoticon);

export { ElEmoji, ElEmoticon, ElFontEmoticon, ElEmoji as default };
//# sourceMappingURL=index.mjs.map
