import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import Configuration from '../../Configuration'
import './Chat.css'

let socket

const Chat = () => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const ENDPOINT = Configuration.FULL_LINK_BACK

    useEffect(() => {
        const {name, room} = queryString.parse(window.location.search)
        
        socket = io(ENDPOINT, {
            transports: ['websocket', 'polling', 'flashsocket']
        })
        setName(name)
        setRoom(room)

        socket.emit('join', {name, room}, ({error}) => {

        })
        
        return () => {
            socket.emit('disconnect')
            socket.off()
        }
    },[ENDPOINT, window.location.search])


    return (
        <div>
            <h1>Chat</h1>
        </div>
    )
}


export default Chat