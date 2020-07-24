import React from "react";
import { Link } from "react-router-dom";
const LandingSecond = () => {
  return (
    <div className="landingSecond row">
      <div className="valign-wrapper container hide-on-small-only">
        <div className="center-align col s12 m5 l5">
          <img src="images/khalti.png" alt="Khalti Logo" />
        </div>
        <div className="center-align col s12 m5 l5">
          <h2 className="landingSecond-supported">We support Khalti with more to come</h2>
        </div>
      </div>
      <div className="hide-on-med-and-up">
        <div className="center-align col s12 m5 l5">
          <img src="images/khalti.png" alt="Khalti Logo" />
        </div>
        <div className="center-align col s12 m5 l5">
          <h2 className="landingSecond-supported">We support Khalti with more to come</h2>
        </div>
      </div>
    </div>
  );
};

export default LandingSecond;
