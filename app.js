var bodyParser = require('body-parser');
var express = require('express');
var flip = require('flip');
var request = require('request');
var app = express();

// configuration
app.set('env', process.env.NODE_ENV);
app.set('port', process.env.PORT || 9000);
app.set('tokens', process.env.SLACK_TOKENS);
app.set('webhook', process.env.SLACK_WEBHOOK_URL);

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/ping', function (req, res) {
  res.json({response: 'PONG'});
});

var getChannel = function (body) {
  if (body.channel_name === 'directmessage' || body.channel_name === 'privategroup') {
    return body.channel_id;
  }
  return '#' + body.channel_name;
};

app.post('/tableflip', function (req, res) {

  var channel, text, payload, requestOpts;

  if (req.body.token !== app.set('tokens')) {
    return res.status(401).send({ success: false, error: 'Invalid token.' });
  }

  channel = getChannel(req.body);

  text = req.body.text ? flip(req.body.text) : '┻━┻';

  payload = {
    channel: channel,
    text: '(╯°□°）╯︵ ' + text,
    icon_emoji: ':rage1:'
  };

  requestOpts = {
    url: app.get('webhook'),
    form: { payload: JSON.stringify(payload) }
  };

  request.post(requestOpts, function (err, resp, body) {
    if (err) {
      return res.status(500).send({ success: false, error: err.message });
    }
    console.log('Slack response: ' + body);
  });

});

var server = app.listen(app.get('port'), function () {
  console.log('\nApp listening on port %s\n', server.address().port);
});
