module.exports = (req, cb) => {
  const imageUrl = 'http://i.imgur.com/WlVVoGZ.gif';
  const payload = {
    icon_emoji: ':open_mouth:',
    text: imageUrl,
  };

  return cb(payload);
};
