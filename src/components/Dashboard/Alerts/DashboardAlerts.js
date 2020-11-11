import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../context/Authcontext";
import { CopyToClipboard } from "react-copy-to-clipboard";
import M from "materialize-css";
import AlertGeneral from "./AlertGeneral";
import AlertImage from "./AlertImage";
import AuthService from "../../../services/AuthService";
import AlertSound from "./AlertSound";
import axios from "axios";
import { Url } from "../../../others/ApiLinks";
import io from "socket.io-client";

const socket = io("ws://localhost:8000/");

const DashboardAlerts = () => {
  const [copied, setcopied] = useState(false);
  const [show, setshow] = useState(false);
  const [alertData, setAlertData] = useState(null);
  const { userData } = useContext(AuthContext);

  useEffect(() => {
    
    socket.emit("room",userData.token);
    AuthService.getAlerts().then((alertData) =>{ 
      setAlertData(alertData)
      var el = document.querySelectorAll(".tabs");
    const options = {
      duration: 300,
      onShow: null,
    };
    M.Tabs.init(el, options);
    });
    
  }, []);
  const handleSave =()=>{
    AuthService.saveAlerts(alertData);
  }
  const handleTest =()=>{
    socket.emit("testing",userData.token);
    console.log("Testing hai");
    
  }


  return (
    <div className="max-vh dashboard-container">
      <div className="row">
        <div className="col  m12">
          <h3 className="white-text">Alerts</h3>
          <h6 className="white-text">
            <div className="valign-wrapper">
              Widget Url:{" "}
              <h6 className={!show && "alert-url"}>{userData.alertUrl}</h6>
              <button
                className="user-copyBtn btn-small waves-effect"
                onClick={() => setshow(true)}
              >
                Show
              </button>
              <CopyToClipboard
                text={userData.alertUrl}
                onCopy={() => setcopied(true)}
              >
                <button className="user-copyBtn btn-small waves-effect">
                  Copy
                </button>
              </CopyToClipboard>
              <button
                className="user-copyBtn btn-small waves-effect"
                onClick={() => handleTest()}
              >
                Test
              </button>
            </div>
          </h6>
        </div>
      </div>
      {alertData&&(<div className="row alert-tabs darkerBackground">
        <div className="col s12">
          <ul className="tabs">
            <li className="tab col s3 darkerBackground">
              <a className="white-text active" href="#general">
                General
              </a>
            </li>
            <li className="tab col s3 darkerBackground">
              <a className="white-text" href="#image">
                Image
              </a>
            </li>
            <li className="tab col s3 darkerBackground">
              <a className="white-text" href="#sound">
                Sound
              </a>
            </li>
            <li className="tab col s3 darkerBackground">
              <a className="white-text" href="#text">
                Text
              </a>
            </li>
          </ul>
        </div>
        <div id="general" className="col s12">
          <AlertGeneral alertData={alertData} setAlertData={setAlertData} handleSave={handleSave}/>
        </div>
        <div id="image" className="col s12">
          <AlertImage alertData={alertData} setAlertData={setAlertData} handleSave={handleSave}/>
        </div>
        <div id="sound" className="col s12">
          <AlertSound alertData={alertData} setAlertData={setAlertData} handleSave={handleSave}/>
        </div>
        <div id="text" className="col s12">
          Text
        </div>
      </div>)}
    </div>
  )}

export default DashboardAlerts;
