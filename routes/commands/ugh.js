module.exports = (req) => {
  const imageUrl = 'http://i.imgur.com/5dVT9Lx.gif';

  const payload = {
    channel: req.channel,
    icon_emoji: ':unamused:',
    text: imageUrl,
  };

  return payload;
};
