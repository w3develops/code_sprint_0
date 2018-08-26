'use strict'

const sprintEcho = require('./lib/echo');
const quizData = require('./data/dbquiz');
const quoteData = require('./data/dbquote');
const quiz = () => {};
const quote = () => {};
const coffeCupCalculator = () => {};

module.exports = function (app) {
	// http://expressjs.com/en/starter/basic-routing.html

	//Pages
	app.get('/', function(request, response) {
		response.sendFile(__dirname + '/views/index.html');
	});

	app.get('/calculator', function(request, response) {
		response.sendFile(__dirname + '/views/calculator.html');
	});

	app.get('/quote', function(request, response) {
		response.sendFile(__dirname + '/views/quote.html');
	});

	app.get('/quiz', function(request, response) {
		response.sendFile(__dirname + '/views/quiz.html');
	});

	app.get('/doc/quiz', function(request, response) {
		response.sendFile(__dirname + '/views/quiz-doc.html');
	});

	app.get('/doc/quote', function(request, response) {
		response.sendFile(__dirname + '/views/quote-doc.html');
	});

	app.get('/doc/calculator', function(request, response) {
		response.sendFile(__dirname + '/views/calculator-doc.html');
	});

	//API endpoints
	app.get('/echo', sprintEcho);

	app.get('/api/quote', quote);

	app.post('/api/calculator', coffeCupCalculator);

}
