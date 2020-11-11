import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Url } from "../others/ApiLinks";
const socket = io("ws://localhost:8000/");

const Alerts = () => {
  const token = new URLSearchParams(useLocation().search).get("token");
  const [gifData, setGifData] = useState("");
  const [donationData, setDonationData] = useState({});
  const [currentAnimation, setCurrentAnimation] = useState("");
  const [gotDonaton, setGotDonaton] = useState(false);
  const [donationQueue, setDonationQueue] = useState([]);
  const [userData, setuserData] = useState();
  const [changingValue, setchangingValue] = useState(0);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`${Url}/alerts/getAlertData?token=${token}`, {
          headers: {
            authorization: "b2c1ad1e2b39423db3b218e4f0900e00",
          },
        })
        .then((userData) => {
    socket.emit("room", token);
          setuserData(userData.data);
          socket.on("check", (msg) => {
            console.log(msg, userData);
          });

          socket.on("Alert", (msg) => {
            console.log("Got alert")
           setDonationQueue(prevstate=>[...prevstate,msg]);
            if (donationQueue.length === 0) {
              setchangingValue(changingValue+1);
            }else{
              return;
            }
            //adding messages to the queue
          });
        });
    };
    fetchData();
  }, [token]);

  useEffect(() => {
    if (userData &&donationQueue.length!==0 && gotDonaton===false) {
      console.log(donationQueue);
      let audio = new Audio(require(`../audio/${userData.SelectedAudio}.mp3`));
      var msg = new SpeechSynthesisUtterance(donationQueue[0].donationMessage);
      window.speechSynthesis.speak(msg);

      audio.play();
      setGotDonaton(true);
      // setDonationData(donationQueue[0]);
      setGifData(userData.SelectedImage);
      setCurrentAnimation(userData.AnimationIn);

      //Here stopping the parts in alerts part by part 
      setTimeout(() => {
        setCurrentAnimation(userData.AnimationOut);
        audio.remove();
        setTimeout(() => {
          setGotDonaton(false);
          setDonationQueue(prev=>prev.slice(1));
          setTimeout(() => {
            //third timeout to wait for the changes to happen
            setchangingValue(changingValue+2);
          }, 3000);
        }, 1500);
      }, userData.AlertsDuration * 1000);
    }
  }, [changingValue]);

  return (
    <div>
      {gotDonaton && (
        <>
          <div id="background" />
          {gifData !== "" && (
            <div
              className="container"
              style={{ marginTop: "100px", marginLeft: " 50px" }}
            >
              {console.log(donationQueue[0])}
              <div id="Alert">
                <div style={{ marginLeft: " 250px" }}>
                  <img
                    src={require(`../Gifs/${gifData}.gif`)}
                    className={`center animate__animated animate__${currentAnimation}`}
                    alt="this slowpoke moves"
                    width="200px"
                    height="auto"
                  />
                </div>

                <h1
                  className={`white-text animate__animated animate__${currentAnimation}`}
                >
                  <strong className="Alert center-align">
                    {donationQueue[0].donatorName} just donated Rs{" "}
                    {donationQueue[0].donationAmount}
                  </strong>
                </h1>
                <h2
                  className={`center-align white-text animate__animated animate__${currentAnimation} animate__delay-1s AlertH2`}
                  style={{ marginTop: "20px" }}
                >
                  {donationQueue[0].donationMessage}
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
