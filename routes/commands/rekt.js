module.exports = (req, cb) => {
  const text = '\n:white_medium_square: Not rekt   :ballot_box_with_check: Rekt';

  const payload = {
    icon_emoji: ':open_mouth:',
    text,
  };

  return cb(payload);
};
