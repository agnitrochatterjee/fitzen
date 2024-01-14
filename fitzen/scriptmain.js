function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const messagesContainer = document.getElementById('messages');
    
    const message = messageInput.value.trim();
    
    if (message !== '') {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = `You: ${message}`;
        messagesContainer.appendChild(messageElement);
        
        
        messageInput.value = '';

        
        setTimeout(() => {
            const replyElement = document.createElement('div');
            replyElement.classList.add('message', 'bot');
            replyElement.textContent = `ChatBot: Hi there!`;
            messagesContainer.appendChild(replyElement);

            // Scroll to the bottom to show the latest messages
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }, 500);
    }
}