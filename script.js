const API = "https://chert-ai-server.onrender.com";

document.addEventListener("DOMContentLoaded", () => {
  const loginStatus = document.getElementById("loginStatus");
  const messagesList = document.getElementById("messagesList");
  const messageStatus = document.getElementById("messageStatus");
  const refreshButton = document.getElementById("refreshMessages");
  const testButton = document.getElementById("testMessage");

  async function loadMessages() {
    messageStatus.textContent = "Загружаем сообщения...";

    try {
      const response = await fetch(`${API}/api/messages`);
      if (!response.ok) throw new Error("Ошибка сервера");

      const data = await response.json();
      messagesList.replaceChildren();

      if (!data.messages || data.messages.length === 0) {
        messagesList.textContent = "Сообщений пока нет.";
      } else {
        data.messages.forEach((message) => {
          const item = document.createElement("div");
          item.className = "tile";
          item.textContent =
            `${message.sender}: ${message.text}`;
          messagesList.appendChild(item);
        });
      }

      messageStatus.textContent = "Сообщения обновлены.";
    } catch (error) {
      messageStatus.textContent = "Не удалось загрузить сообщения.";
    }
  }

  async function addTestMessage() {
    messageStatus.textContent = "Добавляем тестовое сообщение...";

    try {
      const response = await fetch(`${API}/api/test-message`, {
        method: "POST"
      });

      if (!response.ok) throw new Error("Ошибка сервера");

      await loadMessages();
      messageStatus.textContent = "Тестовое сообщение добавлено!";
    } catch (error) {
      messageStatus.textContent = "Не удалось добавить сообщение.";
    }
  }

  refreshButton.addEventListener("click", loadMessages);
  testButton.addEventListener("click", addTestMessage);

  fetch(`${API}/api/status`)
    .then(response => response.json())
    .then(data => {
      loginStatus.textContent = data.status === "online"
        ? "Сервер ЧЁРТ AI подключён. Galaxy пока не подключена."
        : "Сервер недоступен.";
    })
    .catch(() => {
      loginStatus.textContent = "Не удалось связаться с сервером.";
    });

  loadMessages();
});
