const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, 'public')));

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`booted server: http://localhost:${PORT}`);
});
module.exports = io;