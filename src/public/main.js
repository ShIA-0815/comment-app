const socket = io();
const container = document.getElementById('chat-container');
const MAX_MESSAGES = 15;

socket.on('chatMessage', (data) => {
    console.log('received message: ', data);

    const msgElement = document.createElement('div');
    msgElement.className = 'message-card';
    msgElement.innerHTML = `
    <img class="avatar" src="${data.avatar}" alt="${data.author}">
    <div class="content-box">
      <span class="author-name">${escapeHtml(data.author)}</span>
      <span class="message-text">${escapeHtml(data.content)}</span>
    </div>
    <span class="timestamp">${data.timestamp}</span>
  `;

    container.appendChild(msgElement);

    if (container.children.length > MAX_MESSAGES) {
        container.removeChild(container.firstChild);
    }
});

function escapeHtml(str) {
    return str.replace(/[&<>"']/g, (m) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    })[m]);
}