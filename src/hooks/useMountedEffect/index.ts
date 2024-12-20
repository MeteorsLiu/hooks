import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

export default function useMountedEffect(
  effect: EffectCallback,
  deps?: DependencyList,
) {
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return () => {};
    }
    return effect();
  }, deps);
}
