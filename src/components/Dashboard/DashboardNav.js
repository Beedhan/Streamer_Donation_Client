import React, { useEffect, useContext } from "react";
import M from "materialize-css";
import { AuthContext } from "../../context/Authcontext";
import {Link} from "react-router-dom"
const DashboardNav = () => {
  const { userData } = useContext(AuthContext);
  useEffect(() => {
    var elems = document.querySelectorAll(".dropdown-trigger");
    var col = document.querySelectorAll(".collapsible");

    let options = {
      inDuration: 150,
      outDuration: 150,
      hover: true, // Activate on hover
      coverTrigger: false, // Displays dropdown below the button
    };
    M.Collapsible.init(col, options);

    M.Dropdown.init(elems, options);
  }, []);

  return (
    <>
      <nav>
        <div className="nav-wrapper landingNav">
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/balance" alt="Balance" style={{ marginRight: "20px" }}>
                Balance :{userData.amount>0?"Rs":"Re"} {userData.amount}
              </Link>
            </li>
            <li>
              <a
                className="valign-wrapper dropdown-trigger"
                data-target="userDropDown"
                alt="dropdown"
              >
                <img
                  className="circle  responsive-img profile-pic"
                  src={userData.profilePic}
                  alt="profile"
                />
                <h6>{userData.username}</h6>
              </a>
            </li>

            <ul
              id="userDropDown"
              className="dropdown-content"
              style={{ backgroundColor: "#1D222A" }}
            >
              <li>
                <Link to="/settings" className="white-text">
                  Settings
                </Link>
              </li>
              <li>
                <Link to="/logout" className="white-text">
                  Logout
                </Link>
              </li>
            </ul>
          </ul>
        </div>
      </nav>

      <ul
        id="slide-out"
        className="sidenav sidenav-fixed "
        style={{ backgroundColor: "#1D222A" }}
      >
        <h4
          href="/"
          className="brand-logo logo-large hide-on-med-and-down white-text"
        >
          StreamerGems
        </h4>
        <li className="waves-effect side-button">
            <Link to="/dashboard" className="white-text">
          <div className="valign-wrapper">
            <img
              className="dashboard-icon"
              src="https://img.icons8.com/fluent/48/000000/dashboard.png"
              alt="dashboard"
              style={{width:'30px'}}
            />
              <h5>Dashboard</h5>
          </div>
            </Link>
        </li>
        <li className="waves-effect side-button">
        <Link to="/dashboard/donations" className="white-text ">
          <div className="valign-wrapper">
            <img
              className="dashboard-icon"
              src="https://img.icons8.com/fluent/48/000000/money.png"
              alt="donations"
              style={{width:'30px'}}

            />
              <h5>Donations</h5>
          </div>
            </Link>
        </li>
        <li className="waves-effect side-button">
            <Link to="/dashboard/payout" className="white-text">
          <div className="valign-wrapper">
            <img
              className="dashboard-icon"
              src="https://img.icons8.com/fluent/48/000000/money-box.png"
              alt="donations"
              style={{width:'30px'}}

            />
              <h5>Payout</h5>
          </div>
            </Link>
        </li>
        <li className="waves-effect collapsible collapsible-accordion side-button"
        style={{marginLeft:"15px"}}>
            <li>
              <div className="collapsible-header">
                <div className="valign-wrapper">
                  <img
                    className="dashboard-icon"
                    src="https://img.icons8.com/fluent/48/000000/settings.png"
                    alt="widgets"
                    style={{width:'30px'}}
                  />
                  <h5 className="white-text">Widgets</h5>
                </div>
              </div>
              <div className="collapsible-body">
                <ul>
                  <li style={{ backgroundColor: "#1D222A" }} >
                    <Link className="white-text" to="/dashboard/alerts">
                    Alerts
                    </Link>
                  </li>
                  <li style={{ backgroundColor: "#1D222A" }}>
                    <a className="white-text" to="#!">
                    Polls</a>
                  </li>
                </ul>
              </div>
            </li>
        </li>
      </ul>
    </>
  );
};

export default DashboardNav;
