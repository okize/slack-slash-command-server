module.exports = (req) => {
  const imageUrl = 'https://pbs.twimg.com/media/CKE98yIUMAA4Y0o.jpg';

  const payload = {
    channel: req.channel,
    icon_emoji: ':zap:',
    text: imageUrl,
  };

  return payload;
};
