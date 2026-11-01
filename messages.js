class MessageStore {
  constructor() {
    this.messages = [];
    this.maxMessages = 200;
  }

  add(message) {
    if (!message || !message.text) return;

    this.messages.push({
      id: message.id || Date.now().toString(),
      sender: message.sender || "Неизвестно",
      text: message.text,
      timestamp: message.timestamp || new Date().toISOString()
    });

    if (this.messages.length > this.maxMessages) {
      this.messages.shift();
    }
  }

  getAll() {
    return this.messages;
  }

  clear() {
    this.messages = [];
  }
}

module.exports = MessageStore;
