import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'

import './Chat.css'

let socket

const Chat = () => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    useEffect(() => {
        const {name, room} = queryString.parse(window.location.search)

        setName(name)
        setRoom(room)

    })


    return (
        <div>
            <h1>Chat</h1>
        </div>
    )
}


export default Chat