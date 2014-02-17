// set up
var express = require('express'),
	mongoose = require('mongoose');

var app = express(); // create app w/ express
var port = process.env.PORT || 3000;
var database = require('./config/database');

// configuration
mongoose.connect(database.url); // connect to mongodb on mongohq

app.configure(function() {
	app.use(express.static(__dirname + '/public')); // set static files location
	app.use(express.logger('dev')); // log every request to console
	app.use(express.bodyParser()); // pull info from HTML in POST
	app.use(express.methodOverride()); // simulate DELETE and PUT
});

// load routes
require('./app/routes')(app);

// application
app.get('*', function(req, res) {
	res.sendfile('./public/index.html'); // load the single view file (angular handles page changes on front-end)
});


// listen (start app with node server.js)
app.listen(port);
console.log('App listening on port ' + port);
