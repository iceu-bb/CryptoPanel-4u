import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { StyledSearchButton } from '../../styles/InputStyles';

const SearchButton = ({ setShowInput }) => {
  return (
    <StyledSearchButton
      tabIndex={0}
      role='button'
      onClick={() => {
        setShowInput(true);
      }}
    >
      <FaSearch />
    </StyledSearchButton>
  );
};

export default SearchButton;
