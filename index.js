//import package
var PORT = process.env.PORT || 3000;
//server
const express = require('express');
const app = express();

var webdriver = require('selenium-webdriver');
// var By = webdriver.By;

app.get('/', (req,res) => {
	var driver = new webdriver.Builder()
        .forBrowser('phantomjs')
        .build();
    driver.get('http://www.google.com/');
    // driver.findElement(By.name('q')).sendKeys('webdriver');
    // driver.findElement(By.name('btnG')).click();
    // driver.wait(function() {
    //     return driver.getTitle().then(function(title) {
    //         console.log(title);
    //         return title === 'webdriver - Google Search';
    //     });
    // }, 5000).then(function() {
    //     res.status(200).send('Done');
    // }, function(error) {
    //     res.status(200).send(error);
    // });
    driver.quit();
});

//start LISTEN AT PORT:
app.listen(PORT, function () {
	console.log('Server running');
});