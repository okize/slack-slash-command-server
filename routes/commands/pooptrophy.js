module.exports = (req) => {
  const text = '\n\u200C\n:poop:\n:trophy:';

  const payload = {
    username: 'Poopy Magoo',
    text: text,
  };

  return payload;
};
