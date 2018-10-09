const config = require('config');
const Mastodon = require('mastodon-api');

const configmastodon = {
        access_token: config.mastodon.accesstoken,
        api_url: 'https://mastodon.social/api/v1/'
}

const M = new Mastodon(configmastodon);

module.exports = M;
