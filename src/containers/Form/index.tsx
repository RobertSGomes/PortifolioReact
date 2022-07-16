import React, { useEffect, useState } from "react";
import { guestValue } from "../../contexts/guestContext";
import { FormWrapper } from "./style";

interface Props {
    setState: React.Dispatch<React.SetStateAction<string>>
}

const Form: React.FC<Props> = ({ setState }) => {
    // Tudo isso para pegar o valor do input
    const [inputValue, setInputValue] = useState("")
    const handleSetInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }
    useEffect(() => {
        if (inputValue != "") {
            guestValue.name = inputValue
        }
    }, [inputValue, setInputValue])

    // isso é para pegar a tecla pressionada
    const handler = (event: React.KeyboardEvent) => {
        setState(event.key);
    };

    return (
        <FormWrapper>
            <input autoFocus type="text" placeholder="Your name" maxLength={21} onKeyPress={(e) => handler(e)} onKeyUp={(e) => handleSetInput(e)} />
        </FormWrapper>
    )
}

export default Form