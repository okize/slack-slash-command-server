const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const compress = require('compression');
const logger = require('morgan');

// routes
const indexRoute = require('./routes/index');
const commandRoute = require('./routes/command');

// init app
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// apache-style logging
app.use(logger('dev'));

// middleware
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// gzip assets
app.use(compress());

// static assets
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// routes
app.use('/', indexRoute);
app.use('/command', commandRoute);

// catch 404s and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler; prints stack trace in development but not production
app.use((err, req, res, next) => {
  const stack = (app.get('env') === 'production') ? {} : err;
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: stack,
  });
});

module.exports = app;
