'use strict'

function asyncSqrt(value, callback) {
    console.log('START execution with value =', value);
    setTimeout(function() {
        callback(value, value * value);
    }, 0 | Math.random() * 100);
}

function* gen(callback) {
	for (let i = 0; i < 10; i++) {
		yield asyncSqrt(i , callback);
	}
}

let iterator = gen(function (value, result) {
	console.log('END execution with value = ', value, 'and result = ', result);
	iterator.next();
});

iterator.next();
