const config = require('config');
const Mastodon = require('mastodon-api');

const configmastodon = {
        client_key: config.mastodon.clientkey,
        client_secret: config.mastodon.clientsecret,
        access_token: config.mastodon.accesstoken,
        api_url: 'https://mastodon.social/api/v1/'
}

const M = new Mastodon(configmastodon);

module.exports = M;
