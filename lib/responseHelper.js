const request = require('request');

const requestHelper = (payload, app, res) => {
  const requestOpts = {
    url: app.get('webhook'),
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
