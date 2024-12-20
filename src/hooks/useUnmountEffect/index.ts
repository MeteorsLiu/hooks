import { useEffect } from 'react';

export default function useUnmountEffect(effect: () => void): void {
  useEffect(() => () => effect(), []);
}
