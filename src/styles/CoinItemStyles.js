import styled from 'styled-components';
import { borderColor } from '../data/theme';
import { Link } from '@reach/router';

export const CoinItemContainer = styled.article`
  padding: 25px;
  font-size: 1.8rem;
  display: grid;
  justify-content: center;
  grid-template-columns: 40px 2fr 2fr 2fr 1fr;
  grid-column-gap: 10px;
  border-bottom: 0.5px solid ${borderColor};
  @media (max-width: 600px) {
    max-width: 100vw;
    grid-template-columns: 20px 4fr 3fr 2fr;
    padding: 25px 10px;
  }
`;

export const HeaderItemContainer = styled(CoinItemContainer)`
  @media (max-width: 600px) {
    padding: 25px 10px 25px 0px;
  }

  & > div:first-child > span {
    padding: 10px;
    @media (min-width: 600px) {
      margin-left: -10px;
    }
  }

  & > div:not(:nth-child(1)) > span {
    @media (max-width: 600px) {
      margin-left: 15px;
    }
  }
`;

export const HeaderItemElement = styled.span`
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: yellow;
  }
`;

export const CoinName = styled.span`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
`;

export const Image = styled.img`
  display: inline-block;
  margin-right: 10px;
  width: 20px;
  height: 20px;
  @media (max-width: 600px) {
    align-self: flex-start;
  }
`;

export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  transition: all 0.15s ease;
  will-change: opacity;
  border-bottom: 2px solid transparent;

  &:hover {
    opacity: 0.85;
    border-bottom: 2px solid;
  }
`;

export const CoinChange = styled.span`
  color: ${({ green }) => (green ? '#349e8c' : '#D94064')};
`;

export const MarketCap = styled.span`
  @media (max-width: 600px) {
    display: none;
  }
`;
