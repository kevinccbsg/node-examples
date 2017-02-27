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
var myjson = { ey: 'testing', logsSaved: 'cool'};
winston.add(winston.transports.Syslog, options);
winston.log('error',{'app':'p0','prio':'info','id':'1234','msg':'seq: 0000000000, thread: 0000, runid: 1374490607, stamp: 2013-07-22T12:56:47 MESSAGE...','source':'localhost','timestamp':'Jul 22 12:56:47'});