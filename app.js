const logger = require('./logger');

console.log(logger); // { log: [Function: log] }
logger.log('message'); // message

console.log('-----------------');

const files = require('./files');
console.log(files.path);

console.log('-----------------');

const os = require('./operating_system');
console.log(os.memory);