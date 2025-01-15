import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyled = createGlobalStyle`

${reset}

*{
    padding:0;
    margin:0;
    box-sizing:border-box;
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
