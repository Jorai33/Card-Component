import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body{
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    }

`;

export default GlobalStyle;