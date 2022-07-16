import React from "react";

import { ButtonWrapper } from "./style";

interface ButtonProps {
    text: string,
    type: "button" | "submit" | "reset" | undefined,
    isInverse?: boolean
}

const Button: React.FC<ButtonProps> = ({
    text,
    type,
    isInverse
}) => {
    return (
        <ButtonWrapper type={type} className={isInverse ? "isInverse" : ""}>{text}</ButtonWrapper>
    )
}

export default Button