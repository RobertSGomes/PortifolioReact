import styled from "styled-components"

const HistoryWrapper = styled.div`
    display: flex;
    flex-direction: column;

    padding: 100px 150px;
    margin: 0 32px;

    width: calc(100% -64px);

    background: var(--background-sec);

    > div:nth-child(odd) {
        width: 100%;
        margin: 50px 0;
    }

    > div:nth-child(even) {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        width: 100%;
        margin: 50px 0;
        text-align: right;
    }

    > div .title {
        margin-bottom: 15px;

        font-weight: 700;
        font-size: 72px;
    }

    > div .description {
        width: 50%;
        color: var(--font-sec);
        font-weight: 700;
        font-size: 22px;
        white-space: pre-wrap;
    }
`

export default HistoryWrapper