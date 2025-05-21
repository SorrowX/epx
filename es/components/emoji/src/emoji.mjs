import { buildProps, isString, isObject } from 'element-plus/es/utils/index';
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '../../../constants/event.mjs';

const commonProps = {
  modelValue: {
    type: null
  },
  type: {
    type: String,
    default: "text",
    values: ["text", "code", "image", "icon"]
  },
  keepAlive: {
    type: Boolean,
    default: true
  }
};
const commonEmits = {
  [UPDATE_MODEL_EVENT]: (str) => isString(str),
  [CHANGE_EVENT]: (item, type) => isObject(item) && isString(type)
};
const emojiProps = buildProps({ ...commonProps });
const emojiEmits = {
  ...commonEmits,
  "click-tab": (tab) => !!tab
};
const emoticonProps = buildProps({
  ...commonProps
});
const emoticonEmits = {
  ...commonEmits
};

export { emojiEmits, emojiProps, emoticonEmits, emoticonProps };
//# sourceMappingURL=emoji.mjs.map
