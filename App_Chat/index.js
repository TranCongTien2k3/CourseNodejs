const express = require("express");
const path = require("path");
const http = require("http");

let app = express();
//
var server = http.Server(app);
var port = process.env.PORT || 8080;
app.use(express.static(path.join(__dirname, "public")));
var midPort = app.listen(port, () => {
  console.log("Node.js listening on port " + port);
});

let io = require("socket.io")(server);
io.sockets.on("connection", (socket) => {
  socket.on("nick", (nick) => {
    socket.set("nickname", nick);
  });
  socket.on("chat", (data) => {
    socket.get("nickname", (err, nick) => {
      let nickname = err ? "Anonymous" : nick;
      let payload = {
        message: data.message,
        nick: nickname,
      };
      socket.emit("chat", payload);
      socket.broadcast.emit("chat", payload);
    });
  });
});
