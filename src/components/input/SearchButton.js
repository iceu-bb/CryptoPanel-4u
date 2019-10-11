import React from 'react';

const SearchButton = ({ setShowInput }) => {
  return (
    <button
      onClick={() => {
        setShowInput(true);
      }}
    >
      Wyszukaj Coina
    </button>
  );
};

export default SearchButton;
