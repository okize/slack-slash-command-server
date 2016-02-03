const response = require('../../lib/responseHelper');

module.exports = (app) => {
  app.post('/pooptrophy', (req, res) => {
    const text = '\n\u200C\n:poop:\n:trophy:';

    const payload = {
      channel: req.channel,
      text: text,
    };

    response(payload, app, res);
  });
};
