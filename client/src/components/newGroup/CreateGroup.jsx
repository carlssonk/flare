import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faPlus } from "@fortawesome/free-solid-svg-icons";
import Ripple from "../../components/Effects/Ripple";

function CreateGroup({ togglePopup, handleTogglePopup }) {
  return (
    <>
      <div className="popup-wrapper">
        <div
          className={`popup-container ${
            togglePopup ? "popup-show" : "popup-hide"
          }`}
        >
          <div className="camera-box">
            <FontAwesomeIcon icon={faCamera} />
            <div className="plus-icon-box">
              <FontAwesomeIcon className="plus-icon" icon={faPlus} />
            </div>
          </div>
          <div className="name-box">
            <input id="name" type="text" placeholder="GROUP NAME" />
          </div>
          <div className="create-group-box">
            <Ripple.Button className="create-group-btn">Create</Ripple.Button>
          </div>
        </div>
      </div>
      <div
        onClick={() => handleTogglePopup(false)}
        className={`click-catcher ${
          togglePopup ? "show-fade-half" : "hide-fade-half"
        }`}
      ></div>
    </>
  );
}

export default CreateGroup;
