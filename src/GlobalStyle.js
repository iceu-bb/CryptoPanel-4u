import { createGlobalStyle } from 'styled-components';
import { backgroundColor } from './data/theme';

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
    }

    *, *::before, *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        min-height: 100vh;
        width: 100vw;
        background-color: ${backgroundColor};
        font-family: 'Helvetica Neue',
    }

`;

export default GlobalStyle;
