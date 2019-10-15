import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { Container, H1 } from '../styles/HeaderStyles';

const Header = () => {
  const { app } = useContext(LanguageContext).currentLangData;
  return (
    <Container>
      <H1 data-testid='header-test'>{app.h1}</H1>
    </Container>
  );
};

export default Header;
