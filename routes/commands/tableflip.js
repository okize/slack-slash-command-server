const flip = require('flip');

module.exports = (req) => {
  const text = `(╯°□°）╯︵ ' ${req.body.text ? flip(req.body.text) : '┻━┻'}`;

  const payload = {
    channel: req.channel,
    icon_emoji: ':rage1:',
    text: text,
  };

  return payload;
};
