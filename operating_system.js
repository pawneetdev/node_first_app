const os = require('os');

var freemem = os.freemem();
var totalmem = os.totalmem();
var memory = `Memory: using ${freemem} of ${totalmem}`;

exports.memory = memory;
