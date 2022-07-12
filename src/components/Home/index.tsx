import React, { useState } from "react";

import Typewriter from "typewriter-effect"

import Form from "../Form";
import { Container, InfoIcon } from "./style";

interface Props {
    setState: React.Dispatch<React.SetStateAction<string>>
}

const Home: React.FC<Props> = ({ setState }) => {
    const [isInput, setIsInput] = useState<boolean>(false)

    function typeWriter() {
        setIsInput(true)
    }

    return (
        <Container>
            <span>
                <InfoIcon />
                <div className="tooltip">Após escrever seu nome pressione ENTER para continuar</div>
            </span>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Seja bem-vindo(a)")
                        .pauseFor(500)
                        .deleteAll()
                        .typeString("Como você se chama?")
                        .callFunction(typeWriter)
                        .start()
                }}
            />
            {isInput ? <Form setState={setState} /> : ""}
        </Container>
    )
}

export default Home;