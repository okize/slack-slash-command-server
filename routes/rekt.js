const request = require('request');

module.exports = (app) => {
  app.post('/rekt', (req, res) => {
    const text = '\n:white_medium_square: Not rekt   :ballot_box_with_check: Rekt';

    const payload = {
      channel: req.channel,
      text: text,
      icon_emoji: ':grimacing:',
    };

    const requestOpts = {
      url: app.get('webhook'),
      form: {payload: JSON.stringify(payload)},
    };

    request.post(requestOpts, (err) => {
      if (err) {
        return res.status(500).send({success: false, error: err.message});
      }
      return res.status(200).send();
    });
  });
};
