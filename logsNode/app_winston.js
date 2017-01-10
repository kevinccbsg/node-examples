var winston = require('winston');

// 
// Requiring `winston-syslog` will expose  
// `winston.transports.Syslog` 
// 
require('winston-syslog').Syslog;

var options = {
  host: 'localhost',
  port: 514,
  protocol: 'tcp4',
  //path: '/var/log/fnord.log',
  pid: 12085
};

winston.add(winston.transports.Syslog, options);
winston.log('error','mierda');