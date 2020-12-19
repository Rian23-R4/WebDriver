//import package
var PORT = process.env.PORT || 3000;
//server
const express = require('express');
const app = express();

const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');

let driver = new webdriver.Builder()
    .forBrowser('firefox')
    .setChromeOptions(/* ... */)
    .setFirefoxOptions(/* ... */)
    .build();


app.get('/', (req,res) => {
	var driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build();
    driver.get('http://www.google.com/');
    try {
        driver.get('http://www.google.com/ncr');
        driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
        driver.wait(until.titleIs('webdriver - Google Search'), 1000);
      } finally {
        driver.quit();
      }
});

//start LISTEN AT PORT:
app.listen(PORT, function () {
	console.log('Server running');
});