import React from "react";
import AboutImg from "./components/AboutImg";
import AboutTxt from "./components/AboutTxt";
import { AboutWrapper } from "./style";

import Wave from "../../assets/wave.svg"

const About: React.FC = () => {
    return (
        <AboutWrapper>
            <img src={Wave} />
            <div>
                <AboutImg />
                <AboutTxt />
            </div>
        </AboutWrapper>
    )
}

export default About