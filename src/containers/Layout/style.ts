import styled from "styled-components";

export const Container = styled.div`
    height: 2000px;
`

export const Line = styled.div`
    display: flex;
    justify-content: center;

    width: 64px;
    height: 100vh;

    position: fixed;
    right: 0;

    &::before {
        content: '';

        width: 2px;
        height: 100%;

        position: absolute;

        background: var(--line);
    }
`
