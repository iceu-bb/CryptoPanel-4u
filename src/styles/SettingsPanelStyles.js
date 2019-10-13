import styled from 'styled-components';
import { fontColor } from '../data/theme';

export const Wrapper = styled.header`
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  & > :first-child {
    margin-right: 20px;
  }
`;

export const Title = styled.img`
  display: inline-block;
  height: auto;
  width: 100px;
`;

export const ButtonContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-around;
`;

export const LanguageButton = styled.button`
  font-size: 1.5rem;
  font-weight: 500;
  color: #fff;
  padding: 10px;
  background-color: inherit;
  border: none;
  box-shadow: none;
  cursor: pointer;
  will-change: opacity;
  transition: opacity 0.3 linear;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    box-shadow: none;
  }
`;
