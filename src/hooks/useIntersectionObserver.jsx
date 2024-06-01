import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (options = { threshold: 0.50 }) => {
    const [inView, setInView] = useState(false);
    const ref = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        },
        options
      );
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [options]);
  
    return { ref, inView };
  };
  
  export default useIntersectionObserver;