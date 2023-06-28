const  WebSocket = require("ws")
const wss = new WebSocket.Server({port: 3000}, ()=>{
  console.log("Start")
})
wss.on("listening", ()=>{
  console.log("server listen port 3000")
})



wss.on("connection", ws=>{

  setInterval(()=>{
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send("Кека");
      }
    });
    //ws.emit("msg", "Привет")
  }, 3000)

  ws.on("message", data=>{
    console.log(data.toString())
    ws.send(data.toString())
    wss.emit("msg", data.toString())
  })
  
  
  // setInterval(()=>{
  //   wss.emit("msg", "Hello")
  // }, 5000)
  ws.on("msg", data=>{
    console.log(data.toString())
  })
})




// socket.onopen = function(event) {
//   console.log('WebSocket connection established');
// };

// socket.onmessage = function(event) {
//   const message = event.data;
//   console.log(`Received message: ${message}`);
// };