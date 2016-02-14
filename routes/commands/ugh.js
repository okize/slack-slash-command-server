module.exports = (req) => {
  const imageUrl = 'http://i.imgur.com/5dVT9Lx.gif';

  const payload = {
    icon_emoji: ':unamused:',
    text: imageUrl,
  };

  return payload;
};
