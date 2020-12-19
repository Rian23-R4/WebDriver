//import package
var PORT = process.env.PORT || 3000;
//server
const express = require("express");
const app = express();

const { Builder, By, Key, until } = require("selenium-webdriver");
const webdriver = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const chromedriver = require("chromedriver");

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

app.get("/", (req, res) => {
  let driver = new webdriver.Builder().forBrowser("chrome").build();
  driver.get("http://www.google.com/");
  driver.quit();
});

//start LISTEN AT PORT:
app.listen(PORT, function () {
  console.log("Server running");
});
