import { useCallback, useRef, useState } from 'react';
import useMountedEffect from '../useMountedEffect';

type PromiseResolver<S> = (value: S | PromiseLike<S>) => void;

export default function useAsyncState<S>(initialState: S | (() => S)) {
  const [state, setState] = useState(initialState);
  const snapshot = useRef<PromiseResolver<S>[]>([]);

  const setStateWrapper = useCallback(
    (newState: S | ((prevState: S) => S)) =>
      new Promise<S>((resolve) => {
        snapshot.current.push(resolve);
        setState(newState);
      }),
    [],
  );

  useMountedEffect(() => {
    const resolve = snapshot.current.shift();
    if (resolve) {
      resolve(state);
    }
  }, [state]);

  return setStateWrapper;
}
