module.exports = (req, cb) => {
  const text = 'PONG';

  const payload = {
    icon_emoji: ':signal_strength:',
    text,
  };

  return cb(payload);
};
