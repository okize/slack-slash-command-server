const request = require('request');

const slackUrl = process.env.SLACK_WEBHOOK_URL;

module.exports = (payload, res) => {
  if (!slackUrl) {
    const noUrlMsg = 'SLACK_WEBHOOK_URL environment variable is not set';
    return res.status(500).send({success: false, error: noUrlMsg});
  }

  const requestOpts = {
    url: slackUrl,
    form: {payload: JSON.stringify(payload)},
  };

  request.post(requestOpts, (err) => {
    if (err) {
      return res.status(500).send({success: false, error: err.message});
    }
    return res.status(200).send();
  });
};
