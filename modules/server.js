var http = require('http');
var colors = require('colors');

var handlers = require('./handlers');

function start() {
  function onRequest(request, response) {
    console.log("Request has been received.");
    console.log("Request " + request.url + " has been received.");

    response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});

    switch (request.url) { //A switch loop in order to differenciate between the requests
      case '/':
      case '/start':
          handlers.welcome(request, response);
          break;
      case '/upload':
          handlers.upload(request, response);
          break;
      default:
          handlers.error(request, response);
          break;
    }
  }

  http.createServer(onRequest).listen(9000);

  console.log("The server has been started!".green);
}

exports.start = start;
