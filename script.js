let currentContact = null;

function openChat(contactName) {
  currentContact = contactName;
  document.getElementById('contact-name').innerText = contactName;
  document.getElementById('messages').innerHTML = ''; // Clear chat history
}

function sendMessage() {
  const messageText = document.getElementById('message-text').value;
  if (messageText.trim() === '') return; // Don't send empty messages

  // Create a new sent message
  const message = document.createElement('div');
  message.classList.add('message', 'sent');
  message.innerHTML = `<div class="text">${messageText}</div>`;
  document.getElementById('messages').appendChild(message);

  // Scroll to the bottom of the chat
  document.getElementById('messages').scrollTop = document.getElementById('messages').scrollHeight;

  // Clear input field
  document.getElementById('message-text').value = '';
}

// Simulate receiving a message (for demonstration purposes)
setTimeout(() => {
  if (currentContact) {
    const message = document.createElement('div');
    message.classList.add('message', 'received');
    message.innerHTML = `<div class="text">Hello! How are you?</div>`;
    document.getElementById('messages').appendChild(message);
  }
}, 3000); // Simulate receiving a message 3 seconds after sending one
