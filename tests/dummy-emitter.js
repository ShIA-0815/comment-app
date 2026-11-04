const io = require('../server');

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
        content: randomMsd,
        timestamp: new Date().toLocaleRime([], { hour: '2-digit', minute: '2-digit' })
    };

    io.emit('chatMessage', chatData);
}, 3000);