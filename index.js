var PORT = process.env.PORT || 3000;

const express = require("express");
var app = express();

const fs = require("fs");

app.get("/", async function (req, res) {
  res.send("Hello Wolrd");
  res.writeHead(200, { "content-type": "text/html" });
  fs.createReadStream("index.html").pipe(res);
});

app.listen(PORT, function () {
  console.log("Server running");
});
