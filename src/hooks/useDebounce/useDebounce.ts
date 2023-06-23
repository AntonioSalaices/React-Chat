import { debounce } from 'lodash';
import { useMemo, DependencyList } from 'react';

/**
 * A react hook to easily handle debounce technique
 * @param {string} cb
 * @param {string} delay
 * @param {string} deps
 * @example Inside a functional component:
 * const handleFunction = useDebounce(cb, delay, deps);
 */

function useDebounce<Args extends unknown[]>(cb: (...args: Args) => void, delay: number, deps: DependencyList) {
  return useMemo(() => debounce(cb, delay), deps);
}

export default useDebounce;
