const fs = require('fs');

// Synchronous
files = fs.readdirSync('./');
console.log(files);

// Asynchronous
fs.readdir('./', function(err, files) {
	if(err) console.log(err);
	else console.log('Result:', files)
});