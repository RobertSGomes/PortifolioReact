import React, { useEffect, useState } from "react";
import TimeItem from "../Timeitem";
import { Container } from "./style";

const initialState = [
    {
        "type": "none"
    },
    {
        "type": "none"
    },
    {
        "type": "none"
    },
    {
        "type": "none"
    },
    {
        "type": "none"
    }
]

const initialClick = {
    "index": 0
}


const TimeLine: React.FC = () => {
    const [click, setClick] = useState<{ "index": number }>(initialClick)
    const [isType, setIsType] = useState<Array<{ "type": string }>>(initialState)

    useEffect(() => {
        let temp_state = [...isType]

        temp_state[click.index] = {
            "type": "active"
        }

        for (let i = click.index + 1; i < isType.length; i++) {
            temp_state[i] = {
                "type": "none"
            }
        }

        for (let j = click.index - 1; j >= 0; j--) {
            temp_state[j] = {
                "type": "hasPassed"
            }
        }

        setIsType(temp_state) // eslint-disable-next-line
    }, [click, setClick])

    return (
        <Container>
            <TimeItem index={0} click={click} setClick={setClick} hasPassed={isType[0].type === "hasPassed" ? true : false} isActive={isType[0].type === "active" ? true : false} content={"Início"} />
            <TimeItem index={1} click={click} setClick={setClick} hasPassed={isType[1].type === "hasPassed" ? true : false} isActive={isType[1].type === "active" ? true : false} content={"Sobre"} />
            <TimeItem index={2} click={click} setClick={setClick} hasPassed={isType[2].type === "hasPassed" ? true : false} isActive={isType[2].type === "active" ? true : false} content={"Habilidades"} />
            <TimeItem index={3} click={click} setClick={setClick} hasPassed={isType[3].type === "hasPassed" ? true : false} isActive={isType[3].type === "active" ? true : false} content={"Projetos"} />
            <TimeItem index={4} click={click} setClick={setClick} hasPassed={isType[4].type === "hasPassed" ? true : false} isActive={isType[4].type === "active" ? true : false} content={"Contato"} />
        </Container>
    )
}

export default TimeLine