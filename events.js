// const EventEmitter = require('events'); // returns class
// const emitter = new EventEmitter(); // instantiating an instance of the class

// Register an event
// emitter.on('notification', function() {
// 	console.log('Listener called');
// });

// Raise an event
// emitter.emit('notification');
// emitter.emit('notification', { id: 1, type: 'test notification' })

const Logger = require('./logger');
const logger = new Logger();

logger.on('notification', function(args) {
	console.log('Listener called');

	if(args) {
		console.log(args);
	}
});

logger.log('Message');