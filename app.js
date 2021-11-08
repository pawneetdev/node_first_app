const logger = require('./logger');

console.log(logger); // { log: [Function: log] }
logger.log('message'); // message

console.log('-----------------');

const path = require('./files');
console.log(path.path);

console.log('-----------------');

const os = require('./operating_system');
console.log(os.memory);
