const request = require('request');

module.exports = (req, cb) => {
  const flubrUrl = 'http://flubr.herokuapp.com/api/images/random/pass';

  request(flubrUrl, (error, resp, body) => {
    if (!error && resp.statusCode === 200) {
      const payload = {
        icon_emoji: ':thumbsup:',
        text: body,
      };

      return cb(payload);
    }
  });
};
