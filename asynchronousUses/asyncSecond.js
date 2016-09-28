'use strict'

function asyncSqrt(value, callback) {
	console.log('START execution with value = ', value);
	setTimeout(function() {
		callback(value, value*value);
	}, 0 | Math.random() * 100);
}

for (var n = 0; n < 10; n++) {
	asyncSqrt(n, function(value, result) {
		console.log('END execution with value = ', value, 'and result = ', result);
	});
}

console.log('COMPLETED ?¿');
