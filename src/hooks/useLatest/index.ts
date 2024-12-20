import { useRef } from 'react';

export default function useLatest<T>(initialValue: T) {
  const value = useRef<T>(initialValue);

  value.current = initialValue;

  return value;
}
