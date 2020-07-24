import React from "react";
import { Link } from "react-router-dom";
const LandingFooter = () => {
  return (
    <footer className="page-footer">
      <div className="row">
        <div className="valign-wrapper container hide-on-small-only">
          <div className="s12 m4 l4 col left-align">
            <h3>About</h3>
            <ul>
              <li>
                <h5 >
                  <Link className="footer-link" to="#">Help </Link>
                </h5>
              </li>
              <li>
                <h5>
                  <Link className="footer-link"  to="#">Contact </Link>
                </h5>
              </li>
              <li>
                <h5>
                  <Link className="footer-link" to="#">Privacy Policy</Link>
                </h5>
              </li>
            </ul>
          </div>
          <div className="s12 m4 l4 col" />
          <div className="s12 m4 l4 col right-align">
            <h3>Follow Us</h3>
            <ul>
              <a
                href="https://www.facebook.com"
                alt="Facebook"
                className="landing-logo"
              >
                <img
                  src="https://img.icons8.com/fluent/48/000000/facebook-new.png"
                  alt="Facebook"
                />
              </a>
              <a
                href="https://www.twitter.com"
                alt="Twitter"
                className="landing-logo"
              >
                <img
                  src="https://img.icons8.com/fluent/48/000000/twitter.png"
                  alt="Twitter"
                />
              </a>
              <a
                href="https://www.discord.com"
                alt="Discord"
                className="landing-logo"
              >
                <img
                  src="https://img.icons8.com/fluent/48/000000/discord-new-logo.png"
                  alt="Discord"
                />
              </a>
            </ul>
          </div>
        </div>
        <div className=" container hide-on-med-and-up	">
          <div className="s12 m4 l4 col center-align">
            <h3>About</h3>
            <ul className="footer-link">
              <li>
                <h5>
                  <Link className="footer-link" to="#">Help </Link>
                </h5>
              </li>
              <li>
                <h5>
                  <Link className="footer-link" to="#">Contact </Link>
                </h5>
              </li>
              <li>
                <h5>
                  <Link className="footer-link" to="#">Privacy Policy</Link>
                </h5>
              </li>
            </ul>
          </div>
          <div className="s12 m4 l4 col" />
          <div className="s12 m4 l4 col center-align">
            <h3>Follow Us</h3>
            <a
              href="https://www.facebook.com"
              alt="Facebook"
              className="landing-logo"
            >
              <img
                src="https://img.icons8.com/fluent/48/000000/facebook-new.png"
                alt="Facebook"
              />
            </a>
            <a
              href="https://www.twitter.com"
              alt="Twitter"
              className="landing-logo"
            >
              <img
                src="https://img.icons8.com/fluent/48/000000/twitter.png"
                alt="Twitter"
              />
            </a>
            <a
              href="https://www.discord.com"
              alt="Discord"
              className="landing-logo"
            >
              <img
                src="https://img.icons8.com/fluent/48/000000/discord-new-logo.png"
                alt="Discord"
              />
            </a>
          </div>
        </div>
        <h6 className="center-align">@ Company All Rights Reserved</h6>
      </div>
    </footer>
  );
};

export default LandingFooter;
