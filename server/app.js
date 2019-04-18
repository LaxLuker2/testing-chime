const express = require("express");

const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

const port = process.env.PORT || 3000;

// routing
app.use("/", express.static(`${__dirname}/view`));
app.use("/welcome", express.static(`${__dirname}/view/welcome.html`));
app.use("/thankyou", express.static(`${__dirname}/view/confirmationPage.html`));
app.use("/boardOne", express.static(`${__dirname}/view/soundboardOne.html`));
app.use("/boardTwo", express.static(`${__dirname}/view/soundboardTwo.html`));
app.use(
  "/boardThree",
  express.static(`${__dirname}/view/soundboardThree.html`)
);

function onConnection(socket) {
  // Updates Display
  socket.on("drawing", data => socket.broadcast.emit("drawing", data));
}

io.on("connection", onConnection);

http.listen(port, () => console.log(`listening on port ${port}`));
