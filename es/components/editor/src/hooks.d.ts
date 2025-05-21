import type { ComputedRef } from 'vue';
import type { IToolBarContext } from './types';
export declare const editorToolBarContextKey: unique symbol;
export declare const provideToolBarContext: (context: ComputedRef<IToolBarContext>) => void;
export declare const useToolBarContext: () => ComputedRef<IToolBarContext>;
