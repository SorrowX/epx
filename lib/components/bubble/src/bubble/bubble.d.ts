import type { AvatarProps } from 'element-plus';
import type { ExtractPropTypes, StyleValue, VNode } from 'vue';
export interface TypingOption {
    /**
     * @default 1
     */
    step?: number;
    /**
     * @default 50
     */
    interval?: number;
    /**
     * @default null
     */
    suffix?: VNode | string | null;
}
export type SemanticType = 'avatar' | 'content' | 'header' | 'footer';
export interface BubbleContextProps {
    onUpdate?: VoidFunction;
}
export interface BubbleRef {
    nativeElement: HTMLElement;
}
export type AvatarPropsType = AvatarProps & {
    style?: StyleValue;
    class?: string;
};
export declare const bubbleProps: {
    readonly avatar: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => boolean | VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | Partial<AvatarPropsType>) | (() => VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | Partial<boolean | AvatarPropsType>) | (((new (...args: any[]) => boolean | VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | Partial<AvatarPropsType>) | (() => VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | Partial<boolean | AvatarPropsType>)) | null)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly placement: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => "end" | "start") | (() => "end" | "start") | (((new (...args: any[]) => "end" | "start") | (() => "end" | "start")) | null)[], "end" | "start", unknown, "start", boolean>;
    readonly loading: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly typing: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => boolean | TypingOption) | (() => boolean | TypingOption) | (((new (...args: any[]) => boolean | TypingOption) | (() => boolean | TypingOption)) | null)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly messageRender: {
        readonly type: import("vue").PropType<(content: any) => VNode | string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly loadingRender: {
        readonly type: import("vue").PropType<() => VNode>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly variant: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => "filled" | "borderless" | "outlined" | "shadow") | (() => "filled" | "borderless" | "outlined" | "shadow") | (((new (...args: any[]) => "filled" | "borderless" | "outlined" | "shadow") | (() => "filled" | "borderless" | "outlined" | "shadow")) | null)[], "filled" | "borderless" | "outlined" | "shadow", unknown, "filled", boolean>;
    readonly shape: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => "round" | "corner" | "arrow") | (() => "round" | "corner" | "arrow") | (((new (...args: any[]) => "round" | "corner" | "arrow") | (() => "round" | "corner" | "arrow")) | null)[], "round" | "corner" | "arrow", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onTypingComplete: {
        readonly type: import("vue").PropType<VoidFunction>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly header: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) | (() => string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) | (((new (...args: any[]) => string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) | (() => string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>)) | null)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly content: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | object | VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) | (() => string | object | VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) | (((new (...args: any[]) => string | object | VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) | (() => string | object | VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>)) | null)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly footer: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) | (() => string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) | (((new (...args: any[]) => string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) | (() => string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>)) | null)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly headerStyle: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | false | import("vue").CSSProperties | StyleValue[]) | (() => StyleValue) | (((new (...args: any[]) => string | false | import("vue").CSSProperties | StyleValue[]) | (() => StyleValue)) | null)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly headerClass: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly contentStyle: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | false | import("vue").CSSProperties | StyleValue[]) | (() => StyleValue) | (((new (...args: any[]) => string | false | import("vue").CSSProperties | StyleValue[]) | (() => StyleValue)) | null)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly contentClass: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly footerStyle: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | false | import("vue").CSSProperties | StyleValue[]) | (() => StyleValue) | (((new (...args: any[]) => string | false | import("vue").CSSProperties | StyleValue[]) | (() => StyleValue)) | null)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly footerClass: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export type BubbleProps = ExtractPropTypes<typeof bubbleProps>;
export declare const bubbleEmits: {};
export type BubbleEmits = typeof bubbleEmits;
