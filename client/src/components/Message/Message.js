import React from "react";

import './Message.css'


const Message = ({message: { user, text }, name}) => {
    let isSentByCurentUser = false

    const trimmedMessage = name.toLowerCase()

    if(user === trimmedMessage) {
        isSentByCurentUser = true
    }

    return (
        isSentByCurentUser 
        ? 
        (
            <div className="messageContainer justifyEnd">
                <p className="sentText">{trimmedMessage}</p>
                <div className="messageBox backgroundBlue">
                    <p className="messageText colorWhite">{text}</p>
                </div>
            </div>
        )
        :
        (
            <div className="messageContainer justifyEnd">
                <div className="messageBox backgroundLight">
                    <p className="messageText colorDark">{text}</p>
                </div>
                <p className="sentText pl-10">{user}</p>
            </div>
        )
    )
}


export default Message