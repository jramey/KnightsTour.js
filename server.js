var express = require('express');
var app = express();


app.use(express.static('static'))

app.listen(3000);
console.log('Listening on port 3000');