var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var app = express();
var MongoStore = require('connect-mongo')(session);
mongoose.connect('mongodb://localhost:27017/video');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Use the session middleware
//app.use(session({ secret: 'keyboard cat',resave: false, saveUninitialized: false, cookie: { maxAge: 600000 }}))
app.use(session({
    secret: 'keyboard cat',
    resave: false, 
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection, ttl: 60 })
}));
// Access the session as req.session
app.get('/', function(req, res, next) {
  var sess = req.session
  if (sess.views) {
    sess.views++
    res.setHeader('Content-Type', 'text/html')
    res.write('<p>views: ' + sess.views + '</p>')
    res.write('<p>expires in: ' + (sess.cookie.maxAge / 1000) + 's</p>')
    res.end()
  } else {
    sess.views = 1
    res.end('welcome to the session demo. refresh!')
  }
})

app.get('/test', (req, res, next) => {
  var sess = req.session
  console.log(sess);
  if (sess.views === undefined) {
    res.redirect('/expired');
  }
  else {
    res.setHeader('Content-Type', 'text/html')
    res.write('<p>views: ' + sess.views + '</p>')
    res.write('<p>expires in: ' + (sess.cookie.maxAge / 1000) + 's</p>')
    res.end()
  }
});

app.get('/expired', (req, res) => {
  res.send('expired');
});


app.listen(3000, () => {
  console.log('listen');
})