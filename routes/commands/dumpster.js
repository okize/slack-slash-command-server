module.exports = (req, cb) => {
  const imageUrl = 'http://i.imgur.com/9OBeGYt.gif';

  const payload = {
    icon_emoji: ':fire:',
    text: imageUrl,
  };

  return cb(payload);
};
