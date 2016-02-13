module.exports = (req) => {
  const text = 'PONG';

  const payload = {
    channel: req.channel,
    icon_emoji: ':signal_strength:',
    text: text,
  };

  return payload;
};
