var request = require('request');

module.exports = function (app) {

  app.post('/pooptrophy', function (req, res) {

    var text, payload, requestOpts;

    text = '\n\u200C\n:poop:\n:trophy:';

    payload = {
      channel: req.channel,
      text: text
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
