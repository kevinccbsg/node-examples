var q = 'tasks';
var fs = require('fs');
 
var open = require('amqplib').connect('amqp://localhost');
 
// Consumer 
open.then(function(conn) {
  return conn.createChannel();
}).then(function(ch) {
  return ch.assertQueue(q).then(function(ok) {
    return ch.consume(q, function(msg) {
      if (msg !== null) {
        console.log(msg.content.toString());
        ch.ack(msg);
        fs.writeFile("./logs", msg.content.toString()+'\n', { flag: 'w' },function(err) {
          if(err) {
            return console.log(err);
          }
          console.log("The file was saved!");
        });
      }
    });
  });
}).catch(console.warn);