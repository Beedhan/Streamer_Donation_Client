import React from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";

const LandingFirst = () => {
  return (
    <div className="landingFirst row">
      <div className="center-align col s10 m5 l5">
        <div className="landingFirst-container">
          <h2 className="landingFirstH2 white-text ">
            Only tool needed for नेपाली Streamers
          </h2>
          <h5 className="landingFirstH5">
            Enhance your stream by adding alerts in your streams
          </h5>
          <Link
            to="/login"
            className="waves-effect waves-btn btn-large landing-btn-join center-align"
          >
            Join
          </Link>
          <div className="landing-stats left-align">
            <h2 className="landing-stats-num">10</h2>
            <h6 className="landing-stats-text">Streamers And Growing</h6>
          </div>
        </div>
      </div>
      <div className="col m6 l6 svg-img hide-on-small-only">
        <ReactSVG
          src="images/Streamer.svg"
          beforeInjection={(svg) => {
            svg.classList.add("svg-landing-first");
          }}
        />
      </div>
    </div>
  );
};

export default LandingFirst;
