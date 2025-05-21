import type { DatePickerProps } from '../date-picker/util';
import type { TimePickerProps } from '../time-picker';
import type { Component, Ref } from 'vue';
export declare const usePlaceholder: (value?: Ref<any>) => import("vue").ComputedRef<any>;
export declare const PreviewText: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Input: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        value: {
            type: null;
        };
    }>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        value: {
            type: null;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Select: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
    Cascader: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
    DatePicker: import("vue").DefineComponent<{
        readonly type: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => "year" | "years" | "month" | "months" | "date" | "dates" | "week" | "datetime" | "datetimerange" | "daterange" | "monthrange" | "yearrange") | (() => import("element-plus/es/components/date-picker/src/date-picker.type").IDatePickerType) | ((new (...args: any[]) => "year" | "years" | "month" | "months" | "date" | "dates" | "week" | "datetime" | "datetimerange" | "daterange" | "monthrange" | "yearrange") | (() => import("element-plus/es/components/date-picker/src/date-picker.type").IDatePickerType))[], unknown, unknown>;
        readonly popperClass: string;
        readonly disabled: boolean;
        readonly fallbackPlacements: import("element-plus").Placement[];
        readonly placement: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import("element-plus").Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import("element-plus").Placement))[], import("element-plus").Placement, unknown>;
        readonly popperOptions: Partial<import("element-plus").Options>;
        readonly modelValue: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | number | string[] | Date | [import("element-plus").DateModelType, import("element-plus").DateModelType]) | (() => import("element-plus").ModelValueType) | ((new (...args: any[]) => string | number | string[] | Date | [import("element-plus").DateModelType, import("element-plus").DateModelType]) | (() => import("element-plus").ModelValueType))[], unknown, unknown>;
        readonly editable: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly tabindex: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>;
        readonly placeholder: string;
        readonly readonly: boolean;
        readonly validateEvent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly clearable: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly prefixIcon: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component) | ((new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component))[], unknown, unknown>;
        readonly showNow: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly shortcuts: unknown[];
        readonly arrowControl: boolean;
        readonly unlinkPanels: boolean;
        readonly rangeSeparator: string;
        readonly isRange: boolean;
    } & {
        readonly size?: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never> | undefined;
        readonly name?: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | [string, string]) | (() => import("element-plus").SingleOrRange<string>) | ((new (...args: any[]) => string | [string, string]) | (() => import("element-plus").SingleOrRange<string>))[], unknown, unknown> | undefined;
        readonly id?: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | [string, string]) | (() => import("element-plus").SingleOrRange<string>) | ((new (...args: any[]) => string | [string, string]) | (() => import("element-plus").SingleOrRange<string>))[], unknown, unknown> | undefined;
        readonly emptyValues?: unknown[] | undefined;
        readonly valueOnClear?: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor, FunctionConstructor], unknown, unknown> | undefined;
        readonly cellClassName?: Function | undefined;
        readonly ariaLabel?: string | undefined;
        readonly defaultValue?: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => Date | [Date, Date]) | (() => import("element-plus").SingleOrRange<Date>) | ((new (...args: any[]) => Date | [Date, Date]) | (() => import("element-plus").SingleOrRange<Date>))[], unknown, unknown> | undefined;
        readonly format?: string | undefined;
        readonly clearIcon?: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component) | ((new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component))[], unknown, unknown> | undefined;
        readonly disabledDate?: Function | undefined;
        readonly disabledHours?: import("element-plus/es/components/time-picker/src/props/shared").GetDisabledHours | undefined;
        readonly disabledMinutes?: import("element-plus/es/components/time-picker/src/props/shared").GetDisabledMinutes | undefined;
        readonly disabledSeconds?: import("element-plus/es/components/time-picker/src/props/shared").GetDisabledSeconds | undefined;
        readonly valueFormat?: string | undefined;
        readonly dateFormat?: string | undefined;
        readonly timeFormat?: string | undefined;
        readonly startPlaceholder?: string | undefined;
        readonly endPlaceholder?: string | undefined;
        readonly defaultTime?: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => Date | [Date, Date]) | (() => import("element-plus").SingleOrRange<Date>) | ((new (...args: any[]) => Date | [Date, Date]) | (() => import("element-plus").SingleOrRange<Date>))[], unknown, unknown> | undefined;
    } & {
        value: DatePickerProps["modelValue"];
    }, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{
        readonly type: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => "year" | "years" | "month" | "months" | "date" | "dates" | "week" | "datetime" | "datetimerange" | "daterange" | "monthrange" | "yearrange") | (() => import("element-plus/es/components/date-picker/src/date-picker.type").IDatePickerType) | ((new (...args: any[]) => "year" | "years" | "month" | "months" | "date" | "dates" | "week" | "datetime" | "datetimerange" | "daterange" | "monthrange" | "yearrange") | (() => import("element-plus/es/components/date-picker/src/date-picker.type").IDatePickerType))[], unknown, unknown>;
        readonly popperClass: string;
        readonly disabled: boolean;
        readonly fallbackPlacements: import("element-plus").Placement[];
        readonly placement: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import("element-plus").Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import("element-plus").Placement))[], import("element-plus").Placement, unknown>;
        readonly popperOptions: Partial<import("element-plus").Options>;
        readonly modelValue: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | number | string[] | Date | [import("element-plus").DateModelType, import("element-plus").DateModelType]) | (() => import("element-plus").ModelValueType) | ((new (...args: any[]) => string | number | string[] | Date | [import("element-plus").DateModelType, import("element-plus").DateModelType]) | (() => import("element-plus").ModelValueType))[], unknown, unknown>;
        readonly editable: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly tabindex: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>;
        readonly placeholder: string;
        readonly readonly: boolean;
        readonly validateEvent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly clearable: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly prefixIcon: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component) | ((new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component))[], unknown, unknown>;
        readonly showNow: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly shortcuts: unknown[];
        readonly arrowControl: boolean;
        readonly unlinkPanels: boolean;
        readonly rangeSeparator: string;
        readonly isRange: boolean;
    } & {
        readonly size?: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never> | undefined;
        readonly name?: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | [string, string]) | (() => import("element-plus").SingleOrRange<string>) | ((new (...args: any[]) => string | [string, string]) | (() => import("element-plus").SingleOrRange<string>))[], unknown, unknown> | undefined;
        readonly id?: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | [string, string]) | (() => import("element-plus").SingleOrRange<string>) | ((new (...args: any[]) => string | [string, string]) | (() => import("element-plus").SingleOrRange<string>))[], unknown, unknown> | undefined;
        readonly emptyValues?: unknown[] | undefined;
        readonly valueOnClear?: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor, FunctionConstructor], unknown, unknown> | undefined;
        readonly cellClassName?: Function | undefined;
        readonly ariaLabel?: string | undefined;
        readonly defaultValue?: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => Date | [Date, Date]) | (() => import("element-plus").SingleOrRange<Date>) | ((new (...args: any[]) => Date | [Date, Date]) | (() => import("element-plus").SingleOrRange<Date>))[], unknown, unknown> | undefined;
        readonly format?: string | undefined;
        readonly clearIcon?: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component) | ((new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component))[], unknown, unknown> | undefined;
        readonly disabledDate?: Function | undefined;
        readonly disabledHours?: import("element-plus/es/components/time-picker/src/props/shared").GetDisabledHours | undefined;
        readonly disabledMinutes?: import("element-plus/es/components/time-picker/src/props/shared").GetDisabledMinutes | undefined;
        readonly disabledSeconds?: import("element-plus/es/components/time-picker/src/props/shared").GetDisabledSeconds | undefined;
        readonly valueFormat?: string | undefined;
        readonly dateFormat?: string | undefined;
        readonly timeFormat?: string | undefined;
        readonly startPlaceholder?: string | undefined;
        readonly endPlaceholder?: string | undefined;
        readonly defaultTime?: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => Date | [Date, Date]) | (() => import("element-plus").SingleOrRange<Date>) | ((new (...args: any[]) => Date | [Date, Date]) | (() => import("element-plus").SingleOrRange<Date>))[], unknown, unknown> | undefined;
    } & {
        value: DatePickerProps["modelValue"];
    }> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
    TimePicker: import("vue").DefineComponent<{
        readonly type: string;
        readonly popperClass: string;
        readonly disabled: boolean;
        readonly fallbackPlacements: import("element-plus").Placement[];
        readonly placement: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import("element-plus").Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import("element-plus").Placement))[], import("element-plus").Placement, unknown>;
        readonly popperOptions: Partial<import("element-plus").Options>;
        readonly modelValue: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | number | string[] | Date | [import("element-plus").DateModelType, import("element-plus").DateModelType]) | (() => import("element-plus").ModelValueType) | ((new (...args: any[]) => string | number | string[] | Date | [import("element-plus").DateModelType, import("element-plus").DateModelType]) | (() => import("element-plus").ModelValueType))[], unknown, unknown>;
        readonly editable: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly tabindex: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>;
        readonly placeholder: string;
        readonly readonly: boolean;
        readonly validateEvent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly clearable: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly prefixIcon: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>;
        readonly showNow: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly shortcuts: unknown[];
        readonly arrowControl: boolean;
        readonly unlinkPanels: boolean;
        readonly rangeSeparator: string;
        readonly isRange: boolean;
    } & {
        readonly size?: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never> | undefined;
        readonly name?: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | [string, string]) | (() => import("element-plus").SingleOrRange<string>) | ((new (...args: any[]) => string | [string, string]) | (() => import("element-plus").SingleOrRange<string>))[], unknown, unknown> | undefined;
        readonly id?: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | [string, string]) | (() => import("element-plus").SingleOrRange<string>) | ((new (...args: any[]) => string | [string, string]) | (() => import("element-plus").SingleOrRange<string>))[], unknown, unknown> | undefined;
        readonly emptyValues?: unknown[] | undefined;
        readonly valueOnClear?: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor, FunctionConstructor], unknown, unknown> | undefined;
        readonly cellClassName?: Function | undefined;
        readonly ariaLabel?: string | undefined;
        readonly defaultValue?: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => Date | [Date, Date]) | (() => import("element-plus").SingleOrRange<Date>) | ((new (...args: any[]) => Date | [Date, Date]) | (() => import("element-plus").SingleOrRange<Date>))[], unknown, unknown> | undefined;
        readonly format?: string | undefined;
        readonly clearIcon?: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown> | undefined;
        readonly disabledDate?: Function | undefined;
        readonly disabledHours?: import("element-plus/es/components/time-picker/src/props/shared").GetDisabledHours | undefined;
        readonly disabledMinutes?: import("element-plus/es/components/time-picker/src/props/shared").GetDisabledMinutes | undefined;
        readonly disabledSeconds?: import("element-plus/es/components/time-picker/src/props/shared").GetDisabledSeconds | undefined;
        readonly valueFormat?: string | undefined;
        readonly dateFormat?: string | undefined;
        readonly timeFormat?: string | undefined;
        readonly startPlaceholder?: string | undefined;
        readonly endPlaceholder?: string | undefined;
        readonly defaultTime?: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => Date | [Date, Date]) | (() => import("element-plus").SingleOrRange<Date>) | ((new (...args: any[]) => Date | [Date, Date]) | (() => import("element-plus").SingleOrRange<Date>))[], unknown, unknown> | undefined;
    } & {
        value: TimePickerProps["modelValue"];
    }, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{
        readonly type: string;
        readonly popperClass: string;
        readonly disabled: boolean;
        readonly fallbackPlacements: import("element-plus").Placement[];
        readonly placement: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import("element-plus").Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import("element-plus").Placement))[], import("element-plus").Placement, unknown>;
        readonly popperOptions: Partial<import("element-plus").Options>;
        readonly modelValue: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | number | string[] | Date | [import("element-plus").DateModelType, import("element-plus").DateModelType]) | (() => import("element-plus").ModelValueType) | ((new (...args: any[]) => string | number | string[] | Date | [import("element-plus").DateModelType, import("element-plus").DateModelType]) | (() => import("element-plus").ModelValueType))[], unknown, unknown>;
        readonly editable: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly tabindex: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>;
        readonly placeholder: string;
        readonly readonly: boolean;
        readonly validateEvent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly clearable: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly prefixIcon: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>;
        readonly showNow: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly shortcuts: unknown[];
        readonly arrowControl: boolean;
        readonly unlinkPanels: boolean;
        readonly rangeSeparator: string;
        readonly isRange: boolean;
    } & {
        readonly size?: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never> | undefined;
        readonly name?: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | [string, string]) | (() => import("element-plus").SingleOrRange<string>) | ((new (...args: any[]) => string | [string, string]) | (() => import("element-plus").SingleOrRange<string>))[], unknown, unknown> | undefined;
        readonly id?: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | [string, string]) | (() => import("element-plus").SingleOrRange<string>) | ((new (...args: any[]) => string | [string, string]) | (() => import("element-plus").SingleOrRange<string>))[], unknown, unknown> | undefined;
        readonly emptyValues?: unknown[] | undefined;
        readonly valueOnClear?: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor, FunctionConstructor], unknown, unknown> | undefined;
        readonly cellClassName?: Function | undefined;
        readonly ariaLabel?: string | undefined;
        readonly defaultValue?: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => Date | [Date, Date]) | (() => import("element-plus").SingleOrRange<Date>) | ((new (...args: any[]) => Date | [Date, Date]) | (() => import("element-plus").SingleOrRange<Date>))[], unknown, unknown> | undefined;
        readonly format?: string | undefined;
        readonly clearIcon?: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown> | undefined;
        readonly disabledDate?: Function | undefined;
        readonly disabledHours?: import("element-plus/es/components/time-picker/src/props/shared").GetDisabledHours | undefined;
        readonly disabledMinutes?: import("element-plus/es/components/time-picker/src/props/shared").GetDisabledMinutes | undefined;
        readonly disabledSeconds?: import("element-plus/es/components/time-picker/src/props/shared").GetDisabledSeconds | undefined;
        readonly valueFormat?: string | undefined;
        readonly dateFormat?: string | undefined;
        readonly timeFormat?: string | undefined;
        readonly startPlaceholder?: string | undefined;
        readonly endPlaceholder?: string | undefined;
        readonly defaultTime?: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => Date | [Date, Date]) | (() => import("element-plus").SingleOrRange<Date>) | ((new (...args: any[]) => Date | [Date, Date]) | (() => import("element-plus").SingleOrRange<Date>))[], unknown, unknown> | undefined;
    } & {
        value: TimePickerProps["modelValue"];
    }> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
    Placeholder: import("vue").DefineComponent | undefined;
    usePlaceholder: (value?: Ref<any>) => import("vue").ComputedRef<any>;
    TextSwitch: import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
};
export default PreviewText;
