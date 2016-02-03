const flip = require('flip');
const response = require('../../lib/responseHelper');

module.exports = (app) => {
  app.post('/tableflip', (req, res) => {
    const text = `(╯°□°）╯︵ ' ${req.body.text ? flip(req.body.text) : '┻━┻'}`;

    const payload = {
      channel: req.channel,
      icon_emoji: ':rage1:',
      text: text,
    };

    response(payload, app, res);
  });
};
