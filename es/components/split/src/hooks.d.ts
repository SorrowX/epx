import type { MaybeRef, Ref } from 'vue';
export interface MovingState {
    xStart: number;
    yStart: number;
    xEnd: number;
    yEnd: number;
    clientX: number;
    clientY: number;
    deltaX: number;
    deltaY: number;
    lazy: boolean;
    [custom: string]: unknown;
}
export interface UseMovingOptions {
    /**
     * 作用的目标元素的 Ref
     */
    target?: Ref<HTMLElement | null | undefined>;
    /**
     * 横向位置的初始值
     */
    x?: MaybeRef<number>;
    /**
     * 纵向位置的初始值
     */
    y?: MaybeRef<number>;
    /**
     * 为否为懒加载，开启后会在 End 事件再更新位置状态
     */
    lazy?: MaybeRef<boolean>;
    /**
     * 是否禁用整个 hook 的事件处理
     */
    disabled?: MaybeRef<boolean>;
    /**
     * 事件的 capture 选项
     *
     * @default true
     */
    capture?: boolean;
    /**
     * 是否阻止 MouseDown 事件冒泡和默认行为
     *
     * @default true
     */
    stopMouse?: boolean;
    /**
     * 是否阻止 TouchStart 事件冒泡和默认行为
     *
     * @default true
     */
    stopTouch?: boolean;
    /**
     * 移动开始时的回调函数，返回 false 可以阻止本次移动
     */
    onStart?: (state: MovingState, event: PointerEvent) => any;
    /**
     * 移动中的回调函数
     */
    onMove?: (state: MovingState, event: PointerEvent) => void;
    /**
     * 移动结束时的回调函数
     */
    onEnd?: (state: MovingState, event: PointerEvent) => void;
}
export declare function useMoving(options: UseMovingOptions): {
    target: Ref<HTMLElement | null | undefined, HTMLElement | null | undefined>;
    moving: import("vue").ComputedRef<boolean>;
    x: Ref<number, number>;
    y: Ref<number, number>;
    lazy: Ref<boolean, boolean>;
    disabled: Ref<boolean, boolean>;
};
