'use strict';

let data = (() => {
  var _ref = _asyncToGenerator(function* () {
    let response = yield readFileP();
    console.log('response', response);
  });

  return function data() {
    return _ref.apply(this, arguments);
  };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const fs = require('fs');

function readFileP() {
  return new Promise((resolve, reject) => {
    fs.readFile('./js/texto.txt', 'utf8', (err, data) => {
      if (err) {
        return reject(err);
      }
      resolve(data);
    });
  });
}

data().then(data => {
  console.log('data returnes', data);
}, err => {
  console.log('Error' + err);
});
