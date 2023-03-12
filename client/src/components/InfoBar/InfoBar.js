import React from "react";

import closeIcon from "../../icons/closeIcon.png"
import onlineIcon from "../../icons/onlineIcon.png"

import './InfoBar.css'

const InfoBar = ({room}) => {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" src={onlineIcon} alt="online icon"/>
                <h3> {room}</h3>
            </div>
            <div className="RightInnerContainer">
                <a href="/"><img src={closeIcon} alt="close imgae"/></a>
            </div>
        </div>
    )
}


export default InfoBar