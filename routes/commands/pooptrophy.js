module.exports = (req) => {
  const text = '\n\u200C\n:poop:\n:trophy:';

  const payload = {
    channel: req.channel,
    text: text,
  };

  return payload;
};
