import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');
    
    * {
        margin: 0;
        padding: 0;

        box-sizing: border-box;

        color: var(--font);
        font-family: "Lato", sans-serif;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        background-image: radial-gradient(ellipse at top left, var(--background-ter), var(--background-pri));
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }

    #root {
        height: 100%;
    }

    a {
        text-decoration: none;
    }

    input-security, button, * {
        border: none;
        outline: none;
    }

    :root {
        --active: #e7bfa5;
        --hover: #fff1ce;

        --background-pri: #1A1423;
        --background-sec: #47305F;
        --background-ter: #251C35;

        --font: #fff;
        --font-sec: #a8a8b3;
        --font-detail: #8F6AB4;
    }

    h1 {
        font-size: 48px;
    }

    h4 {
        color: var(--font-sec);
    }
`