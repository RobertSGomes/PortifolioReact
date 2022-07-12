import styled, { keyframes } from "styled-components";

import { ArrowDownCircle } from "@styled-icons/feather/ArrowDownCircle"

const shakeHand = keyframes`
    0% {
        transform: rotate(0deg);
    }
    15% {
        transform: rotate(14deg);
    }
    30% {
        transform: rotate(-8deg);
    }
    40% {
        transform: rotate(14deg);
    }
    50% {
        transform: rotate(-4deg);
    }
    60% {
        transform: rotate(10deg);
    }
    70% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(0deg);
    }
`

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

    padding: 0 150px;
    margin: 0 32px;

    width: calc(100% -64px);
    height: 700px;

    border-bottom: 2px solid var(--background-sec);

    > div {
        display: flex;
        justify-content: center;
        flex-direction: column;

        position: relative;
    }

    
    > div .greetings {
        margin-bottom: 15px;

        color: var(--active);
        font-size: 24px;
        font-weight: 700;
    }

    > div .title {
        margin-bottom: 15px;

        font-weight: 700;
        font-size: 52px;
    }

    > div .subtitle {
        width: 50%;

        color: var(--font-sec);

        font-weight: 700;
        font-size: 15px;
    }

    > div button {
        width: fit-content;
        padding: 15px 25px;

        position: absolute;
        bottom: -80px;

        font-size: 12px;
        font-weight: 700;

        background: var(--background-pri);

        border: 2px solid var(--background-sec);
        border-radius: 10px;

        cursor: pointer;
    }

    > div button:hover {
        background: var(--background-sec);
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