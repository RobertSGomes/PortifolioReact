import styled from "styled-components";

export const FormWrapper = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;

    margin-top: 225px;
    
    > input {
        display: flex;
        align-items: center;
        justify-content: center;

        text-align: center;

        width: 500px;

        padding: 25px 50px;

        color: var(--font-detail);
        font-size: 24px;
        font-weight: 700;

        background: var(--background-pri);

        border: 2px solid var(--background-sec);
        border-radius: 10px;
    }

    > input::placeholder {
        color: var(--background-sec);
    }
`