const net = require("net");

const GALAXY_HOST = "galaxy.mobstudio.ru";
const GALAXY_PORT = 6667;

class GalaxyConnection {
  constructor() {
    this.socket = null;
    this.connected = false;
  }

  connect() {
    return new Promise((resolve, reject) => {
      this.socket = new net.Socket();

      this.socket.connect(GALAXY_PORT, GALAXY_HOST, () => {
        this.connected = true;
        console.log("Соединение с сервером установлено");
        resolve(true);
      });

      this.socket.on("data", (data) => {
        console.log("Получены данные от сервера:", data.length);
      });

      this.socket.on("error", (error) => {
        this.connected = false;
        reject(error);
      });

      this.socket.on("close", () => {
        this.connected = false;
        console.log("Соединение закрыто");
      });
    });
  }

  disconnect() {
    if (this.socket) {
      this.socket.destroy();
      this.socket = null;
      this.connected = false;
    }
  }
}

module.exports = GalaxyConnection;
