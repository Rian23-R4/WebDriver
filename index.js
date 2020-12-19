//import package
var PORT = process.env.PORT || 3000;
//server
const express = require('express');
const app = express();

app.get('/', (req,res) => {
	res.send('BySonics Home Base Server');
});

//start LISTEN AT PORT:
app.listen(PORT, function () {
	console.log('Server running');
});