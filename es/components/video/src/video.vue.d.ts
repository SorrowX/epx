declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        poster?(_: {}): any;
        duration?(_: {
            formatDuration: string | undefined;
        }): any;
        default?(_: {}): any;
        player?(_: {
            handleClick: (e: MouseEvent) => void;
        }): any;
    };
    refs: {
        videoRef: HTMLVideoElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly src: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly poster: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly duration: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | (((new (...args: any[]) => string | number) | (() => string | number)) | null)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onCoverLoad: {
        readonly type: import("vue").PropType<(event: any) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly readonly: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean) | (((new (...args: any[]) => boolean) | (() => boolean)) | null)[], unknown, unknown, false, boolean>;
}>, {
    video: import("vue").Ref<HTMLVideoElement | null, HTMLVideoElement | null>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (paused: boolean, event: MouseEvent) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly src: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly poster: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly duration: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | (((new (...args: any[]) => string | number) | (() => string | number)) | null)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onCoverLoad: {
        readonly type: import("vue").PropType<(event: any) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly readonly: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean) | (((new (...args: any[]) => boolean) | (() => boolean)) | null)[], unknown, unknown, false, boolean>;
}>> & Readonly<{
    onClick?: ((paused: boolean, event: MouseEvent) => any) | undefined;
}>, {
    readonly readonly: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => boolean) | (() => boolean) | (((new (...args: any[]) => boolean) | (() => boolean)) | null)[], unknown, unknown>;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
