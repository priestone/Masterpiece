import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyled = createGlobalStyle`

${reset}

*{
    padding:0;
    margin:0;
    box-sizing:border-box;
}
body{
    font-family: "Noto Sans KR", sans-serif;
}


img{
    width:100%;
    display:block;
}

a{
    text-decoration:none;
    color:black;
    display:block;
}

`;
