const express = require("express");
const app = express();
const path = require("path");
const PORT = 3600;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "mainPage.html"));
});
app.get("/azkar.html", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "azkar.html"));
});
app.get("/duaa.html", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "duaa.html"));
});
app.get("/surah.html", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "surah.html"));
});
app.get("/tasbeeh.html", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "tasbeeh.html"));
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
