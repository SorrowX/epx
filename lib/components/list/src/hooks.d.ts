import type { Ref } from 'vue';
interface LoadFnOptions {
    successCallback?: () => void;
    errorCallback?: () => void;
    finallyCallback?: () => void;
}
type DirectionType = 'top' | 'bottom';
interface Options {
    direction: DirectionType;
    handleError?: () => void;
}
export declare const useLoad: (props: Record<string, Ref<any>>, options?: Options) => {
    handleLoad: (shouldTrigger: boolean, options?: LoadFnOptions) => Promise<void>;
    handlePreLoad: (shouldTrigger: boolean, target: HTMLDivElement) => Promise<void>;
    renderLoadMore: (placeholder?: boolean) => "" | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    isShouldTrigger: (target: HTMLElement) => boolean;
};
export {};
