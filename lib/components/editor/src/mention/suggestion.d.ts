import { Editor } from '@tiptap/core';
import { SuggestionKeyDownProps, SuggestionProps } from '@tiptap/suggestion';
import { SuggestionOptions } from '../types';
export declare const useSuggestion: (opts: SuggestionOptions) => {
    destroy: () => void;
    suggestion: {
        char: string;
        allowedPrefixes: null;
        items: ({ query }: {
            query: string;
            editor: Editor;
        }) => Promise<never[] | import("../types").MentionOption[]>;
        render: () => {
            onStart: (props: SuggestionProps) => void;
            onUpdate(props: SuggestionProps): void;
            onKeyDown(props: SuggestionKeyDownProps): any;
            onExit(): void;
        };
    };
    hiddenPopup: () => void;
    getVisible: () => boolean;
};
