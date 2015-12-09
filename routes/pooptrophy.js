const request = require('request');

module.exports = (app) => {
  app.post('/pooptrophy', (req, res) => {
    const text = '\n\u200C\n:poop:\n:trophy:';

    const payload = {
      channel: req.channel,
      text: text,
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
