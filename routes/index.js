var express = require('express');
var bodyParser = require('body-parser');
var connect = require('connect');
var methodOverride = require('method-override');
var logger = require('morgan');
var app = express();
var vote = require('./vote');

app.set('port', (process.env.PORT || 3000));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', vote.index);
app.post('/record', vote.record);

/*
app.get('/', function(request, response) {
	  response.render('index', {});
});

*/
app.listen(app.get('port'), function() {
	  console.log("Node app is running at localhost:" + app.get('port'))
});
