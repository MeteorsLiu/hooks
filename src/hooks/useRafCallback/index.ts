import { useCallback, useRef } from 'react';
import useLatest from '../useLatest';
import useUnmountEffect from '../useUnmountEffect';

type noop = (this: any, ...args: any[]) => any;

export default function useRafCallback<T extends noop>(cb: T) {
  const callback = useLatest(cb);
  const raf = useRef(0);

  const cancel = useCallback(() => {
    if (raf.current) {
      cancelAnimationFrame(raf.current);
      raf.current = 0;
    }
  }, []);
  const run = useCallback((...args: any[]) => {
    cancel();

    raf.current = requestAnimationFrame(() => {
      callback.current(...args);
      raf.current = 0;
    });
  }, []);

  useUnmountEffect(cancel);

  return [run, cancel];
}
