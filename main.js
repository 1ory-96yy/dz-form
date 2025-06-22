const form = document.getElementById('messageForm');
        const messageText = document.getElementById('messageText');
        const messagesContainer = document.getElementById('messages');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const messageDiv = document.createElement('div');
            messageDiv.className = 'message';
            messageDiv.textContent = messageText.value;
            messagesContainer.appendChild(messageDiv);
            messageText.value = '';
        });