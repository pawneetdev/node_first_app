const EventEmitter = require('events');

class Logger extends EventEmitter {
	log = function(message) {
		this.emit('notification', { id: 1, type: 'log', message: message });
	}
}

module.exports = Logger;
