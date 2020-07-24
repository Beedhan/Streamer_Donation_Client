import React, { useState, useEffect } from "react";
import M from "materialize-css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
const AlertSound = ({ alertData, setAlertData, handleSave }) => {
  useEffect(() => {
    var options = {
      opasity: 0.8,
      inDuration: 250,
      outDuration: 250,
    };
    var audioElem = document.querySelectorAll(".modalAudio");
    M.Modal.init(audioElem, options);
  }, []);

  const handleSelection = (selected) => {
    setAlertData({ ...alertData, SelectedAudio: selected });
    console.log(selected);
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <div className="valign-wrapper">
        <h4 className="white-text" style={{ marginRight: "30px" }}>
          Sound:
        </h4>
        <div className="lighterBackground valign-wrapper">
        <AudioPlayer
          src={require(`../../../audio/${alertData.SelectedAudio}.mp3`)}
          onPlay={(e) => console.log("onPlay")}
          layout="horizontal"
          showJumpControls={false}
          style={{
            width: "400px",
            color: "white",
            borderRadius: 10,
          }}
          className="lighterBackground white-text"
          customVolumeControls={[]}
          customAdditionalControls={[
           
          ]}
        />
        <button
            className="darkBtn darkerBackground waves-effect waves-light btn modal-trigger"
            style={{ marginRight: "30px" }}
            data-target="modalAudio"
          >
            Select
          </button>
        </div>

        <div
          id="modalAudio"
          class="modal darkerBackground"
          style={{ height: "80%" }}
        >
          <div class="modal-content darkerBackground">
            <h4 className="white-text">Choose Audio</h4>
          </div>
          {[...Array(7)].map((_, i) => (
            <div className="valign-wrapper col audios" key={i}>
              <AudioPlayer
                src={require(`../../../audio/${i}.mp3`)}
                onPlay={(e) => console.log("onPlay")}
                layout="horizontal"
                showJumpControls={false}
                style={{
                  width: "300px",
                  color: "white",
                }}
                className="darkerBackground white-text"
                customVolumeControls={[]}
                customAdditionalControls={[]}
                // other props here
              />
              <button
                src="https://img.icons8.com/nolan/50/audio-wave.png"
                style={{ width: "100px" }}
                alt="audio"
                className="modal-close btn btn-dark darkerBackground"
                onClick={() => handleSelection(i)}
              >
                Select
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="row">
        <button
          className="btn-large waves-effect lighterBackground darkBtn left-align"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AlertSound;
