'use strict'
var express = require('express');
var path = require('path');
var app = express();
var azuserManagerClient = require('azuser-manager-client');

var client = azuserManagerClient.createClient({
  uri: 'http://localhost:3001',
  headers: {
    'Content-type': 'application/json'
  }
});
app.use('/', express.static(path.join(__dirname, 'public')))
app.set('view engine', 'pug');


app.get('/user/:id', function(req, res) {
  res.json({
    cool: true
  });
});
app.get('/test-send', function (req, res) {
  console.log(client.headers);
  client.getUser('id', function(err, user) {
    res.send(user);
  });
  
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
});

