module.exports = (req) => {
  const text = 'PONG';

  const payload = {
    icon_emoji: ':signal_strength:',
    text: text,
  };

  return payload;
};
