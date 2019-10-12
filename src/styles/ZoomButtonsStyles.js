import styled from 'styled-components';
import { buttonBackgroundColor } from '../data/theme';

export const ButtonsContainer = styled.div`
  max-width: 700px;
  margin: 50px auto 0;
  padding: 10px;
  text-align: center;

  @media (max-width: 600px) {
    margin: 25px auto 0;
  }
`;

export const Button = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  margin-right: 5px;
  font-size: 1.6rem;
  background-color: ${buttonBackgroundColor};
  border: none;
  cursor: pointer;
  transition: color 250ms linear, border 250ms linear;

  border: ${({ active }) =>
    active ? '1px solid #49B8B8' : '1px solid transparent'};

  &:active {
    box-shadow: none;
  }
`;
