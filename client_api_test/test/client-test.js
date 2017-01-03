var test = require('tape');
var nock = require('nock');
var tvmaze = require('../app');
var Client = require('../lib/client');

var endpoint = 'http://api.tvmaze.test';

test('should create a client', function (t) {
  // el objeto t tiene las aserciones que son las distintas funciones
  t.ok(tvmaze.createClient, 'should exists');
  t.equals(typeof(tvmaze.createClient), 'function', 'Should be a function');

  var client = tvmaze.createClient();
  t.ok(client instanceof Client, 'should be instance of client');
  t.end();
});

test('should list shows', function(t) {
  var client = tvmaze.createClient({ endpoint: endpoint });

  t.equals(typeof(client.shows), 'function', 'Should be a function');

  nock(endpoint)
    .get('/shows')
    .reply(200, []);

  client.shows(function(err, shows) {
    t.error(err, 'should be not an error');
    t.ok(Array.isArray(shows), 'should be an array');
  });
  t.end();
});