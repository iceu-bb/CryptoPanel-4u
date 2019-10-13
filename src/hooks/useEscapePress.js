import { useEffect } from 'react';
import { throttle } from '../helpers/throttle';

export const useEscapePress = (callback = () => {}) => {
  useEffect(() => {
    window.innerWidth > 600 &&
      window.addEventListener('keydown', throttledHandleKeyPress);

    return () => {
      window.innerWidth > 600 &&
        window.removeEventListener('keydown', throttledHandleKeyPress);
    };
  }, []);

  const handleKeyPress = ({ key }) => {
    if (key === 'Escape') {
      callback();
    }
  };
  const throttledHandleKeyPress = throttle(handleKeyPress, 200);
};
