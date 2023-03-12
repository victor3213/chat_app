import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import Configuration from '../../Configuration'
import InfoBar from '../InfoBar/InfoBar'
import Input from '../Input/Input'

import './Chat.css'

let socket

const Chat = () => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])

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
            socket.disconnect()
            socket.off()
        }
    },[ENDPOINT, window.location.search])


    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message])
        })
    }, [messages])

    const sendMessage = (event) => {
        event.preventDefault()

        if(message){
            socket.emit('sendMessage', message, () => {
                setMessage('')
            })
        }
    }

    console.log(message, messages);

    return (
        <div className='outerContainer'>
            <div className='container'> 
                <InfoBar 
                    room={room}
                />
                <Input />
                {/* <input 
                    value={message}
                    onChange={event => setMessage([...messages, event.target.value])}
                    onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}    
                /> */}
            </div>
        </div>
    )
}


export default Chat