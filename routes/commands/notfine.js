module.exports = (req, cb) => {
  const imageUrl = 'http://i.imgur.com/6a09fVi.png';

  const payload = {
    icon_emoji: ':fire:',
    text: imageUrl,
  };

  return cb(payload);
};
