const response = require('../../lib/responseHelper');

module.exports = (req, res) => {
  const text = '\n\u200C\n:poop:\n:trophy:';

  const payload = {
    channel: req.channel,
    text: text,
  };

  response(payload, res);
};
