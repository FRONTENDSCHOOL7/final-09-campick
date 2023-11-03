import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";


const GlobalStyles = createGlobalStyle`
    @font-face {
    font-family: 'TheJamsilBold';
    font-weight: 800;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/TheJamsil/TheJamsil-ExtraBold.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/TheJamsil/TheJamsil-ExtraBold.eot?#iefix') format('embedded-opentype'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/TheJamsil/TheJamsil-ExtraBold.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/TheJamsil/TheJamsil-ExtraBold.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/TheJamsil/TheJamsil-ExtraBold.ttf') format("truetype");
    font-display: swap;
}
    @font-face {
    font-family: 'TheJamsil';
    font-weight: 400;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/TheJamsil/TheJamsil-Regular.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/TheJamsil/TheJamsil-Regular.eot?#iefix') format('embedded-opentype'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/TheJamsil/TheJamsil-Regular.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/TheJamsil/TheJamsil-Regular.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/TheJamsil/TheJamsil-Regular.ttf') format("truetype");
    font-display: swap;
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
        font-family:'TheJamsil',sans-serif;

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
    input{
        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus,
        &:-webkit-autofill:active {
            transition: background-color 5000s ease-in-out 0s;
            -webkit-transition: background-color 9999s ease-out;
            -webkit-box-shadow: 0 0 0px 1000px 'var(--white);' inset !important;
            -webkit-text-fill-color: 'var(--white);' !important;
  }
    }
`;
<div></div>;
export default GlobalStyles;
