import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {

    --black: #3F3F40;
    --gray: #9f9f9f;
    --white: #ffffff;
    --pink: #f71963;

    --poppins: 'Poppins', sans-serif;

    button{
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

     ol, ul, li {
        list-style: none;
    }
}



`;
