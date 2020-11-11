import React, { useState, useEffect } from "react";
import KhaltiCheckout from "khalti-web";
import io from "socket.io-client";
import axios from "axios";
import { Url } from "../others/ApiLinks";

const socket = io("ws://192.168.1.78:8000/");
function DonationPage({ match }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [usertoken, setUsertoken] = useState("");
  const [thankYou, setThankYou] = useState(false);
  
  const userId = match.params.userId;
  useEffect(() => {
    axios
      .get(`${Url}/donation/${userId}`, {
        headers: {
          authorization: "b2c1ad1e2b39423db3b218e4f0900e00",
        },
      })
      .then((data) => {
        socket.emit("room",data.data.roomId);

        setUsertoken(data.data.roomId);
        socket.on("check", (msg) => {
          console.log(msg);
        });
        socket.on("thanksForDonation", (msg) => {
          console.log(msg);
          setThankYou(true);
        });
      });
     
  }, []);


  const handleNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const handleAmountChange = (e) => {
    e.preventDefault();
    setAmount(e.target.value);
  };
  const handleMessageChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    let config = {
      // replace this key with yours
      publicKey:
        process.env.KhaltiKey ||
        "test_public_key_95a27852dfa44e0bb390b0d2d4b1160b",
      productIdentity: "1",
      productName: "Donate",
      productUrl: "https://secretdonationserver.glitch.me/",
      eventHandler: {
        onSuccess(payload) {
          // hit merchant api for initiating verfication
          console.log(payload);
          socket.emit("Donated", {
            donatorName: name,
            donationAmount: amount,
            donationMessage: message,
            token: payload.token,
            amount: payload.amount,
            donationPageId:socket.id
          });
        },
        // onError handler is optional
        onError(error) {
          // handle errors
          console.log(error);
        },
        onClose() {
          console.log("widget is closing");
        },
      },
    };
    let checkout = new KhaltiCheckout(config);
    checkout.show({ amount: amount * 100 });
  };

  return (
    <>
      {thankYou === false ? (
        <div className="container">
          <h1 style={{ fontSize: "40px" }}>
            <strong>Hei This is Just A Testing</strong>
          </h1>
          <div className="level"></div>
          <section className="hero is-primary">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">Fill The Boxes</h1>
                <div>
                  <input
                    className="input"
                    id="donator-name"
                    type="text"
                    placeholder="Name"
                    style={{ marginTop: "10px" }}
                    value={name}
                    onChange={handleNameChange}
                  />
                  <input
                    className="input"
                    id="donation-amount"
                    type="number"
                    placeholder="Donation Amount"
                    style={{ marginTop: "10px" }}
                    value={amount}
                    onChange={handleAmountChange}
                  />
                  <textarea
                    className="textarea"
                    id="donation-message"
                    placeholder="Hei hei"
                    style={{ marginTop: "10px" }}
                    value={message}
                    onChange={handleMessageChange}
                  ></textarea>

                  <button
                    className="button is-danger"
                    id="donate"
                    style={{ marginTop: "10px" }}
                    onClick={handleSubmit}
                  >
                    Donate With Khalti
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <h1 style={{ fontSize: "40px" }}>
          Hey Thanks For Supporting The Stream
        </h1>
      )}
    </>
  );
}

export default DonationPage;
