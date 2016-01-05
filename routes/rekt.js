const response = require('../lib/responseHelper');

module.exports = (app) => {
  app.post('/rekt', (req, res) => {
    const text = '\n:white_medium_square: Not rekt   :ballot_box_with_check: Rekt';

    const payload = {
      channel: req.channel,
      text: text,
      icon_emoji: ':grimacing:',
    };

    response(payload, app, res);
  });
};
