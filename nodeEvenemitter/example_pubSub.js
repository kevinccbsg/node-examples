const PubSub = require('./pubSub');

const simplePubSub = new PubSub();

simplePubSub.on('coligo', function () {
	console.log('Received a COLIGO event!');
});

simplePubSub.on('nodejs', function () {
	console.log('Received a NODEJS event!');
});

simplePubSub.on('javascript', function () {
	console.log('Received a JavaScript event!');
});