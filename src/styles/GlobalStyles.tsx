import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    display: flex;
    justify-content: center;
    margin: 0;
    width: 100vw;
  }
`;

export default GlobalStyle;
