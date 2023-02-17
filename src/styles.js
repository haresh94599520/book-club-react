import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Work Sans", sans-serif;
  }

  body {
    /* height: 100vh;
    width: 100vw;
    overflow: hidden;
    color: #fbfbfb;
    font-weight: 500; */
    /* background: #2828e6; */
    /* background-color: #2423e3; */
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    /* overflow: hidden; */
  }
`;
