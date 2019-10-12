import { useEffect } from 'react';

export const useEscapeToCloseSearch = (
  closeModal = () => {
    console.log('closed');
  }
) => {
  useEffect(() => {
    window.innerWidth > 600 &&
      window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.innerWidth > 600 &&
        window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const handleKeyPress = ({ key }) => {
    if (key === 'Escape') {
      closeModal();
    }
  };
  //   const throttledHandleKeyPress = throttled(200, handleKeyPress);
};
