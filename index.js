var PORT = process.env.PORT || 3000;

const http = require("http");
const express = require("express");
const path = require("path");

var app = express();
app.use(express.json());
app.use(express.static("express"));

const fs = require("fs");

app.use("/", async function (req, res) {
  res.send("Hello Wolrd");
  res.sendFile(path.join(__dirname + "/index.html"));
});

const server = http.createServer(app);

server.listen(PORT, function () {
  console.log("Server running");
});
