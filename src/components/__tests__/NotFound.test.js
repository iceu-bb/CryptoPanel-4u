import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { navigate } from '@reach/router';
import NotFound from '../NotFound';

afterEach(cleanup);

jest.mock('@reach/router', () => ({
  navigate: jest.fn()
}));

describe('<NotFound/>', () => {
  test('renders correctly', () => {
    const { getByText, container } = render(<NotFound />);
    expect(container).toBeTruthy();
    expect(getByText(/home page/i)).toBeTruthy();
  });

  test('should navigate user to Home Page when button clicked', () => {
    const { getByText } = render(<NotFound />);
    const HomePageRoute = '/';
    fireEvent.click(getByText(/home page/i));
    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith(HomePageRoute);
  });
});
