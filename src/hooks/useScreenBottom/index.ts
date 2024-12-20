import { useLayoutEffect, useState } from 'react';
import useRafCallback from '../useRafCallback';

export default function useScreenBottom() {
  const [isBottom, setBottom] = useState(false);

  const [onScroll] = useRafCallback(() => {
    // 借助Raf节流
    setBottom(
      Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight,
    );
  });

  useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return isBottom;
}
