
/*
function Foo(callback) {
  setTimeout(function() {
    console.log('texto 1');
    callback('error','data');
  }, 2000);
}

Foo(function(err, data) {
  console.log('texto 2');
});
*/
var promesa = new Promise(function(resolve, reject) {
  setTimeout(function() {
    console.log('texto 1');
    resolve('success');
  });
});

promesa.then(function(data) {
  console.log(data);
  console.log('texto 2');
});