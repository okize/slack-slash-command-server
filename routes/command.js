const fs = require('fs');
const path = require('path');
const send = require('../lib/responseHelper');
const express = require('express');
const router = express.Router();

// array of tokens to compare against tokens sent from slack
const tokens = process.env.SLACK_TOKENS.split(',');

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
  if (tokens.indexOf(req.body.token) === -1) {
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

  // fire off the command
  commands[command](req, (payload) => {
    Object.assign(payload, {channel: channel});
    send(payload, res);
  });
});

module.exports = router;
