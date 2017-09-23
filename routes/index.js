var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var logger = require('morgan');
var vote = require('./vote');
var graph = require('./graph');
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(app.listen(process.env.PORT || 3000));

app.set('port', (process.env.PORT || 3000));
app.set('views', __dirname + '/../views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/../public'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.get('/', 'index');
app.get('/graph', vote.graph);
app.post('/record', vote.record);


io.sockets.on('connection', graph.showGraph);
app.get('/', function(request, response) {
	  response.render('index', {});
});
