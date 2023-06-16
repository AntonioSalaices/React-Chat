import { throttle } from "lodash";
import { DependencyList, useMemo } from "react";

/**
 * A react hook to easily handle throttle technique
 * @param {string} cb
 * @param {string} delay
 * @param {string} deps
 * @example Inside a functional component:
 * const handleFunction = useThrottle(cb, delay, deps);
 */
function useThrottle<Args extends unknown[]>(
  cb: (...args: Args) => void,
  delay: number,
  deps: DependencyList
) {
  return useMemo(() => throttle(cb, delay), deps);
}

export default useThrottle;
