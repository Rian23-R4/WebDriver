//import package
var PORT = process.env.PORT || 3000;
//server
const express = require('express');
const app = express();

const {Builder, By, Key, until} = require('selenium-webdriver');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');

let driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();


app.get('/', (req,res) => {
    try {
        driver.get('http://www.google.com/ncr');
    } finally {
        driver.quit();
    }    
});

//start LISTEN AT PORT:
app.listen(PORT, function () {
	console.log('Server running');
});