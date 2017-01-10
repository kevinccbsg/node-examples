var q = 'task';
 
var open = require('amqplib').connect('amqp://localhost');
 
// Publisher 
open.then(function(conn) {
  return conn.createChannel();
}).then(function(ch) {
  return ch.assertQueue(q).then(function(ok) {
    return ch.sendToQueue(q, new Buffer(process.argv[2]));
  });
}).catch(console.warn);