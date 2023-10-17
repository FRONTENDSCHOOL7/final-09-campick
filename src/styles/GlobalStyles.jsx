import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    :root {
        //예시 
        // --gray:#C4C4C4;
    }
    
    .a11y-hidden {
      clip: rect(1px, 1px, 1px, 1px);
      clip-path: inset(50%);
      width: 1px;
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
    }
    ${reset}
    body {
        display:flex;
        justify-content:center;
        background-color:#f5f5f5;
    }

`;
export default GlobalStyles;
