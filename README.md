# slack-slash-server

Server for responding to custom Slack slash commands

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
git clone git@github.com/okize/slack-slash-server.git
cd slack-slash-server
npm install
npm start
```

Your app should now be running on [localhost:9000](http://localhost:9000/).

## Deploying to Heroku

```sh
heroku create
git push heroku master
heroku open
```
