var express = require('express');
var passport = require('passport');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var LdapStrategy = require('passport-ldapauth');
var LocalStrategy = require('passport-local').Strategy;
var app = express();



var OPTS = {
  server: {
    url: 'ldap://localhost:10389',
    bindDn: 'cn=Kevinou=Group,dc=example,dc=com',
    bindCredentials: 'secret',
    searchBase: 'dc=example,dc=com',
    searchFilter: '(uid={{username}})'
  }
};

passport.use(new LdapStrategy(OPTS));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressSession({
  secret: 'my secretz are mine',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));



/*passport.use(new LocalStrategy(
  function(username, password, done) {
    if (username === 'soy' && password === 'platzi') {
      return done(null, { name: 'Super', lastname: 'User', username: 'superuser' })
    }
 
    done(null, false, { message: 'Unknown user' })
  }
));


passport.serializeUser((user, done) => done(null, user))
passport.deserializeUser((user, done) => done(null, user))
*/
app.post('/login', function(req, res, next) {
  passport.authenticate('ldapauth', {session: false}, function(err, user, info) {
    if (err) {
      return next(err); // will generate a 500 error
    }
    // Generate a JSON response reflecting authentication status
    if (! user) {
      return res.send({ success : false, message : 'authentication failed' });
    }
    return res.send({ success : true, message : 'authentication succeeded' });
  })(req, res, next);
});
/*
app.post('/login', passport.authenticate('local', {
  successRedirect: '/welcome',
  failureRedirect: '/login' }))

app.get('/login', (req, res) => {
  res.redirect('/login.html')
})

app.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/login')
})

app.get('/welcome', ensureAuth, (req, res) => {
  res.send(`You are welcome ${req.user.username}`)
})

function ensureAuth (req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }

  res.redirect('/login')
}
*/
app.listen(3000, function() {
  console.log('listen on port 3000');
});