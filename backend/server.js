const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' }
});

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use('/api/messages', require('./routes/messages'));

io.on('connection', (socket) => {
  console.log('user connected:', socket.id);
  socket.on('disconnect', () => {
    console.log('user disconnected:', socket.id);
  });
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    server.listen(process.env.PORT || 5555, () => {
      console.log('Server running');
    });
  })
  .catch(err => console.log(err));