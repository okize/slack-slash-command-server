const request = require('request');

const requestHelper = (payload, res) => {
  const requestOpts = {
    url: process.env.SLACK_WEBHOOK_URL,
    form: {payload: JSON.stringify(payload)},
  };

  request.post(requestOpts, (err) => {
    if (err) {
      return res.status(500).send({success: false, error: err.message});
    }
    return res.status(200).send();
  });
};

module.exports = requestHelper;
