//import package
var PORT = process.env.PORT || 3000;
//server
const express = require('express');
const app = express();

const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');

const {Builder, By, Key, until} = require('selenium-webdriver');
// var webdriver = require('selenium-webdriver');
// var By = webdriver.By;

app.get('/', (req,res) => {
	var driver = await new Builder()
        .forBrowser('chrome')
        .build();
    await driver.get('http://www.google.com/');
    try {
        await driver.get('http://www.google.com/ncr');
        await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
        await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
      } finally {
        await driver.quit();
    
});

//start LISTEN AT PORT:
app.listen(PORT, function () {
	console.log('Server running');
});