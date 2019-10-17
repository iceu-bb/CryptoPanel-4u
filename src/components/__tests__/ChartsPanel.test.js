import React from 'react';
import { render } from '@testing-library/react';
import { LanguageProvider } from '../../context/LanguageContext';
import { histoData } from '../../helpers/testBuildData';
import ChartsPanel from '../ChartsPanel';

test('render properly', () => {
  const { container } = render(
    <LanguageProvider>
      <ChartsPanel data={histoData.Data} name={'TEST'} />
    </LanguageProvider>
  );
  expect(container).toBeInTheDocument();
  expect(document.querySelector('canvas')).toBeInTheDocument();
});
