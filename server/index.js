const express = require('express')
const app = express()
const http = require('http')
const cors = require("cors")
const { Server } = require("socket.io")
app.use(cors())
const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
    }
})

let users = []

io.on('connection',(socket)=>{
    console.log(`User Connected: ${socket.id }`)
    socket.on('message', (data)=>{
        io.emit('messageResponse', data)
    })
    socket.on('newUser', (data)=>{
        //adding a new user to the user's list
        users.push(data)
        //sending the list of users to the client side
        io.emit('newUserResponse', users)
     
    })
    socket.on('typing',(data)=> {
        socket.broadcast.emit('typingResponse', data)
    })
    socket.on('stoppedTyping',(data)=> {
        socket.broadcast.emit('stoppedTypingResponse', data)
    })
    socket.on('disconnect', ()=> {
        //updating the list of users after a user gets disconnected
        users = users.filter((user)=> user.socketId !== socket.id)
        console.log('User ' + socket.id + ' disconnected')
        //letting the client know of the new users list
        io.emit('newUserResponse', users)
    })
    
})

server.listen(3001, ()=>{
    console.log('listening...')
})