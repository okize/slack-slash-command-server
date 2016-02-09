const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();

const tokens = process.env.SLACK_TOKENS.split(',');
const commandsPath = path.join(__dirname, 'commands');

router.post(/^(.*)$/, (req, res, next) => {
  const command = req.params[0];

  // authenticate requests
  if (tokens.indexOf(req.body.token) === -1) {
    return res.status(401).json({ success: false, error: 'Invalid token.'});
  }

  // set channel override
  let channel = '';
  if (req.body.channel_name === 'directmessage' || req.body.channel_name === 'privategroup') {
    channel = req.body.channel_id;
  } else {
    channel = `#${req.body.channel_name}`;
  }
  Object.assign(req, {channel: channel});

  require(commandsPath + command)(req, res);
});

module.exports = router;
