import React from 'react';
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from '@testing-library/react';
import { getHistoData } from '../../services/cryptoApi';
import { histoData } from '../../helpers/testBuildData';
import ZoomButtons from '../ZoomButtons';

afterEach(() => cleanup());

jest.mock('../../services/cryptoApi', () => ({
  getHistoData: jest.fn()
}));

const mockSetHistoData = jest.fn();
const fakeName = 'Test';

describe('<ZoomButtons/>', () => {
  test('renders correctly', () => {
    const { getByText } = render(
      <ZoomButtons setHistoData={mockSetHistoData} name={fakeName} />
    );
    expect(getByText('1 Y')).toBeTruthy();
  });
  test('when zoom button clicked, fetch data and call SetHistoData function with fetched data', async () => {
    getHistoData.mockImplementation(() => Promise.resolve(histoData));
    const { getByText } = render(
      <ZoomButtons setHistoData={mockSetHistoData} name={fakeName} />
    );
    expect(getByText('1 Y')).toHaveStyle('border: 1px solid transparent');
    fireEvent.click(getByText('1 Y'));
    await waitForElement(() => [
      expect(getHistoData).toHaveBeenCalledTimes(1),
      expect(getHistoData).toHaveBeenCalledWith('Test', 4, 'day', 100)
    ]);
    expect(mockSetHistoData).toHaveBeenCalledTimes(1);
    expect(mockSetHistoData).toHaveBeenCalledWith(histoData.Data);

    // check if button got active prop
    expect(getByText('1 Y')).toHaveStyle('border: 1px solid #49B8B8');
  });
});
