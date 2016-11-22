setTimeout(() => {
  console.log('hello world');
}, 1);

function foo() {
  for (var i = 0; i < 100; i++) {
    console.log(i);
  }
}

foo();