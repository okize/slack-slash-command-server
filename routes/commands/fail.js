const request = require('request');

module.exports = (req, cb) => {
  const flubrUrl = 'http://flubr.herokuapp.com/api/images/random/fail';

  request(flubrUrl, (error, resp, body) => {
    if (!error && resp.statusCode === 200) {
      const payload = {
        icon_emoji: ':thumbsdown:',
        text: body,
      };

      return cb(payload);
    }
    return JSON.parse(error);
  });
};
