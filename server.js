const Express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const Socket = require("socket.io");

const App = Express();

const messages = [];

App.get("/", (req, res, next) => {
  console.log("success");
  res.json({ text: "Success" });
});

App.get("/messages", (req, res, next) => {
  res.send(messages);
});

const Server = App.listen(process.env.port || 8080, () => {
  console.log("listening on port 8080");
});

const IO = Socket(Server);

IO.on("connection", function (socket) {
  console.log("socket connection made", socket.id);
  IO.sockets.emit("messages", messages);

  socket.on("chat", function (data) {
    messages.push(data);
    console.log("chatting", data);
    IO.sockets.emit("chat", data);
  });
});
