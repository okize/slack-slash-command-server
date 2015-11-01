var request = require('request');

module.exports = function (app) {

  app.post('/ping', function (req, res) {

    var text, payload, requestOpts;

    text = 'PONG';

    payload = {
      channel: req.channel,
      text: text,
      icon_emoji: ':signal_strength:'
    };

    requestOpts = {
      url: app.get('webhook'),
      form: {payload: JSON.stringify(payload)}
    };

    request.post(requestOpts, function (err, resp, body) {
      if (err) {
        return res.status(500).send({success: false, error: err.message});
      }
      return res.status(200).send();
    });

  });

};
