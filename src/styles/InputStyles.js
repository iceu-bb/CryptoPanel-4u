import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(100, 100, 150, 0.9);

  & > * {
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
  }
`;

export const Container = styled.form`
  margin-top: 0.25px;
  height: 55px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 25px;
`;

export const StyledInput = styled.input`
  width: 75%;
  height: 55px;
  padding: 0 20px;
  font-size: 1.6rem;
  color: #404040;
  font-weight: 300;
  border: none;
  outline: none;
`;

export const Options = styled.div`
  background-color: #fff;
  color: #282828;
  width: 100%;
  height: auto;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

export const OptionsItem = styled.div`
  padding: 20px;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ddd;
  }
`;

export const OptionsSuggestion = styled(OptionsItem)`
  padding: 12px 20px;
  font-size: 1.5rem;
  background-color: #ddd;
  color: #000;
  cursor: default;
`;

export const CloseButton = styled.button`
  background-color: #ddd;
  padding: 8px 13px;
  font-size: 1.4rem;
  font-weight: 500;
  border: none;
  border-radius: 4px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
`;

export const StyledSearchButton = styled.span`
  margin-top: 3px;
  display: inline-block;
  padding: 10px 15px;
  color: inherit;
  font-size: 1.6rem;
  cursor: pointer;
`;
