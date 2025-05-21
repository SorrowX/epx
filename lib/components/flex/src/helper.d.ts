import type { ComponentSize } from 'element-plus';
import type { FlexProps } from './flex';
export declare const flexWrapValues: readonly ["wrap", "nowrap", "wrap-reverse"];
export declare const justifyContentValues: readonly ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around", "space-evenly", "stretch", "normal", "left", "right"];
export declare const alignItemsValues: readonly ["center", "start", "end", "flex-start", "flex-end", "self-start", "self-end", "baseline", "normal", "stretch"];
export declare function createFlexClassNames(prefixCls: string, props: FlexProps): string;
export declare function isPresetSize(size?: ComponentSize | string | number): size is ComponentSize;
export declare function omit<T extends object, K extends keyof T>(obj: T, fields: K[]): Omit<T, K>;
