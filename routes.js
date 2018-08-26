'use strict'

const sprintEcho = require('./lib/echo') 

module.exports = function (app) {
	// http://expressjs.com/en/starter/basic-routing.html

	//Pages
	app.get('/', function(request, response) {
		response.sendFile(__dirname + '/views/index.html');
	});

	app.get('/calculator', function(request, response) {
		response.sendFile(__dirname + '/views/calculator.html');
	});

	//API endpoints
	app.get('/echo', sprintEcho);
}
