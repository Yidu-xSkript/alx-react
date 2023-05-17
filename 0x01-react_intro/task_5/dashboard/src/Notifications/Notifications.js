import React from "react";
import { getLatestNotification } from "../utils/utils";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";

function Notifications() {
    function handleClose() {
        console.log("Close button has been clicked")
    }

    return (
        <div className="notifications">
            <button
                style={{ color: "#3a3a3a", fontWeight: "bold", background: "none", border: "none", fontSize: "15px", position: "absolute", right: "2px", top: "2px", cursor: "pointer" }}
                aria-label="Close"
                onClick={handleClose}
            >
                <img src={closeIcon} alt="closeIcon" width="10px" />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data="default">New course available</li>
                <li data="urgent">New resume available</li>
                <li data="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ul>
        </div>
    );
}

export default Notifications;