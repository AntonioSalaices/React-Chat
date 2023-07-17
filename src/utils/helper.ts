import { CheckForBadArgs } from './types';
import { GenericFunction } from './types';

const Helper = {
  deepEqualCompare<Arg>(a: CheckForBadArgs<Arg>, b: CheckForBadArgs<Arg>): boolean {
    if (Array.isArray(a) || Array.isArray(b)) {
      throw new Error('You cannot compare two arrays using deepEqualCompare');
    }

    return a === b;
  },
  getProperty<T, K extends keyof T>(object: T, key: K): T[K] {
    return object[key];
  },
  /**
   * @function debounce
   * A function to implemente debounce tecnique
   * @param {Function} callback
   * @param {number} timer
   */
  debounce(callback: GenericFunction<any>, time: number) {
    let timer;

    return (args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        callback(args);
      }, time);
    };
  },
  /**
   * @function throttle
   * A function to implement throttle technique
   * @param {Function} callback
   * @param {number} timer
   */
  throttle(callback: GenericFunction<any>, delay: number) {
    let timeout;

    return (...args) => {
      if (timeout) return;

      timeout = setTimeout(() => {
        timeout = undefined;
      }, delay);

      return callback(...args);
    };
  },
  validateObject(object: any): unknown {
    return new Proxy(object, {
      set(target, key, value) {
        if (key === 'name' && typeof value !== 'string') {
          throw new Error('Should be string');
        }
        target[key] = value;
      },
    });
  },
};
export default Helper;
