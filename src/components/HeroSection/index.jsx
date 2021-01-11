import React, { useState } from "react";
import BgVideo from "../../videos/video.mp4";
import { Button } from "../Button";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./styles/HeroSection";

function HeroSection() {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={BgVideo} tyle="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Tech Make Life Easy</HeroH1>
        <HeroP>
          Sig up for a new account today and receive $200 in credit towards you
          next payment.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
