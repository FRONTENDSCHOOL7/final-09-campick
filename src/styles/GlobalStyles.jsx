import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    @font-face { 
        font-family: 'TheJamsil5Bold'; 
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/TheJamsil5Bold.woff2') format('woff2'); 
        font-weight: 700; 
        font-style: normal; 
    }
    @font-face { 
        font-family: 'TheJamsil5'; 
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/TheJamsil5Bold.woff2') format('woff2'); 
        font-weight: 300; 
        font-style: normal; 
    }

    :root {
        //예시 
        // --gray:#C4C4C4;
        /* 메인 색상 */
        --primary-color:#7CB45B;
        --primary-disabled-color:#B9D2AB; 
        /* 폰트 색상 */
        --font-primary-color:#767676;
        --font-white-color:#fff;
        --font-placeholder-color:#DBDBDB;
        --font-message-color:#EB5757 ;
        font-family:'TheJamsil5',sans-serif;
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
    img {
        vertical-align: top;
    }
    a{
        text-decoration: none;
        color:inherit
    }
    button{
        border:none;
        background-color:inherit;
        padding:0;
    }
`;
<div></div>;
export default GlobalStyles;
