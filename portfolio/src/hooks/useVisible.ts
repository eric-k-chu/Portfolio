import { MutableRefObject, useEffect, useState } from "react";

export function useVisible(ref: MutableRefObject<HTMLDivElement> | null) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    if (!ref) return;

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}
