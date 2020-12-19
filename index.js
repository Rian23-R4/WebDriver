//import package
var PORT = process.env.PORT || 3000;
//server
const express = require('express');
const app = express();

const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');

let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .usingServer('http://localhost:4444/wd/hub')
    .build();


app.get('/', (req,res) => {
    driver.get('http://www.google.com/');
   
    driver.quit();
});

//start LISTEN AT PORT:
app.listen(PORT, function () {
	console.log('Server running');
});