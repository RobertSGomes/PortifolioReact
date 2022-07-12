import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    gap: 15px;

    position: fixed;

    height: 100vh;
    width: 64px;

    &::before {
        content: '';

        position: absolute;

        width: 2px;
        height: 100%;

        background: var(--background-sec);
    }
`