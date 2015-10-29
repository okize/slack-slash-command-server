var request = require('request');

module.exports = function (app) {

  app.post('/rekt', function (req, res) {

    var text, payload, requestOpts;

    text = '\n:white_medium_square: Not rekt   :ballot_box_with_check: Rekt';

    payload = {
      channel: req.channel,
      text: text,
      icon_emoji: ':grimacing:'
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
