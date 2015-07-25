var request = require('request');

module.exports = function (app) {

  app.post('/fail', function (req, res) {

    var flubrUrl = 'http://flubr.herokuapp.com/api/images/random/fail';

    request(flubrUrl, function (error, response, body) {
      if (!error && response.statusCode == 200) {

        var payload, requestOpts;

        payload = {
          channel: req.channel,
          text: body,
          icon_emoji: ':thumbsdown:'
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

      }
    });

  });

};
