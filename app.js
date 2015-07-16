var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require('./routes');
var port = process.env.PORT || 9000;

app.get('/ping', function (req, res) {res.json({response: 'PONG'})});
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routes);

var server = app.listen(port, function () {
  console.log('\nApp listening on port %s\n', server.address().port);
});
