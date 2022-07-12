import React from "react";

import HistoryTimeLine from "../HistoryTimeLine"
import HistoryContent from "../HistoryContent"

import HistoryWrapper from "./style";

const Beginning: React.FC = () => {
    return (
        <HistoryWrapper>
            <h1>Nossa história</h1>
            <HistoryContent />
            <HistoryTimeLine />
        </HistoryWrapper >
    )
}

export default Beginning