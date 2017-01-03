var request = require('client-request');

function Client (options) {
  this.options = options || {};
  this.endpoint = this.options.endpoint || 'http://api.tvmaze.com';
}

Client.prototype._request = function(path, method, params, callback) {
  var uri = this.endpoint + path;
  request({
    uri: uri,
    method: 'GET',
    json: true
  }, function (err, res, body) {
    if (err) {
      return callback(err);
    }
    if (res.statusCode !== 200) return callback(new Error('An error ocoured in the request'));
    callback(null, body);
  });
}

Client.prototype.shows = function (callback) {
  var uri = this.endpoint + '/shows';
  
}

module.exports = Client;