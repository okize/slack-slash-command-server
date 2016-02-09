const response = require('../../lib/responseHelper');

module.exports = (req, res) => {
  const text = 'PONG';

  const payload = {
    channel: req.channel,
    icon_emoji: ':signal_strength:',
    text: text,
  };

  response(payload, res);
};
