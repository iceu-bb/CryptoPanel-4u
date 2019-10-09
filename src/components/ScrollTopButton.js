import React from 'react';
import { useScrollTop } from '../hooks/useScrollTop';
import { Button } from '../styles/ScrollTopButtonStyles';

const ScrollTopButton = () => {
  const { show, setShow } = useScrollTop();
  console.log(show);

  return (
    <Button show={show} onClick={() => window.scrollTo(0, 0)}>
      &uarr;
    </Button>
  );
};

export default ScrollTopButton;
