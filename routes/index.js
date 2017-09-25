var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var logger = require('morgan');
var vote = require('./vote');
var graph = require('./graph');
var user = require('./user');
var http = require('http');

var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(app.listen(process.env.PORT || 3000));

app.set('port', (process.env.PORT || 3000));
app.set('views', __dirname + '/../views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/../public'));
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/user/:sex/:name', user.index);
app.get('/graph', graph.index);
app.post('/record', vote.record);

app.get('/', function(request, response) {
	response.render('index', {});
});
app.get('/sex_select', function(request, response) {
	response.render('sex_select', {});
});
app.get('/user_select/:sex', function(request, response) {
	var sex = request.params.sex;
  	// SEXパラメタが正しければ画面に表示
  	if (sex == "man" || sex == "lady") {
   	 	response.render('user_select', {sex:sex});
  	}
});
app.get('/about', function(request, response) {
	  response.render('about', {});
});

io.sockets.on('connection', graph.showGraph);
