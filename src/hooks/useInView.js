import { useEffect, useRef, useState } from 'react';

const useInView = (options = { threshold: 0.15 }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Reveal immediately if a deep link or instant jump scrolled past the
    // element before the observer's first callback could fire.
    if (node.getBoundingClientRect().bottom < 0) setInView(true);

    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting || entry.boundingClientRect.bottom < 0);
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, inView];
};

export default useInView;
