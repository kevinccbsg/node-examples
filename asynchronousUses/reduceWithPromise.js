"use strict";
 
function promiseSqrt(value){
    return new Promise(function (fulfill, reject){
        console.log('START execution with value =', value);
        setTimeout(function() {
            fulfill({ value: value, result: value * value });
        }, 0 | Math.random() * 100);
    });
}
 
var p = [0,1,2,3,4,5,6,7,8,9];
p.reduce(
    function (sequence, value) {
        return sequence.then(function() {
            return promiseSqrt(value);
        }).then(function(obj) {
            console.log('END execution with value =', obj.value,
                        'and result =', obj.result);
        });
    },
    Promise.resolve()
).then(function() {
    console.log('COMPLETED');
});