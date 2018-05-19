var server = require('./modules/server');
process.env.TMPDIR = '.';
server.start();
