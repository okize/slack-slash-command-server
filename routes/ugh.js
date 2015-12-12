const request = require('request');

module.exports = (app) => {
  app.post('/ugh', (req, res) => {
    const imageUrl = 'http://i.imgur.com/5dVT9Lx.gif';

    const payload = {
      channel: req.channel,
      text: imageUrl,
      icon_emoji: ':unamused:',
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
