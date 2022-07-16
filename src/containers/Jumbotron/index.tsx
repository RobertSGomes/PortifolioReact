import React, { useContext } from "react";
import { GuestContext } from "../../contexts/guestContext";
import Button from "../Button";
import { ArrowDownIcon, JumbotronWrapper } from "./style";

import Logo from "../../assets/jumb.svg"

const Jumbotron: React.FC = () => {
    const { name } = useContext(GuestContext)

    return (
        <JumbotronWrapper>
            <div>
                <p className="greetings">Hello {name},</p>
                <p className="title">We're Robert and Roger</p>
                <div>
                    <Button type="button" text="Download CV" />
                    <Button type="button" text="Contact US" isInverse />
                </div>
            </div>
            <img src={Logo} />
            <ArrowDownIcon />
        </JumbotronWrapper >
    )
}

export default Jumbotron