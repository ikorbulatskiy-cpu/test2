const express = require("express");
const MessageStore = require("./messages");
const messages = new MessageStore();
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get("/api/status", (req, res) => {
  res.json({
    name: "CHERT AI",
    status: "online",
    galaxyConnection: "not_configured",
    version: "1.0.0"
  });
});

app.get("/health", (req, res) => { app.get("/api/messages", (req, res) => {
  res.json({
    messages: messages.getAll()
  });
});
  res.json({
    status: "OK"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`CHERT AI started on port ${PORT}`);
});
const GalaxyConnection = require("./galaxy");

app.get("/api/galaxy-module", (req, res) => {
  res.json({
    module: "loaded",
    connection: "not_started",
    message: "Модуль Galaxy загружен"
  });
});
