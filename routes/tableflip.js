var request = require('request');
var flip = require('flip');

module.exports = function (app) {

  app.post('/tableflip', function (req, res) {

    var text, payload, requestOpts;

    text = '(╯°□°）╯︵ ' + (req.body.text ? flip(req.body.text) : '┻━┻');

    payload = {
      channel: req.channel,
      text: text,
      icon_emoji: ':rage1:'
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
