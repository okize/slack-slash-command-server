module.exports = (req, cb) => {
  const text = '\n\u200C\n:poop:\n:trophy:';

  const payload = {
    username: 'Poopy Magoo',
    text,
  };

  return cb(payload);
};
