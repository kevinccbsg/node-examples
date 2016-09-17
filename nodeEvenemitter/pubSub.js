

const EventEmitter = require('events')
const util = require('util')

function pubSub() {
	EventEmitter.call(this);

	const that = this;
	setInterval(function() {
		var randomStr = randomString();
		console.log(randomStr);

		if (randomStr.indexOf('coligo') > -1) {
			that.emit('coligo');
		}
		else if (randomStr.indexOf('nodejs') > -1) {
			that.emit('nodejs');
		}
		else if (randomStr.indexOf('javascript') > -1) {
			that.emit('javascript');
		}
	}, 3000);
}

util.inherits(pubSub, EventEmitter);

function randomString () {
	const stringsArr = ['nodejs', 'codequs', 'javascript', 'EventEmitters','random text', 'testing events in node', 'PubSub and events at coligo']
	return stringsArr[Math.floor(Math.random() * stringsArr.length)]
}

module.exports = pubSub