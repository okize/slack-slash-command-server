var express = require('express');
var router = express.Router();
var flip = require('flip');
var request = require('request');
var tokens = process.env.SLACK_TOKENS;
var webhook = process.env.SLACK_WEBHOOK_URL;

var getChannel = function (body) {
  if (body.channel_name === 'directmessage' || body.channel_name === 'privategroup') {
    return body.channel_id;
  }
  return '#' + body.channel_name;
};

// authenticate requests
router.use(function (req, res, next) {

  if (req.body.token !== tokens) {
    return res.status(401).send({ success: false, error: 'Invalid token.' });
  }

  next();

});

router.post('/tableflip', function (req, res) {

  var channel, text, payload, requestOpts;

  channel = getChannel(req.body);

  text = req.body.text ? flip(req.body.text) : '┻━┻';

  payload = {
    channel: channel,
    text: '(╯°□°）╯︵ ' + text,
    icon_emoji: ':rage1:'
  };

  requestOpts = {
    url: webhook,
    form: { payload: JSON.stringify(payload) }
  };

  request.post(requestOpts, function (err, resp, body) {
    if (err) {
      return res.status(500).send({ success: false, error: err.message });
    }
    console.log('Slack response: ' + body);
  });

});

module.exports = router;
