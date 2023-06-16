import { throttle } from "lodash";
import { DependencyList, useMemo } from "react";

function useThrottle<Args extends unknown[]>(
  cb: (...args: Args) => void,
  delay: number,
  deps: DependencyList
) {
  return useMemo(() => throttle(cb, delay), deps);
}

export default useThrottle;
