import type { IToolbarConfigure, IToolbarList } from '../types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    editor: {
        type: import("vue").PropType<any>;
        required: true;
    };
    toolbarList: {
        type: import("vue").PropType<IToolbarList>;
        default: () => string[];
    };
    configure: {
        type: import("vue").PropType<IToolbarConfigure>;
        default: () => {};
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    editor: {
        type: import("vue").PropType<any>;
        required: true;
    };
    toolbarList: {
        type: import("vue").PropType<IToolbarList>;
        default: () => string[];
    };
    configure: {
        type: import("vue").PropType<IToolbarConfigure>;
        default: () => {};
    };
}>> & Readonly<{}>, {
    toolbarList: IToolbarList;
    configure: IToolbarConfigure;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
