const response = require('../../lib/responseHelper');

module.exports = (req, res) => {
  const chekt = req.body.text || 'rekt';
  const text = `\n[   ] not ${chekt}    [✓] ${chekt}`;

  const payload = {
    channel: req.channel,
    icon_emoji: ':grimacing:',
    text: text,
  };

  response(payload, res);
};
