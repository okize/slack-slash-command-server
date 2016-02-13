module.exports = (req) => {
  const text = '\n:white_medium_square: Not rekt   :ballot_box_with_check: Rekt';

  const payload = {
    channel: req.channel,
    icon_emoji: ':open_mouth:',
    text: text,
  };

  return payload;
};
