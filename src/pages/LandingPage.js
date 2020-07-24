import React from "react";
import { Link } from "react-router-dom";
import LandingNav from "../components/LandingPage/LandingNav";
import LandingFirst from "../components/LandingPage/LandingFirst";
import LandingSecond from "../components/LandingPage/LandingSecond";
import LandingFooter from "../components/LandingPage/LandingFooter";
const LandingPage = () => {
  return (
    <>
       <LandingNav/>
       <LandingFirst/>
       <LandingSecond/>
       <LandingFooter/>
    </>
  );
};

export default LandingPage;
