import { createGlobalStyle } from 'styled-components';
import { backgroundColor, fontColor } from './data/theme';

const GlobalStyle = createGlobalStyle`
    html {
        max-width:100vw;
        overflow-x: hidden;
        font-size: 62.5%;
        scroll-behavior: smooth;
    }

    *, *::before, *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        max-width:100vw;
        overflow-x: hidden;
        min-height: 100vh;
        width: 100vw;
        color: ${fontColor};
        background-color: ${backgroundColor};
        font-family: 'Helvetica Neue',

    }

    main {
        margin: 0 auto;
        max-width: 1000px;
    }

    button:focus , button:active, a:focus, a:active{
        outline:none
    }

`;

export default GlobalStyle;
