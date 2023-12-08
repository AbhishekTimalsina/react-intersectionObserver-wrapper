import { useEffect, useRef } from "react";

function useObserve(elements) {
  const elementRef = useRef([]);
  const observer = useRef(null);

  useEffect(() => {
    if (Array.isArray(elements)) {
      elementRef.current = [...elements];
    } else {
      elementRef.current.push(elements);
    }

    return () => {
      observer.current.disconnect();
    };
  }, [elements]);

  function observe(callBack, userOptions = {}) {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
      ...userOptions,
    };

    observer.current = new IntersectionObserver(callBack, options);
    elementRef.current.forEach((el) => {
      observer.current.observe(el.current);
    });
  }

  return observe;
}

export default useObserve;
