import styled from 'styled-components';

export const CoinInfoContainer = styled.div`
  display: flex;
  max-width: 550px;
  justify-content: space-around;
  align-items: center;
  margin: 50px auto;

  @media (max-width: 600px) {
    margin: 20px auto;
    flex-direction: column;
  }
`;

export const StatisticsContainer = styled.div`
  padding: 10px 20px;
`;

export const Image = styled.img`
  display: inline-block;
  margin-right: 20px;
  width: 130px;
  height: 130px;

  @media (max-width: 600px) {
    margin-bottom: 25px;
  }
`;

export const H2 = styled.h2`
  font-size: 2.2rem;
  letter-spacing: 0.6px;
`;

export const StatisticsItem = styled.div`
  display: flex;
  align-items: center;
  margin: 10px auto;
  font-size: 2rem;
`;

export const Thin = styled.span`
  font-weight: 300;
  font-size: 1.7rem;
  margin-right: 10px;
  letter-spacing: 0.6px;
`;

export const Bold = styled.span`
  font-weight: bold;
  letter-spacing: 0.8px;
`;

export const Percentage = styled.span`
  color: ${({ green }) => (green ? '#349e8c' : '#D94064')};
  margin-left: 5px;
  font-size: 1.8rem;
`;
