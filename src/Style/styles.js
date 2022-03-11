import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
  body {
    -webkit-user-select: none;
    -moz-user-select: none; 
    -ms-user-select: none;
    user-select: none; // 드래그 방지
    margin: 0;
    padding: 0;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
    background: -webkit-linear-gradient(
        top,
        #131316 0%,
        #042962 100%
    );
  }
`;

export default GlobalStyle;
