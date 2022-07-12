import React from "react"

import Typewriter from "typewriter-effect"

import HistoryContentWrapper from "./style"

const HistoryContent: React.FC = () => {
    return (
        <HistoryContentWrapper>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("O início")
                        .pauseFor(500)
                        .deleteAll()
                        .typeString("Entramos na ETEC ATIBAIA")
                        .deleteAll()
                        .typeString("Começamos aprendendo Portugol, para em seguida aprender Java")
                        .start()
                }}
            />
        </HistoryContentWrapper>
    )
}

export default HistoryContent