const response = require('../lib/responseHelper');

module.exports = (app) => {
  app.post('/ping', (req, res) => {
    const text = 'PONG';

    const payload = {
      channel: req.channel,
      text: text,
      icon_emoji: ':signal_strength:',
    };

    response(payload, app, res);
  });
};
