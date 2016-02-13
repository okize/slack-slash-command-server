const request = require('request');

module.exports = (req) => {
  const flubrUrl = 'http://flubr.herokuapp.com/api/images/random/fail';
  request(flubrUrl, (error, resp, body) => {
    if (!error && resp.statusCode === 200) {
      const payload = {
        channel: req.channel,
        icon_emoji: ':thumbsdown:',
        text: body,
      };

      return payload;
    }
  });
};
