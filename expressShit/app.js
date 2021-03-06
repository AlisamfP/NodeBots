var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var five = require('johnny-five');
var request = require('superagent');

//route handlers
var index = require('./routes/index');
var startStrobe = require('./routes/startStrobe');
var endStrobe = require('./routes/endStrobe');
var turnServo = require('./routes/turnServo');

//lib
var board = require('./lib/fiveClient');
var boardFunc = require('./lib/boardFnc');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', index);
app.use('/startStrobe', startStrobe);
app.use('/endStrobe', endStrobe);
app.use('/turnServo', turnServo);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
board.on('ready', function(){
    boardFunc.register();
    app.listen(8000);
    console.log('Server started');
})

module.exports = app;
