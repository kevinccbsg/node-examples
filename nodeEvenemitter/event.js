'use strict'

const EventEmitter = require('events').EventEmitter;

const eventEmitter = new EventEmitter();

// trigger an event called 'randomString' and send
// a randomly selected string to the listeners
eventEmitter.on('randomString', function (randomStr1, randomStr2) {
	console.log('String 1: ' + randomStr1 + ', String 2: ' + randomStr2)
})

eventEmitter.emit('randomString', randomString(), randomString())

// simple function to randomly select a string from an array
function randomString () {
	const stringsArr = ['NodeJs', 'codequs.com', 'JavaScript', 'EventEmitters']
	return stringsArr[Math.floor(Math.random() * stringsArr.length)]
}