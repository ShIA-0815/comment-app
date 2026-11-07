const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, 'src/public')));

setInterval(() => {
    const dummyUsers = ['Miku', 'Rin', 'Ren', 'IA'];
    const dummyMessages = [
        'こんにちは',
        'うぽつ',
        'HAHAHAHA',
        'うるさ',
        'いいね'
    ];

    const randomUser = dummyUsers[Math.floor(Math.random() * dummyUsers.length)];
    const randomMsg = dummyMessages[Math.floor(Math.random() * dummyMessages.length)];

    const chatData = {
        id: Date.now(),
        author: randomUser,
        avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=' + randomUser,
        content: randomMsg,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    io.emit('chatMessage', chatData);
    console.log(`[送信] ${randomUser}: ${randomMsg}`);
}, 3000);

const PORT = 3000;

if (require.main === module) {
    server.listen(PORT, () => {
        console.log(`booted server: http://localhost:${PORT}`);
    });
}
module.exports = io;