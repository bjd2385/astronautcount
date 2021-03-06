const autohook = require('twitter-autohook');
const { URL } = require('url');

// https://github.com/twitterdev/autohook/blob/master/examples/standalone-server.js#L53
(async () => {
    try {
      const webhookURL = new URL('https://' + process.env.PUBLIC_EIP + '/webhooks/astronautcount');

      const config = {
        token: process.env.TWITTER_ACCESS_TOKEN,
        token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        env: process.env.TWITTER_WEBHOOK_ENV,
      };

      const webhook = new autohook.Autohook(config);
      await webhook.removeWebhooks();
      await webhook.start(webhookURL.toString());
      await webhook.subscribe({
        oauth_token: config.token,
        oauth_token_secret: config.token_secret
      });
    } catch(e) {
      console.error(e);
      process.exit(-1);
    }
  })();
