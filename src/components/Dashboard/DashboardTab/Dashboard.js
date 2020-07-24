import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../context/Authcontext";
import { CopyToClipboard } from "react-copy-to-clipboard";
import AuthService from "../../../services/AuthService";
import DonationSideAlerts from "./DonationSideAlerts";

const Dashboard = () => {
  const [copied, setcopied] = useState(false);
  const [alertHistory, setAlertHistory] = useState([]);
  const { userData } = useContext(AuthContext);

  useEffect(() => {
    AuthService.getAlertHistory().then((d) => {
      setAlertHistory(d);
    });
  }, []);
  return (
    <div className="max-vh dashboard-container">
      <div className="row">
        <div className="col  m12">
          <h3 className="white-text">Dashboard</h3>
          <h5 className="white-text">
            Donation: {userData.donationUrl}
            <CopyToClipboard
              text={userData.donationUrl}
              onCopy={() => setcopied(true)}
            >
              <button className="user-copyBtn btn-small waves-effect">
                Copy
              </button>
            </CopyToClipboard>
          </h5>
        </div>
      </div>
      <div className="row">
        <div className="col s12 m4">
          <div
            className="card"
            style={{ backgroundColor: "#1D222A", borderRadius: 15 }}
          >
            <div className="card-content white-text">
              <span className="card-title">
                <h3>Balance</h3>
              </span>
              <h5>Current : {userData.amount>0?"Rs":"Re"} {userData.amount}</h5>
              <h5>All Time : {userData.totalAmount>0?"Rs":"Re"} {userData.totalAmount}</h5>
            </div>
          </div>
        </div>
        {/* Right side last alert area */}
        <div className="col s12 m2" />
        <DonationSideAlerts alertHistory={alertHistory}/>
      </div>
    </div>
  );
};

export default Dashboard;
