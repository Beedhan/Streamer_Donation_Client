import React, { useEffect } from "react";
import M from "materialize-css";

const AlertImage = ({alertData,setAlertData,handleSave}) => {
  useEffect(() => {
    var elems = document.querySelectorAll(".modal");
    var options = {
      opasity: 0.8,
      inDuration: 250,
      outDuration: 250,
    };
    M.Modal.init(elems, options);
  }, []);

  const handleSelection = (selected) => {
    setAlertData({...alertData,SelectedImage:selected});
    console.log(selected);
  };

  return (
    <div>
      <div className="valign-wrapper">
        <h4 className="white-text" style={{marginRight:"30px"}}>Image:</h4>
        <img
          src={require(`../../../Gifs/${alertData.SelectedImage}.gif`)}
          style={{ width: "100px" }}
          alt="Selected Gif"
        />
        <button
          className="darkBtn darkerBackground waves-effect waves-light btn modal-trigger"
          style={{marginTop:"70px"}}
          data-target="modalImage"
        >
          Select
        </button>
        <div
          id="modalImage"
          className="modal darkerBackground"
          style={{ height: "80%" }}
        >
          <div className="modal-content darkerBackground">
            <h4 className="white-text">Choose Gif</h4>
            <div>
            {[...Array(8)].map((_,i) =>
               ( <img
                src={require(`../../../Gifs/${i}.gif`)}
                style={{ width: "100px" }}
                alt="gif"
                className="modal-close"
                onClick={() => handleSelection(i)}
                key={i}
              />)
            )}
            </div>
          </div>
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

export default AlertImage;
