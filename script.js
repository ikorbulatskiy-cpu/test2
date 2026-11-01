const API = "https://chert-ai-server.onrender.com";

document.addEventListener("DOMContentLoaded", async () => {
  const loginStatus = document.getElementById("loginStatus");
  const loginButton = document.getElementById("loginButton");
  const recoveryCode = document.getElementById("recoveryCode");

  try {
    const response = await fetch(`${API}/api/status`);
    const data = await response.json();

    if (data.status === "online") {
      loginStatus.textContent =
        "Сервер ЧЁРТ AI подключён. Galaxy пока не подключена.";
    }
  } catch (error) {
    loginStatus.textContent =
      "Не удалось связаться с сервером ЧЁРТ AI.";
  }

  loginButton.addEventListener("click", () => {
    loginStatus.textContent =
      "Авторизация Galaxy ещё не настроена.";

    recoveryCode.value = "";
  });
});
