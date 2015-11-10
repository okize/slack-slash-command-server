var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var fs = require('fs');
var routes = './routes/';
var appName = 'Slack Slash Server';
var port = process.env.PORT || 9000;
var tokens = process.env.SLACK_TOKENS.split(',');

// config
app.set('webhook', process.env.SLACK_WEBHOOK_URL);

// apache-style logging
app.use(morgan('dev'));

// body parsing middleware
app.use(bodyParser.urlencoded({ extended: false }));

// authenticate requests
app.use(function (req, res, next) {
  if (tokens.indexOf(req.body.token) == -1) {
    return res.status(401).send({ success: false, error: 'Invalid token.'});
  }
  next();
});

// set channel override
app.use(function (req, res, next) {
  if (req.body.channel_name === 'directmessage' || req.body.channel_name === 'privategroup') {
    req.channel = req.body.channel_id;
  } else {
    req.channel = '#' + req.body.channel_name;
  }
  next();
});

// require route files
fs.readdirSync(routes).forEach(function (file) {
  require(routes + file)(app);
});

// start app
app.listen(port, function () {
  console.log('\n%s listening on port %s\n', appName, port);
});

module.exports = app;
