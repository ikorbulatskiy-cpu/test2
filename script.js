const API = "https://chert-ai-server.onrender.com";

document.addEventListener("DOMContentLoaded", async () => {
  const loginStatus = document.getElementById("loginStatus");
  const loginButton = document.getElementById("loginButton");
  const recoveryCode = document.getElementById("recoveryCode");

  try {
    const response = await fetch(`${API}/api/status`);
    const data = await response.json();

    loginStatus.textContent = data.status === "online"
      ? "Сервер ЧЁРТ AI подключён."
      : "Сервер недоступен.";
  } catch (error) {
    loginStatus.textContent = "Не удалось связаться с сервером.";
  }

  loginButton.addEventListener("click", () => {
    loginStatus.textContent =
      "Авторизация Galaxy ещё не настроена.";
    recoveryCode.value = "";
  });

  const testButton = document.createElement("button");
  testButton.textContent = "Проверить сообщения";
  testButton.style.marginTop = "12px";
  document.querySelector(".app").appendChild(testButton);

  testButton.addEventListener("click", async () => {
    try {
      const response = await fetch(`${API}/api/test-message`, {
        method: "POST"
      });

      const result = await response.json();

      loginStatus.textContent = result.status === "OK"
        ? "Тестовое сообщение отправлено на сервер!"
        : "Не удалось отправить сообщение.";
    } catch (error) {
      loginStatus.textContent = "Ошибка соединения с сервером.";
    }
  });
});
