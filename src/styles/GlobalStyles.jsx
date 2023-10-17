import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    :root {
        //예시 
        // --gray:#C4C4C4;
        /* 메인 색상 */
        --primary-color:#7CB45B;
        --primary-disabled-color::#B9D2AB; 
        /* 폰트 색상 */
        --font-primary-color:#767676;
        --font-white-color:#fff;
        --font-placeholder-color:#DBDBDB;
        --font-message-color:#EB5757 
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
