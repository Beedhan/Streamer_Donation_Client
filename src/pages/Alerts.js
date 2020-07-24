import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Url } from "../others/ApiLinks";
const socket = io("ws://192.168.1.78:8000/");

const Alerts = ({ match }) => {
  const token = new URLSearchParams(useLocation().search).get("token");
  const [gifData, setGifData] = useState("");
  const [donationData, setDonationData] = useState({});
  const [currentAnimation, setCurrentAnimation] = useState("");
  const [gotDonaton, setGotDonaton] = useState(false);

  useEffect(() => {
    socket.emit("room", token);
        const fetchData = () => {
      axios
        .get(`${Url}/alerts/getAlertData?token=${token}`, {
          headers: {
            authorization: "b2c1ad1e2b39423db3b218e4f0900e00",
          },
        })
        .then((userData) => {
           socket.on("check", (msg) => {
            console.log(msg,userData);
          });
      
          socket.on("Alert", (msg) => {
            let audio = new Audio(require(`../audio/${userData.data.SelectedAudio}.mp3`))
            audio.play();
            setGotDonaton(true);
            setDonationData(msg);
            setGifData(userData.data.SelectedImage);
            setCurrentAnimation(userData.data.AnimationIn);
            setTimeout(() => {
            setCurrentAnimation(userData.data.AnimationOut);
            audio.remove();
              setTimeout(() => {
                setGotDonaton(false);
              }, 1500);
            }, userData.data.AlertsDuration*1000);
          });
        });
    };
    fetchData();

  }, [token]);


  return (
    <div>
      {gotDonaton && (
        <>
          <div id="background" />
          {gifData !=="" && (
            <div className="container" style={{ marginTop: "100px", marginLeft: " 50px" }}>
          {console.log(gifData)}
              <div id="Alert">
              <div style={{marginLeft: " 250px" }}>
              <img
                  src={require(`../Gifs/${gifData}.gif`)}
                  className={`center animate__animated animate__${currentAnimation}`}
                  alt="this slowpoke moves"
                  width="200px"
                  height="auto"
                />
              </div>
                
                <h1 className={`white-text animate__animated animate__${currentAnimation}`}>
                  <strong className="Alert center-align">
                    {donationData.donatorName} just donated Rs {donationData.donationAmount}
                  </strong>
                </h1>
                <h2
                  className={`center-align white-text animate__animated animate__${
                    currentAnimation
                  } animate__delay-1s AlertH2`}
                  style={{ marginTop: "20px" }}
                >
                  {donationData.donationMessage}
                </h2>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Alerts;
