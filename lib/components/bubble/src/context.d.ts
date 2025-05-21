import { ComputedRef } from 'vue';
import { BubbleContextProps } from './bubble/bubble';
export declare const globalBubbleContextApi: import("vue").ShallowRef<BubbleContextProps | undefined, BubbleContextProps | undefined>;
export declare const useBubbleContextProvider: (value: ComputedRef<BubbleContextProps>) => void;
export declare const useBubbleContextInject: () => ComputedRef<BubbleContextProps>;
export declare const BubbleContextProvider: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    value: import("vue").PropType<BubbleContextProps>;
}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[] | undefined, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    value: import("vue").PropType<BubbleContextProps>;
}>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default BubbleContextProvider;
