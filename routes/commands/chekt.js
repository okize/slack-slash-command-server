module.exports = (req, cb) => {
  const chekt = req.body.text || 'rekt';
  const text = `\n[   ] not ${chekt}    [✓] ${chekt}`;

  const payload = {
    icon_emoji: ':grimacing:',
    text,
  };

  return cb(payload);
};
