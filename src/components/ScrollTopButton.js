import React from 'react';
import { useScrollTop } from '../hooks/useScrollTop';
import { Button } from '../styles/ScrollTopButtonStyles';
import { FaChevronUp } from 'react-icons/fa';

const ScrollTopButton = () => {
  const { show } = useScrollTop();

  return (
    <Button show={show} onClick={() => window.scrollTo(0, 0)}>
      <FaChevronUp />
    </Button>
  );
};

export default ScrollTopButton;
