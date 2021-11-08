var url = 'http://mylogger.io/log';

var log = function(message) {
	// HTTP request to the logger URL
	console.log(message);
}

// Making methods public to be used in other modules
module.exports.log = log;
