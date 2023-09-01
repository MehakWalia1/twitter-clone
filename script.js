document.getElementById('send-button').addEventListener('click', () => {
    const inputElement = document.querySelector('.message-input input');
    const message = inputElement.value;
    
     if (message.trim() !== '') {
        const messageList = document.querySelector('.message-list');
        const newMessage = document.createElement('div');
        newMessage.className = 'message sent';
        newMessage.textContent = message;
        messageList.appendChild(newMessage);
        
        inputElement.value = '';
     }
});
