const express = require('express')
const socketio = require('socket.io')
const http = require('http')


const router = require('./router')

const PORT = process.env.PORT || 5000

const app = express()
const server = http.createServer(app)
const io = socketio(server)

io.on('connect', (socket) => {
   console.log('connected to socket')
    io.on('disconnect', () => {
        console.log('disconnect from socket');
    })
})


app.use(router)

server.listen(5000, () => {
    console.log('serever listening on port  ' + PORT)
})