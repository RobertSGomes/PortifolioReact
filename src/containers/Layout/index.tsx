import React from "react";
import About from "../About";
import Jumbotron from "../Jumbotron";
import TimeLine from "../Timeline";


import { Container, Line } from "./style";

const Layout: React.FC = () => {
    return (
        <Container>
            <TimeLine />
            <Line />
            <Jumbotron />
            <About />
        </Container>
    )
}

export default Layout