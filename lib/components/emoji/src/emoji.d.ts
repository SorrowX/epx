import type { ExtractPropTypes } from 'vue';
import type { EmoticonListItem, FontEmoticonListItem } from './helper';
export declare const emojiProps: {
    readonly modelValue: {
        readonly type: import("vue").PropType<any>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, string, unknown, string, boolean>;
    readonly keepAlive: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
};
export type EmojiProps = ExtractPropTypes<typeof emojiProps>;
export declare const emojiEmits: {
    'click-tab': (tab: string) => boolean;
    "update:modelValue": (str: string) => boolean;
    change: (item: EmoticonListItem | FontEmoticonListItem, type: string) => boolean;
};
export type EmojiEmits = typeof emojiEmits;
export declare const emoticonProps: {
    readonly modelValue: {
        readonly type: import("vue").PropType<any>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, string, unknown, string, boolean>;
    readonly keepAlive: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
};
export type EmoticonProps = ExtractPropTypes<typeof emoticonProps>;
export declare const emoticonEmits: {
    "update:modelValue": (str: string) => boolean;
    change: (item: EmoticonListItem | FontEmoticonListItem, type: string) => boolean;
};
export type EmoticonEmits = typeof emoticonEmits;
