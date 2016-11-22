function *foo(x) {
  var y = 2 * (yield (x + 1));
  var z = yield(y / 3);
  yield (x+y+z);
}
var iter = foo(1);
console.log(iter.next(2));
console.log(iter.next(3));
console.log(iter.next(2));
