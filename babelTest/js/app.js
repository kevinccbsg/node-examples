'use strict'
const fs = require('fs');


function readFileP() {
  return new Promise((resolve, reject) => {
    fs.readFile('./js/texto.txt', 'utf8', (err, data) => {
      if (err) {
        return reject(err)
      }
      resolve(data)
    })
  })
}

async function data() {
  let response = await readFileP()
  console.log('response', response)
}

data()
.then((data) => {
  console.log('data returnes', data)
}, (err) => {
  console.log('Error' + err)
});