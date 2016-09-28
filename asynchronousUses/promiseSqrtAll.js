'use strict'

function promiseSqrt(value) {
	console.log('START execution with value = ', value);
	return new Promise(function (resolve, reject) {
		setTimeout(function() {
			resolve({ value: value, result: value*value });
		}, 0 | Math.random() * 100 );
	});
}

let p = [];
for (let n = 0; n < 10; n++) {
	p.push(promiseSqrt(n));
}
Promise.all(p).then(function(results) {
	results.forEach(function(obj) {
		console.log('END execution with value =', obj.value, 'and result =', obj.result);
	});
	console.log('COMPLENTED');
});