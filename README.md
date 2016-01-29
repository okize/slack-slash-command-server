# slack-slash-command-server

Server for responding to custom Slack slash commands

## Running locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
git clone git@github.com/okize/slack-slash-command-server.git
cd slack-slash-command-server
npm install
npm start
```

Your app should now be running on [localhost:9000](http://localhost:9000/).

## Deploying to Heroku

### Initialize application

```sh
heroku create <APP NAME>
git push heroku master
```

### Set environment variables

```sh
heroku config:set SLACK_WEBHOOK_URL=???
heroku config:set SLACK_TOKENS=???
```
