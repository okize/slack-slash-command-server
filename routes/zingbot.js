const response = require('../lib/responseHelper');

module.exports = (app) => {
  app.post('/zingbot', (req, res) => {
    const imageUrl = 'https://pbs.twimg.com/media/CKE98yIUMAA4Y0o.jpg';

    const payload = {
      channel: req.channel,
      icon_emoji: ':zap:',
      text: imageUrl,
    };

    response(payload, app, res);
  });
};
