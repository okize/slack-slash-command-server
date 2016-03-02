'use strict'; // remove when Node supports let outside strict mode

const fs = require('fs');
const path = require('path');
const sendToSlack = require('../lib/sendToSlack');
const express = require('express');
const router = express.Router();

// array of tokens to compare against tokens sent from slack
const getTokens = () => {
  const tokens = process.env.SLACK_TOKENS;
  if (tokens) {
    return tokens.split(',');
  }
  return [];
};

// holds the commands that will be matched against route path
const commands = {};
const commandsPath = path.join(__dirname, 'commands');

// synchronously load command modules
fs.readdirSync(commandsPath).forEach((fileName) => {
  const command = path.basename(fileName, path.extname(fileName));
  commands[command] = require(path.join(commandsPath, fileName));
});

router.post(/^(.*)$/, (req, res) => {
  const command = req.params[0].substring(1);

  // authenticate requests
  if (getTokens().indexOf(req.body.token) === -1) {
    return res.status(401).json({ success: false, error: 'Invalid token.'});
  }

  // ensure there's a valid command to match request
  if (Object.keys(commands).indexOf(command) === -1) {
    return res.status(401).json({ success: false, error: `${command} command not found!`});
  }

  // set channel override
  let channel = '';
  if (req.body.channel_name === 'directmessage' || req.body.channel_name === 'privategroup') {
    channel = req.body.channel_id;
  } else {
    channel = `#${req.body.channel_name}`;
  }

  // fire off the results to Slack
  commands[command](req, (payload) => {
    Object.assign(payload, {channel: channel});
    sendToSlack(payload, res);
  });
});

module.exports = router;
