interface Option {
    label: string;
    value: string;
}
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    options: {
        type: import("vue").PropType<Option[]>;
        default: () => never[];
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (value: string) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    options: {
        type: import("vue").PropType<Option[]>;
        default: () => never[];
    };
}>> & Readonly<{
    onChange?: ((value: string) => any) | undefined;
}>, {
    options: Option[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, HTMLDivElement>;
export default _default;
