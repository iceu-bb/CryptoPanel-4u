import styled from 'styled-components';

export const Button = styled.button`
  /* general style */
  background-color: yellow;
  font-size: 3rem;
  position: fixed;
  padding: 0 15px 10px;
  bottom: 50px;
  right: 50px;
  cursor: pointer;
  border: none;

  /* animation */
  will-change: opacity;
  transition: opacity 0.5s ease-in-out;
  opacity: ${({ show }) => (show ? 1 : 0)};
  pointer-events: ${({ show }) => (show ? 'auto' : 'none')};

  /* media queries */
  @media (max-width: 600px) {
    right: 0;
    bottom: 15px;
  }
`;
