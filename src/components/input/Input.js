import React, { useState, useCallback } from 'react';
import { navigate } from '@reach/router';
import { useSuggestions } from '../../hooks/useSuggestions';
import { useEscapePress } from '../../hooks/useEscapePress';
import {
  Wrapper,
  Container,
  StyledInput,
  Options,
  OptionsItem,
  OptionsSuggestion,
  CloseButton
} from '../../styles/InputStyles';

const Input = ({ setShowInput }) => {
  const [value, setValue] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const { suggestions } = useSuggestions(value);
  useEscapePress(() => setShowInput(false));

  const handleChange = useCallback(
    newValue => {
      setValue(newValue);
      !showOptions && setShowOptions(true);
    },
    [value]
  );

  const handleKeyPress = key =>
    key === 'Enter' && suggestions.length > 0 && handleSubmit();

  const handleKeyPressOnItem = (key, item) =>
    key === 'Enter' && handleSubmit(item);

  const handleSubmit = (item = suggestions[0]) => {
    if (showOptions && suggestions.length > 0) {
      setShowInput(false);
      setShowOptions(false);
      setValue('');
      navigate(`/coin/${item.match(/\(([^)]+)\)/)[1]}`);
    } else {
      alert('bład');
    }
  };

  return (
    <Wrapper>
      <Container onSubmit={() => handleSubmit()}>
        <StyledInput
          type='text'
          value={value}
          placeholder='Search a coin'
          onKeyDown={e => handleKeyPress(e.key)}
          onChange={e => handleChange(e.target.value)}
          onFocus={() => value.length > 0 && setShowOptions(true)}
          autoFocus
        />
        <CloseButton onClick={() => setShowInput(false)}>Close</CloseButton>
      </Container>
      {showOptions && (
        <Options>
          <OptionsSuggestion>Cryptocurrencies</OptionsSuggestion>
          {suggestions.map((item, index) => (
            <OptionsItem
              tabIndex={0}
              role='button'
              onKeyDown={e => handleKeyPressOnItem(e.key, item)}
              key={index}
              onClick={() => {
                handleSubmit(item);
              }}
            >
              {item}
            </OptionsItem>
          ))}
        </Options>
      )}
    </Wrapper>
  );
};

export default Input;
