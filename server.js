const http = require('http');

// const server = http.createServer(); // Event Listener

// server.on('connection', (socket) => {
// 	console.log('New connection...');
// });

const server = http.createServer((req, res) => {
	if(req.url === '/') {
		res.write('Hello World!');
		res.end();
	} else if(req.url === '/api/courses') {
		res.write(JSON.stringify([1,2,3]));
		res.end();
	} else {
		res.write('404: Page not found');
		res.end();
	}
});

const port = 8080;
server.listen(port);

console.log(`Listening on port ${port}...`)
