const fs = require('fs');
const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const compress = require('compression');
const logger = require('morgan');
const tokens = process.env.SLACK_TOKENS.split(',');
const indexRoute = require('./routes/index');
const commands = './routes/commands/';

// init app
const app = express();

// config
app.set('webhook', process.env.SLACK_WEBHOOK_URL);

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
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// authenticate requests except for index page
app.use((req, res, next) => {
  if (tokens.indexOf(req.body.token) === -1 && req.url !== '/') {
    return res.status(401).json({ success: false, error: 'Invalid token.'});
  }
  next();
});

// set channel override
app.use((req, res, next) => {
  let channel = '';
  if (req.body.channel_name === 'directmessage' || req.body.channel_name === 'privategroup') {
    channel = req.body.channel_id;
  } else {
    channel = `#${req.body.channel_name}`;
  }
  Object.assign(req, {channel: channel});
  next();
});

// require route files
fs.readdirSync(commands).forEach((file) => {
  require(commands + file)(app);
});

app.use('/', indexRoute);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// prints stracktrace in development
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// no stacktraces in production
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
