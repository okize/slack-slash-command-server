module.exports = (req) => {
  const chekt = req.body.text || 'rekt';
  const text = `\n[   ] not ${chekt}    [✓] ${chekt}`;

  const payload = {
    channel: req.channel,
    icon_emoji: ':grimacing:',
    text: text,
  };

  return payload;
};
