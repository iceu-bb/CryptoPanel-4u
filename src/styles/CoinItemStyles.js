import styled from 'styled-components';

export const CoinItemContainer = styled.article`
  max-width: 1200px;
  margin: 0 auto;
  padding: 25px;
  font-size: 1.8rem;
  display: grid;
  grid-template-columns: 40px 2fr 2fr 2fr 1fr;
  grid-column-gap: 10px;
  border-bottom: 0.5px solid #ddd;
`;

export const Image = styled.img`
  display: inline-block;
  margin-right: 10px;
  width: 16px;
  height: 16px;
`;

export const CoinName = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

export const CoinChange = styled.span`
  color: ${({ green }) => (green ? '#349e8c' : '#D94064')};
`;
