import type { BubbleProps } from '../bubble/bubble';
import type { ExtractPropTypes, StyleValue } from 'vue';
export interface BubbleListRef {
    nativeElement: HTMLDivElement;
    scrollTo: (info: {
        offset?: number;
        key?: string | number;
        behavior?: ScrollBehavior;
        block?: ScrollLogicalPosition;
    }) => void;
}
export type BubbleDataType = Partial<BubbleProps> & {
    key?: string | number;
    role?: string;
};
export type RoleType = Partial<Omit<BubbleProps, 'content'>> & {
    style?: StyleValue;
    class?: string;
};
export type RolesType = Record<string, RoleType> | ((bubbleDataP: BubbleDataType) => RoleType);
export declare const bubbleListProps: {
    readonly autoScroll: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly items: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => BubbleDataType[]) | (() => BubbleDataType[]) | (((new (...args: any[]) => BubbleDataType[]) | (() => BubbleDataType[])) | null)[], unknown, unknown, () => never[], boolean>;
    readonly roles: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => Record<string, RoleType> | ((bubbleDataP: BubbleDataType) => RoleType)) | (() => RolesType) | (((new (...args: any[]) => Record<string, RoleType> | ((bubbleDataP: BubbleDataType) => RoleType)) | (() => RolesType)) | null)[], unknown, unknown>>;
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
};
export type BubbleListProps = ExtractPropTypes<typeof bubbleListProps>;
export declare const bubbleListEmits: {};
export type BubbleListEmits = typeof bubbleListEmits;
