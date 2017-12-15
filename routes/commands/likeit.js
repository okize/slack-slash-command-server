module.exports = (req, cb) => {
  const imageUrl = 'http://i.imgur.com/qg2GSYN.gif';

  const payload = {
    icon_emoji: ':thumbsup:',
    text: imageUrl,
  };

  return cb(payload);
};
