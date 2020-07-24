import React from "react";
import { ReactSVG } from "react-svg";
import AuthService from "../../services/AuthService";
const LoginMain = () => {
  const handleLogin = async () => {
    AuthService.login();
  };
  return (
    <div className="container login-container max-vh">
      <div className="valign-wrapper hide-on-small-only row" >
        <div className="col m5 l5 svg-img-login">
          <ReactSVG
            src="images/login.svg"
            beforeInjection={(svg) => {
              svg.classList.add("svg-login");
            }}
          />
        </div>
        <div className="col m2 l2"></div>
          <div className="container col m5 l5 ">
            <h3 className="login-with center-align">Login With</h3>
              <div className=" waves-effect waves-light btn btn-login row valign-wrapper " onClick={handleLogin}>
              <div className="button-content valign-wrapper">
              <img
                    src="https://img.icons8.com/fluent/48/000000/youtube-play.png"
                    className="responsive-img "
                    alt="youtube-logo"
                  />
                <p class="login-content" alt="login-button">
                  Youtube
                </p>
              </div>
            </div>
          </div>
      </div>
      {/* Only for phones */}
      <div className="center-align hide-on-med-and-up">
          <div className="container col s10 m6 l6 ">
            <h3 className="login-with ">Login With</h3>
              <div className=" waves-effect waves-light btn btn-login " onClick={handleLogin}>
              <div className="button-content valign-wrapper">
              <img
                    src="https://img.icons8.com/fluent/48/000000/youtube-play.png"
                    className="responsive-img "
                    alt="youtube-logo"
                  />
                <p class="login-content" alt="login-button">
                  Youtube
                </p>
              </div>
             
            </div>
          </div>
        </div>
    </div>

  );
};

export default LoginMain;
