module.exports = (req, cb) => {
  const imageUrl = 'http://i.imgur.com/gbbPlBr.gif';

  const payload = {
    icon_emoji: ':fire:',
    text: imageUrl,
  };

  return cb(payload);
};
