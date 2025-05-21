import Bubble from './src/bubble/index.mjs';
import BubbleList from './src/bubble-list/index.mjs';
export { bubbleEmits, bubbleProps } from './src/bubble/bubble.mjs';
export { bubbleListEmits, bubbleListProps } from './src/bubble-list/bubble-list.mjs';
import { withInstall } from 'element-plus/es/utils/index';

const ElBubble = withInstall(Bubble);
const ElBubbleList = withInstall(BubbleList);

export { ElBubble, ElBubbleList, ElBubble as default };
//# sourceMappingURL=index.mjs.map
