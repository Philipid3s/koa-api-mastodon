const Router = require('koa-router');
const KoaBody = require('koa-body');
const config = require('config');
const mastodon = require('../api');

const router = new Router();

router
    .get('/', (ctx, next) => {
        ctx.body = "Hello World!";
    })
    .get('/test/:id', (ctx, next) => {
        ctx.body = "Hello " + ctx.params['id'];
        
        console.log("IP: %s", ctx.ip);
        console.log("Status: %s", ctx.status);
        console.log("Hostname: %s", ctx.hostname);
        console.log("Message: %s", ctx.message);
        console.log("Method: %s", ctx.method);
    })
    .get('/api', async (ctx, next) => {
        // Get list of Mastodon messages
        await mastodon.get('timelines/home', {})
        .then(resp => {console.log(resp.data); ctx.body = resp.data;});
    })
    .post('/api', async (ctx, next) => {
        // Post a new status
        const params = {
            status: "Hello Mastodon !"
        }
        await mastodon.post('statuses', params)
        .then(resp => {console.log(resp.data);});
    });

module.exports = {
    routes () { return router.routes() },
    allowedMethods () { return router.allowedMethods() }
};