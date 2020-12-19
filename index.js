var PORT = process.env.PORT || 3000;
const express = require("express");
const path = require("path");
const webdriver = require("selenium-webdriver");

var app = express();
chrome = require("selenium-webdriver/chrome");
let options = new chrome.Options();
options.setChromeBinaryPath(process.env.CHROME_BINARY_PATH);
let serviceBuilder = new chrome.ServiceBuilder(process.env.CHROME_DRIVER_PATH);
options.addArguments("--headless");
options.addArguments("--disable-gpu");
options.addArguments("--no-sandbox");
options.addArguments(
  "user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.129 Safari/537.36"
);

app.get("/", async function (req, res) {
  let driver = new webdriver.Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .setChromeService(serviceBuilder)
    .build();
  await driver.get("http://www.google.com/");
  await driver.getPageSource().then(function (source) {
    res.send(source);
  });
  //await driver.getTitle().then(function(title) { res.send(title); });
  console.log("Selesai.");
});

app.listen(PORT, function () {
  console.log("Server running");
});

//
//
//
//
//

// //import package
// var PORT = process.env.PORT || 3000;
// //server
// const express = require("express");
// const app = express();

// const { Builder, By, Key, until } = require("selenium-webdriver");
// const webdriver = require("selenium-webdriver");
// const chrome = require("selenium-webdriver/chrome");
// const chromedriver = require("chromedriver");

// chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

// app.get("/", (req, res) => {
//   let driver = new webdriver.Builder().forBrowser("chrome").build();
//   try {
//     driver.get("http://www.google.com/");
//   } finally {
//     driver.quit();
//   }
// });

// //start LISTEN AT PORT:
// app.listen(PORT, function () {
//   console.log("Server running");
// });
