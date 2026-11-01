document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.getElementById("loginButton");
  const logoutButton = document.getElementById("logoutButton");
  const recoveryCode = document.getElementById("recoveryCode");
  const loginStatus = document.getElementById("loginStatus");
  const loginPanel = document.getElementById("login");
  const profilePanel = document.getElementById("profile");

  loginButton.addEventListener("click", () => {
    loginStatus.textContent =
      "Подключение к серверу Galaxy ещё не настроено.";

    recoveryCode.value = "";
  });

  logoutButton.addEventListener("click", () => {
    profilePanel.classList.add("hidden");
    loginPanel.classList.remove("hidden");
    recoveryCode.value = "";
  });
});
