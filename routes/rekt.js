const response = require('../lib/responseHelper');

module.exports = (app) => {
  app.post('/rekt', (req, res) => {
    const text = '\n:white_medium_square: Not rekt   :ballot_box_with_check: Rekt';

    const payload = {
      channel: req.channel,
      icon_emoji: ':grimacing:',
      text: text,
    };

    response(payload, app, res);
  });
};
