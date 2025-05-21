/**
 * 将一个方法进行节流
 *
 * @param method 需要节流的方法，需自行绑定 this
 * @param interval 节流后的触发间隔，默认 16 ms (1 帧)
 *
 * @returns 节流后的方法
 */
export declare function throttle<T extends (...args: any[]) => any>(method: T, interval?: number): (...args: Parameters<T>) => void;
/**
 * 将一个方法进行防抖
 *
 * @param method 需要防抖的方法，需自行绑定 this
 * @param delay 防抖的限制时间，默认 100ms
 *
 * @returns 防抖后的方法
 */
export declare function debounce<T extends (...args: any[]) => any>(method: T, delay?: number): (...args: Parameters<T>) => void;
/**
 * 对给定的方法进行微任务级别的防抖
 *
 * @param method 需要防抖的方法，需自行绑定 this
 *
 * @returns 防抖后的方法
 */
export declare function debounceMinor<T extends (...args: any[]) => any>(method: T): (...args: Parameters<T>) => Promise<Awaited<ReturnType<T>>>;
