import styled from "styled-components";

export const ButtonWrapper = styled.button`
    width: fit-content;
    padding: 15px 25px;

    color: var(--button-font);
    font-size: 12px;
    font-weight: 700;

    background: var(--button-back);

    border: 2px solid var(--button-border);
    border-radius: 10px;

    cursor: pointer;

    &:hover {
        background: var(--button-hover-back);
        color: var(--button-hover-font);
    }

    &.isInverse {
        background: var(--button-hover-back);
        color: var(--button-hover-font);
    }

    &.isInverse:hover {
        color: var(--button-font);
        background: var(--button-back);
    }
`