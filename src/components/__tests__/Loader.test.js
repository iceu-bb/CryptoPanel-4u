import React from 'react';
import { render } from '@testing-library/react';
import Loader from '../Loader';

test('<Loader /> renders correctly', () => {
  const { getByTestId } = render(<Loader />);
  expect(getByTestId('loader-test')).toBeInTheDocument();
});
