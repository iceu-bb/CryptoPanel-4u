import React from 'react';
import { render } from '@testing-library/react';
import Loader from '../Loader';

test('<Loader /> renders correctly', () => {
  const { container } = render(<Loader />);
  expect(container).toBeTruthy();
  expect(container).toBeInTheDocument();
});
