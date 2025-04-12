const express = require("express");
const http = require('http');
const WebSocket = require('ws');
const {userRouter} = require("./routes/user.js");
const { quizRouter } = require("./routes/quiz.js");
const { careerRouter } = require("./routes/path.js");
const app = express();
const cors = require("cors");
app.use(cors()); // Replace with your frontend's URL

app.use(express.json());

app.use("/api/v1/user",userRouter);
app.use("/api/v1/quiz",quizRouter);
app.use("/api/v1/path",careerRouter);

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// WebSocket signaling logic
const clients = new Set();

wss.on('connection', (socket) => {
  clients.add(socket);

  socket.on('message', (message) => {
    // Broadcast the signaling message to all other clients
    for (let client of clients) {
      if (client !== socket && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    }
  });

  socket.on('close', () => {
    clients.delete(socket);
  });
});




app.listen(3001);