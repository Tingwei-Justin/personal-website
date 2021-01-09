import React, { useState } from "react";
import { Navbar, Sidebar } from "../components";
import { BrowserRouter as Router } from "react-router-dom";
import {homeObjOne, homeObjTwo, homeObjThree} from "../components/InfoSection/Data"
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <InfoSection {...homeObjThree}/>
      </Router>
    </>
  );
}

export default Home;
