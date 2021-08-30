import React from "react";
import { IonButton } from "@ionic/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import Avatar from "../Avatar";
// import { Scroll } from "framer";

function FindFriends({ incomingRequests, handleRequest }) {
  return (
    <div className="incoming-requests-wrapper page-section">
      {/* <Scroll
        style={{ height: "100%", width: "100%", position: "relative" }}
        dragElastic={0.2}
        dragEnabled={toggleScroll}
      > */}
      <div className="incoming__label">Incoming Requests</div>

      <ul className="incoming__requests users-list">
        {incomingRequests &&
          incomingRequests.map((e) => {
            return (
              <li key={e._id}>
                <div className="section">
                  <Avatar
                    user={e}
                    style={{ width: "40px", height: "40px", fontSize: "18px" }}
                  />
                  <div className="name">{e.username}</div>
                </div>
                <div>
                  <IonButton
                    onClick={() => handleRequest("accept", e._id)}
                    className="accept-btn"
                  >
                    Accept
                    <FontAwesomeIcon icon={faUserPlus} />
                  </IonButton>
                  <button onClick={() => handleRequest("reject", e._id)}>
                    <FontAwesomeIcon icon={faTimes} className="cross-btn" />
                  </button>
                </div>
              </li>
            );
          })}
      </ul>
      {/* </Scroll> */}
    </div>
  );
}

export default FindFriends;
