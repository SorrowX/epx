export type EmoticonListItem = {
    describe: string;
    code: string;
    text: string;
    emojiId: number;
    image: string;
    icon?: string;
    className?: string;
    [key: string]: any;
};
export type FontEmoticonListItem = {
    text: string;
    [key: string]: any;
};
export type EmoticonList = EmoticonListItem[];
export declare const emoticonBaseList: {
    describe: string;
    code: string;
}[];
export declare const emoticonList: EmoticonList;
export declare const emoticonListKeys: string[];
export declare const emoticonListMap: {
    [x: string]: any;
};
export declare const WX_TYPE = "wx";
export declare const COMMOM_TYPE = "cm";
interface Categorie {
    id: string;
    emojis: string[];
}
interface skinItem {
    unified: string;
    native: string;
}
interface emojiItem {
    id: string;
    keywords: string[];
    name: string;
    skins: skinItem[];
    version: number;
}
interface EmojiMartData {
    categories: Categorie[];
    emojis: {
        [prop: string]: emojiItem;
    };
    [prop: string]: any;
}
export declare const setEmojiMartData: (data: EmojiMartData) => void;
export declare const useFontEmoticon: () => {
    peopleList: import("vue").ComputedRef<FontEmoticonListItem[]>;
};
export {};
