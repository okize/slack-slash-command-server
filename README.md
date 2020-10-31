# slack-slash-command-server

Server for responding to custom Slack slash commands

## Running locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
git clone git@github.com/okize/slack-slash-command-server.git
cd slack-slash-command-server
yarn
yarn run watch
```

Additionally you should create a .env file with `SLACK_WEBHOOK_URL` & `SLACK_TOKENS` values. The latter is a comma-separated list of slash command tokens.

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
