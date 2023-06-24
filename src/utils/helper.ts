import { CheckForBadArgs } from './types';

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
};
export default Helper;
