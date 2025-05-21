import type { ITagRule, MentionOption } from './types';
export declare const filterOption: (query: string, option: MentionOption) => boolean;
export declare const getTextContent: (html: string, rules?: ITagRule[]) => string;
