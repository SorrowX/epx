import { nextTick } from 'vue';
import type { EmoticonListItem, FontEmoticonListItem } from './helper';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        trigger?(_: {}): any;
    };
    refs: {
        triggerRef: HTMLSpanElement;
        popoverRef: ({
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                readonly disabled: boolean;
                readonly width: import("element-plus/es/utils/index.js").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly content: string;
                readonly offset: number;
                readonly visible: import("element-plus/es/utils/index.js").EpPropMergeType<(new (...args: any[]) => boolean) | (() => boolean | null) | ((new (...args: any[]) => boolean) | (() => boolean | null))[], unknown, unknown>;
                readonly placement: import("element-plus/es/utils/index.js").EpPropMergeType<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import("element-plus").Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import("element-plus").Placement))[], unknown, unknown>;
                readonly effect: import("element-plus/es/utils/index.js").EpPropMergeType<(new (...args: any[]) => string) | (() => import("element-plus/es/element-plus").PopperEffect) | ((new (...args: any[]) => string) | (() => import("element-plus/es/element-plus").PopperEffect))[], unknown, unknown>;
                readonly showAfter: number;
                readonly hideAfter: number;
                readonly autoClose: number;
                readonly tabindex: import("element-plus/es/utils/index.js").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>;
                readonly trigger: import("element-plus/es/utils/index.js").EpPropMergeType<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import("element-plus").TooltipTriggerType[]) | (() => import("element-plus/es/utils/typescript.js").Arrayable<import("element-plus").TooltipTriggerType>) | ((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import("element-plus").TooltipTriggerType[]) | (() => import("element-plus/es/utils/typescript.js").Arrayable<import("element-plus").TooltipTriggerType>))[], unknown, unknown>;
                readonly popperOptions: Partial<import("element-plus").Options>;
                readonly enterable: import("element-plus/es/utils/index.js").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly teleported: import("element-plus/es/utils/index.js").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly persistent: import("element-plus/es/utils/index.js").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly showArrow: import("element-plus/es/utils/index.js").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            }> & Omit<{
                readonly teleported: import("element-plus/es/utils/index.js").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly disabled: boolean;
                readonly width: import("element-plus/es/utils/index.js").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly showArrow: import("element-plus/es/utils/index.js").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly trigger: import("element-plus/es/utils/index.js").EpPropMergeType<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import("element-plus").TooltipTriggerType[]) | (() => import("element-plus/es/utils/typescript.js").Arrayable<import("element-plus").TooltipTriggerType>) | ((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import("element-plus").TooltipTriggerType[]) | (() => import("element-plus/es/utils/typescript.js").Arrayable<import("element-plus").TooltipTriggerType>))[], unknown, unknown>;
                readonly content: string;
                readonly persistent: import("element-plus/es/utils/index.js").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly visible: import("element-plus/es/utils/index.js").EpPropMergeType<(new (...args: any[]) => boolean) | (() => boolean | null) | ((new (...args: any[]) => boolean) | (() => boolean | null))[], unknown, unknown>;
                readonly effect: any;
                readonly enterable: import("element-plus/es/utils/index.js").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly placement: import("element-plus/es/utils/index.js").EpPropMergeType<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import("element-plus").Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import("element-plus").Placement))[], unknown, unknown>;
                readonly popperOptions: Partial<import("element-plus").Options>;
                readonly showAfter: number;
                readonly hideAfter: number;
                readonly autoClose: number;
                readonly tabindex: import("element-plus/es/utils/index.js").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>;
                readonly title?: string | undefined;
                readonly offset?: number | undefined;
                readonly popperClass?: import("element-plus/es/utils/index.js").EpPropMergeType<(new (...args: any[]) => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown> | undefined;
                readonly transition?: string | undefined;
                readonly popperStyle?: import("vue").StyleValue;
                "onUpdate:visible"?: (((visible: boolean) => void) & ((value: boolean) => any)) | undefined;
                "onAfter-enter"?: (() => any) | undefined;
                "onAfter-leave"?: (() => any) | undefined;
                "onBefore-enter"?: (() => any) | undefined;
                "onBefore-leave"?: (() => any) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "teleported" | "offset" | "disabled" | "width" | "showArrow" | "trigger" | "content" | "persistent" | "visible" | "effect" | "enterable" | "placement" | "popperOptions" | "showAfter" | "hideAfter" | "autoClose" | "tabindex">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                [name: string]: import("vue").Slot<any> | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance | null;
            $parent: import("vue").ComponentPublicInstance | null;
            $host: Element | null;
            $emit: ((event: "after-enter") => void) & ((event: "after-leave") => void) & ((event: "before-enter") => void) & ((event: "before-leave") => void) & ((event: "update:visible", value: boolean) => void);
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                readonly trigger: import("element-plus/es/utils/index.js").EpPropFinalized<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import("element-plus").TooltipTriggerType[]) | (() => import("element-plus/es/utils/typescript.js").Arrayable<import("element-plus").TooltipTriggerType>) | ((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import("element-plus").TooltipTriggerType[]) | (() => import("element-plus/es/utils/typescript.js").Arrayable<import("element-plus").TooltipTriggerType>))[], unknown, unknown, "hover", boolean>;
                readonly placement: import("element-plus/es/utils/index.js").EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import("element-plus").Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import("element-plus").Placement))[], unknown, unknown, "bottom", boolean>;
                readonly disabled: BooleanConstructor;
                readonly visible: import("element-plus/es/utils/index.js").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean | null) | ((new (...args: any[]) => boolean) | (() => boolean | null))[], unknown, unknown, null, boolean>;
                readonly transition: StringConstructor;
                readonly popperOptions: import("element-plus/es/utils/index.js").EpPropFinalized<(new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>) | ((new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>))[], unknown, unknown, () => {}, boolean>;
                readonly tabindex: import("element-plus/es/utils/index.js").EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown, 0, boolean>;
                readonly content: import("element-plus/es/utils/index.js").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                readonly popperStyle: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils/index.js").EpPropMergeType<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly popperClass: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils/index.js").EpPropMergeType<(new (...args: any[]) => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | any)[])[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | any)[])[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly enterable: {
                    readonly default: true;
                    readonly type: import("vue").PropType<import("element-plus/es/utils/index.js").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    readonly __epPropKey: true;
                };
                readonly effect: {
                    readonly default: "light";
                    readonly type: import("vue").PropType<import("element-plus/es/utils/index.js").EpPropMergeType<(new (...args: any[]) => string) | (() => import("element-plus/es/element-plus").PopperEffect) | ((new (...args: any[]) => string) | (() => import("element-plus/es/element-plus").PopperEffect))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    readonly __epPropKey: true;
                };
                readonly teleported: import("element-plus/es/utils/index.js").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly title: StringConstructor;
                readonly width: import("element-plus/es/utils/index.js").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 150, boolean>;
                readonly offset: import("element-plus/es/utils/index.js").EpPropFinalized<NumberConstructor, unknown, unknown, undefined, boolean>;
                readonly showAfter: import("element-plus/es/utils/index.js").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                readonly hideAfter: import("element-plus/es/utils/index.js").EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
                readonly autoClose: import("element-plus/es/utils/index.js").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                readonly showArrow: import("element-plus/es/utils/index.js").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly persistent: import("element-plus/es/utils/index.js").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly 'onUpdate:visible': {
                    readonly type: import("vue").PropType<(visible: boolean) => void>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
            }>> & {
                "onUpdate:visible"?: ((value: boolean) => any) | undefined;
                "onAfter-enter"?: (() => any) | undefined;
                "onAfter-leave"?: (() => any) | undefined;
                "onBefore-enter"?: (() => any) | undefined;
                "onBefore-leave"?: (() => any) | undefined;
            }, {
                popperRef: import("vue").ComputedRef<({
                    $: import("vue").ComponentInternalInstance;
                    $data: {};
                    $props: Partial<{
                        readonly role: import("element-plus/es/utils/index.js").EpPropMergeType<StringConstructor, "dialog" | "menu" | "grid" | "listbox" | "tooltip" | "tree" | "group" | "navigation", unknown>;
                    }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                        readonly role: import("element-plus/es/utils/index.js").EpPropFinalized<StringConstructor, "dialog" | "menu" | "grid" | "listbox" | "tooltip" | "tree" | "group" | "navigation", unknown, "tooltip", boolean>;
                    }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "role">;
                    $attrs: {
                        [x: string]: unknown;
                    };
                    $refs: {
                        [x: string]: unknown;
                    };
                    $slots: import("vue").Slots;
                    $root: import("vue").ComponentPublicInstance | null;
                    $parent: import("vue").ComponentPublicInstance | null;
                    $emit: (event: string, ...args: any[]) => void;
                    $el: any;
                    $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                        readonly role: import("element-plus/es/utils/index.js").EpPropFinalized<StringConstructor, "dialog" | "menu" | "grid" | "listbox" | "tooltip" | "tree" | "group" | "navigation", unknown, "tooltip", boolean>;
                    }>>, {
                        triggerRef: import("vue").Ref<import("element-plus/es/element-plus").Measurable | undefined>;
                        contentRef: import("vue").Ref<HTMLElement | undefined>;
                        popperInstanceRef: import("vue").Ref<import("@popperjs/core").Instance | undefined>;
                        referenceRef: import("vue").Ref<import("element-plus/es/element-plus").Measurable | undefined>;
                        role: import("vue").ComputedRef<string>;
                    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
                        readonly role: import("element-plus/es/utils/index.js").EpPropMergeType<StringConstructor, "dialog" | "menu" | "grid" | "listbox" | "tooltip" | "tree" | "group" | "navigation", unknown>;
                    }> & {
                        beforeCreate?: (() => void) | (() => void)[];
                        created?: (() => void) | (() => void)[];
                        beforeMount?: (() => void) | (() => void)[];
                        mounted?: (() => void) | (() => void)[];
                        beforeUpdate?: (() => void) | (() => void)[];
                        updated?: (() => void) | (() => void)[];
                        activated?: (() => void) | (() => void)[];
                        deactivated?: (() => void) | (() => void)[];
                        beforeDestroy?: (() => void) | (() => void)[];
                        beforeUnmount?: (() => void) | (() => void)[];
                        destroyed?: (() => void) | (() => void)[];
                        unmounted?: (() => void) | (() => void)[];
                        renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
                        renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
                        errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void)[];
                    };
                    $forceUpdate: () => void;
                    $nextTick: typeof import("vue").nextTick;
                    $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions): import("vue").WatchStopHandle;
                } & Readonly<import("vue").ExtractPropTypes<{
                    readonly role: import("element-plus/es/utils/index.js").EpPropFinalized<StringConstructor, "dialog" | "menu" | "grid" | "listbox" | "tooltip" | "tree" | "group" | "navigation", unknown, "tooltip", boolean>;
                }>> & import("vue").ShallowUnwrapRef<{
                    triggerRef: import("vue").Ref<import("element-plus/es/element-plus").Measurable | undefined>;
                    contentRef: import("vue").Ref<HTMLElement | undefined>;
                    popperInstanceRef: import("vue").Ref<import("@popperjs/core").Instance | undefined>;
                    referenceRef: import("vue").Ref<import("element-plus/es/element-plus").Measurable | undefined>;
                    role: import("vue").ComputedRef<string>;
                }> & {} & import("vue").ComponentCustomProperties & {
                    $slots: {
                        default?(_: {}): any;
                    };
                }) | undefined>;
                hide: () => void;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                "after-enter": () => void;
                "after-leave": () => void;
                "before-enter": () => void;
                "before-leave": () => void;
                "update:visible": (value: boolean) => void;
            }, string, {
                readonly disabled: boolean;
                readonly width: import("element-plus/es/utils/index.js").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly content: string;
                readonly offset: number;
                readonly visible: import("element-plus/es/utils/index.js").EpPropMergeType<(new (...args: any[]) => boolean) | (() => boolean | null) | ((new (...args: any[]) => boolean) | (() => boolean | null))[], unknown, unknown>;
                readonly placement: import("element-plus/es/utils/index.js").EpPropMergeType<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import("element-plus").Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import("element-plus").Placement))[], unknown, unknown>;
                readonly effect: import("element-plus/es/utils/index.js").EpPropMergeType<(new (...args: any[]) => string) | (() => import("element-plus/es/element-plus").PopperEffect) | ((new (...args: any[]) => string) | (() => import("element-plus/es/element-plus").PopperEffect))[], unknown, unknown>;
                readonly showAfter: number;
                readonly hideAfter: number;
                readonly autoClose: number;
                readonly tabindex: import("element-plus/es/utils/index.js").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>;
                readonly trigger: import("element-plus/es/utils/index.js").EpPropMergeType<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import("element-plus").TooltipTriggerType[]) | (() => import("element-plus/es/utils/typescript.js").Arrayable<import("element-plus").TooltipTriggerType>) | ((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import("element-plus").TooltipTriggerType[]) | (() => import("element-plus/es/utils/typescript.js").Arrayable<import("element-plus").TooltipTriggerType>))[], unknown, unknown>;
                readonly popperOptions: Partial<import("element-plus").Options>;
                readonly enterable: import("element-plus/es/utils/index.js").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly teleported: import("element-plus/es/utils/index.js").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly persistent: import("element-plus/es/utils/index.js").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly showArrow: import("element-plus/es/utils/index.js").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
                beforeCreate?: (() => void) | (() => void)[];
                created?: (() => void) | (() => void)[];
                beforeMount?: (() => void) | (() => void)[];
                mounted?: (() => void) | (() => void)[];
                beforeUpdate?: (() => void) | (() => void)[];
                updated?: (() => void) | (() => void)[];
                activated?: (() => void) | (() => void)[];
                deactivated?: (() => void) | (() => void)[];
                beforeDestroy?: (() => void) | (() => void)[];
                beforeUnmount?: (() => void) | (() => void)[];
                destroyed?: (() => void) | (() => void)[];
                unmounted?: (() => void) | (() => void)[];
                renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
                renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
                errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void)[];
            };
            $forceUpdate: () => void;
            $nextTick: typeof nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import("@vue/reactivity").OnCleanup]) => any : (...args: [any, any, import("@vue/reactivity").OnCleanup]) => any, options?: import("vue").WatchOptions): import("vue").WatchStopHandle;
        } & Readonly<{
            readonly disabled: boolean;
            readonly width: import("element-plus/es/utils/index.js").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly content: string;
            readonly offset: number;
            readonly visible: import("element-plus/es/utils/index.js").EpPropMergeType<(new (...args: any[]) => boolean) | (() => boolean | null) | ((new (...args: any[]) => boolean) | (() => boolean | null))[], unknown, unknown>;
            readonly placement: import("element-plus/es/utils/index.js").EpPropMergeType<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import("element-plus").Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import("element-plus").Placement))[], unknown, unknown>;
            readonly effect: import("element-plus/es/utils/index.js").EpPropMergeType<(new (...args: any[]) => string) | (() => import("element-plus/es/element-plus").PopperEffect) | ((new (...args: any[]) => string) | (() => import("element-plus/es/element-plus").PopperEffect))[], unknown, unknown>;
            readonly showAfter: number;
            readonly hideAfter: number;
            readonly autoClose: number;
            readonly tabindex: import("element-plus/es/utils/index.js").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>;
            readonly trigger: import("element-plus/es/utils/index.js").EpPropMergeType<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import("element-plus").TooltipTriggerType[]) | (() => import("element-plus/es/utils/typescript.js").Arrayable<import("element-plus").TooltipTriggerType>) | ((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import("element-plus").TooltipTriggerType[]) | (() => import("element-plus/es/utils/typescript.js").Arrayable<import("element-plus").TooltipTriggerType>))[], unknown, unknown>;
            readonly popperOptions: Partial<import("element-plus").Options>;
            readonly enterable: import("element-plus/es/utils/index.js").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly teleported: import("element-plus/es/utils/index.js").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly persistent: import("element-plus/es/utils/index.js").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly showArrow: import("element-plus/es/utils/index.js").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            readonly trigger: import("element-plus/es/utils/index.js").EpPropFinalized<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import("element-plus").TooltipTriggerType[]) | (() => import("element-plus/es/utils/typescript.js").Arrayable<import("element-plus").TooltipTriggerType>) | ((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import("element-plus").TooltipTriggerType[]) | (() => import("element-plus/es/utils/typescript.js").Arrayable<import("element-plus").TooltipTriggerType>))[], unknown, unknown, "hover", boolean>;
            readonly placement: import("element-plus/es/utils/index.js").EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import("element-plus").Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import("element-plus").Placement))[], unknown, unknown, "bottom", boolean>;
            readonly disabled: BooleanConstructor;
            readonly visible: import("element-plus/es/utils/index.js").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean | null) | ((new (...args: any[]) => boolean) | (() => boolean | null))[], unknown, unknown, null, boolean>;
            readonly transition: StringConstructor;
            readonly popperOptions: import("element-plus/es/utils/index.js").EpPropFinalized<(new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>) | ((new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>))[], unknown, unknown, () => {}, boolean>;
            readonly tabindex: import("element-plus/es/utils/index.js").EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown, 0, boolean>;
            readonly content: import("element-plus/es/utils/index.js").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly popperStyle: {
                readonly type: import("vue").PropType<import("element-plus/es/utils/index.js").EpPropMergeType<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly popperClass: {
                readonly type: import("vue").PropType<import("element-plus/es/utils/index.js").EpPropMergeType<(new (...args: any[]) => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly enterable: {
                readonly default: true;
                readonly type: import("vue").PropType<import("element-plus/es/utils/index.js").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                readonly __epPropKey: true;
            };
            readonly effect: {
                readonly default: "light";
                readonly type: import("vue").PropType<import("element-plus/es/utils/index.js").EpPropMergeType<(new (...args: any[]) => string) | (() => import("element-plus/es/element-plus").PopperEffect) | ((new (...args: any[]) => string) | (() => import("element-plus/es/element-plus").PopperEffect))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                readonly __epPropKey: true;
            };
            readonly teleported: import("element-plus/es/utils/index.js").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly title: StringConstructor;
            readonly width: import("element-plus/es/utils/index.js").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 150, boolean>;
            readonly offset: import("element-plus/es/utils/index.js").EpPropFinalized<NumberConstructor, unknown, unknown, undefined, boolean>;
            readonly showAfter: import("element-plus/es/utils/index.js").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
            readonly hideAfter: import("element-plus/es/utils/index.js").EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
            readonly autoClose: import("element-plus/es/utils/index.js").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
            readonly showArrow: import("element-plus/es/utils/index.js").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly persistent: import("element-plus/es/utils/index.js").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly 'onUpdate:visible': {
                readonly type: import("vue").PropType<(visible: boolean) => void>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
        }>> & {
            "onUpdate:visible"?: ((value: boolean) => any) | undefined;
            "onAfter-enter"?: (() => any) | undefined;
            "onAfter-leave"?: (() => any) | undefined;
            "onBefore-enter"?: (() => any) | undefined;
            "onBefore-leave"?: (() => any) | undefined;
        }, "teleported" | "offset" | "disabled" | "width" | "showArrow" | "trigger" | "content" | "persistent" | "visible" | "effect" | "enterable" | "placement" | "popperOptions" | "showAfter" | "hideAfter" | "autoClose" | "popperRef" | "hide" | "tabindex"> & import("vue").ShallowUnwrapRef<{
            popperRef: import("vue").ComputedRef<({
                $: import("vue").ComponentInternalInstance;
                $data: {};
                $props: Partial<{
                    readonly role: import("element-plus/es/utils/index.js").EpPropMergeType<StringConstructor, "dialog" | "menu" | "grid" | "listbox" | "tooltip" | "tree" | "group" | "navigation", unknown>;
                }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                    readonly role: import("element-plus/es/utils/index.js").EpPropFinalized<StringConstructor, "dialog" | "menu" | "grid" | "listbox" | "tooltip" | "tree" | "group" | "navigation", unknown, "tooltip", boolean>;
                }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "role">;
                $attrs: {
                    [x: string]: unknown;
                };
                $refs: {
                    [x: string]: unknown;
                };
                $slots: import("vue").Slots;
                $root: import("vue").ComponentPublicInstance | null;
                $parent: import("vue").ComponentPublicInstance | null;
                $emit: (event: string, ...args: any[]) => void;
                $el: any;
                $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                    readonly role: import("element-plus/es/utils/index.js").EpPropFinalized<StringConstructor, "dialog" | "menu" | "grid" | "listbox" | "tooltip" | "tree" | "group" | "navigation", unknown, "tooltip", boolean>;
                }>>, {
                    triggerRef: import("vue").Ref<import("element-plus/es/element-plus").Measurable | undefined>;
                    contentRef: import("vue").Ref<HTMLElement | undefined>;
                    popperInstanceRef: import("vue").Ref<import("@popperjs/core").Instance | undefined>;
                    referenceRef: import("vue").Ref<import("element-plus/es/element-plus").Measurable | undefined>;
                    role: import("vue").ComputedRef<string>;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
                    readonly role: import("element-plus/es/utils/index.js").EpPropMergeType<StringConstructor, "dialog" | "menu" | "grid" | "listbox" | "tooltip" | "tree" | "group" | "navigation", unknown>;
                }> & {
                    beforeCreate?: (() => void) | (() => void)[];
                    created?: (() => void) | (() => void)[];
                    beforeMount?: (() => void) | (() => void)[];
                    mounted?: (() => void) | (() => void)[];
                    beforeUpdate?: (() => void) | (() => void)[];
                    updated?: (() => void) | (() => void)[];
                    activated?: (() => void) | (() => void)[];
                    deactivated?: (() => void) | (() => void)[];
                    beforeDestroy?: (() => void) | (() => void)[];
                    beforeUnmount?: (() => void) | (() => void)[];
                    destroyed?: (() => void) | (() => void)[];
                    unmounted?: (() => void) | (() => void)[];
                    renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
                    renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
                    errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void)[];
                };
                $forceUpdate: () => void;
                $nextTick: typeof import("vue").nextTick;
                $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions): import("vue").WatchStopHandle;
            } & Readonly<import("vue").ExtractPropTypes<{
                readonly role: import("element-plus/es/utils/index.js").EpPropFinalized<StringConstructor, "dialog" | "menu" | "grid" | "listbox" | "tooltip" | "tree" | "group" | "navigation", unknown, "tooltip", boolean>;
            }>> & import("vue").ShallowUnwrapRef<{
                triggerRef: import("vue").Ref<import("element-plus/es/element-plus").Measurable | undefined>;
                contentRef: import("vue").Ref<HTMLElement | undefined>;
                popperInstanceRef: import("vue").Ref<import("@popperjs/core").Instance | undefined>;
                referenceRef: import("vue").Ref<import("element-plus/es/element-plus").Measurable | undefined>;
                role: import("vue").ComputedRef<string>;
            }> & {} & import("vue").ComponentCustomProperties & {
                $slots: {
                    default?(_: {}): any;
                };
            }) | undefined>;
            hide: () => void;
        }> & {} & import("@vue/runtime-core").ComponentCustomProperties & {} & {
            $slots: {
                reference?(_: {}): any;
                default?(_: {}): any;
            };
        }) | null;
        scrollbarRef: ({
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                readonly height: import("element-plus/es/utils/index.js").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly maxHeight: import("element-plus/es/utils/index.js").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly always: boolean;
                readonly tabindex: import("element-plus/es/utils/index.js").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly minSize: number;
                readonly native: import("element-plus/es/utils/index.js").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly wrapStyle: import("vue").StyleValue;
                readonly wrapClass: import("element-plus/es/utils/index.js").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
                readonly viewClass: import("element-plus/es/utils/index.js").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
                readonly viewStyle: import("element-plus/es/utils/index.js").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
                readonly tag: string;
                readonly noresize: boolean;
            }> & Omit<{
                readonly tag: string;
                readonly height: import("element-plus/es/utils/index.js").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly maxHeight: import("element-plus/es/utils/index.js").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly native: import("element-plus/es/utils/index.js").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly wrapStyle: import("vue").StyleValue;
                readonly wrapClass: import("element-plus/es/utils/index.js").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
                readonly viewClass: import("element-plus/es/utils/index.js").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
                readonly viewStyle: import("element-plus/es/utils/index.js").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
                readonly noresize: boolean;
                readonly always: boolean;
                readonly minSize: number;
                readonly id?: string | undefined;
                readonly ariaLabel?: string | undefined;
                readonly role?: string | undefined;
                readonly ariaOrientation?: string | undefined;
                readonly tabindex?: import("element-plus/es/utils/index.js").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
                onScroll?: ((args_0: {
                    scrollTop: number;
                    scrollLeft: number;
                }) => any) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "tag" | "height" | "maxHeight" | "native" | "wrapStyle" | "wrapClass" | "viewClass" | "viewStyle" | "noresize" | "always" | "minSize" | "tabindex">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                [name: string]: import("vue").Slot<any> | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance | null;
            $parent: import("vue").ComponentPublicInstance | null;
            $host: Element | null;
            $emit: (event: "scroll", args_0: {
                scrollTop: number;
                scrollLeft: number;
            }) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                readonly ariaLabel: StringConstructor;
                readonly ariaOrientation: {
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly height: import("element-plus/es/utils/index.js").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                readonly maxHeight: import("element-plus/es/utils/index.js").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                readonly native: import("element-plus/es/utils/index.js").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly wrapStyle: import("element-plus/es/utils/index.js").EpPropFinalized<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown, "", boolean>;
                readonly wrapClass: import("element-plus/es/utils/index.js").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                readonly viewClass: import("element-plus/es/utils/index.js").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                readonly viewStyle: import("element-plus/es/utils/index.js").EpPropFinalized<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown, "", boolean>;
                readonly noresize: BooleanConstructor;
                readonly tag: import("element-plus/es/utils/index.js").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
                readonly always: BooleanConstructor;
                readonly minSize: import("element-plus/es/utils/index.js").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
                readonly tabindex: import("element-plus/es/utils/index.js").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, undefined, boolean>;
                readonly id: StringConstructor;
                readonly role: StringConstructor;
            }>> & {
                onScroll?: ((args_0: {
                    scrollTop: number;
                    scrollLeft: number;
                }) => any) | undefined;
            }, {
                wrapRef: import("vue").Ref<HTMLDivElement | undefined>;
                update: () => void;
                scrollTo: {
                    (xCord: number, yCord?: number): void;
                    (options: ScrollToOptions): void;
                };
                setScrollTop: (value: number) => void;
                setScrollLeft: (value: number) => void;
                handleScroll: () => void;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                scroll: (args_0: {
                    scrollTop: number;
                    scrollLeft: number;
                }) => void;
            }, string, {
                readonly height: import("element-plus/es/utils/index.js").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly maxHeight: import("element-plus/es/utils/index.js").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly always: boolean;
                readonly tabindex: import("element-plus/es/utils/index.js").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly minSize: number;
                readonly native: import("element-plus/es/utils/index.js").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly wrapStyle: import("vue").StyleValue;
                readonly wrapClass: import("element-plus/es/utils/index.js").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
                readonly viewClass: import("element-plus/es/utils/index.js").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
                readonly viewStyle: import("element-plus/es/utils/index.js").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
                readonly tag: string;
                readonly noresize: boolean;
            }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
                beforeCreate?: (() => void) | (() => void)[];
                created?: (() => void) | (() => void)[];
                beforeMount?: (() => void) | (() => void)[];
                mounted?: (() => void) | (() => void)[];
                beforeUpdate?: (() => void) | (() => void)[];
                updated?: (() => void) | (() => void)[];
                activated?: (() => void) | (() => void)[];
                deactivated?: (() => void) | (() => void)[];
                beforeDestroy?: (() => void) | (() => void)[];
                beforeUnmount?: (() => void) | (() => void)[];
                destroyed?: (() => void) | (() => void)[];
                unmounted?: (() => void) | (() => void)[];
                renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
                renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
                errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void)[];
            };
            $forceUpdate: () => void;
            $nextTick: typeof nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import("@vue/reactivity").OnCleanup]) => any : (...args: [any, any, import("@vue/reactivity").OnCleanup]) => any, options?: import("vue").WatchOptions): import("vue").WatchStopHandle;
        } & Readonly<{
            readonly height: import("element-plus/es/utils/index.js").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly maxHeight: import("element-plus/es/utils/index.js").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly always: boolean;
            readonly tabindex: import("element-plus/es/utils/index.js").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly minSize: number;
            readonly native: import("element-plus/es/utils/index.js").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly wrapStyle: import("vue").StyleValue;
            readonly wrapClass: import("element-plus/es/utils/index.js").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
            readonly viewClass: import("element-plus/es/utils/index.js").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
            readonly viewStyle: import("element-plus/es/utils/index.js").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
            readonly tag: string;
            readonly noresize: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            readonly ariaLabel: StringConstructor;
            readonly ariaOrientation: {
                readonly type: import("vue").PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly height: import("element-plus/es/utils/index.js").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
            readonly maxHeight: import("element-plus/es/utils/index.js").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
            readonly native: import("element-plus/es/utils/index.js").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly wrapStyle: import("element-plus/es/utils/index.js").EpPropFinalized<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown, "", boolean>;
            readonly wrapClass: import("element-plus/es/utils/index.js").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
            readonly viewClass: import("element-plus/es/utils/index.js").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
            readonly viewStyle: import("element-plus/es/utils/index.js").EpPropFinalized<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown, "", boolean>;
            readonly noresize: BooleanConstructor;
            readonly tag: import("element-plus/es/utils/index.js").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
            readonly always: BooleanConstructor;
            readonly minSize: import("element-plus/es/utils/index.js").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
            readonly tabindex: import("element-plus/es/utils/index.js").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, undefined, boolean>;
            readonly id: StringConstructor;
            readonly role: StringConstructor;
        }>> & {
            onScroll?: ((args_0: {
                scrollTop: number;
                scrollLeft: number;
            }) => any) | undefined;
        }, "tag" | "height" | "maxHeight" | "scrollTo" | "setScrollLeft" | "setScrollTop" | "native" | "wrapStyle" | "wrapClass" | "viewClass" | "viewStyle" | "noresize" | "always" | "minSize" | "tabindex" | "wrapRef" | "update" | "handleScroll"> & import("vue").ShallowUnwrapRef<{
            wrapRef: import("vue").Ref<HTMLDivElement | undefined>;
            update: () => void;
            scrollTo: {
                (xCord: number, yCord?: number): void;
                (options: ScrollToOptions): void;
            };
            setScrollTop: (value: number) => void;
            setScrollLeft: (value: number) => void;
            handleScroll: () => void;
        }> & {} & import("@vue/runtime-core").ComponentCustomProperties & {} & {
            $slots: {
                default?(_: {}): any;
            };
        }) | null;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import("vue").PropType<any>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly type: import("element-plus/es/utils/index.js").EpPropFinalized<StringConstructor, string, unknown, string, boolean>;
    readonly keepAlive: import("element-plus/es/utils/index.js").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
}>, {
    scrollbarRef: import("vue").Ref<any, any>;
    updateScrollbar: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (str: string) => void;
    change: (item: EmoticonListItem | FontEmoticonListItem, type: string) => void;
    "click-tab": (tab: string) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import("vue").PropType<any>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly type: import("element-plus/es/utils/index.js").EpPropFinalized<StringConstructor, string, unknown, string, boolean>;
    readonly keepAlive: import("element-plus/es/utils/index.js").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
}>> & Readonly<{
    onChange?: ((item: EmoticonListItem | FontEmoticonListItem, type: string) => any) | undefined;
    "onUpdate:modelValue"?: ((str: string) => any) | undefined;
    "onClick-tab"?: ((tab: string) => any) | undefined;
}>, {
    readonly type: string;
    readonly keepAlive: import("element-plus/es/utils/index.js").EpPropMergeType<BooleanConstructor, unknown, unknown>;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
