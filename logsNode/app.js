var syslog = require('syslog');
var logger = syslog.createClient(514, 'localhost');
process.title = 'fnord';
console.log(logger);

logger.info("pingsss!");

setTimeout(() => {
  logger.info("Timeout");
}, 2000);