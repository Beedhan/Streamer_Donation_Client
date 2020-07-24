import React, { useEffect } from "react";
import M from "materialize-css";
const AlertGeneral = ({alertData,setAlertData,handleSave}) => {
  useEffect(() => {
    var array_of_dom_elements = document.querySelectorAll("input[type=range]");
    M.Range.init(array_of_dom_elements);
    var elems = document.querySelectorAll(".dropdown-trigger");

    let options = {
      inDuration: 150,
      outDuration: 150,
      hover: true, // Activate on hover
      coverTrigger: true, // Displays dropdown below the button
    };
    M.Dropdown.init(elems, options);
    console.log(alertData);
  }, []);

  const handleSlider = (e) => {
    setAlertData({...alertData,AlertsDuration:e.target.value});
  };
  const handleInAnimationSelection = (val) => {
    setAlertData({...alertData,AnimationIn:val});
  };
  const handleOutAnimationSelection = (val) => {
    setAlertData({...alertData,AnimationOut:val});
    console.log(alertData)
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <div className="row valign-wrapper">
        <div className="col s3">
          <h5 className="white-text">Alert Duration</h5>
        </div>
        <div className="col s9">
          <p className="range-field">
            <input
              type="range"
              id="test5"
              min="0"
              max="30"
              value={alertData.AlertsDuration}
              onChange={handleSlider}
            />
          </p>
        </div>
      </div>
      <div className="row">
      <div className="col s3">
          <h5 className="white-text">Animation:</h5>
        </div>
        <div className="col">
          <a className="dropdown-trigger btn darkerBackground" href="#" data-target="inanimation"
          style={{width:"220px"}}
          >
          {alertData.AnimationIn}
          </a>

          <ul id="inanimation" className="dropdown-content">
            <li onClick={(e)=>handleInAnimationSelection("backinRight")}>
              <a className="white-text lighterBackground" href="#!">BackinRight</a>
            </li>
            <li onClick={(e)=>handleInAnimationSelection("bounceInDown")}>
              <a className="white-text lighterBackground" href="#!">BounceInDown</a>
            </li>
            <li onClick={(e)=>handleInAnimationSelection("fadeIn")}>
              <a className="white-text lighterBackground" href="#!">FadeIn</a>
            </li>
            <li onClick={(e)=>handleInAnimationSelection("flip")}>
            <a className="white-text lighterBackground" href="#!">Flip</a>
            </li>
            <li onClick={(e)=>handleInAnimationSelection("lightSpeedInLeft")}>
            <a className="white-text lighterBackground" href="#!">LightSpeedInLeft</a>
            </li>
            <li onClick={(e)=>handleInAnimationSelection("rotateIn")}>
            <a className="white-text lighterBackground" href="#!">RotateIn</a>
            </li>
            <li onClick={(e)=>handleInAnimationSelection("zoomInDown")}>
            <a className="white-text lighterBackground" href="#!">ZoomInDown</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <a className="dropdown-trigger btn darkerBackground" href="#" data-target="outanimation"
          style={{width:"220px"}}
          >
          {alertData.AnimationOut}
          </a>

          <ul id="outanimation" className="dropdown-content">
            <li onClick={(e)=>handleOutAnimationSelection("backOutRight")}>
              <a className="white-text lighterBackground" href="#!">BackoutRight</a>
            </li>
            <li onClick={(e)=>handleOutAnimationSelection("bounceOutDown")}>
              <a className="white-text lighterBackground" href="#!">BounceOutDown</a>
            </li>
            <li onClick={(e)=>handleOutAnimationSelection("fadeOut")}>
              <a className="white-text lighterBackground" href="#!">FadeOut</a>
            </li>
            <li onClick={(e)=>handleOutAnimationSelection("lightSpeedOutLeft")}>
            <a className="white-text lighterBackground" href="#!">LightSpeedOutLeft</a>
            </li>
            <li onClick={(e)=>handleOutAnimationSelection("rotateOut")}>
            <a className="white-text lighterBackground" href="#!">RotateOut</a>
            </li>
            <li onClick={(e)=>handleOutAnimationSelection("zoomOut")}>
            <a className="white-text lighterBackground" href="#!">ZoomIn</a>
            </li>
          </ul>
        </div>
      </div>
    <div className="row">
        <button className="btn-large waves-effect lighterBackground darkBtn" onClick={handleSave}>
        Save
        </button>
    </div>
    </div>
  );
};

export default AlertGeneral;
