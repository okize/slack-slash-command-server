const request = require('request');

module.exports = (app) => {
  app.post('/ping', (req, res) => {
    const text = 'PONG';

    const payload = {
      channel: req.channel,
      text: text,
      icon_emoji: ':signal_strength:',
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
