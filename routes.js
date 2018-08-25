'use strict'

const sprintEcho = require('./lib/echo') 

module.exports = function (app) {
	app.get('/echo', sprintEcho);
}
