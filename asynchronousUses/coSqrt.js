'use strict'

const co =require('co');

function promiseSqrt(value){
    return new Promise(function (resolve, reject){
        console.log('START execution with value =', value);
        setTimeout(function() {
            resolve({ value: value, result: value * value });
        }, 0 | Math.random() * 100);
    });
}

co(function* () {
	for (let n = 0; n < 10; n++) {
		let obj = yield promiseSqrt(n);
		console.log('END execution with value =', obj.value, 'and result =', obj.result);
	}
});