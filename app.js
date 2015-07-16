var bodyParser = require('body-parser');
var express = require('express');
var flip = require('flip');
var request = require('request');
var app = express();

// configuration
app.set('env', process.env.NODE_ENV);
app.set('port', process.env.PORT || 9000);

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/ping', function (req, res) {
  res.json({response: 'PONG'});
});

var server = app.listen(app.get('port'), function () {
  console.log('App listening at http://%s:%s', server.address().address, server.address().port);
});
