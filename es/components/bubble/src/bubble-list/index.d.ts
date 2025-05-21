declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly autoScroll: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly items: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./bubble-list").BubbleDataType[]) | (() => import("./bubble-list").BubbleDataType[]) | (((new (...args: any[]) => import("./bubble-list").BubbleDataType[]) | (() => import("./bubble-list").BubbleDataType[])) | null)[], unknown, unknown, () => never[], boolean>;
    readonly roles: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => Record<string, import("./bubble-list").RoleType> | ((bubbleDataP: import("./bubble-list").BubbleDataType) => import("./bubble-list").RoleType)) | (() => import("./bubble-list").RolesType) | (((new (...args: any[]) => Record<string, import("./bubble-list").RoleType> | ((bubbleDataP: import("./bubble-list").BubbleDataType) => import("./bubble-list").RoleType)) | (() => import("./bubble-list").RolesType)) | null)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onLastBubbleTypingComplete: {
        readonly type: import("vue").PropType<(key: string | number) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly autoScroll: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly items: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./bubble-list").BubbleDataType[]) | (() => import("./bubble-list").BubbleDataType[]) | (((new (...args: any[]) => import("./bubble-list").BubbleDataType[]) | (() => import("./bubble-list").BubbleDataType[])) | null)[], unknown, unknown, () => never[], boolean>;
    readonly roles: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => Record<string, import("./bubble-list").RoleType> | ((bubbleDataP: import("./bubble-list").BubbleDataType) => import("./bubble-list").RoleType)) | (() => import("./bubble-list").RolesType) | (((new (...args: any[]) => Record<string, import("./bubble-list").RoleType> | ((bubbleDataP: import("./bubble-list").BubbleDataType) => import("./bubble-list").RoleType)) | (() => import("./bubble-list").RolesType)) | null)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onLastBubbleTypingComplete: {
        readonly type: import("vue").PropType<(key: string | number) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}>> & Readonly<{}>, {
    readonly items: import("./bubble-list").BubbleDataType[];
    readonly autoScroll: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
