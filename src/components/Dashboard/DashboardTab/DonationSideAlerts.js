import React from 'react'
import moment from 'moment';

const DonationSideAlerts = ({alertHistory}) => {
    return (
        <div className="col s12 m5">
        <div
          className="card"
          style={{
            backgroundColor: "#1D222A",
            borderRadius: 15,
            paddingBottom: "80px",
            height:"1100px"
          }}
        >
          <div className="card-content white-text">
            <span className="card-title center-align">
              <h3>Last Alerts</h3>
            </span>
            <div className="events">
              {alertHistory.slice(0,7).map((alert) => (
                <div className="history lighterBackground">
                  <div className="historyContents">
                    <h6>
                      {alert.donatorName}{" "}
                      <span style={{ color: "gray" }}>donated</span> Rs
                      {alert.donationAmount}
                    </h6>
                    <h6 style={{ color: "gray" }}>"{moment.utc(alert.date).local().format("YYYY.MM.DD HH:mm:ss")}"</h6>
                    <h6 style={{ color: "gray" }}>"{alert.donationMessage}"</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
}

export default DonationSideAlerts
