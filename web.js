var config        = require('./config');
var express       = require('express');
var logger        = require('morgan');
var errorhandler  = require('errorhandler');
var mongoose      = require('mongoose');
var apiRouter     = require('./api');
var bodyParser    = require('body-parser');

var app = express();
mongoose.connect(config.database.mongoUrl);

app.use(logger());
app.use(errorhandler());
app.use(bodyParser());

app.use('/api', apiRouter);
app.use(express.static(__dirname + '/www'));

app.listen(config.webServer.port);

module.exports = app;