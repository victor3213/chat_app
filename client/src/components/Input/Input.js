import React from "react";

import './Input.css'



const Input = ({message, setMessage, sendMessage}) => {
    return (
        <form className="form" action="">
        <input 
            className="form"
            type="text" 
            placeholder="Type a message..."
            value={message}
            onChange={event => setMessage(event.target.value)}
            onKeyPress={event => event.key == 'Enter' ? sendMessage(event.target) : null}
        />
        <button 
            className="sendButton" 
            onClick={(event) => sendMessage(event)}   
        >Send</button>
    </form>
    )
}

export default Input