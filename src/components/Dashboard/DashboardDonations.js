import React, { useEffect, useState } from "react";
import AuthService from "../../services/AuthService";
import moment from "moment";

const DashboardDonations = () => {
  const [alertHistory, setAlertHistory] = useState([]);

  useEffect(() => {
    AuthService.getAlertHistory().then((d) => {
      setAlertHistory(d);
    });
  }, []);
  return (
    <div className="max-vh dashboard-container">
      <div className="row">
        <div className="col  m12">
          <h3 className="white-text">Donations</h3>
          <table className="events white-text highlight centered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Amount</th>
                <th>Message</th>
                <th>Time</th>
              </tr>
            </thead>
            {alertHistory.map((alert) => (
              <tbody className="history darkerBackground">
                <tr className="historyContents">
                  <td>{alert.donatorName}</td>
                  <td>Rs {alert.donationAmount}</td>
                  <td style={{ color: "gray" }}>{alert.donationMessage}</td>
                  <td style={{ color: "gray" }}>
                    {moment
                      .utc(alert.date)
                      .local()
                      .format("YYYY.MM.DD HH:mm:ss")
                    }
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardDonations;
