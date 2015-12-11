const request = require('request');

module.exports = (app) => {
  app.post('/zingbot', (req, res) => {
    const imageUrl = 'https://pbs.twimg.com/media/CKE98yIUMAA4Y0o.jpg';

    const payload = {
      channel: req.channel,
      text: imageUrl,
      icon_emoji: ':zap:',
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
