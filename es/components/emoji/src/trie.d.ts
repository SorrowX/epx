export declare class Trie {
    words: number;
    empty: number;
    index: number;
    children: any;
    constructor();
    insert(str: string, pos: number, idx: number): void;
    build(arr: string[]): void;
    searchOne(str: string, pos: number): any;
    search(str: string): any[];
}
/**
 * 文案转 -> img
 * eg: /::) -> <img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/0.gif" alt="/::)">
 * eg: [微笑] -> <img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/0.gif" alt="[微笑]">
 * @param text
 * @returns
 */
export declare const emotionParser: (text?: string) => string;
