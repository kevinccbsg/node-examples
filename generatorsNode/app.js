'use strict'
function *doge() {
  yield 'such js';
  console.log('wow');
  return 'vary generators';
}
var iter = doge();
//console.log(iter.next());
//console.log(iter.next());

function *doge2(param){
  let prefixes = ['such', 'very', 'so'];
  for (var i = 0;;i++) {
    param = yield (prefixes[i%3]+' '+param);
  }
}

var iter2 = doge2('kevin');
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next('kj'));
