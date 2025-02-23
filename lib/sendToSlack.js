const request = require('request');

const slackUrl = process.env.SLACK_WEBHOOK_URL;

const sendToSlack = (payload, res) => {
  if (!slackUrl) {
    const noUrlMsg = 'SLACK_WEBHOOK_URL environment variable is not set';
    return res.status(500).send({ success: false, error: noUrlMsg });
  }

  const requestOpts = {
    url: slackUrl,
    form: { payload: JSON.stringify(payload) },
  };

  // if we're in debug env then also return the payload that's posted to slack
  if (process.env.NODE_ENV === 'debug') {
    res.status(200).send({ payload });
  }

  return request.post(requestOpts, (err) => {
    if (err) {
      return res.status(500).send({ success: false, error: err.message });
    }
    return res.status(200).send();
  });
};

module.exports = sendToSlack;
