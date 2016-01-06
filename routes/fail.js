const request = require('request');
const response = require('../lib/responseHelper');

module.exports = (app) => {
  app.post('/fail', (req, res) => {
    const flubrUrl = 'http://flubr.herokuapp.com/api/images/random/fail';
    request(flubrUrl, (error, resp, body) => {
      if (!error && resp.statusCode === 200) {
        const payload = {
          channel: req.channel,
          text: body,
          icon_emoji: ':thumbsdown:',
        };

        response(payload, app, res);
      }
    });
  });
};
