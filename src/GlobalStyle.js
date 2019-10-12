import { createGlobalStyle } from 'styled-components';
import { backgroundColor, fontColor } from './data/theme';

const GlobalStyle = createGlobalStyle`
    html {
        max-width:100vw;
        overflow-x: hidden;
        font-size: 62.5%;
        scroll-behavior: smooth;

        @media (max-width: 600px) {
            font-size: 56.25%;
            }
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
        font-family: 'Helvetica Neue';
        transition: all .1s linear;
    }

    main {
        margin: 0 auto;
        max-width: 1000px;
    }

    button {
        box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
        transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    }

    button:focus , button:active, a:focus, a:active{
        outline:none;

    }

    button:active {
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
      0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
    }

    input,
    textarea,
    button,
    select,
    a,
    span {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    }

`;

export default GlobalStyle;
