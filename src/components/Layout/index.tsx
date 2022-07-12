import React from "react";
import History from "../History";
import Jumbotron from "../Jumbotron";
import TimeLine from "../Timeline";


import { Container, Line } from "./style";

const Layout: React.FC = () => {
    return (
        <Container>
            <TimeLine />
            <Line />
            <Jumbotron />
            <History />
        </Container>
    )
}

export default Layout