import { useState, useEffect } from 'react';
import { debounce } from '../helpers/debounce';

export const useScrollTop = () => {
  const [show, setShow] = useState(false);

  const handleScroll = debounce(() => {
    if (window.scrollY < 2000) {
      return setShow(false);
    } else if (window.scrollY > 2000) {
      return setShow(true);
    }
  }, 250);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { show, setShow };
};
