import styled, { keyframes } from "styled-components";

import { ArrowDownCircle } from "@styled-icons/feather/ArrowDownCircle"

const animateIcon = keyframes`
    0% {
        bottom: 50px;
    }
    100% {
        bottom: 40px;
    }
`

export const JumbotronWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    position: relative;

    padding: 0 150px;
    margin: 0 32px;

    width: calc(100% -64px);
    height: 700px;

    > div {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    
    > div .greetings {
        margin-bottom: 10px;

        color: var(--font-detail);
        font-size: 24px;
        font-weight: 700;
    }

    > div .title {
        margin-bottom: 25px;

        color: var(--font);
        font-weight: 700;
        font-size: 48px;
    }

    > div div {
        display: flex;
        align-items: center;
        gap: 15px;
    }

    > img {
        width: 400px;

        position: absolute;
        z-index: -1;
        right: 150px;
        bottom: 0px;
    }
`

export const ArrowDownIcon = styled(ArrowDownCircle)`
    align-self: center;

    width: 25px;
    height: 25px;

    position: fixed;

    animation-name: ${animateIcon};
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
`