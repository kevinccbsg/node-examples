const low = require('lowdb');
const db = low('./db.json');

let data = db.get('posts').value();

console.log(data);
