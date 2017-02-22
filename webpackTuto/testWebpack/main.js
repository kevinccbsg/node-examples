const suma = (a, b) => {
  return a + b
}

function asyncronoTime () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1)
    },2000);
  })
}

async function testeo() {
  let response = await asyncronoTime();
  return response;
}

testeo().then(data => console.log(data))

let wat = suma(2, 4)

console.log(wat)
