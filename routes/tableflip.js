const request = require('request');
const flip = require('flip');

module.exports = (app) => {
  app.post('/tableflip', (req, res) => {
    const text = '(╯°□°）╯︵ ' + (req.body.text ? flip(req.body.text) : '┻━┻');

    const payload = {
      channel: req.channel,
      text: text,
      icon_emoji: ':rage1:',
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
