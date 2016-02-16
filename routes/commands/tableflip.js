const flip = require('flip');

module.exports = (req, cb) => {
  const text = `(╯°□°）╯︵ ' ${req.body.text ? flip(req.body.text) : '┻━┻'}`;

  const payload = {
    icon_emoji: ':rage1:',
    text: text,
  };

  return cb(payload);
};
