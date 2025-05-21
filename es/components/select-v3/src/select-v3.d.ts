import type { ExtractPropTypes } from 'vue';
export declare enum OptionTypeEnum {
    Wechat = 1,
    BusinessWechat = 2
}
export type OptionType = Record<string, any> & {
    type: OptionTypeEnum;
};
export declare const selectV3Props: {
    readonly options: {
        readonly type: import("vue").PropType<OptionType[]>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly textEllipsisOptions: import("element-plus/es/utils").EpPropFinalized<ObjectConstructor, unknown, unknown, () => {}, boolean>;
    readonly icon: {
        readonly type: import("vue").PropType<any>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly iconOptions: import("element-plus/es/utils").EpPropFinalized<ObjectConstructor, unknown, unknown, () => {}, boolean>;
};
export type SelectV3Props = ExtractPropTypes<typeof selectV3Props>;
export declare const selectV3Emits: {};
export type SelectV3Emits = typeof selectV3Emits;
