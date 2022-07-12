import styled from "styled-components";
import { Props } from ".";

export const Item = styled.div<Props>`
    width: 20px;
    height: 20px;

    position: relative;

    transform: scale(${props => props.hasPassed ? 1 : 0.5});

    background: var(--background-pri);
    
    border: ${props => props.hasPassed ? "2px solid var(--active)" : "2px solid var(--font)"};
    border-radius: 50%;

    cursor: pointer;

    &.active {
        transform: scale(1);
        background: var(--active);
        border: 2px solid var(--active);
        cursor: default;
    }

    &:hover:not(.active) {
        border: 2px solid var(--hover);
        transform: scale(1);
        background: var(--hover);
    }
`