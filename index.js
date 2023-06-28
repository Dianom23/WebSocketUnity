// const express = require("express");
// const app = express()
// const http = require("http").Server(app)
// const io = require("socket.io")(http)

// const PORT = 3000

// io.on("connection", socket=>{
//     console.log("add")
// })
// io.on("me")

// http.listen(PORT, () => {
//     console.log(`Listening on port ${PORT}`);
//   });
const  WebSocket = require("ws")
const wss = new WebSocket.Server({port: 3000}, ()=>{
  console.log("Start")
})
//const socket = new WebSocket('ws://localhost:3000');
wss.on("listening", ()=>{
  console.log("server listen port 3000")
})

wss.on("connection", ws=>{
  ws.on("message", data=>{
    console.log(data.toString())
    ws.send(data.toString())
  })
})


// socket.onopen = function(event) {
//   console.log('WebSocket connection established');
// };

// socket.onmessage = function(event) {
//   const message = event.data;
//   console.log(`Received message: ${message}`);
// };