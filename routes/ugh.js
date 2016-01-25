const response = require('../lib/responseHelper');

module.exports = (app) => {
  app.post('/ugh', (req, res) => {
    const imageUrl = 'http://i.imgur.com/5dVT9Lx.gif';

    const payload = {
      channel: req.channel,
      icon_emoji: ':unamused:',
      text: imageUrl,
    };

    response(payload, app, res);
  });
};
