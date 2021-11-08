const EventEmitter = require('events'); // returns class
const emitter = new EventEmitter(); // instantiating an instance of the class

// Register an event
emitter.on('notification', function() {
	console.log('Listener called');
});

// Raise an event
emitter.emit('notification');
