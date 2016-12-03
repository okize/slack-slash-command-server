module.exports = (req, cb) => {
  const imageUrl = 'http://i.imgur.com/AByvK9k.gif';

  const payload = {
    icon_emoji: ':eggplant:',
    text: imageUrl,
  };

  return cb(payload);
};
