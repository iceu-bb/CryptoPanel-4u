import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  transform: translate(-50%, 0);
  left: 50%;
  min-height: 500px;
  height: 60vh;
  max-width: 100vw;
  padding: 0 15px 0 30px;

  @media (max-width: 600px) {
    padding: 0 0 0 5px;
  }
`;
