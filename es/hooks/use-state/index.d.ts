import type { Ref } from 'vue';
export declare function useState<T, R = Ref<T>>(defaultStateValue?: T | (() => T)): [R, (val: T) => void];
