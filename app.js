const express = require('express')
const app = express()

app.use(express.static('public'));

server = app.listen(3000)

//socket.io instantiation
const io = require("socket.io")(server)

//listen on every connection
io.on('connection', (socket) => {
    //add function to receive and emit response
    socket.on('mouse', (data) => {
        socket.broadcast.emit('painter', data);
    });
});