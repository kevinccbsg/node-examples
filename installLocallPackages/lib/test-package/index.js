
var uuid = require('uuid');

console.log('Funcion coool 4');

var miData = uuid();

module.exports.getData = () => {
  return miData;
}
