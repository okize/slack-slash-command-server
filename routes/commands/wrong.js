module.exports = (req, cb) => {
  const imageUrl = 'http://i.imgur.com/1uYMQ7L.gif';

  const payload = {
    icon_emoji: ':middle_finger:',
    text: imageUrl,
  };

  return cb(payload);
};
