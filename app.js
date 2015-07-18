var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var routes = './routes/';
var port = process.env.PORT || 9000;
var tokens = process.env.SLACK_TOKENS.split(',');

// config
app.set('webhook', process.env.SLACK_WEBHOOK_URL);

// route to test app is running
app.get('/ping', function (req, res) {res.json({response: 'PONG'})});

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
fs.readdirSync(routes).forEach(function(file) {
  require(routes + file)(app);
});

// start app
app.listen(port, function () {
  console.log('\nApp listening on port %s\n', port);
});

module.exports = app;
