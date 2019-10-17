import React from 'react';
import styled from 'styled-components';
import { navigate } from '@reach/router';
import { reportError } from '../helpers/errorApi';

const ErrorContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ErrorImage = styled.img`
  width: 40vh;
  height: 40vh;
`;

const ErrorText = styled.p`
  font-size: 3rem;
  margin-bottom: 20px;
`;

class ErrorBoundary extends React.Component {
  state = {
    hasErrored: false
  };
  componentDidCatch(error, info) {
    this.setState({ hasErrored: true });
    reportError(error, info);
  }
  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorContainer>
          <ErrorImage
            src='https://i.imgur.com/qIufhof.png'
            alt='broken page image'
          />
          <ErrorText>Caution! This Page is Cordoned Off</ErrorText>
          <button
            onClick={() => {
              this.setState({ hasError: false });
              navigate('/');
            }}
          >
            Home Page
          </button>
        </ErrorContainer>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
