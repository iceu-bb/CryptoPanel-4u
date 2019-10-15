import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { navigate } from '@reach/router';
import { useSuggestions } from '../../../hooks/useSuggestions';
import Input from '../Input';

beforeAll(() => {
  Object.defineProperty(window.location, 'reload', {
    configurable: true
  });
  window.location.reload = jest.fn();
  window.alert = jest.fn();
});

jest.mock('@reach/router', () => ({
  navigate: jest.fn()
}));
jest.mock('../../../hooks/useSuggestions');
const mockSetShowInput = jest.fn();
const searchString = 'xrp';

const suggestionsArray = ['XRP (XRP)', 'Bitcoin (BTC)', 'DogeCoin (DOGE)'];

describe('<Input/>', () => {
  beforeAll(() => {
    useSuggestions.mockReturnValue({ suggestions: suggestionsArray });
  });
  afterEach(() => {
    cleanup();
    navigate.mockReset();
    mockSetShowInput.mockReset();
  });

  test(' redners correctly', () => {
    const { container, queryByTestId } = render(
      <Input setShowInput={mockSetShowInput} />
    );

    expect(container).toBeInTheDocument();
    expect(queryByTestId('suggestions-test')).not.toBeInTheDocument();
  });

  test('should has autofocus on start', () => {
    const { getByPlaceholderText } = render(
      <Input setShowInput={mockSetShowInput} />
    );
    const input = getByPlaceholderText('Search a coin');
    expect(document.activeElement).toEqual(input);
  });

  test('when typing, change value and display suggestions options', () => {
    const { getByPlaceholderText, getAllByTestId } = render(
      <Input setShowInput={mockSetShowInput} />
    );
    const input = getByPlaceholderText('Search a coin');
    fireEvent.change(input, { target: { value: searchString } });

    expect(input.value).toBe(searchString);
    expect(getAllByTestId('suggestions-option-test').length).toBe(3);
  });

  test('click on suggestions-option navigate to correct coinContainer route', () => {
    const { getByPlaceholderText, getAllByTestId } = render(
      <Input setShowInput={mockSetShowInput} />
    );
    const input = getByPlaceholderText('Search a coin');
    fireEvent.change(input, { target: { value: searchString } });
    expect(input.value).toBe(searchString);
    const suggestedOption = getAllByTestId('suggestions-option-test')[0];
    fireEvent.click(suggestedOption);

    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith('/coin/XRP');
  });

  test('submiting works correctly', () => {
    const { getByPlaceholderText, getAllByTestId, queryByTestId } = render(
      <Input setShowInput={mockSetShowInput} />
    );
    const input = getByPlaceholderText('Search a coin');
    fireEvent.change(input, { target: { value: searchString } });
    const suggestedOption = getAllByTestId('suggestions-option-test')[0];
    fireEvent.click(suggestedOption);

    expect(input).toHaveAttribute('value', '');
    expect(queryByTestId('suggestions-test')).not.toBeInTheDocument();
    expect(mockSetShowInput).toHaveBeenCalledTimes(1);
    expect(mockSetShowInput).toHaveBeenCalledWith(false);
    expect(navigate).toHaveBeenCalledTimes(1);
  });

  test('clicked on close button turn off input panel ', () => {
    const { getByText } = render(<Input setShowInput={mockSetShowInput} />);
    const button = getByText(/close/i);
    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    expect(mockSetShowInput).toHaveBeenCalledTimes(1);
    expect(mockSetShowInput).toHaveBeenCalledWith(false);
  });

  test('press Escape turn off input panel ', () => {
    const { getByPlaceholderText } = render(
      <Input setShowInput={mockSetShowInput} />
    );
    const input = getByPlaceholderText('Search a coin');
    fireEvent.keyDown(input, {
      key: 'Escape',
      keyCode: 27
    });

    expect(mockSetShowInput).toHaveBeenCalledTimes(1);
    expect(mockSetShowInput).toHaveBeenCalledWith(false);
  });

  test('press Enter when there are suggestions naviagte to correct coinContainer', () => {
    const { getByPlaceholderText } = render(
      <Input setShowInput={mockSetShowInput} />
    );
    const input = getByPlaceholderText('Search a coin');
    fireEvent.change(input, { target: { value: searchString } });
    fireEvent.keyDown(input, {
      key: 'Enter',
      keyCode: 13
    });

    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith('/coin/XRP');
  });

  test('press Enter on suggestion when suggestion focused navigate to correct coinContainer', () => {
    const { getAllByTestId, getByPlaceholderText } = render(
      <Input setShowInput={mockSetShowInput} />
    );
    const input = getByPlaceholderText('Search a coin');
    fireEvent.change(input, { target: { value: searchString } });
    const suggestedOption = getAllByTestId('suggestions-option-test')[2];
    fireEvent.focus(suggestedOption);
    fireEvent.keyDown(suggestedOption, {
      key: 'Enter',
      keyCode: 13
    });
    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith('/coin/DOGE');
  });
});
