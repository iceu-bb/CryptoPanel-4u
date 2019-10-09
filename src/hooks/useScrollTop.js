import { useState, useEffect } from 'react';

export const useScrollTop = () => {
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY < 2000) {
      return setShow(false);
    } else if (window.scrollY > 2000) {
      return setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { show, setShow };
};
