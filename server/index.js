const express = require('express')
const socketio = require('socket.io')
const http = require('http')

const {addUser, removeUser, getUser, getUsersInRoom} = require('./users')

const router = require('./router')

const PORT = process.env.PORT || 5000

const app = express()
const server = http.createServer(app)
const io = socketio(server)

io.on('connect', (socket) => {
   socket.on('join', ({name, room}, callback) => {
        const {error, user} = addUser({id: socket.id, name, room})

        if(error) return callback(error)

        socket.emit('message', {user: 'admin', text: `${user?.name}, welcome to the room ${user?.room}`})
        socket.broadcast.to(user?.room).emit('message', {user: 'admin', text: `${user?.name}, has joined`})

        socket.join(user?.room)

        callback()
   })

   socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id)

    io.to(user.room).emit('message', {user: user.name, text: message})

    callback()
   })

    io.on('disconnect', () => {
        console.log('disconnect from socket');
    })
})


app.use(router)

server.listen(5000, () => {
    console.log('serever listening on port  ' + PORT)
})