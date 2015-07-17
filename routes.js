var express = require('express');
var router = express.Router();
var flip = require('flip');
var request = require('request');
var tokens = process.env.SLACK_TOKENS.split(',');
var webhook = process.env.SLACK_WEBHOOK_URL;

// authenticate requests
router.use(function (req, res, next) {
  if (tokens.indexOf(req.body.token) == -1) {
    return res.status(401).send({ success: false, error: 'Invalid token.' });
  }
  next();
});

// set channel override
router.use(function (req, res, next) {
  if (req.body.channel_name === 'directmessage' || req.body.channel_name === 'privategroup') {
    req.channel = req.body.channel_id;
  } else {
    req.channel = '#' + req.body.channel_name;
  }
  next();
});

// tableflip command
router.post('/tableflip', function (req, res) {

  var text, payload, requestOpts;

  text = req.body.text ? flip(req.body.text) : '┻━┻';

  payload = {
    channel: req.channel,
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
