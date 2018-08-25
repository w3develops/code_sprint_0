// server.js
// where your node app starts

var cors = require('cors');

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

app.use(cors());
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

/*
app.route('/')
    .get(function(req, res) {
		  res.sendFile(process.cwd() + '/views/index.html');
    })
*/
require('./routes')(app);

// Respond not found to all the wrong routes
app.use(function(req, res, next){
  res.status(404);
  res.type('txt').send('Not found');
});

// Error Middleware
app.use(function(err, req, res, next) {
  if(err) {
    res.status(err.status || 500)
      .type('txt')
      .send(err.message || 'SERVER ERROR');
  }  
})
// listen for requests :)
app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
