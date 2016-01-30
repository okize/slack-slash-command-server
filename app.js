const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fs = require('fs');
const tokens = process.env.SLACK_TOKENS.split(',');
const routes = './routes/';
const appName = 'Slack Slash Server';
const port = process.env.PORT || 9000;

// config
app.set('webhook', process.env.SLACK_WEBHOOK_URL);

// apache-style logging
app.use(morgan('dev'));

// static assets
app.use('/public', express.static(`${__dirname}/public`));

// body parsing middleware
app.use(bodyParser.urlencoded({ extended: false }));

// authenticate requests except for index page
app.use((req, res, next) => {
  if (tokens.indexOf(req.body.token) === -1 && req.url !== '/') {
    return res.status(401).json({ success: false, error: 'Invalid token.'});
  }
  next();
});

// set channel override
app.use((req, res, next) => {
  let channel = '';
  if (req.body.channel_name === 'directmessage' || req.body.channel_name === 'privategroup') {
    channel = req.body.channel_id;
  } else {
    channel = `#${req.body.channel_name}`;
  }
  Object.assign(req, {channel: channel});
  next();
});

// require route files
fs.readdirSync(routes).forEach((file) => {
  require(routes + file)(app);
});

app.get('/', (req, res) => {
  res.status(200).sendfile(`${__dirname}/public/index.html`);
});

// start app
app.listen(port, () => {
  console.log('\n%s listening on port %s\n', appName, port);
});

module.exports = app;
