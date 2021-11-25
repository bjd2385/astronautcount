const Autohook = require('twitter-autohook');
const http = require('http');
const { URL } = require('url');

const ip = http.ClientRequest().

// https://github.com/twitterdev/autohook/blob/master/examples/standalone-server.js#L53
_ = (async () => {
    try {
      const webhookURL = new URL(process.env.PUBLIC_EIP);

      const config = {
        token: process.env.TWITTER_ACCESS_TOKEN,
        token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        env: process.env.TWITTER_WEBHOOK_ENV,
      };

      const webhook = new Autohook(config);
      await webhook.removeWebhooks();
      await webhook.start(webhookURL);
      await webhook.subscribe({
        oauth_token: config.token,
        oauth_token_secret: config.token_secret
      });
    } catch(e) {
      console.error(e);
      process.exit(-1);
    }
  })();
