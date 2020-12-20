var PORT = process.env.PORT || 3000;

const express = require("express");
var app = express();

app.get("/", async function (req, res) {
  res.send("Hello Wolrd");
});

app.listen(PORT, function () {
  console.log("Server running");
});
