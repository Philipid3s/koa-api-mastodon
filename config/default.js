let package = require('../package');
module.exports = {
    app: {
        name: package.name,
        version: package.version,
        
    },
    server: {
        port: process.env.NODE_APP_INSTANCE || 8081
    },
    mastodon: {
    }
};