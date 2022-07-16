import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');
    
    * {
        margin: 0;
        padding: 0;

        box-sizing: border-box;

        font-family: "Lato", sans-serif;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        background-image: --background-pri;
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
        --active: #272643;
        --hover: #2c698d;

        --background-pri: #fff;
        --background-sec: #272643;

        --font: #272643;
        --font-sec: #fff;
        --font-detail: #2c698d;
        
        --line: #2c698d;
        
        --button-back: #fff;
        --button-border: #272643;
        --button-font: #272643;
        --button-hover-back: #272643;
        --button-hover-font: #fff;
    }

    h1 {
        font-size: 48px;
    }

    h4 {
        color: var(--font-sec);
    }
`