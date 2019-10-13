import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  font-size: 3.3rem;
  color: orange;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NotFound = () => {
  return (
    <Wrapper>
      404 Not found!
      <div>
        <a href='/'>Home Page</a>
      </div>
    </Wrapper>
  );
};

export default NotFound;
