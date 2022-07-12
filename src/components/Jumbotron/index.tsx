import React, { useContext } from "react";
import { GuestContext } from "../../contexts/guestContext";
import { ArrowDownIcon, JumbotronWrapper } from "./style";

const Jumbotron: React.FC = () => {
    const { name } = useContext(GuestContext)

    return (
        <JumbotronWrapper>
            <div>
                <p className="greetings">Olá {name}!</p>
                <p className="title">Nos chamamos Robert e Roger</p>
                <p className="subtitle">Nesse portifólio vamos te apresentar nossa tragetória como desenvolvedores e apresentar nossos projetos e habilidades.</p>
                <button>VENHA CONOSCO</button>
            </div>
            <ArrowDownIcon />
        </JumbotronWrapper >
    )
}

export default Jumbotron