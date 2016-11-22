'use strict'
var express = require('express');
var path = require('path');
var app = express();


app.use('/', express.static(path.join(__dirname, 'public')))
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  console.log('ey');
  res.render('index', { title: 'Hey', message: 'Hello there!' })
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
});

