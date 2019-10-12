import styled from 'styled-components';
import { ScrollTopColor, ScrollTopBackgroundColor } from '../data/theme';

export const Button = styled.button`
  /* general style */
  background-color: ${ScrollTopBackgroundColor};
  color: ${ScrollTopColor};
  font-size: 1.5rem;
  line-height: 1.5;
  padding: 6px 12px;
  cursor: pointer;
  border: none;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 500;

  /* animation */
  will-change: opacity;
  transition: opacity 0.5s ease-in-out;
  opacity: ${({ show }) => (show ? 1 : 0)};
  pointer-events: ${({ show }) => (show ? 'auto' : 'none')};

  /* media queries */
  @media (max-width: 600px) {
    right: 0;
    bottom: 35px;
  }
`;
