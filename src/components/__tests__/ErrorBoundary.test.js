import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { navigate } from '@reach/router';
import { reportError as mockReportError } from '../../helpers/errorApi';
import ErrorBoundary from '../ErrorBoundary';

// credit to Kent C. Dodds
// from https://kentcdodds.com/

jest.mock('@reach/router', () => ({
  navigate: jest.fn()
}));

jest.mock('../../helpers/errorApi', () => {
  return {
    reportError: jest.fn(() => Promise.resolve({ success: true }))
  };
});

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

afterEach(() => {
  console.error.mockRestore();
});

function Bomb({ shouldThrow }) {
  if (shouldThrow) {
    throw new Error('💣');
  } else {
    return null;
  }
}

test('calls reportError and renders that there was a problem', () => {
  const { container, rerender, getByText, debug } = render(
    <ErrorBoundary>
      <Bomb />
    </ErrorBoundary>
  );

  rerender(
    <ErrorBoundary>
      <Bomb shouldThrow={true} />
    </ErrorBoundary>
  );

  expect(mockReportError).toHaveBeenCalledTimes(1);
  const error = expect.any(Error);
  const info = { componentStack: expect.stringContaining('Bomb') };
  expect(mockReportError).toHaveBeenCalledWith(error, info);

  expect(container).toHaveTextContent('Caution! This Page is Cordoned Off');

  expect(console.error).toHaveBeenCalledTimes(2);

  console.error.mockClear();
  mockReportError.mockClear();

  rerender(
    <ErrorBoundary>
      <Bomb />
    </ErrorBoundary>
  );
  fireEvent.click(getByText(/home page/i));

  expect(mockReportError).not.toHaveBeenCalled();
  expect(console.error).not.toHaveBeenCalled();
  expect(navigate).toHaveBeenCalledTimes(1);
  expect(navigate).toHaveBeenCalledWith('/');
});
