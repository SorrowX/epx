import type { IFieldContext, IFormContext } from './array-base';
export declare const useArray: () => any;
export declare const useIndex: (idx?: number) => import("vue").Ref<any, any>;
export declare const useRecord: (item?: any) => import("vue").Ref<any, any>;
export declare const useField: () => IFieldContext;
export declare const useForm: () => IFormContext;
export type keyMapType = string[];
export declare const useKey: () => {
    keyMap: keyMapType;
    getKey: (index: number) => string;
};
