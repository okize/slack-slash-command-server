var request = require('request');

module.exports = function (app) {

  app.post('/zingbot', function (req, res) {

    var imageUrl, payload, requestOpts;

    imageUrl = 'https://pbs.twimg.com/media/CKE98yIUMAA4Y0o.jpg';

    payload = {
      channel: req.channel,
      text: imageUrl,
      icon_emoji: ':zap:'
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
